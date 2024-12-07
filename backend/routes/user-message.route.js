const express = require("express");
const router = express.Router();
const {createUserMessage, getUserMessages} = require( '../controllers/user-message.controller.js');


router.get('/', getUserMessages);
router.post('/', createUserMessage);

module.exports = router;