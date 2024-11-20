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
const addTeamMembers = async (req, res) => {
  try {
    const { id } = req.params; // SocialGroup ID
    const teamMember = req.body; // New team member data

    const updatedGroup = await SocialGroup.findByIdAndUpdate(
      id,
      { $push: { teamMembers: teamMember } }, // Add the new member
      { new: true } // Return the updated document
    );

    if (!updatedGroup) {
      return res.status(404).json({ message: 'Social Group not found' });
    }

    res.status(200).json(updatedGroup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//edit 
const editSocialGroup = async (req, res) => {
  try {
    console.log("Editing group data:", req.body);

    // Find the social group by ID and update it with the new data
    const updatedGroup = await SocialGroup.findByIdAndUpdate(
      req.params.id, // Get the group ID from URL params
      {
        name: req.body.name,
        initiative: req.body.initiative,
        image: req.body.image,         // Updated image field
        banner: req.body.banner,       // Updated banner field
        location: req.body.location,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
      },
      { new: true } // Return the updated document
    );

    if (!updatedGroup) {
      return res.status(404).json({ message: 'Social group not found' });
    }

    res.status(200).json(updatedGroup);
  } catch (error) {
    console.error('Error updating group:', error);
    res.status(500).json({ message: error.message });
  }
};

//get all groups 

const getAllSocialGroups = async (req, res) => {
  try {
    // Find all social groups and populate the reviews field
    const socialGroups = await SocialGroup.find().populate('reviews').populate('user');

    if (!socialGroups || socialGroups.length === 0) {
      return res.status(404).json({ message: 'No social groups found' });
    }

    // Map over all social groups to calculate the average rating for each one
    const socialGroupsWithRatings = socialGroups.map(group => {
      const totalRatings = group.reviews.reduce((sum, review) => sum + review.rating, 0);
      const averageRating = group.reviews.length > 0 
        ? totalRatings / group.reviews.length 
        : 0;

      return {
        ...group._doc,   // Spread the existing social group data
        averageRating,   // Add the average rating for the group
      };
    });

    // Send response with all social groups and their average ratings
    res.status(200).json(socialGroupsWithRatings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSocialGroup = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the social group and populate the reviews field
    const socialGroup = await SocialGroup.findById(id).populate('reviews').populate('user');

    if (!socialGroup) {
      return res.status(404).json({ message: 'SocialGroup not found' });
    }

    // Calculate the total rating and average rating
    const totalRatings = socialGroup.reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = socialGroup.reviews.length > 0 
      ? totalRatings / socialGroup.reviews.length 
      : 0;

    // Send response with social group data and average rating
    res.status(200).json({
      ...socialGroup._doc,  // Spread the existing social group data
      averageRating,        // Add the average rating
    });
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

const getSocialGroupsCountOnWait = async (req, res) => {
  try {
    const count = await SocialGroup.countDocuments({ status: 'on wait' });
    res.status(200).json({ count });
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

const followSocialGroup = async (req, res) => {
  try {
    console.log(req.body); // Check if req.user is available
    const {userId} = req.body;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({ message: "You need to be logged in to follow groups." });
    }

    const socialGroup = await SocialGroup.findById(id);
    if (!socialGroup) {
      return res.status(404).json({ message: "SocialGroup not found" });
    }

    // Check if user is already following the group
    const isFollowing = socialGroup.followers.includes(userId);

    if (isFollowing) {
      socialGroup.followers.pull(userId);
      await socialGroup.save();
      return res.status(200).json({ message: "You have unfollowed the group." });
    } else {
      socialGroup.followers.push(userId);
      await socialGroup.save();
      return res.status(200).json({ message: "You are now following the group." });
    }
  } catch (error) {
    console.error(error); // Log the error for better debugging
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
  followSocialGroup,
  getAllSocialGroups,
  editSocialGroup,
  getSocialGroupsCountOnWait,
  addTeamMembers,
};