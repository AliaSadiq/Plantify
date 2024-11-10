const express = require("express");
const router = express.Router();
const {createCampaignReport, getCampaignReports, getCampaignReportsByCampaignId, deleteCampaignReport} = require( '../controllers/campaign-report.controller.js');

router.post("/", createCampaignReport);
router.get("/", getCampaignReports);
router.get("/campaign/:campaignId", getCampaignReportsByCampaignId);
router.delete("/:id", deleteCampaignReport);

module.exports = router;