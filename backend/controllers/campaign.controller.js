const Campaign = require("../models/campaign.model");
const mongoose = require('mongoose');

const getCampaigns = async (req, res) => {
  try {
    const { page = 1, limit = 6, search = '' } = req.query;
    const skip = (page - 1) * limit;

    // Search filter (case-insensitive search on name and description, add other fields as needed)
    const searchFilter = search
      ? {
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
          ],
        }
      : {};

    // Fetch campaigns based on search filter and apply pagination
    const campaigns = await Campaign.find(searchFilter)
      .populate('socialGroup')
      .skip(skip)
      .limit(Number(limit));

    const totalCampaigns = await Campaign.countDocuments(searchFilter);
    const totalPages = Math.ceil(totalCampaigns / limit);

    res.status(200).json({ campaigns, totalPages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const campaign = await Campaign.findById(id)
      .populate({ path: 'socialGroup', populate: { path: 'user', model: 'User' } })
      .populate('volunteers.user');
    res.status(200).json(campaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate('socialGroup');
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRecentCampaigns = async (req, res) => {
  try {
    // Fetch the 3 most recent campaigns, sorted by creation date
    const recentCampaigns = await Campaign.find()
      .populate('socialGroup')
      .sort({ createdAt: -1 }) // Sort by date (newest first)
      .limit(3); // Limit to 3 most recent campaigns

    res.status(200).json(recentCampaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCampaign = async (req, res) => {
  try {
    // Create the campaign with the request body
    const campaign = await Campaign.create(req.body);

    // Retrieve the campaign with populated socialGroup field
    const populatedCampaign = await Campaign.findById(campaign._id).populate('socialGroup');

    // Return the populated campaign in the response
    res.status(200).json(populatedCampaign);
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
};

const socialgroupCampaigns = async (req, res) => {
  try {
    const { socialId } = req.params; // Correctly destructure the parameter from req.params
    console.log('Received socialId:', socialId); // Log the received ID
  
      // Verify that socialId is a valid ObjectId format if needed
      if (!mongoose.Types.ObjectId.isValid(socialId)) {
        return res.status(400).json({ message: 'Invalid socialId provided' });
      }
  
      const userCampaigns = await Campaign.find({ socialGroup: socialId }).populate('socialGroup'); // Change findOne to find
      if (!userCampaigns.length) {
        return res.status(404).json({ message: 'No campaigns found for this social group' });
      }
  
      res.status(200).json(userCampaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ message: error.message });
  }
};

const getSocialGroupCampaignCount = async (req, res) => {
  try {
    const { socialId } = req.params;

    // Validate the provided socialId
    if (!mongoose.Types.ObjectId.isValid(socialId)) {
      return res.status(400).json({ message: 'Invalid socialId provided' });
    }

    // Get the count of campaigns for the specific social group
    const campaignCount = await Campaign.countDocuments({ socialGroup: socialId });

    res.status(200).json({ count: campaignCount });
  } catch (error) {
    console.error('Error fetching campaign count:', error);
    res.status(500).json({ message: error.message });
  }
};

const getCampaignCount = async (req, res) => {
  try {
    const totalCampaigns = await Campaign.countDocuments();
    res.status(200).json({ count: totalCampaigns });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get campaigns count by month 
const getCampaignsByMonth = async (req, res) => { 
  try { 
    const campaigns = await Campaign.aggregate([ 
      { 
        $group: { 
          _id: { $month: "$createdAt" }, 
          count: { $sum: 1 } 
        } 
      }, 
      { 
        $sort: { _id: 1 } 
      } 
    ]); 
    res.status(200).json(campaigns); 
  } catch (error) { 
    res.status(500).json({ message: error.message }); 
  } 
};

const getCampaignInsights = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Fetch the campaign by its ID
    const campaign = await Campaign.findById(id)
      .populate('socialGroup'); // Populate any related socialGroup data if needed

    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }

    // Format the insights data
    const insightData = {
      collecteddonations: campaign.collected_donation || 0,
      targetDonations: campaign.target_donation,
      likes: campaign.likes || 0,
      followers: campaign.volunteers || 0,
      performanceData: [
        { name: 'Day 1', value: 200 },
        { name: 'Day 2', value: 500 },
        { name: 'Day 3', value: 300 },
        // Add more performance data as needed
      ],
    };

    res.status(200).json(insightData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const followCampaign = async (req, res) => {
  try {
    const { userId } = req.body; // Extract userId from request body
    const { id: campaignId } = req.params; // Extract campaign ID from URL parameters

    // Check if userId is provided
    if (!userId) {
      return res.status(400).json({ message: "User ID is required to follow the campaign." });
    }

    // Find the campaign by ID
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found." });
    }

    // Check if the user is already a follower
    const isFollowing = campaign.followers.includes(userId);

    if (isFollowing) {
      // If already following, remove the user from followers (unfollow)
      await Campaign.updateOne(
        { _id: campaignId },
        { $pull: { followers: userId } }
      );
      return res.status(200).json({ message: "You have unfollowed the campaign.", following: false });
    } else {
      // If not following, add the user to followers
      await Campaign.updateOne(
        { _id: campaignId },
        { $push: { followers: userId } }
      );
      return res.status(200).json({ message: "You are now following the campaign.", following: true });
    }
  } catch (error) {
    console.error("Error in followCampaign:", error);
    res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
};

const addVolunteer = async (req, res) => {
  try {
      const { id } = req.params;
      const { user, contact } = req.body;

      // Find the campaign
      const campaign = await Campaign.findById(id);
      if (!campaign) {
          return res.status(404).json({ message: 'Campaign not found' });
      }

      // Check if the volunteer limit is reached
      if (campaign.volunteers.length >= 10) {
          return res.status(400).json({ message: 'Volunteer limit reached' });
      }

      // Check if the user has already volunteered
      const isAlreadyVolunteered = campaign.volunteers.some(volunteer => 
          volunteer.user && volunteer.user.toString() === user.toString()
      );

      if (isAlreadyVolunteered) {
          return res.status(400).json({ message: 'You have already volunteered for this campaign' });
      }

      // Add the volunteer and increment the total volunteer count
      await Campaign.updateOne(
          { _id: id },
          { 
              $push: { volunteers: { user, contact } },
              $inc: { total_volunteers_count: 1 } // Increment volunteer count
          }
      );

      return res.status(200).json({ message: 'Volunteer added successfully' });
  } catch (error) {
      console.error("Error in addVolunteer:", error);
      return res.status(500).json({ message: 'Error adding volunteer', error });
  }
};

const updateCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCampaign = await Campaign.findByIdAndUpdate(id, req.body);
    if (!updatedCampaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    res.status(200).json(updatedCampaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCampaign = await Campaign.findByIdAndDelete(id);
    if (!deletedCampaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    res.status(200).json(deletedCampaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const updateStage = async (req, res) => {
//   try { 
//     const campaign = await Campaign.findById(req.params.id); 
//     if (!campaign) { 
//       return res.status(404).send('Campaign not found'); 
//     }

//     if (campaign.collected_donation >= campaign.target_donation) { 
//       campaign.stage = 'Buying Plants'; 
//     } 
//     await campaign.save(); 
//     res.send(campaign); 
//   } catch (error) { 
//     res.status(500).send(error.message);
//   }
// };

const updateVolunteerStatus = async (req, res) => {
  const { campaignId, volunteerId } = req.params;
  const { status } = req.body;

  try {
      const campaign = await Campaign.findById(campaignId);
      if (!campaign) {
          return res.status(404).json({ message: "Campaign not found" });
      }

      const volunteer = campaign.volunteers.find(
          volunteer => volunteer.user.toString() === volunteerId
      );

      if (!volunteer) {
          return res.status(404).json({ message: "Volunteer not found" });
      }

      volunteer.status = status;

      await campaign.save();
      res.status(200).json({ message: "Volunteer status updated successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

const deleteVolunteer = async (req, res) => {
  const { campaignId, volunteerId } = req.params;

  try {
      const campaign = await Campaign.findById(campaignId);
      if (!campaign) {
          return res.status(404).json({ message: "Campaign not found" });
      }

      campaign.volunteers = campaign.volunteers.filter(
          volunteer => volunteer.user.toString() !== volunteerId
      );

      await campaign.save();
      res.status(200).json({ message: "Volunteer removed successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}

module.exports = {
    getCampaign,
    getCampaigns,
    createCampaign,
    socialgroupCampaigns,
    getCampaignCount,
    getCampaignInsights,
    getAllCampaigns,
    getRecentCampaigns,
    followCampaign,
    addVolunteer,
    // updateStage,
    getCampaignsByMonth,
    updateCampaign,
    deleteCampaign,
    getSocialGroupCampaignCount,
    updateVolunteerStatus,
    deleteVolunteer,
};