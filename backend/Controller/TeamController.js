const Team = require("../Models/TeamModel.js");

const getTeams = async (req, res) => {
  try {
    const teams = await Team.find({});
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTeam = await Team.findByIdAndUpdate(id, req.body);
    if (!updatedTeam) {
      return res.status(404).json({ message: "Team not found" });
    }
    res.status(200).json(updatedTeam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTeam = await Team.findByIdAndDelete(id);
    if (!deletedTeam) {
      return res.status(404).json({ message: "Team not found" });
    }
    res.status(200).json(deletedTeam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTeams,
  getTeam,
  addTeam,
  updateTeam,
  deleteTeam,
};
