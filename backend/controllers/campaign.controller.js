const Campaign = require("../models/campaign.model");
const mongoose = require('mongoose');

const getCampaigns = async (req, res) => {
  try {
<<<<<<< HEAD
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
=======
    const campaigns = await Campaign.find()
      .populate('socialGroup') // Populate the socialGroup field
    res.status(200).json(campaigns);
>>>>>>> eb47ad213267f5eb8af73cc4ab4f1bffb01d7fe9
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

<<<<<<< HEAD
// const getCampaigns = async (req, res) => {
//   try {
//     const campaigns = await Campaign.find()
//       .populate('socialGroup') // Populate the socialGroup field
//     res.status(200).json(campaigns);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

=======
>>>>>>> eb47ad213267f5eb8af73cc4ab4f1bffb01d7fe9
const getCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const campaign = await Campaign.findById(id)
      .populate('socialGroup') // Populate the socialGroup field
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



const socialgroupCampaigns = async (req, res) => {
  try {
    const { socialId } = req.params; // Correctly destructure the parameter from req.params
    console.log('Received socialId:', socialId); // Log the received ID
  
      // Verify that socialId is a valid ObjectId format if needed
      if (!mongoose.Types.ObjectId.isValid(socialId)) {
        return res.status(400).json({ message: 'Invalid socialId provided' });
      }
  
<<<<<<< HEAD
      const userCampaigns = await Campaign.find({ socialGroup: socialId }).populate('socialGroup'); // Change findOne to find
      if (!userCampaigns.length) {
        return res.status(404).json({ message: 'No campaigns found for this social group' });
      }
=======
      const userCampaigns = await Campaign.find({ socialGroup: socialId }).populate('socialGroup');; // Change findOne to find
      if (!userCampaigns.length) {
        return res.status(404).json({ message: 'No campaigns found for this social group' });
      }
>>>>>>> eb47ad213267f5eb8af73cc4ab4f1bffb01d7fe9
  
      res.status(200).json(userCampaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getCampaign,
    getCampaigns,
    createCampaign,
    socialgroupCampaigns,
};