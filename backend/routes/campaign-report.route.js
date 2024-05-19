const express = require("express");
const router = express.Router();
const {createCampaignReport, getCampaignReports, getCampaignReportsByCampaignId} = require( '../controllers/campaign-report.controller.js');

router.post("/", createCampaignReport);
router.get("/", getCampaignReports);
router.get("/campaign/:campaignId", getCampaignReportsByCampaignId);

module.exports = router;