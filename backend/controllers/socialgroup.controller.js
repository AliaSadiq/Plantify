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

  module.exports = {
    createSocialGroup,
    getSocialGroup,
  };