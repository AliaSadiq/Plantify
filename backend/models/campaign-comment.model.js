const mongoose = require("mongoose");

const CampaignCommentSchema = mongoose.Schema(
  {
    commentator: {
      type: String,
      required: [true, "Please enter your username"],
    },
    comment: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
        type: Date,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

const CampaignComment = mongoose.model("CampaignComment", CampaignCommentSchema);

module.exports = CampaignComment;
