// const Team = require("../Models/TeamModel.js");
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
//     const { name, role,profilePic } = req.body;

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
const SocialGroup = require("../models/socialgroup.model.js");

// Get all team members of a specific social group
const getTeams = async (req, res) => {
  try {
    const socialGroup = await SocialGroup.findById(req.params.groupId);
    if (socialGroup) {
      res.status(200).json(socialGroup.teamMembers);
    } else {
      res.status(404).json({ message: 'Social group not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific team member by ID within a specific social group
const getTeam = async (req, res) => {
  try {
    const socialGroup = await SocialGroup.findById(req.params.groupId);
    if (socialGroup) {
      const teamMember = socialGroup.teamMembers.id(req.params.teamId);
      if (teamMember) {
        res.status(200).json(teamMember);
      } else {
        res.status(404).json({ message: 'Team member not found' });
      }
    } else {
      res.status(404).json({ message: 'Social group not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new team member to a specific social group
const addTeam = async (req, res) => {
  try {
    const socialGroup = await SocialGroup.findById(req.params.groupId);
    if (socialGroup) {
      const { name, role, profilePic } = req.body;
      const newTeamMember = {
        name,
        role,
        profilePic,
      };

      socialGroup.teamMembers.push(newTeamMember);
      await socialGroup.save();
      res.status(201).json(newTeamMember);
    } else {
      res.status(404).json({ message: 'Social group not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a team member of a specific social group
const updateTeam = async (req, res) => {
  try {
    const socialGroup = await SocialGroup.findById(req.params.groupId);
    if (socialGroup) {
      const teamMember = socialGroup.teamMembers.id(req.params.teamId);
      if (teamMember) {
        const { name, role, profilePic } = req.body;
        teamMember.name = name || teamMember.name;
        teamMember.role = role || teamMember.role;
        teamMember.profilePic = profilePic || teamMember.profilePic;

        await socialGroup.save();
        res.status(200).json(teamMember);
      } else {
        res.status(404).json({ message: 'Team member not found' });
      }
    } else {
      res.status(404).json({ message: 'Social group not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a team member from a specific social group
const deleteTeam = async (req, res) => {
  try {
    const socialGroup = await SocialGroup.findById(req.params.groupId);
    if (socialGroup) {
      const teamMember = socialGroup.teamMembers.id(req.params.teamId);
      if (teamMember) {
        teamMember.remove();
        await socialGroup.save();
        res.status(200).json({ message: 'Team member deleted successfully' });
      } else {
        res.status(404).json({ message: 'Team member not found' });
      }
    } else {
      res.status(404).json({ message: 'Social group not found' });
    }
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
