const Team = require("../Models/TeamModel.js");
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