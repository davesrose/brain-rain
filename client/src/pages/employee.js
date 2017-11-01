import React, { Component } from "react";
import API from "../utils/API";

class Employee extends Component {

	state = {
		firstName: "",
		lastName: "",
		description: "",
        employees: [],
        title: ""
	}

  componentDidMount() {
    this.loadEmployees();
  }

	addLine = (data) => {
        API.saveEmployeeLine({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            description: this.state.description
        })
        .then(res => {
            this.setState({ firstName: "", lastName: "", description: "" });
            this.loadEmployees();
        })
        .catch(err => console.log(err));
	}


    loadEmployees = () => {
        API.getEmployeeLine()
          .then(res =>
            this.setState({ employees: res.data })
          )
        .catch(err => console.log(err));
    }

	handleInputChange = event => {
	    const { name, value } = event.target;

	    this.setState({
	      [name]: value
	    });
	};

    deleteEmployee = id => {
        API.deleteEmployeeLine(id)
          .then(res => this.loadEmployees())
          .catch(err => console.log(err));
    };

    saveFile = id => {
        console.log(this.state.employees);
        const employeecb = this.state.employees;
        const fileName = this.state.title;
        API.saveCSVfile({ employecb: employeecb, fileName: fileName });

    };


  render() {

    return (
    	<div>
    		<div className="employees panel panel-default">
    			<div className="panel-heading text-center"><h3 className="employeeHeadline">Enter Employee Details</h3></div>
                <div className="panel-body">

                  {this.state.employees.length ? (
                    <div className="employeeCont well-section">
                    {this.state.employees.map(employee => (

                        <div className="employeeCol well saved flex" key={employee._id}>
                            <div className="employeeDetails">
                                <h3 id="employeeLine">{employee.firstName} {employee.lastName}</h3>
                                {employee.description}
                            </div>
                            <div className="removeBTN">
                                <button id="btnName" className="btn btn-primary" onClick={() => this.deleteEmployee(employee._id)}>Remove</button>
                            </div>
                          <div className="clear"></div>
                        </div>

                    ))}
                    <div className="clear"></div>
                    </div>
                    ) : (
                      <div id="well-section">
                        <div className="well saved">

                        </div>
                      </div>
                    )}

        			<div className="employeeForm" id="employeeForm" >
        				<div className="employeeLine flex">
                            <div className="flex-col" id="employeeFirstCol">
        					<label>First Name:</label><br />
        					<input name="firstName" type="text" placeholder="Enter first name" value={this.state.firstName} onChange={this.handleInputChange} />
                            </div>
                            <div className="flex-col" id="employeeSecondCol">
        					<label>Last Name:</label><br />
        					<input name="lastName" type="text" placeholder="Enter last name" value={this.state.lastName} onChange={this.handleInputChange} />
                            </div>
        				</div>
                        <div className="employeeLine flex">
                            <div id="employeeDescrCol">
                            <label>Description:</label><br />
                            <textarea value={this.state.description} onChange={this.handleInputChange} name="description" ></textarea>
                            </div>
                            <div id="employeeSub">
                            <button type="submit" onClick={this.addLine}>Add Employee</button>
                            </div>
                        </div>
        			</div>
                </div>
    		</div>

            <div className="employees panel panel-default">
                <div className="panel-heading text-center"><h3 className="employeeHeadline">Save CSV File</h3></div>
                <div className="panel-body">
                    <div className="employeeLine flex">
                        <label>Enter File Title: </label>
                        <input name="title" value={this.state.title} placeholder="Enter Title" onChange={this.handleInputChange} />
                        <button type="submit" onClick={this.saveFile}>Save</button>
                    </div>
                    {this.state.title ? (
                        <a href={"file/"+this.state.title+".csv"}>{this.state.title}.csv</a>
                    ) : (
                        <a></a>
                    )}
                    
                </div>
            </div>         

    	</div>
    )
  }
}

export default Employee