const express = require("express");
const router = express.Router();
const {createSocialGroup, getSocialGroup, getSocialGroupsAccepted, getSocialGroupsOnWait, updateSocialGroup, deleteSocialGroup, getSocialGroupByUserId, getSocialGroupCount} = require( '../controllers/socialgroup.controller.js');

router.post("/", createSocialGroup);
router.get("/accepted", getSocialGroupsAccepted);
router.get("/count", getSocialGroupCount);
router.get("/onWait", getSocialGroupsOnWait);
router.get("/:id", getSocialGroup);
router.put("/:id", updateSocialGroup);
router.delete("/:id", deleteSocialGroup);
router.get("/user/:userId", getSocialGroupByUserId)

module.exports = router;