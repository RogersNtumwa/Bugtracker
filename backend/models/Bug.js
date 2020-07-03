const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
  title: { type: String, required: true },
  projectId: {
    type: mongoose.Schema.ObjectId,
    ref: "Project",
    required: [true, "Please enter project"],
  },
  description: { type: String, required: true, minlength: 10 },
  status: {
    type: String,
    required: true,
    enum: ["New", "Coding", "In-Review", "Branded", "Rejected", "closed"],
  },
  priority: { type: String, required: true, enum: ["High", "Medium", "Low"] },

  assignedTo: {
    type: mongoose.Schema.ObjectId,
    ref: "Team",
    required: [true, "Please enter a team"],
  },
  category: { type: String, enum: ["bug", "enhancement", "ticket"] },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Please enter developer"],
  },
  attachments: { type: String },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Bug = mongoose.model("Bug", bugSchema);
module.exports = Bug;
