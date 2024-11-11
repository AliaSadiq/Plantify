// routes/profileRoutes.js
const express = require("express");
const router = express.Router();
const ProfileController = require('../controllers/social-media-profile.controller');

// Assuming we use authentication middleware to set req.userId
router.get('/profile', ProfileController.getProfile);

module.exports = router;
