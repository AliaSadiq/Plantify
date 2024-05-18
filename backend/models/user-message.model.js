const mongoose = require("mongoose");

const UserMessageSchema = mongoose.Schema(
  {
    user:{
      type: Schema.Types.ObjectId,
      ref: 'User',
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
