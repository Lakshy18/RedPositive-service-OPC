const mongoose = require("mongoose");

const tableDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hobbies: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Data", tableDataSchema);