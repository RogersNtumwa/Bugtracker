const mongoose = require("mongoose");

const assignemntSchema = new mongoose.Schema({
  bug: {
    type: mongoose.Schema.ObjectId,
    ref: "Bug",
    required: [true, "Please enter bug"],
  },
  developer: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Please enter user"],
  },
  status: {
    type: String,
    required: true,
    enum: ["New", "Coding", "In-Review", "Branded", "Rejected", "closed"],
  },
  assignedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Assignment = mongoose.model("Asignment", assignemntSchema);
module.exports = Assignment;
