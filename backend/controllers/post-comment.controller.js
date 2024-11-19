
const Comment = require("../models/post-comment");
const Post = require("../models/social-post.model");
const User = require("../models/user.model");

// Add a new comment
exports.addComment = async (req, res) => {
  try {
    const { postId, comment, userId } = req.body;

    // Validate input
    if (!postId || !comment || !userId) {
      return res.status(400).json({ message: "Post ID, comment, and user ID are required." });
    }

    const newComment = await Comment.create({
      userId, // Passed explicitly from the frontend
      postId,
      comment,
    });

    res.status(201).json({
      success: true,
      message: "Comment added successfully.",
      comment: newComment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};


// Get comments for a specific post
exports.getComments = async (req, res) => {
  try {
    const { postId } = req.params;

    // Find comments for the post and populate user information
    const comments = await Comment.find({ postId })
      .populate("userId", "username avatar") // Only return relevant fields from User
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      comments,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};
