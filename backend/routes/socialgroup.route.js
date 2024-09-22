const express = require("express");
const router = express.Router();
const {createSocialGroup, getSocialGroup, getSocialGroupsAccepted, getSocialGroupsOnWait, updateSocialGroup, deleteSocialGroup, getSocialGroupByUserId, getSocialGroupCount} = require( '../controllers/socialgroup.controller.js');

router.post("/", createSocialGroup);
router.get("/accepted", getSocialGroupsAccepted);
router.get("/count", getSocialGroupCount);
router.get("/onWait", getSocialGroupsOnWait);
router.get("/:id", getSocialGroup);
router.put("/:id", updateSocialGroup);
<<<<<<< HEAD
router.get("/user/:userId", getSocialGroupByUserId);
router.get("/:id/Insights",getSocialGroup)
=======
router.delete("/:id", deleteSocialGroup);
router.get("/user/:userId", getSocialGroupByUserId)
>>>>>>> 589074bf9d3361b5580d9a6b8e4a4c130927edf5

module.exports = router;