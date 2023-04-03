const { ServerDescription } = require('mongodb')
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  EmployeeId: {
    type: String,
    required: true,
    unique: true
  },
  EmployeeName: {
    type: String,
    required: true
  },
  Department: {
    type: String,
    required: true
  },
  Date_of_Joining: {
    type: Date,
    required:true
  },
  PhotoFileName: {
    type: String,
    required:true
  },

  updated_date: {
    type: Date,
    default: Date.now
  },
  
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);