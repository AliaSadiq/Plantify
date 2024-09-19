const express = require("express");
const router = express.Router();
const {createSeller} = require('../controllers/seller.controller');

router.post("/", createSeller);

module.exports = router;