const SocialGroup = require("../models/socialgroup.model");

const createSocialGroup = async (req, res) => {
  try {
    console.log("Incoming data:", req.body);

    const newSocialGroup = new SocialGroup({
        user: req.body.user,
        name: req.body.name,
        initiative: req.body.initiative,
        image: req.body.image,
        banner: req.body.banner,
        location: req.body.location,
        cnic: req.body.cnic,
        faceImage: req.body.faceImage,
        contact: req.body.contact,
        address: req.body.address
    });

    const savedGroup = await newSocialGroup.save();
    res.status(201).json(savedGroup);
    // const socialgroup = await SocialGroup.create(req.body);
    // res.status(200).json(socialgroup);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log('ye hogaya');
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

const getSocialGroupsAccepted = async (req, res) => {
  try {
    const socialGroups = await SocialGroup.find({ status: 'accepted'});
    res.status(200).json(socialGroups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSocialGroupsOnWait = async (req, res) => {
  try {
    const socialGroups = await SocialGroup.find({ status: 'on wait' });
    res.status(200).json(socialGroups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSocialGroup = async (req, res) => {
  try {
    const { id } = req.params;

    const socialGroup = await SocialGroup.findByIdAndUpdate(id, req.body);

    if (!socialGroup) {
      return res.status(404).json({ message: "Group not found" });
    }

    const updatedSocialGroup = await SocialGroup.findById(id);
    res.status(200).json(updatedSocialGroup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSocialGroup = async (req, res) => {
  try {
    const { id } = req.params;

    const socialGroup = await SocialGroup.findByIdAndDelete(id);

    if (!socialGroup) {
      return res.status(404).json({ message: "Group not found" });
    }

    res.status(200).json({ message: "Group deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSocialGroupByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const socialGroup = await SocialGroup.findOne({ user: userId });
    if (!socialGroup) {
      return res.status(404).json({ message: 'Social group not found' });
    }
    res.status(200).json(socialGroup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSocialGroupCount = async (req, res) => {
  try {
    const totalGroups = await SocialGroup.countDocuments();
    res.status(200).json({ count: totalGroups });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSocialGroup,
  getSocialGroup,
  getSocialGroupsAccepted,
  getSocialGroupsOnWait,
  updateSocialGroup,
  deleteSocialGroup,
  getSocialGroupByUserId,
  getSocialGroupCount,
};