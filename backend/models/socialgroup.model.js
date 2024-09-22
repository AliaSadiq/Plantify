// const {mongoose, Schema} = require("mongoose");

// const SocialGroupSchema = mongoose.Schema(
//   {
//     user:{
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//     },
//     name: {
//       type: String,
//       required: [true, "Please enter group name"],
//     },
//     initiative: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     banner: {
//       type: String,
//       required: true,
//     },
//     location: {
//       type: String,
//       required: true,
//     },
//     cnic: {
//       type: String,
//       required: true,
//     },
//     faceImage: {
//       type: String,
//       required: true,
//     },
//     contact: {
//       type: String,
//       required: true,
//     },
//     address: {
//       type: String,
//       required: true,
//     },
//     status: {
//       type: String,
//       required: false,
//       enum: ['on wait', 'accepted', 'rejected'],
//       default: 'on wait',
//     }
//   },
//   {
//     timestamps: true,
//   }
// );

// const SocialGroup = mongoose.model("SocialGroup", SocialGroupSchema);

// module.exports = SocialGroup;
const { mongoose, Schema } = require("mongoose");

const TeamSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter member name"],
    },
    role: {
      type: String,
      required: true,
      default: "member",
    },
    profilePic: {
      type: String,
      required: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const SocialGroupSchema = new Schema(
  {
    user: {
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
    },
    followers:{
      type:String,
      required: true,
    },
    status: {
      type: String,
      enum: ['on wait', 'accepted', 'rejected'],
      default: 'on wait',
    },
    teamMembers: [TeamSchema],
    reviews: [{
      type: Schema.Types.ObjectId,
      ref: 'Review',
    }],
    questions: [{
      type: Schema.Types.ObjectId,
      ref: 'Question',
    }],
    socialMediaIds: [{
      type: String,
    }],
  },
  {
    timestamps: true,
  }
);

const SocialGroup = mongoose.model("SocialGroup", SocialGroupSchema);
module.exports = SocialGroup;
