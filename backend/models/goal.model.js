const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: [true, "Please enter the goal title"],
    },
    priority: {
        type: String,
        enum: ["High", "Medium", "Low"],
        required: [true, "Please set the priority"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model('Goal', GoalSchema);

module.exports = Goal;
