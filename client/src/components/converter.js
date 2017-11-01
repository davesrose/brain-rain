import React, { Component } from "react";
import convert from "convert-units"
import $ from "jquery";

class Converter extends Component {
	state = {
		convInp: "",
		fromUnit: "",
		toUnit: ""
	}

	conv = event => {
		const num = parseInt(this.state.convInp, 10);
		if (Number.isInteger(num)) {
			try {
				const result = convert(this.state.convInp).from(this.state.fromUnit).to(this.state.toUnit);
				$(".convRes").html(` = ${result}`);
			} catch(err) {
				alert("units not compatible");
			}
			//this.setState({ convInp: "", fromUnit: "cup", toUnit: "cup" })
		} else {
			alert("Enter a number");
		}
	}

	handleInputChange = event => {
	    const { name, value } = event.target;

	    this.setState({
	      [name]: value
	    });
	};

  render() {
    return (
    	<div className="panel panel-default">
    		<div className="panel-heading text-center"><h3>Convert Units Tool</h3></div>
    		<div className="panel-body" id="convBody">
    			<input name="convInp" type="text" onChange={this.handleInputChange} placeholder="Input amount" />
				<select value={this.state.unit} onChange={this.handleInputChange} name="fromUnit" >
					<option value="cup">Cups</option>
					<option value="l">Liters</option>
					<option value="ml">Milliliters</option>
					<option value="qt">Quarts</option>
					<option value="gal">Gallons</option>
					<option value="g">Grams</option>
					<option value="lb">Pounds</option>
					<option value="oz">Ounces</option>
					<option value="fl-oz">Fluid-ounces</option>
					<option value="Tbs">Tablespoon</option>
					<option value="tsp">Teaspoon</option>
				</select>
				<span> to </span>
				<select value={this.state.unit} onChange={this.handleInputChange} name="toUnit" >
					<option value="cup">Cups</option>
					<option value="l">Liters</option>
					<option value="ml">Milliliters</option>
					<option value="qt">Quarts</option>
					<option value="gal">Gallons</option>
					<option value="g">Grams</option>
					<option value="lb">Pounds</option>
					<option value="oz">Ounces</option>
					<option value="fl-oz">Fluid-ounces</option>
					<option value="Tbs">Tablespoon</option>
					<option value="tsp">Teaspoon</option>
				</select>
				<button type="submit" onClick={this.conv}>Convert</button>
				<span className="convRes"></span>
    		</div>
    	</div>
    )
  }
}
export default Converter