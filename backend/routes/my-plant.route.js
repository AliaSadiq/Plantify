const express = require("express");
const router = express.Router();
const { createMyPlant, getPlantsByUser } = require('../controllers/my-plant.controller.js');

router.get("/user/:userId", getPlantsByUser);
router.post("/", createMyPlant);

module.exports = router;