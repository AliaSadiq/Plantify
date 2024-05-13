const SocialGroup = require("../models/socialgroup.model");

const createSocialGroup = async (req, res) => {
  try {
    const socialgroup = await SocialGroup.create(req.body);
    res.status(200).json(socialgroup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSocialGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const socialGroup = await SocialGroup.findById(id);
    res.status(200).json(socialGroup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  module.exports = {
    createSocialGroup,
    getSocialGroup,
  };