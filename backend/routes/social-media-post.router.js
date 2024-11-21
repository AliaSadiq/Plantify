const express = require('express');
const router = express.Router();
const postController = require('../controllers/social-media-post.controller');

router.post('/add', postController.createPost);
router.delete('/posts/:id', postController.deletePost);
router.get('/posts/user/:userId', postController.getUserPosts);
router.get('/getAll', postController.getAllPosts);
router.get('/social-group', postController.getSocialGroupPosts);
router.get('/filter', postController.getFilteredPosts);
router.post('/like', postController.toggleLikePost);
module.exports = router;
