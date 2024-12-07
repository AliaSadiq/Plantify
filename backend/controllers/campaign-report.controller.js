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
      const reports = await CampaignReport.find().populate('campaign');
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

const deleteCampaignReport = async (req, res) => {
  try {
    const { id } = req.params;

    const report = await CampaignReport.findByIdAndDelete(id);

    if (!report) {
      return res.status(404).json({ message: "report not found" });
    }

    res.status(200).json({ message: "report deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    createCampaignReport,
    getCampaignReports,
    getCampaignReportsByCampaignId,
    deleteCampaignReport,
};