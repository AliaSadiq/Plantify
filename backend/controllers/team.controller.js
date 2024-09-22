// const Team = require("../models/team.model");
// const getTeams = async (req, res) => {
//   try {
//     const teams = await Team.find();
//     res.status(200).json(teams);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const getTeam = async (req, res) => {
//   try {
//     const team = await Team.findById(req.params.id);
//     if (team) {
//       res.status(200).json(team);
//     } else {
//       res.status(404).json({ message: 'Team member not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const addTeam = async (req, res) => {
//   try {
//     const { name, role,profilePic } = req.body;
//     console.log(name);
//     console.log(role);
//     console.log(profilePic);
    
//     const newTeamMember = new Team({
//       name,
//       role,
//       profilePic
//     });

//     await newTeamMember.save();
//     res.status(201).json(newTeamMember);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const updateTeam = async (req, res) => {
//   try {
//     const { name, role, profilePic } = req.body;

//     const updatedTeamMember = await Team.findByIdAndUpdate(req.params.id, {
//       name,
//       role,
//       profilePic
//     }, { new: true });

//     res.status(200).json(updatedTeamMember);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const deleteTeam = async (req, res) => {
//   try {
//     await Team.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: 'Team member deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   getTeam,
//   getTeams,
//   addTeam,
//   updateTeam,
//   deleteTeam,
// };


// const Team = require("../models/team.model");

// const getTeams = async (req, res) => {
//   try {
//     const teams = await Team.find();
//     res.status(200).json(teams);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const getTeam = async (req, res) => {
//   try {
//     const team = await Team.findById(req.params.teamId);
//     if (team) {
//       res.status(200).json(team);
//     } else {
//       res.status(404).json({ message: 'Team member not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const addTeam = async (req, res) => {
//   try {
//     const { name, role, profilePic } = req.body;

//     const newTeamMember = new Team({
//       name,
//       role,
//       picture: profilePic // Matching the schema's "picture" field
//     });

//     await newTeamMember.save();
//     res.status(201).json(newTeamMember);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const updateTeam = async (req, res) => {
//   try {
//     const { name, role, profilePic } = req.body;

//     const updatedTeamMember = await Team.findByIdAndUpdate(req.params.teamId, {
//       name,
//       role,
//       picture: profilePic // Matching the schema's "picture" field
//     }, { new: true });

//     res.status(200).json(updatedTeamMember);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const deleteTeam = async (req, res) => {
//   try {
//     await Team.findByIdAndDelete(req.params.teamId);
//     res.status(200).json({ message: 'Team member deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   getTeam,
//   getTeams,
//   addTeam,
//   updateTeam,
//   deleteTeam,
// };
const Team = require("../models/team.model");
const getTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ message: 'Team member not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addTeam = async (req, res) => {
  try {
    const { name, role,profilePic } = req.body;
    console.log(name);
    console.log(role);
    console.log(profilePic);
    
    const newTeamMember = new Team({
      name,
      role,
      profilePic
    });

    await newTeamMember.save();
    res.status(201).json(newTeamMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTeam = async (req, res) => {
  try {
    const { name, role,profilePic } = req.body;

    const updatedTeamMember = await Team.findByIdAndUpdate(req.params.id, {
      name,
      role,
      profilePic
    }, { new: true });

    res.status(200).json(updatedTeamMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTeam = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTeam,
  getTeams,
  addTeam,
  updateTeam,
  deleteTeam,
};


// const SocialGroup = require("../models/socialgroup.model.js");

// // Get all team members of a specific social group
// const getTeams = async (req, res) => {
//   try {
//     const socialGroup = await SocialGroup.findById(req.params.groupId);
//     if (socialGroup) {
//       res.status(200).json(socialGroup.teamMembers);
//     } else {
//       res.status(404).json({ message: 'Social group not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get a specific team member by ID within a specific social group
// const getTeam = async (req, res) => {
//   try {
//     const socialGroup = await SocialGroup.findById(req.params.groupId);
//     if (socialGroup) {
//       const teamMember = socialGroup.teamMembers.id(req.params.teamId);
//       if (teamMember) {
//         res.status(200).json(teamMember);
//       } else {
//         res.status(404).json({ message: 'Team member not found' });
//       }
//     } else {
//       res.status(404).json({ message: 'Social group not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Add a new team member to a specific social group
// const addTeam = async (req, res) => {
//   try {
//     const socialGroup = await SocialGroup.findById(req.params.groupId);
//     if (socialGroup) {
//       const { name, role, profilePic } = req.body;
//       const newTeamMember = {
//         name,
//         role,
//         profilePic,
//       };

//       socialGroup.teamMembers.push(newTeamMember);
//       await socialGroup.save();
//       res.status(201).json(newTeamMember);
//     } else {
//       res.status(404).json({ message: 'Social group not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Update a team member of a specific social group
// const updateTeam = async (req, res) => {
//   try {
//     const socialGroup = await SocialGroup.findById(req.params.groupId);
//     if (socialGroup) {
//       const teamMember = socialGroup.teamMembers.id(req.params.teamId);
//       if (teamMember) {
//         const { name, role, profilePic } = req.body;
//         teamMember.name = name || teamMember.name;
//         teamMember.role = role || teamMember.role;
//         teamMember.profilePic = profilePic || teamMember.profilePic;

//         await socialGroup.save();
//         res.status(200).json(teamMember);
//       } else {
//         res.status(404).json({ message: 'Team member not found' });
//       }
//     } else {
//       res.status(404).json({ message: 'Social group not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete a team member from a specific social group
// const deleteTeam = async (req, res) => {
//   try {
//     const socialGroup = await SocialGroup.findById(req.params.groupId);
//     if (socialGroup) {
//       const teamMember = socialGroup.teamMembers.id(req.params.teamId);
//       if (teamMember) {
//         teamMember.remove();
//         await socialGroup.save();
//         res.status(200).json({ message: 'Team member deleted successfully' });
//       } else {
//         res.status(404).json({ message: 'Team member not found' });
//       }
//     } else {
//       res.status(404).json({ message: 'Social group not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   getTeam,
//   getTeams,
//   addTeam,
//   updateTeam,
//   deleteTeam,
// };
// /server/models/TeamMember.js
// // /server/controllers/teamController.js
// const TeamMember = require('../models/TeamMember');
// const nodemailer = require('nodemailer'); // For sending emails

// // Send Invite and Add Member
// exports.inviteMember = async (req, res) => {
//     const { name, email } = req.body;
//     let picture;

//     if (req.file) {
//         picture = `/uploads/${req.file.filename}`;
//     }

//     try {
//         const newMember = new TeamMember({ name, email, picture });
//         await newMember.save();

//         // Send email with invite link (you would replace this with real email-sending logic)
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'your-email@gmail.com',
//                 pass: 'your-password'
//             }
//         });

//         const mailOptions = {
//             from: 'your-email@gmail.com',
//             to: email,
//             subject: 'Team Invitation',
//             text: `You have been invited to join the team! Click the link to accept: http://your-app.com/join/${newMember._id}`
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.error(error);
//                 res.status(500).json({ message: 'Failed to send invite' });
//             } else {
//                 res.status(201).json(newMember);
//             }
//         });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Accept invite (called when the user clicks the join link)
// exports.acceptInvite = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const member = await TeamMember.findById(id);
//         if (!member) return res.status(404).json({ message: 'Member not found' });

//         member.status = 'Joined';
//         member.dateJoined = Date.now();
//         await member.save();

//         res.status(200).json(member);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };
