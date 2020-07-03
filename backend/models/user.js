const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, "Please enter an first name"] },
  lastName: { type: String, required: [true, "Please enter an last name"] },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ,
      "Please enter a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please enter a password "],
    minlength: 6,
    select: false,
  },
  team: {
    type: mongoose.Schema.ObjectId,
    ref: "Team",
    required: [true, "Please enter team"],
  },
  role: {
    type: String,
    enum: ["developer", "team leader", "tester"],
    default: "developer",
  },
});

// incrypt password using bcrypt
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
