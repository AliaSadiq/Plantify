// // const mongoose = require('mongoose');

// // const TeamSchema = mongoose.Schema(
// //   {
// //     name: {
// //       type: String,
// //       required: [true, "Please enter campaign name"],
// //     },
// //     role: {
// //       type: String,
// //       required: true,
// //       default: "member",
// //     },
// //     profilePic: { // Changed to lowercase "images"
// //       type: String, // Changed to an array of strings
// //       required: true,
// //       default:"",
// //     },
// //   },
// //   {
// //     timestamps: true,
// //   }
// // );

// // const Team = mongoose.model("Team", TeamSchema);

// // module.exports = Team;
// // /server/models/TeamMember.jsconst mongoose = require('mongoose');
// const mongoose = require('mongoose');
// const TeamMemberSchema =  mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     role: {
//         type: String,
//         required: true
//     },
//     picture: {
//         type: String // Changed to match the controller
//     },
//     dateJoined: {
//         type: Date
//     }
// });

// const TeamMember = mongoose.model('TeamMember', TeamMemberSchema);

// module.exports = TeamMember;

const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [false, "Please enter team name"],
    },
      role: {
      type: String,
      required: false,
      
     
    },
    profilePic: { // Changed to lowercase "images"
      type: String, // Changed to an array of strings
      required: false,
      default:"",
    },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
