const Campaign = require("../models/campaign.model");
const mongoose = require('mongoose');

const getCampaigns = async (req, res) => {
  try {
    const { page = 1, limit = 6 } = req.query;
    const skip = (page - 1) * limit;

    // Fetch campaigns with pagination
    const campaigns = await Campaign.find()
      .populate('socialGroup')
      .skip(skip)
      .limit(Number(limit));

    const totalCampaigns = await Campaign.countDocuments();
    const totalPages = Math.ceil(totalCampaigns / limit);

    res.status(200).json({ campaigns, totalPages });
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


const searchCampaigns = async (req, res) => {
  try {
    const keyword = req.query.keyword ? {
      title: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    } : {};

    const category = req.query.category ? { category: req.query.category } : {};
    const location = req.query.location ? { location: req.query.location } : {};

    const campaigns = await Campaign.find({
      ...keyword,
      ...category,
      ...location,
    });

    res.status(200).json({
      success: true,
      results: campaigns.length,
      data: campaigns,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};


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

//get the campaigns by a certain social group.
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

const getCampaignCount = async (req, res) => {
  try {
    const totalCampaigns = await Campaign.countDocuments();
    res.status(200).json({ count: totalCampaigns });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getCampaign,
    getCampaigns,
    getAllCampaigns,
    createCampaign,
    socialgroupCampaigns,
    getCampaignCount,
    searchCampaigns,
    getRecentCampaigns
};