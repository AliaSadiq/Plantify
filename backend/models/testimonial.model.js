const mongoose = require("mongoose");

const TestimonialSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    image: {
      type: String,
      required: true,
    },
    testimony: {
      type: String,
      required: true,
    },
    designation:{
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.model("Testimonial", TestimonialSchema);

module.exports = Testimonial;
