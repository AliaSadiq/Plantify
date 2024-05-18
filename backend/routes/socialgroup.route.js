const express = require("express");
const router = express.Router();
const {createSocialGroup, getSocialGroup, getSocialGroupsOnWait, updateSocialGroup, getSocialGroupByUserId} = require( '../controllers/socialgroup.controller.js');

router.post("/", createSocialGroup);
router.get("/onWait", getSocialGroupsOnWait);
router.get("/:id", getSocialGroup);
router.put("/:id", updateSocialGroup);
router.get("/user/:userId", getSocialGroupByUserId)

module.exports = router;