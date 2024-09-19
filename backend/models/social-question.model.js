const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Reply Schema
const replySchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
    required: true,
  },
  socialGroup: {
    type: Schema.Types.ObjectId,
    ref: 'SocialGroup',
    required: true,
  },
}, { timestamps: true });

// Define the Question Schema
const questionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  socialGroup: {
    type: Schema.Types.ObjectId,
    ref: 'SocialGroup',
    required: true,
  },
  replies: [replySchema],
}, { timestamps: true });

// Ensure models are defined once
const Question = mongoose.models.Question || mongoose.model('Question', questionSchema);
const Reply = mongoose.models.Reply || mongoose.model('Reply', replySchema);

module.exports = { Question, Reply };
