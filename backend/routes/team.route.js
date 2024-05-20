const express = require("express");
const routes = express.Router();

const {
  getTeam,
  getTeams,
  addTeam,
  updateTeam,
  deleteTeam,
} = require("../Controller/TeamController.js");


routes.get("/", getTeams);
routes.get("/:id", getTeam);
routes.put("/:id", updateTeam);
routes.delete("/:id", deleteTeam);
routes.post("/", addTeam);

module.exports = routes;