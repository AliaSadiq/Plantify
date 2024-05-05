const {mongoose, Schema} = require("mongoose");

const CampaignSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter campaign name"],
    },
    socialGroup:{
      type: Schema.Types.ObjectId,
      ref: 'SocialGroup',
    },
    comments:[{
      type: Schema.Types.ObjectId,
      ref: 'CampaignComment',
    }],
    description: {
      type: String,
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