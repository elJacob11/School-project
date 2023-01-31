const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel