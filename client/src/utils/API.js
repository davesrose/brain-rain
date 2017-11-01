import axios from "axios";

//defining API calls that will be handled by express
export default {
  saveEmployeeLine: function(data) {
    //console.log("recipeData: "+JSON.stringify(recipeData));
  	return axios.post("/api/saved", data);
  },
  getEmployeeLine: function() {
  	return axios.get("/api/saved");
  },
  deleteEmployeeLine: function(id) {
  	return axios.delete("/api/saved/"+id);
  },
  saveCSVfile: function(employeecb, fileName) {
    //console.log("recipeData: "+JSON.stringify(recipeData));
    return axios.post("/api/file", employeecb, fileName);
  },
  getCSVfile: function(fileName) {
    return axios.get("/api/file", fileName);
  }
  // Gets all books
};