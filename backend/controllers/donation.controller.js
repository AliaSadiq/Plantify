const Donation = require('../models/donation.model');
const Campaign = require('../models/campaign.model'); // importing the campaign model to update campaigdonation amount
const mongoose = require('mongoose');
const createDonation = async (req, res) => {
    try {
        const { amount, user, campaign } = req.body;

        // Check if all required fields are present
        if (!user || !campaign || !amount) {
            console.log('Missing required fields:', { user, campaign, amount });
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Find the campaign to check its existence and calculate the allowable donation
        const campaignDoc = await Campaign.findById(campaign);
        if (!campaignDoc) {
            return res.status(404).json({ message: "Campaign not found" });
        }

        const remainingAmount = campaignDoc.target_donation - campaignDoc.collected_donation;
        if (amount > remainingAmount) {
            return res.status(400).json({ message: "Donation exceeds target amount" });
        }

        // Create a new donation
        const donation = new Donation({
            amount,
            user,
            campaign,
        });

        // Save the new donation
        await donation.save();

        // Update the campaign's collected donation amount using $inc
        const updatedCampaign = await Campaign.updateOne(
            { _id: campaign }, // Find the campaign by its _id
            { $inc: { collected_donation: amount } } // Increment collected_donation by the donation amount
        );

        if (updatedCampaign.modifiedCount === 0) {
            return res.status(500).json({ message: "Failed to update campaign donation amount" });
        }

        res.status(201).json({
            donation,
            message: "Donation created and campaign updated successfully",
        });
    } catch (error) {
        console.error("Error creating donation:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// const createDonation = async (req, res) => {
//     try {
//         const { amount, user, campaign } = req.body;

//         // Check if all required fields are present
//         if (!user || !campaign || !amount) {
//             console.log('Missing required fields:', { user, campaign, amount });
//             return res.status(400).json({ message: "Missing required fields" });
//         }

//         // Find the campaign
//         const campaignDoc = await Campaign.findById(campaign);

//         if (!campaignDoc) {
//             return res.status(404).json({ message: "Campaign not found" });
//         }

//         // Calculate the allowable donation amount
//         const remainingAmount = campaignDoc.target_donation - campaignDoc.collected_donation;

//         if (amount > remainingAmount) {
//             return res.status(400).json({ message: "Donation exceeds target amount" });
//         }

//         // Create a new donation
//         const donation = new Donation({
//             amount,
//             user,
//             campaign
//         });

//         // Save the new donation
//         await donation.save();

//         // Update the campaign's collected donation amount
//         campaignDoc.collected_donation += amount;
//         await campaignDoc.save();

//         res.status(201).json({
//             donation,
//             updatedCampaign: campaignDoc
//         });
//     } catch (error) {
//         console.error("Error creating donation:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// Get all donations by a specific user with the 'user' populated
const getAllDonationsByUser = async (req, res) => {
    try {
        const userId = req.params.id; // Get the user ID from request parameters

        // Find all donations for the specified user and populate user details
        const donations = await Donation.find({ user: userId }).populate('user').populate('campaign');

        if (!donations.length) {
            return res.status(404).json({ message: 'No donations found for this user.' });
        }

        res.status(200).json(donations); // Return all donations for the user
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message }); // Handle server errors
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

const getAllDonationsByCampaign = async (req, res) => {
    try {
        const campaignId = req.params.id; // Get the campaign ID from request parameters

        // Use MongoDB aggregation to group donations by user
        const donations = await Donation.aggregate([
            { $match: { campaign: new mongoose.Types.ObjectId(campaignId) } }, // Match the campaign ID
            {
                $group: {
                    _id: "$user", // Group by user ID
                    totalAmount: { $sum: "$amount" }, // Sum all donations by the user
                    donationCount: { $sum: 1 }, // Count how many donations the user made
                }
            },
            {
                $lookup: {
                    from: "users", // Join with the User collection
                    localField: "_id", // The user ID from the donation
                    foreignField: "_id", // The user ID in the User collection
                    as: "user" // Alias for the joined data
                }
            },
            { $unwind: "$user" }, // Unwind the user data
            {
                $project: {
                    _id: 0, // Hide the internal ID field
                    userId: "$user._id",
                    username: "$user.username", // Include the user's username
                    avatar: "$user.avatar",
                    totalAmount: 1, // Include the total donation amount
                    donationCount: 1 // Include the donation count
                }
            }
        ]);

        if (!donations.length) {
            return res.status(404).json({ message: 'No donations found for this campaign.' });
        }

        res.status(200).json(donations); // Return the aggregated donations
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
    getAllDonationsByCampaign,
    getAllDonationsByUser,
};