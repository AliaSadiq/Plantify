const mongoose = require('mongoose'); // Add mongoose import
const User = require('../models/user.model'); // User schema
const SocialMedia = require('../models/social-media.model'); // SocialMedia schema
const Post = require('../models/social-post.model'); // Post schema

// // Create a new post
// const createPost = async (req, res) => {
//   try {
//     const post = new Post(req.body);
//     await post.save();
//     res.status(201).json(post);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
// Create a new post
const createPost = async (req, res) => {
  try {
    const { userId, textContent, offerForAdoption, images, video, species, size, name, fertilizer, postType } = req.body;

    const postData = {
      author: userId,
      caption: textContent,
      images: images || [],
      video: video || null,
      postType,
      species: postType === 'adoption' ? species : undefined,
      size: postType === 'adoption' ? size : undefined,
      name: postType === 'adoption' ? name : undefined,
      fertilizerUsed: postType === 'adoption' ? fertilizer : undefined,
    };

    const newPost = new Post(postData);
    await newPost.save();

    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the post', details: error.message });
  }
};


// Delete a post
const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific user's posts
const getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.userId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    // Fetch posts with populated author field
    const posts = await Post.find({})
      .populate({
        path: 'author',
        select: 'username bio avatar', // Include specific fields from the User schema
      });

    // Send back the fully populated posts
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// const getAllPosts = async (req, res) => {
//   try {
//     // Fetch random posts
//     const posts = await Post.aggregate([
//       { $sample: { size: 10 } }, // Randomly select 10 posts
//     ]);

//     // Populate the author's username, bio, and profileImg from the User model
//     const populatedPosts = await Post.populate(posts, {
//       path: 'author',
//       select: 'username bio', // Include username and bio
//     });

//     // Fetch the profile image from the SocialMedia schema for each author
//     const populatedWithProfileImg = await Promise.all(
//       populatedPosts.map(async (post) => {
//         const socialMediaData = await SocialMedia.findOne(
//           { user: post.author._id }, // Find the social media data for the author
//           'profileImg' // Fetch only the profile image
//         );

//         return {
//           ...post._doc, // Spread post fields
//           author: {
//             ...post.author._doc, // Spread author fields (username, bio)
//             profileImg: socialMediaData?.profileImg || '/assets/profile-default', // Include profileImg from SocialMedia
//           },
//         };
//       })
//     );

//     res.status(200).json(populatedWithProfileImg); // Return the populated posts with profileImg
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };



// Get only adoption posts
const getAdoptionPosts = async (req, res) => {
  try {
    const posts = await Post.find({ postType: 'adoption' });
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get posts from social group
const getSocialGroupPosts = async (req, res) => {
  try {
    const posts = await Post.find({ isSocialGroupPost: true });
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get posts of users that the given user is following
const getFollowingPosts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const socialMedia = await SocialMedia.findOne({ user: userId }).populate('following');
    const followingIds = socialMedia.following.map(f => f._id);
    const posts = await Post.find({ author: { $in: followingIds } });
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFilteredPosts = async (req, res) => {
  try {
    const { userId, filter } = req.query; // Get filter and userId from query params
    let posts = [];

    if (filter === 'adoption') {
      posts = await Post.find({ postType: 'adoption' }).populate('author', 'username avatar');
    } else if (filter === 'social') {
      posts = await Post.find({ isSocialGroupPost: true }).populate('author', 'username avatar');
    } else if (filter === 'following') {
      const socialMedia = await SocialMedia.findOne({ user: userId }).populate('following');
      const followingIds = socialMedia.following.map((user) => user._id); // Get IDs of following users
      posts = await Post.find({ author: { $in: followingIds } }).populate('author', 'username avatar');
    } else {
      posts = await Post.find().populate('author', 'username avatar'); // Default to fetch all posts
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const toggleLikePost = async (req, res) => {
//   try {
//     console.log("Request body:", req.body); // Debug request body
//     const { postId, userId } = req.body; // Get `postId` and `userId` from request body

//     // Validate userId
//     if (!userId) {
//       console.log("Missing userId in the request body.");
//       return res.status(400).json({ error: 'User ID is required' });
//     }

//     console.log("Fetching post with ID:", postId);
//     const post = await Post.findById(postId); // Find the post by `postId`

//     if (!post) {
//       console.log("Post not found for ID:", postId);
//       return res.status(404).json({ message: 'Post not found' });
//     }

//     console.log("Post found:", post);

//     // Validate and initialize the `likes` field
//     if (!Array.isArray(post.likes)) {
//       console.log("Initializing likes array as it is not defined.");
//       post.likes = [];
//     }

//     console.log("Current likes array:", post.likes);

//     // Check if the user has already liked the post
//     const hasLiked = post.likes.includes(userId);
//     console.log("Has the user liked the post already?", hasLiked);

//     if (hasLiked) {
//       // Unlike the post
//       post.likes = post.likes.filter((id) => id !== userId);
//       console.log("User unliked the post. Updated likes array:", post.likes);
//       await post.save();
//       return res.status(200).json({ message: 'Post unliked', likesCount: post.likes.length });
//     } else {
//       // Like the post
//       post.likes.push(userId);
//       console.log("User liked the post. Updated likes array:", post.likes);
//       await post.save();
//       return res.status(200).json({ message: 'Post liked', likesCount: post.likes.length });
//     }
//   } catch (error) {
//     console.error("Error in toggleLikePost:", error);
//     res.status(500).json({ error: 'An error occurred while toggling the like' });
//   }
// };


const toggleLikePost = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Debug request body
    const { postId, userId } = req.body; // Get `postId` and `userId` from request body

    // Validate userId
    if (!userId) {
      console.log("Missing userId in the request body.");
      return res.status(400).json({ error: 'User ID is required' });
    }

    console.log("Fetching post with ID:", postId);
    const post = await Post.findById(postId); // Find the post by `postId`

    if (!post) {
      console.log("Post not found for ID:", postId);
      return res.status(404).json({ message: 'Post not found' });
    }

    console.log("Post found:", post);

    // Validate and initialize the `likes` field
    if (!Array.isArray(post.likes)) {
      console.log("Initializing likes array as it is not defined.");
      post.likes = [];
    }

    console.log("Current likes array:", post.likes);

    // Check if the user has already liked the post
    const hasLiked = post.likes.includes(userId);
    console.log("Has the user liked the post already?", hasLiked);

    if (hasLiked) {
      // Unlike the post
      post.likes = post.likes.filter((id) => id !== userId);
      console.log("User unliked the post. Updated likes array:", post.likes);
      await post.save();
      // Return updated post with likes count
      return res.status(200).json({ message: 'Post unliked', likes: post.likes });
    } else {
      // Like the post
      post.likes.push(userId);
      console.log("User liked the post. Updated likes array:", post.likes);
      await post.save();
      // Return updated post with likes count
      return res.status(200).json({ message: 'Post liked', likes: post.likes });
    }
  } catch (error) {
    console.error("Error in toggleLikePost:", error);
    res.status(500).json({ error: 'An error occurred while toggling the like' });
  }
}

module.exports = {
    createPost,
    deletePost,
    getUserPosts,
    getAllPosts ,
    getAdoptionPosts,
    getSocialGroupPosts,
    getFollowingPosts,
    getFilteredPosts,
    toggleLikePost
  };