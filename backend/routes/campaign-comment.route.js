const express = require("express");
const router = express.Router();
const {createCampaignComment, getCampaignComment, getCampaignComments, getCampaignCommentsByCampaignId} = require( '../controllers/campaign-comment.controller.js');

router.post("/", createCampaignComment);
router.get("/:id", getCampaignComment);
router.get("/", getCampaignComments);
router.get("/campaign/:campaignId", getCampaignCommentsByCampaignId);

module.exports = router;