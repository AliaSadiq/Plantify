const express = require('express');
const router = express.Router();
const {getAllDonations,createDonation,getLeaderboard, getAllDonationsByCampaign} = require('../controllers/donation.controller.js');

router.post('/', createDonation);
router.get('/', getAllDonations);
router.get('/campaign/:id', getAllDonationsByCampaign)
router.get('/leaderboard', getLeaderboard);

module.exports = router;
