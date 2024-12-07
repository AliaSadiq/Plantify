const express = require('express');
const router = express.Router();
const {
    getAllDonations,
    createDonation,
    getLeaderboard, 
    getAllDonationsByCampaign, 
    getAllDonationsByUser,
} = require('../controllers/donation.controller.js');

router.post('/', createDonation);
router.get('/', getAllDonations);
router.get('/campaign/:id', getAllDonationsByCampaign);
router.get('/user/:id', getAllDonationsByUser);
router.get('/leaderboard', getLeaderboard);

module.exports = router;
