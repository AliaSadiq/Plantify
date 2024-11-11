const express = require("express");
const router = express.Router();
const { createAdmin, getAdmin, adminLogin } = require("../controllers/admin.controller");
const { authenticateAdmin } = require("../middlewares/admin");

router.post("/", createAdmin);
router.get("/:id", authenticateAdmin, getAdmin);
router.post("/login", adminLogin);

module.exports = router;