const express = require("express");
const router = express.Router();
const {
  getTeam,
  getTeams,
  addTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/team.controller.js");

router.get("/:groupId/team", getTeams);
router.get("/:groupId/team/:teamId", getTeam);
router.post("/:groupId/team", addTeam);
router.put("/:groupId/team/:teamId", updateTeam);
router.delete("/:groupId/team/:teamId", deleteTeam);

module.exports = router;
