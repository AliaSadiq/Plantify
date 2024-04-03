const express = require("express");
//import Campaign from "../models/campaign.model.js";
const router = express.Router();
const {getCampaign, getCampaigns, createCampaign} = require( '../controllers/campaign.controller.js');


router.get('/', getCampaigns);
router.get("/:id", getCampaign);

router.post("/", createCampaign);

// update a product
// router.put("/:id", updateProduct);

// delete a product
// router.delete("/:id", deleteProduct);




module.exports = router;