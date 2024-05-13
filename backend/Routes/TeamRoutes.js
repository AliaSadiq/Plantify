const express = require("express");
const routes = express.Router();
const cors = require("cors"); // Import CORS middleware
const {
  getTeam,
  getTeams,
  addTeam,
  updateTeam,
  deleteTeam,
} = require("../Controller/TeamController.js");

// Use CORS middleware to allow requests from all origins
routes.use(cors());

// Define your routes
routes.get("/", getTeams); // Endpoint to get all requests
routes.get("/:id", getTeam); // Endpoint to get a specific request by ID
routes.put("/:id", updateTeam); // Endpoint to update a specific request by ID
routes.delete("/:id", deleteTeam); // Endpoint to delete a specific request by ID
routes.post("/", addTeam); // Endpoint to add a new request

module.exports = routes;
