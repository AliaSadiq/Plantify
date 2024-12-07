const {mongoose, Schema} = require("mongoose");

const CampaignRequestSchema = new Schema({
  socialGroup: {
    type: Schema.Types.ObjectId,
    ref: 'SocialGroup',
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  issue: {
    type: String,
    required: true,
  },
  attachedImage: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('CampaignRequest', CampaignRequestSchema);