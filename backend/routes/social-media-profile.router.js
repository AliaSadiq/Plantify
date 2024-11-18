// routes/profileRoutes.js
const express = require("express");
const router = express.Router();
const {getProfile,editProfile,followUser} = require('../controllers/social-media-profile.controller');

// Assuming we use authentication middleware to set req.userId
router.get('/profile/:userId', getProfile);
router.put('/profile/:userId', editProfile);
router.post('/follow', followUser); 

module.exports = router;
