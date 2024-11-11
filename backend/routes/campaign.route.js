const express = require("express");
const router = express.Router();
const {getCampaign, getCampaigns, createCampaign,socialgroupCampaigns, getCampaignCount, getCampaignInsights, getAllCampaigns, getRecentCampaigns, followCampaign} = require( '../controllers/campaign.controller.js');


router.get('/', getCampaigns);
router.get('/all', getAllCampaigns);
router.get("/count", getCampaignCount);
router.get("/recent", getRecentCampaigns);
router.get("/campaigns-by-month", getCampaignsByMonth);
router.get("/:id", getCampaign);
router.get('/socialgroup/:socialId', socialgroupCampaigns);
router.post("/", createCampaign);
router.get("/insights/:id", getCampaignInsights);
router.put("/:campaignId", updateCampaign);
router.delete("/:campaignId", deleteCampaign);
router.put("/:id", updateStage);

router.post("/:id/follow",followCampaign);
router.post('/:id/volunteers', addVolunteer);

module.exports = router;