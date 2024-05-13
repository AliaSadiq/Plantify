const express = require("express");
const routes = express.Router();
const cors = require("cors"); // Import CORS middleware
const {
  getRequest,
  getRequests,
  addRequest,
  updateRequest,
  deleteRequest,
} = require("../Controller/RequestsController.js");

// Use CORS middleware to allow requests from all origins
routes.use(cors());

// Define your routes
routes.get("/", getRequests);
routes.get("/:id", getRequest);
routes.put("/:id", updateRequest);
routes.delete("/:id", deleteRequest);
routes.post("/", addRequest);

module.exports = routes;
