const express = require("express");
const router = express.Router();
const {createSocialGroup, addTeamMembers, getSocialGroup, getSocialGroupsAccepted, getSocialGroupsOnWait, updateSocialGroup, deleteSocialGroup, getSocialGroupByUserId, getSocialGroupCount,followSocialGroup,getAllSocialGroups,editSocialGroup, getSocialGroupsCountOnWait} = require( '../controllers/socialgroup.controller.js');

router.post("/", createSocialGroup);
router.get("/accepted", getSocialGroupsAccepted);
router.get("/count", getSocialGroupCount);
router.get("/onWait", getSocialGroupsOnWait);
router.get("/count-on-wait", getSocialGroupsCountOnWait);
router.get("/:id", getSocialGroup);
router.put("/:id", updateSocialGroup);
router.delete("/:id", deleteSocialGroup);
router.get("/user/:userId", getSocialGroupByUserId)
router.get("/",getAllSocialGroups);
router.post("/:id/follow",followSocialGroup)
router.put('/:id/edit', editSocialGroup);
router.patch('/:id/team', addTeamMembers);

module.exports = router;