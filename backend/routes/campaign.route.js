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
<<<<<<< HEAD
const {getCampaign, getCampaigns, createCampaign,socialgroupCampaigns, addComment, getCampaignCount} = require( '../controllers/campaign.controller.js');
=======
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
>>>>>>> 6ca604e71525a02f9d75d385202ca1c7f66e6823

  addComment
} = require('../controllers/campaign.controller.js');

<<<<<<< HEAD
router.get('/', getCampaigns);
router.get("/count", getCampaignCount);
router.get("/:id", getCampaign);
router.get('/socialgroup/:socialId', socialgroupCampaigns)
router.post("/", createCampaign);
=======
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
>>>>>>> 6ca604e71525a02f9d75d385202ca1c7f66e6823

module.exports = router;
