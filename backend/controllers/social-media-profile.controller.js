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
    const userId = new mongoose.Types.ObjectId(req.query.userId); // Use new to instantiate ObjectId
    // Convert to ObjectId

    // Fetch user details including bio
    const user = await User.findById(userId)
      .select('username email bio') // Now bio is retrieved from User
      .lean();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Fetch social media details (followers, following)
    const socialMedia = await SocialMedia.findOne({ user: userId })
      .select('followers following profileImg')
      .populate('followers following', 'username')
      .lean();

    if (!socialMedia) {
      return res.status(404).json({ error: 'Social media profile not found' });
    }

    // Fetch user's posts
    const posts = await Post.find({ author: userId })
      .select('caption image likes comments postType species size diseases fertilizerUsed')
      .lean();

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

module.exports = {
  getProfile
};