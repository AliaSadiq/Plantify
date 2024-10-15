const { Question, Reply } = require('../models/social-question.model');
const SocialGroup = require('../models/socialgroup.model');

// Add a new question
const addQuestion = async (req, res) => {
  try {
    const { text, userId } = req.body;
    const socialGroup = await SocialGroup.findById(req.params.groupId);

    if (socialGroup) {
      const newQuestion = new Question({
        text,
        user: userId,
        socialGroup: req.params.groupId,
      });

      await newQuestion.save();
      socialGroup.questions.push(newQuestion._id);
      await socialGroup.save();

      res.status(201).json(newQuestion);
    } else {
      res.status(404).json({ message: 'Social group not found' });
    }
  } catch (error) {
    console.error("Error adding question:", error);
    res.status(500).json({ error: error.message });
  }
};
const getQuestionsForGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    console.log(groupId);
    // No need to populate for embedded replies
    const questions = await Question.find({ socialGroup: groupId }).populate('user');
    res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Add a reply to a question
const addReply = async (req, res) => {
  try {
    const { text, questionId } = req.body;
    const question = await Question.findById(questionId);
    const socialGroup = await SocialGroup.findById(req.params.groupId);

    if (question && socialGroup) {
      const newReply = new Reply({
        text,
        socialGroup: req.params.groupId, // Attach the reply to the social group
        question: questionId,
      });

      question.replies.push(newReply); // Add reply to the question's replies
      await question.save();
      await newReply.save();

      // Populate the social group and any other necessary fields
      const populatedReply = await Reply.findById(newReply._id)
        .populate('socialGroup', 'name','image') // Populate socialGroup
        .populate('question', 'text'); // Populate question if needed

      res.status(201).json(populatedReply);
    } else {
      res.status(404).json({ message: 'Question or Social group not found' });
    }
  } catch (error) {
    console.error("Error adding reply:", error);
    res.status(500).json({ error: error.message });
  }
};



// const addReply = async (req, res) => {
//   try {
//     const { text, userId, questionId } = req.body;
//     const question = await Question.findById(questionId);
//     const socialGroup = await SocialGroup.findById(req.params.groupId);

//     if (question && socialGroup) {
//       const newReply = new Reply({
//         text,
//         user: userId,
//         question: questionId,
//         socialGroup: req.params.groupId,
//       });

//       question.replies.push(newReply);
//       await question.save();

//       res.status(201).json(newReply);
//     } else {
//       res.status(404).json({ message: 'Question or Social group not found' });
//     }
//   } catch (error) {
//     console.error("Error adding reply:", error);
//     res.status(500).json({ error: error.message });
//   }
// };

// Edit a question
const editQuestion = async (req, res) => {
  try {
    const { text } = req.body;
    const question = await Question.findById(req.params.questionId);

    if (question) {
      question.text = text;
      await question.save();
      res.status(200).json(question);
    } else {
      res.status(404).json({ message: 'Question not found' });
    }
  } catch (error) {
    console.error("Error editing question:", error);
    res.status(500).json({ error: error.message });
  }
};

// Delete a question
const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId);

    if (question) {
      // Replace .remove() with .deleteOne()
      await question.deleteOne(); 
      res.status(200).json({ message: 'Question deleted' });
    } else {
      res.status(404).json({ message: 'Question not found' });
    }
  } catch (error) {
    console.error("Error deleting question:", error);
    res.status(500).json({ error: error.message });
  }
};


// Edit a reply
const editReply = async (req, res) => {
  try {
    const { text } = req.body;
    const reply = await Reply.findById(req.params.replyId);

    if (reply) {
      reply.text = text;
      await reply.save();
      res.status(200).json(reply);
    } else {
      res.status(404).json({ message: 'Reply not found' });
    }
  } catch (error) {
    console.error("Error editing reply:", error);
    res.status(500).json({ error: error.message });
  }
};

// Delete a reply
const deleteReply = async (req, res) => {
  try {
    // Find the question that contains the reply
    const question = await Question.findOne({ 'replies._id': req.params.replyId });

    if (!question) {
      return res.status(404).json({ message: 'Reply not found' });
    }

    // Use $pull to remove the reply from the replies array
    await Question.findByIdAndUpdate(question._id, {
      $pull: { replies: { _id: req.params.replyId } },
    });

    res.status(200).json({ message: 'Reply deleted successfully' });
  } catch (error) {
    console.error('Error deleting reply:', error);
    res.status(500).json({ error: error.message });
  }
};





module.exports = { addQuestion, addReply, editQuestion, deleteQuestion, editReply, deleteReply, getQuestionsForGroup };
