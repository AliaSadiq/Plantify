
const Campaign = require("../models/campaign.model");
const mongoose = require('mongoose');

const getCampaigns = async (req, res) => {
  try {
<<<<<<< HEAD
    const campaigns = await Campaign.find()
      .populate('socialGroup');
    res.status(200).json(campaigns);
=======
    const { page = 1, limit = 6, search = '' } = req.query;
    const skip = (page - 1) * limit;

    // Search filter
    const searchFilter = search
      ? { name: { $regex: search, $options: 'i' } } // Case-insensitive search
      : {};

    const campaigns = await Campaign.find(searchFilter)
      .populate('socialGroup')
      .skip(skip)
      .limit(Number(limit));

    const totalCampaigns = await Campaign.countDocuments(searchFilter);
    const totalPages = Math.ceil(totalCampaigns / limit);

    res.status(200).json({ campaigns, totalPages });
>>>>>>> 589074bf9d3361b5580d9a6b8e4a4c130927edf5
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params;
    const campaign = await Campaign.findById(campaignId)
      .populate('socialGroup');
    res.status(200).json(campaign);
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


const getCampaignsBySocialGroupId = async (req, res) => {
  const { socialId } = req.params;

<<<<<<< HEAD
  // Check if socialGroupId is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(socialId)) {
    return res.status(400).json({ message: 'Invalid Social Group ID format' });
  }
=======
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
>>>>>>> 589074bf9d3361b5580d9a6b8e4a4c130927edf5

  try {
    // Convert the socialGroupId into an ObjectId
    const objectId = mongoose.Types.ObjectId(socialId);

    console.log(`Converted ObjectId: ${objectId}`);

    // Fetch campaigns and group by year of creation
    const campaigns = await Campaign.aggregate([
      { $match: { socialGroup: objectId } }, // Match by socialGroup (ObjectId)
      {
        $group: {
          _id: { $year: "$createdAt" }, // Group by year of the 'createdAt' field
          count: { $sum: 1 } // Count the number of campaigns per year
        }
      },
      { $sort: { _id: 1 } } // Sort by year in ascending order
    ]);

    console.log('Campaigns found:', campaigns);

    // Check if any campaigns are returned
    if (campaigns.length === 0) {
      return res.status(404).json({ message: 'No campaigns found for this Social Group' });
    }

    // Return the campaign count grouped by year
    res.status(200).json({ campaignCountByYear: campaigns });

  } catch (error) {
    console.error('Error fetching campaigns:', error);
    // Internal server error
    res.status(500).json({ message: 'Failed to fetch campaign data', error: error.message });
  }
};
const getsocialgroupCampaigns = async (req, res) => {
  try {
    const { socialId } = req.params; // Correctly destructure the parameter from req.params
    console.log('Received socialId:', socialId); // Log the received ID
    
    // Verify that socialId is a valid ObjectId format if needed
    if (!mongoose.Types.ObjectId.isValid(socialId)) {
      console.log('Invalid socialId provided');
      return res.status(400).json({ message: 'Invalid socialId provided' });
    }

    // Log the query that you're about to run
    console.log('Fetching campaigns for social group:', socialId);

    const userCampaigns = await Campaign.find({ socialGroup: socialId }).populate('socialGroup');
    console.log('Fetched campaigns:', userCampaigns); // Log the fetched campaigns

    if (!userCampaigns.length) {
      console.log('No campaigns found for the social group:', socialId); // Log if no campaigns were found
      return res.status(404).json({ message: 'No campaigns found for this social group' });
    }

    res.status(200).json(userCampaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error); // Log the error if something went wrong
    res.status(500).json({ message: error.message });
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
// Get all campaigns for a specific social group
const getCampaignsBySocialGroup = async (req, res) => {
  try {
    const campaigns = await Campaign.find({ socialGroupId: req.params.socialGroupId });
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getKeyMetrics = async (req, res) => {
  try {
    // Fetch total campaigns
    const totalCampaigns = await Campaign.countDocuments();
    
    // Fetch active campaigns
    const activeCampaigns = await Campaign.countDocuments({ status: 'active' });
    
    // Fetch completed campaigns
    const completedCampaigns = await Campaign.countDocuments({ status: 'completed' });

    // Fetch followers from the social group
    const socialGroupData = await SocialGroup.findOne(); // assuming one social group
    const followers = socialGroupData ? socialGroupData.followers : 0;

    // Return the key metrics data
    return res.status(200).json({
      totalCampaigns,
      activeCampaigns,
      completedCampaigns,
      followers
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
module.exports = {
  getCampaigns,
  getCampaign,
  createCampaign,
  getKeyMetrics,
  getsocialgroupCampaigns,
  getCampaignsBySocialGroup,
  getCampaignsBySocialGroupId,
  updateCampaign,
  deleteCampaign,
  getCampaignInsights,
};
