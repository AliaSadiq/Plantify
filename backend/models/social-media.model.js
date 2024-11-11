const mongoose = require("mongoose");
const { Schema } = mongoose;

const SocialMediaSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  profileImg: {
    type: String,
  },
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  isPublic: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

const SocialMedia = mongoose.model("SocialMedia", SocialMediaSchema);
module.exports = SocialMedia;