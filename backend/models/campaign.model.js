const mongoose = require("mongoose");

const CampaignSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    socialId:{
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true,
      default: 0,
    },
    location: {
      type: String,
      required: true,
      default: 0,
    },
    start_date: {
      type: Date,
      required: false,
    },
    end_date: {
        type: Date,
        required: false,
    },
    target_donation:{
        type: Number,
        required: true,
    },
    collected_donation:{
        type: Number,
        required: false,
    },
    status:{
        type: String,
        required: false,
    }
  },
  {
    timestamps: true,
  }
);


const Campaign = mongoose.model("Campaign", CampaignSchema);

module.exports = Campaign;