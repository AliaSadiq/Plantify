const mongoose = require("mongoose");

const UserMessageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserMessage = mongoose.model("UserMessage", UserMessageSchema);

module.exports = UserMessage;
