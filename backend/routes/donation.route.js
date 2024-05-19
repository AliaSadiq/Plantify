const express = require('express');
const router = express.Router();
const {getAllDonations,createDonation,getLeaderboard} = require('../controllers/donation.controller.js');

router.post('/', createDonation);
router.get('/', getAllDonations);
router.get('/leaderboard', getLeaderboard);

module.exports = router;
