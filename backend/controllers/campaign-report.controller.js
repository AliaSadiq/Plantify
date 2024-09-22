const CampaignReport = require("../models/campaign-report.model");

const createCampaignReport = async (req, res) => {
  try {
    const report = await CampaignReport.create(req.body);
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCampaignReports = async (req, res) => {
  try {
      const reports = await CampaignReport.find();
      res.status(200).json(reports);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

const getCampaignReportsByCampaignId = async (req, res) => {
  try {
      const { campaignId } = req.params;
      const reports = await CampaignReport.find({ campaign: campaignId });
      res.status(200).json(reports);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

module.exports = {
    createCampaignReport,
    getCampaignReports,
    getCampaignReportsByCampaignId
};