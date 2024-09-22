const Donation = require('../models/donation.model');
const mongoose = require('mongoose');

// Create a new donation
const createDonation = async (req, res) => {
    try {
        const { amount,user, campaign } = req.body;

        // Check if all required fields are present
        if (!user || !campaign || !amount ) {
            console.log('Missing required fields:', { user, campaign, amount });
            return res.status(400).json({ message: "Missing required fields" });
        }

        const donation = new Donation({
            amount,
            user,
            campaign
// Default to false if not provided
        });

        await donation.save();
        res.status(201).json(donation);
    } catch (error) {
        console.error("Error creating donation:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


// Get all donations
const getAllDonations = async (req, res) => {
    try {
        const donations = await Donation.find().populate('user').populate('campaign');
        res.status(200).json(donations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all donations by campaign id
const getAllDonationsByCampaign = async (req, res) => {
    try {
        const campaignId = req.params.id; // Get the campaign ID from request parameters
        const donations = await Donation.find({ campaign: campaignId }).populate('user').populate('campaign'); // Fetch donations and populate user details

        if (!donations.length) {
            return res.status(404).json({ message: 'No donations found for this campaign.' });
        }

        res.status(200).json(donations); // Return the found donations
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message }); // Handle server errors
    }
};

const getLeaderboard = async (req, res) => {
    const campaignId = req.query.campaignId;

    if (!campaignId) {
        return res.status(400).json({ message: 'Campaign ID is required' });
    }

    try {
        const leaderboard = await Donation.aggregate([
            { $match: { campaign: new mongoose.Types.ObjectId(campaignId) } },
            {
                $group: {
                    _id: '$user',
                    totalAmount: { $sum: '$amount' }
                }
            },
            { $sort: { totalAmount: -1 } },
            {
                $lookup: {
                    from: 'users',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            { $unwind: '$user' },
            {
                $project: {
                    _id: 0,
                    username: '$user.username'
                }
            }
        ]);

        res.status(200).json(leaderboard.map((entry, index) => ({
            rank: index + 1,
            username: entry.username
        })));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getAllDonations,
    createDonation,
    getLeaderboard,
    getAllDonationsByCampaign   
};