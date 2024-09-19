const express = require('express');
const { addQuestion, addReply, editQuestion, deleteQuestion, editReply, deleteReply , getQuestionsForGroup} = require('../controllers/social-question.controller');
const router = express.Router();

router.post('/:groupId/question', addQuestion);
router.post('/:groupId/reply', addReply);
router.put('/:groupId/question/:questionId', editQuestion);
router.delete('/:groupId/question/:questionId', deleteQuestion);
router.put('/:groupId/reply/:replyId', editReply);
router.delete('/:groupId/reply/:replyId', deleteReply);
router.get('/:groupId/questions', getQuestionsForGroup);
module.exports = router;
