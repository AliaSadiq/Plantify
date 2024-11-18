const Goal = require("../models/goal.model");

const createGoal = async (req, res) => {
    const { user, title, priority, completed } = req.body; 
    try { 
        const newGoal = new Goal({ user, title, priority, completed, }); 
        await newGoal.save(); 
        res.status(201).json({ 
            message: "Goal added successfully", goal: newGoal 
        }); 
    } catch (error) { 
        res.status(500).json({ message: "Failed to add goal", error: error.message }); 
    }
};

const getGoalsbyUserId = async (req, res) => {
  try {
      const { userId } = req.params;
      const goals = await Goal.find({ user: userId });
      res.status(200).json(goals);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

const deleteGoal = async (req, res) => {
  try {
    const { id } = req.params;

    const goal = await Goal.findByIdAndDelete(id);

    if (!goal) {
      return res.status(404).json({ message: "goal not found" });
    }

    res.status(200).json({ message: "goal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editGoalStatus = async (req, res) => {
    try {
        const { completed } = req.body;
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, { completed }, { new: true });
        if (!updatedGoal) return res.status(404).json({ message: "Goal not found" });
        res.json({ message: "Goal updated successfully", goal: updatedGoal });
    } catch (error) {
        res.status(500).json({ message: "Error updating goal", error: error.message });
    }
};

module.exports = {
    createGoal,
    getGoalsbyUserId,
    deleteGoal,
    editGoalStatus,
};