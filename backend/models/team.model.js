const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter campaign name"],
    },
    role: {
      type: String,
      required: true,
      default: "member",
    },
    profilePic: { // Changed to lowercase "images"
      type: String, // Changed to an array of strings
      required: true,
      default:"",
    },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
