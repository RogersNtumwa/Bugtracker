const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
