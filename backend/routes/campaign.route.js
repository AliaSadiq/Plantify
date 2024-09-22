// const express = require("express");
// const router = express.Router();
// const {getCampaign, getCampaigns, createCampaign,getsocialgroupCampaigns,getCampaignsBySocialGroupId, addComment} = require( '../controllers/campaign.controller.js');


// router.get('/', getCampaigns);
// router.get("/:id", getCampaign);
// router.get('/socialgroup/:socialId', getsocialgroupCampaigns)
// router.post("/", createCampaign);
// router.get("/socialg/:socialId", getCampaignsBySocialGroupId);

// module.exports = router;
const express = require("express");
const router = express.Router();
const {
  getCampaign,
  getCampaigns,
  createCampaign,
  getsocialgroupCampaigns,
  getCampaignsBySocialGroupId,
  // getCampaignsBySocialGroup,
  updateCampaign,
  getKeyMetrics,
  deleteCampaign,
  getCampaignInsights ,

  addComment
} = require('../controllers/campaign.controller.js');

router.get('/', getCampaigns); // Fetch all campaigns
router.get('/keymetrics', getKeyMetrics);
// router.get('/socialgroup/:socialGroupId', getCampaignsBySocialGroup);
router.get("/:campaignId", getCampaign); // Fetch campaign by campaignId
router.get('/socialgroup/:socialId', getsocialgroupCampaigns); // Fetch campaigns for a social group
router.post("/", createCampaign); // Create a new campaign
router.get("/socialg/:socialId", getCampaignsBySocialGroupId); // Fetch campaigns by social group ID
router.put("/:campaignId", updateCampaign);
router.delete("/:campaignId", deleteCampaign);
router.get("/Insights/:id", getCampaignInsights );

module.exports = router;
