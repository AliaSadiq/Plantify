const express = require('express');
const router = express.Router();
const postController = require('../controllers/social-media-post.controller');

router.post('/add', postController.createPost);
router.delete('/posts/:id', postController.deletePost);
router.get('/posts/user/:userId', postController.getUserPosts);
router.get('/getAll', postController.getAllPosts);
router.get('/posts/adoption', postController.getAdoptionPosts);
router.get('/posts/social-group', postController.getSocialGroupPosts);
router.get('/posts/following/:userId', postController.getFollowingPosts);
router.get('/filter', postController.getFilteredPosts);
router.post('/like', postController.toggleLikePost);
module.exports = router;
