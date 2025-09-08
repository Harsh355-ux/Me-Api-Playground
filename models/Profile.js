const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  skills: {
    type: [String], // array of strings
    default: [],
  },
  projects: {
    type: [String], // array of strings
    default: [],
  },
  workExperience: {
    type: [String], // array of strings
    default: [],
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);
