const express = require("express")
const app = express()
const mongoose = require("mongoose")
const EmployeeModel = require("./models/Employees")

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://test1:test1@cluster5.wzrtfcl.mongodb.net/ProjectTable?retryWrites=true&w=majority")

app.get("/getEmployees", (req, res) => {
  EmployeeModel.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

// app.post("/createEmployee", async (req, res) => {
//   const employee = req.body;
//   const newEmployee = new EmployeeModel(employee);
//   await newEmployee.save();

//   res.json(employee)
// })

app.listen(3001, () => {
  console.log("SERVER IS RUNNING")
})