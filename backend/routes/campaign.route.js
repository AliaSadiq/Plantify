const express = require("express");
const router = express.Router();
const {getCampaign, getCampaigns, createCampaign,socialgroupCampaigns, addComment, getCampaignCount, getCampaignInsights} = require( '../controllers/campaign.controller.js');


router.get('/', getCampaigns);
router.get("/count", getCampaignCount);
router.get("/:id", getCampaign);
router.get('/socialgroup/:socialId', socialgroupCampaigns)
router.post("/", createCampaign);
router.get("/insights/:id", getCampaignInsights)

module.exports = router;