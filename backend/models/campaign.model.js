const {mongoose, Schema, trusted} = require("mongoose");
const { type } = require("os");
const CampaignSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter campaign name"],
      trim: true, // Removes extra spaces
      maxlength: [100, "Campaign name cannot exceed 100 characters"]
    },
    socialGroup: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SocialGroup",
      required: true
    },
    description: {
      type: String,
      required: [true, "Please provide a description for the campaign"],
      maxlength: [500, "Description cannot exceed 500 characters"]
    },
    image: {
      type: String,
      required: [true, "Please upload an image"],
    },
    location: {
      type: String,
      required: [true, "Please provide a location"],
    },
    start_date: {
      type: Date,
      required: [true, "Please provide a start date"]
    },
    end_date: {
      type: Date,
      required: [true, "Please provide an end date"],
      validate: {
        validator: function (value) {
          return value > this.start_date; // End date must be after the start date
        },
        message: "End date must be after the start date"
      }
    },
    target_donation: {
      type: Number,
      required: [true, "Please set a target donation amount"],
      min: [1, "Target donation must be at least 1"]
    },
    collected_donation: {
      type: Number,
      default: 0
    },
    likes: {
      type: Number,
      default: 0
    },
    followers: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      default:"true",
      // enum: ['active', 'completed', 'pending'] 
    },
    volunteers: {
      type: Number,
      default: 0
    },
    trees: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true, min: 1 },
        image: { type: String, required: true }
      }
    ]
  },
  {
    timestamps: true
  }
);

const Campaign = mongoose.model("Campaign", CampaignSchema);

module.exports = Campaign;
