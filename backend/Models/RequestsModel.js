const mongoose = require('mongoose');

const RequestSchema = mongoose.Schema(
  {
    title: {
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
    image: {
      type: String,
      required: false,
    },
    description: { // Changed to lowercase "description"
      type: String,
      required: true, // Changed to true if it's required
      default: "", // Changed default value to an empty string
    },
     },
  {
    timestamps: true,
  }
);

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
