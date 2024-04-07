const express = require("express");
const router = express.Router();
const {createSocialGroup} = require( '../controllers/socialgroup.controller.js');

router.post("/", createSocialGroup);

module.exports = router;