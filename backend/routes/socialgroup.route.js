const express = require("express");
const router = express.Router();
const {createSocialGroup, getSocialGroup} = require( '../controllers/socialgroup.controller.js');

router.post("/", createSocialGroup);
router.get("/:id", getSocialGroup);

module.exports = router;