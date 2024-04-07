const express = require("express");
//import Campaign from "../models/campaign.model.js";
const router = express.Router();
const {getCampaign, getCampaigns, createCampaign,socialgroupCampaigns} = require( '../controllers/campaign.controller.js');


router.get('/', getCampaigns);
router.get("/:id", getCampaign);
router.get("/social/:social_Id", socialgroupCampaigns);
router.post("/", createCampaign);



module.exports = router;