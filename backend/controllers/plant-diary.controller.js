const PlantDiary = require("../models/plant-diary.model");

const createPlantDiaryEntry = async (req, res) => {
  try {
    const diaryEntry = await PlantDiary.create(req.body);
    res.status(200).json(diaryEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get plant diary details by ID
const getPlantDiaryEntry = async (req, res) => {
  try {
    const { diaryId } = req.params;  // Get the plant diary ID from the URL parameter

    // Fetch the plant diary entry by its ID, including the images array
    const diaryEntry = await PlantDiary.findById(diaryId).populate('plant');

    if (!diaryEntry) {
      return res.status(404).json({ message: "Plant diary entry not found" });
    }

    res.status(200).json(diaryEntry);  // Return the diary entry
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPlantDiariesByPlant = async (req, res) => {
  try {
      const { plantId } = req.params; 
      const plantDiaries = await PlantDiary.find({ plant: plantId });  
      if (!plantDiaries) {
          return res.status(404).json({ message: "No diaries found for this plant." });
      }
      res.status(200).json(plantDiaries);  // Return the plants found
  } catch (error) {
      res.status(500).json({ message: error.message });  // Return error if any
  }
};

const deletePlantDiaryEntry = async (req, res) => {
  try {
    const { plantId } = req.params;

    const plantDiary = await PlantDiary.findByIdAndDelete(plantId);

    if (!plantDiary) {
      return res.status(404).json({ message: "diary not found" });
    }

    res.status(200).json({ message: "diary entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Update a diary entry
const updatePlantDiary = async (req, res) => {
    const { id } = req.params; // Diary ID from the URL
    const updatedData = req.body; // New data from the request body

    try {
        // Find the diary by ID and update it with the new data
        const updatedDiary = await PlantDiary.findByIdAndUpdate(
            id,
            updatedData,
            { new: true, runValidators: true } // Return the updated document and run validators
        );

        if (!updatedDiary) {
            return res.status(404).json({ message: "Diary entry not found." });
        }

        res.status(200).json({ 
            message: "Diary entry updated successfully.", 
            data: updatedDiary 
        });
    } catch (error) {
        res.status(500).json({ 
            message: "Failed to update diary entry.", 
            error: error.message 
        });
    }
};

module.exports = {
    createPlantDiaryEntry,
    getPlantDiaryEntry,
    getPlantDiariesByPlant,
    deletePlantDiaryEntry,
    updatePlantDiary,
};