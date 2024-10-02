const express = require("express");
const router = express.Router();
const {getCampaign, getCampaigns, createCampaign, socialgroupCampaigns, getCampaignCount, searchCampaigns, getRecentCampaigns, getAllCampaigns} = require( '../controllers/campaign.controller.js');


router.get('/', getCampaigns);
router.get('/all', getAllCampaigns); // For fetching all campaigns without pagination
router.get("/count", getCampaignCount);
router.get("/recent", getRecentCampaigns);
router.get("/search", searchCampaigns);
router.get("/:id", getCampaign);
router.get('/socialgroup/:socialId', socialgroupCampaigns)
router.post("/", createCampaign);
// router.get("/Insights/:id",getCampaignInsights);

module.exports = router;