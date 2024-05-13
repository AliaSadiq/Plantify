const express = require("express");
const router = express.Router();
const {createCampaignComment, getCampaignComment, getCampaignComments} = require( '../controllers/campaign-comment.controller.js');

router.post("/", createCampaignComment);
router.get("/:id", getCampaignComment);
router.get("/", getCampaignComments);

module.exports = router;