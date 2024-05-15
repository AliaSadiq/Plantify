const {mongoose, Schema} = require("mongoose");

const SocialGroupSchema = mongoose.Schema(
  {
    user:{
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true, "Please enter group name"],
    },
    initiative: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    cnic: {
      type: String,
      required: true,
    },
    faceImage: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const SocialGroup = mongoose.model("SocialGroup", SocialGroupSchema);

module.exports = SocialGroup;