const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  // Title of Article
  firstName: {
    type: String
  },

  // Date of Article
  lastName: {
    type: String
  },
  
  // Link to Article
  description: {
    type: String
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
