const mongoose = require("mongoose");

const SocialGroupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter group name"],
    },
    description: {
      type: String,
      required: true,
    },
    members: {
      type: Number,
      required: true,
      default: 0,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Environmental', 'Social Welfare', 'Community Development'],
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const SocialGroup = mongoose.model("SocialGroup", SocialGroupSchema);

module.exports = SocialGroup;
