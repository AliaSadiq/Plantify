const { getUniqueDomId } = require("@fullcalendar/core/internal");
const {mongoose, Schema} = require("mongoose");
const CampaignSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter campaign name"],
      trim: true, // Removes extra spaces
      maxlength: [100, "Campaign name cannot exceed 100 characters"],
      unique: true,
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
      maxlength: [100, "Description cannot exceed 500 characters"]
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
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User', 
      }
    ],
    status: {
      type: String,
      default:'active',
      enum: ['active', 'closed'] 
    },
    total_volunteers_count: {
      type: Number,
      default: 0
    },
    volunteers: [
      {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        contact: {
            type: String,
            required: false // Set to false to make it optional
        },
        status: {
            type: String,
            enum: ['accepted', 'pending'], 
            default: 'pending',
            required: false // Set to false to make it optional
        }
      }
    ],  
    trees: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true, min: 10 },
        image: { type: String, required: true },
        quantity: {type: Number, required: true,min:10}
      }
    ],
    stage: 
    { 
      type: String, 
      enum: ['Fundraising', 'Buying Plants', 'Plantation'], 
      default: 'Fundraising'
    }
  },
  {
    timestamps: true
  }
);

const Campaign = mongoose.model("Campaign", CampaignSchema);

module.exports = Campaign;
