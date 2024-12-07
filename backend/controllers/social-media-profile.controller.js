// // controllers/ProfileController.js
// const User = require('../models/user.model'); // User schema
// const SocialMedia = require('../models/social-media.model'); // SocialMedia schema
// const Post = require('../models/social-post.model'); // Post schema

// // Get user profile information
// exports.getProfile = async (req, res) => {
//   try {
//     const userId = mongoose.Types.ObjectId(req.query.userId);
//     // Assume this is set in middleware (e.g., from JWT authentication)

//     // Fetch user details including bio
//     const user = await User.findById(userId)
//       .select('username email bio') // Now bio is retrieved from User
//       .lean();

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Fetch social media details (followers, following)
//     const socialMedia = await SocialMedia.findOne({ user: userId })
//       .select('followers following profileImg')
//       .populate('followers following', 'username')
//       .lean();

//     // Fetch user's posts
//     const posts = await Post.find({ author: userId })
//       .select('caption image likes comments postType species size diseases fertilizerUsed')
//       .lean();

//     // Send the combined profile data
//     res.json({
//       user,
//       socialMedia: {
//         followersCount: socialMedia?.followers.length || 0,
//         followingCount: socialMedia?.following.length || 0,
//         followers: socialMedia?.followers || [],
//         following: socialMedia?.following || [],
//       },
//       posts,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
const mongoose = require('mongoose'); // Add mongoose import
const User = require('../models/user.model'); // User schema
const SocialMedia = require('../models/social-media.model'); // SocialMedia schema
const Post = require('../models/social-post.model'); // Post schema

// Get user profile information
const getProfile = async (req, res) => {
  try {
    const {userId} = req.params// Use new to instantiate ObjectId
    // Convert to ObjectId

    // Fetch user details including bio
    const user = await User.findById(userId)
      .select('username email bio avatar') // Now bio is retrieved from User
      .lean();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Fetch social media details (followers, following)
    const socialMedia = await SocialMedia.findOne({ user: userId })
      .select('followers following profileImg')
      .populate('followers following profileImg', 'username')
      .lean();

    if (!socialMedia) {
      return res.status(404).json({ error: 'Social media profile not found' });
    }

    // Fetch user's posts
    const posts = await Post.find({ author: userId })
    .select('caption likes comments postType species size diseases fertilizerUsed images video author')
    .populate({
      path: 'author',
      select: 'username bio avatar', // Include specific fields from the User schema
    })
    .lean();
    // const posts = await Post.find({ author: userId })
    //   .select('caption likes comments postType species size diseases fertilizerUsed images video author')
    //   .lean();

    // Send the combined profile data
    res.json({
      user,
      socialMedia: {
        followersCount: socialMedia.followers.length || 0,
        followingCount: socialMedia.following.length || 0,
        followers: socialMedia.followers || [],
        following: socialMedia.following || [],
        profileImg: socialMedia.profileImg || '', // Add profile image if exists
      },
      posts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const editProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const { username, bio, avatar } = req.body;

    // Check for required fields and log missing fields
    if (!userId) {
      console.log("Missing userId in request params");
      return res.status(400).json({ error: 'User ID is required' });
    }
    if (!username && !bio && !avatar) {
      console.log("No update fields provided in request body");
      return res.status(400).json({ error: 'Nothing to update. Provide at least one field.' });
    }

    // Update user document (username, bio, avatar)
    const userUpdate = {};
    if (username) userUpdate.username = username;
    if (bio) userUpdate.bio = bio;
    if (avatar) userUpdate.avatar = avatar;

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: userUpdate },
      { new: true } // Return the updated document
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Respond with success message and updated document
    res.json({
      message: 'Profile updated successfully',
      user,
    });
  } catch (error) {
    console.error("Error in editProfile:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// const editProfile = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const { username, bio, profileImg } = req.body;

//     // Check for required fields and log missing fields
//     if (!userId) {
//       console.log("Missing userId in request params");
//       return res.status(400).json({ error: 'User ID is required' });
//     }
//     if (!username && !bio && !profileImg) {
//       console.log("No update fields provided in request body");
//       return res.status(400).json({ error: 'Nothing to update. Provide at least one field.' });
//     }

//     // Update user document (username and bio)
//     const userUpdate = {};
//     if (username) userUpdate.username = username;
//     if (bio) userUpdate.bio = bio;
  
//     const user = await User.findByIdAndUpdate(
//       userId,
//       { $set: userUpdate },
//       { new: true } // Return the updated document
//     );

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Update social media profile image if provided
//     let socialMedia = null;
//     if (profileImg) {
//       socialMedia = await SocialMedia.findOneAndUpdate(
//         { user: userId },
//         { profileImg },
//         { new: true } // Return the updated document
//       );

//       if (!socialMedia) {
//         return res.status(404).json({ error: 'Social media profile not found' });
//       }
//     }

//     // Respond with success message and updated documents
//     res.json({
//       message: 'Profile updated successfully',
//       user,
//       socialMedia: socialMedia || 'No social media update was required'
//     });
//   } catch (error) {
//     console.error("Error in editProfile:", error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };



const followUser = async (req, res) => {
  try {
    const { userIdToFollow, currentUserId } = req.body; // IDs sent from the frontend

    // Validate inputs
    if (!userIdToFollow || !currentUserId) {
      return res.status(400).json({ message: "Both user IDs are required." });
    }

    // Find current user's social profile and the target user's social profile
    const currentUserProfile = await SocialMedia.findOne({ user: currentUserId });
    const targetUserProfile = await SocialMedia.findOne({ user: userIdToFollow });

    if (!currentUserProfile || !targetUserProfile) {
      return res.status(404).json({ message: "One or both user profiles not found." });
    }

    // Check if the current user is already following the target user
    const isFollowing = currentUserProfile.following.includes(targetUserProfile.user);

    if (isFollowing) {
      // Unfollow logic
      currentUserProfile.following.pull(targetUserProfile.user);
      targetUserProfile.followers.pull(currentUserProfile.user);
    } else {
      // Follow logic
      currentUserProfile.following.push(targetUserProfile.user);
      targetUserProfile.followers.push(currentUserProfile.user);
    }

    // Save both profiles
    await currentUserProfile.save();
    await targetUserProfile.save();

    return res.status(200).json({
      message: isFollowing ? "Unfollowed the user." : "Followed the user.",
      following: !isFollowing, // New state: true if now following, false if unfollowed
    });
  } catch (error) {
    console.error("Error in followUser:", error);
    res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
};





module.exports = {
  getProfile,
  editProfile,
  followUser
};