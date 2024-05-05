const express = require("express");
const routes = express.Router(); // Changed from Router to routes
const {
  getCampaign,
  getCampaigns,
  addCampaign,
  updatedCampaign,
  deleteCampaign,
} = require("../controller/product.controller.js");

routes.get("/", getCampaigns);
routes.get("/:id", getCampaign);
routes.put("/:id", updatedCampaign);
routes.delete("/:id", deleteCampaign);
routes.post("/", addCampaign);

module.exports = routes; // Changed from router to routes
