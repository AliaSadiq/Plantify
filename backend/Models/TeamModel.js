const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter campaign name"],
    },
    
    location:{
      type: String,
      required: true,
    },

    city:{
      type: String,
      required: false, // Changed to false
    },
      bio: { // Changed to lowercase "description"
      type: String,
      required: false, // Changed to true if it's required
      default: "", // Changed default value to an empty string
    },
    Status: {
      type: String,
      enum: ['ongoing', 'past', 'future'],
      default: 'ongoing', // Default status if not provided
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
