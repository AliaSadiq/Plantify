const mongoose = require('mongoose');

const RequestSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter campaign name"],
    },
    date: {
      type: Date, // Changed to Date data type
      required: true,
    },
    location:{
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: false,
    },
    province:{
      type: String,
      required: false,
    },
    country:{
      type: String,
      required: false, // Changed to false
    },
    image: {
      type: String,
      required: false,
    },
    description: { // Changed to lowercase "description"
      type: String,
      required: true, // Changed to true if it's required
      default: "", // Changed default value to an empty string
    },
    images: { // Changed to lowercase "images"
      type: [String], // Changed to an array of strings
      required: false,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
