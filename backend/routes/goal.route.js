const express = require("express");
const router = express.Router();
const { createGoal, getGoalsbyUserId, deleteGoal, editGoalStatus } = require('../controllers/goal.controller.js');


router.post("/", createGoal);
router.get("/user/:userId", getGoalsbyUserId);
router.delete("/:id", deleteGoal);
router.patch("/:id", editGoalStatus);

module.exports = router;