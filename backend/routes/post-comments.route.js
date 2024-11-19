const express = require("express");
const router = express.Router();
const { addComment, getComments } = require("../controllers/post-comment.controller");
// Route to add a comment
router.post("/", addComment);

// Route to get comments for a post
router.get("/:postId", getComments);

module.exports = router;
