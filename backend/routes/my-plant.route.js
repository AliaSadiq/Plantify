const express = require("express");
const router = express.Router();
const { createMyPlant, getPlantsByUser, getMyPlant, deleteMyPlant, updateMyPlant } = require('../controllers/my-plant.controller.js');


router.post("/", createMyPlant);
router.get("/:id", getMyPlant);
router.get("/user/:userId", getPlantsByUser);
router.put("/:id", updateMyPlant);
router.delete("/:id", deleteMyPlant);

module.exports = router;