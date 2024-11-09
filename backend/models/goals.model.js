const mongoose = require("mongoose");

const GoalSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter plant name"],
    },
    priority: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: false,
      default: "my personal plant",
    },
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model("Goal", GoalSchema);

module.exports = Goal;
