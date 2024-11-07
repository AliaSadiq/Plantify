const express = require("express");
const router = express.Router();
const {createAdmin, getAdmin, adminLogin} = require('../controllers/admin.controller.js');

router.post("/", createAdmin);
router.get("/:id", getAdmin);
router.post("/login", adminLogin);

module.exports = router;