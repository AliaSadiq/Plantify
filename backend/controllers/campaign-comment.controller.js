const CampaignComment = require("../models/campaign-comment.model");

const createCampaignComment = async (req, res) => {
    try {
      const comment = await CampaignComment.create(req.body);
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const getCampaignComment = async (req, res) => {
    try {
    const { id } = req.params;
    const comment = await CampaignComment.findById(id);
    res.status(200).json(comment);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

const getCampaignComments = async (req, res) => {
    try {
        const comments = await CampaignComment.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCampaignCommentsByCampaignId = async (req, res) => {
  try {
      const { campaignId } = req.params;
      const comments = await CampaignComment.find({ campaign: campaignId })
        .populate('user');
      res.status(200).json(comments);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

module.exports = {
    createCampaignComment,
    getCampaignComment,
    getCampaignComments,
    getCampaignCommentsByCampaignId
};