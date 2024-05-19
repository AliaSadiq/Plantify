const { mongoose, Schema } = require("mongoose");

const CampaignReportSchema = mongoose.Schema(
  {
    campaign: {
      type: Schema.Types.ObjectId,
      ref: 'Campaign',
    },
    reason: {
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

const CampaignReport = mongoose.model("CampaignReport", CampaignReportSchema);

module.exports = CampaignReport;
