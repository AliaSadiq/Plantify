const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const {getCampaign, getCampaigns, createCampaign, socialgroupCampaigns, getCampaignCount, searchCampaigns, getRecentCampaigns, getAllCampaigns} = require( '../controllers/campaign.controller.js');
=======
const {getCampaign, getCampaigns, createCampaign,socialgroupCampaigns ,getCampaignInsights, addComment, getCampaignCount} = require( '../controllers/campaign.controller.js');
>>>>>>> 11a36170f26a7fd6f5cf3e7c5b45b68a77d5d0ca


router.get('/', getCampaigns);
router.get('/all', getAllCampaigns); // For fetching all campaigns without pagination
router.get("/count", getCampaignCount);
router.get("/recent", getRecentCampaigns);
router.get("/search", searchCampaigns);
router.get("/:id", getCampaign);
router.get('/socialgroup/:socialId', socialgroupCampaigns)
router.post("/", createCampaign);
router.get("/Insights/:id",getCampaignInsights);

module.exports = router;