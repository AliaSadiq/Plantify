const mongoose = require("mongoose");

const SocialGroupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter group name"],
    },
    initiative: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    cnic: {
      type: Number,
      required: true,
    },
    faceImage: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

const SocialGroup = mongoose.model("SocialGroup", SocialGroupSchema);

module.exports = SocialGroup;