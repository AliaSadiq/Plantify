const { mongoose, Schema } = require("mongoose");

const CampaignCommentSchema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    campaign: {
      type: Schema.Types.ObjectId,
      ref: 'Campaign',
    },
    comment: {
      type: String,
      required: true,
    },
    date: {
        type: Date,
        required: false,
        default: Date.now
    }
  },
  {
    timestamps: true,
  }
);

const CampaignComment = mongoose.model("CampaignComment", CampaignCommentSchema);

module.exports = CampaignComment;
