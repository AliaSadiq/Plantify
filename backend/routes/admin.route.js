const express = require("express");
const router = express.Router();
const {createAdmin, getAdmin} = require('../controllers/admin.controller.js');

router.post("/", createAdmin);
router.get("/:id", getAdmin);

module.exports = router;