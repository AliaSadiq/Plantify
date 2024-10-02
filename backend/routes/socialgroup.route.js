const express = require("express");
const router = express.Router();
const {createSocialGroup, getSocialGroup, getSocialGroupsAccepted, getSocialGroupsOnWait, updateSocialGroup, deleteSocialGroup, getSocialGroupByUserId} = require( '../controllers/socialgroup.controller.js');

router.post("/", createSocialGroup);
router.get("/accepted", getSocialGroupsAccepted);
router.get("/onWait", getSocialGroupsOnWait);
router.get("/:id", getSocialGroup);
router.put("/:id", updateSocialGroup);
router.get("/user/:userId", getSocialGroupByUserId);
router.get("/:id/Insights",getSocialGroup)

module.exports = router;