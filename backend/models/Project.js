const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Please enter Project Title"] },
  description: {
    type: String,
    required: [true, "Please Enter project description"],
  },
  createdDate: { type: Date, default: Date.now() },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
