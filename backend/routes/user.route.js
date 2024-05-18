const express = require("express");
const router = express.Router();
const {createUser, getUser, getUsers, loginUser, updateUser} = require('../controllers/user.controller.js');

router.post("/", createUser);
router.get("/:id", getUser);
router.get("/", getUsers);
router.post("/login", loginUser);
router.put("/:id", updateUser);

module.exports = router;