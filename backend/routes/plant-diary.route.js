const express = require("express");
const router = express.Router();
const { createPlantDiaryEntry, getPlantDiariesByPlant, deletePlantDiaryEntry, getPlantDiaryEntry, updatePlantDiary } = require('../controllers/plant-diary.controller.js');
// const upload = require("../middlewares/upload-middlware.js"); // Import Multer middleware

router.post("/",createPlantDiaryEntry);  // Limit to 4 images
router.get("/:diaryId", getPlantDiaryEntry);
router.get("/plant/:plantId", getPlantDiariesByPlant);
router.put("/:id", updatePlantDiary);
router.delete("/:plantId", deletePlantDiaryEntry);

module.exports = router;