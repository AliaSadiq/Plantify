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
        default: 0,
    },
    collected_donation:{
        type: Number,
        required: false,
    },
    likes: {
      type: Number,
      require: false,
    },
    status:{
        type: String,
        required: false,
    },
    volunteers: {
      type: Number,
      require: false
    }
  },
  {
    timestamps: true,
  }
);


const Campaign = mongoose.model("Campaign", CampaignSchema);

module.exports = Campaign;