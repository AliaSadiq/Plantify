const express = require("express");
const router = express.Router();
const {getCampaign, getCampaigns, deleteCampaign, addVolunteer, createCampaign,socialgroupCampaigns, getCampaignCount, getCampaignInsights, getAllCampaigns, getRecentCampaigns, followCampaign,getCampaignsByMonth,updateCampaign, getSocialGroupCampaignCount, updateVolunteerStatus, deleteVolunteer, getActiveCampaignCount } = require( '../controllers/campaign.controller.js');


router.get('/', getCampaigns);
router.get('/all', getAllCampaigns);
router.get("/count", getCampaignCount);
router.get("/social-campaign-count/:socialId", getSocialGroupCampaignCount);
router.get("/recent", getRecentCampaigns);
router.get("/campaigns-by-month", getCampaignsByMonth);
router.get("/:id", getCampaign);
router.get('/socialgroup/:socialId', socialgroupCampaigns);
router.post("/", createCampaign);
router.get("/insights/:id", getCampaignInsights);
router.get('/active-count/:socialGroupId', getActiveCampaignCount);
router.put("/:id", updateCampaign);
router.delete("/:id", deleteCampaign);
router.delete("/:campaignId/volunteers/:volunteerId", deleteVolunteer);
router.put('/:campaignId/volunteers/:volunteerId', updateVolunteerStatus);
// router.put("/:id", updateStage);
router.post("/:id/follow",followCampaign);
router.post('/:id/volunteers', addVolunteer);

module.exports = router;