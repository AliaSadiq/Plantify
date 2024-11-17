const mongoose = require("mongoose");

const PlantDiarySchema = new mongoose.Schema(
  {
    plant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MyPlant', // Reference to the Personal Plant model
      required: true,
    },
    plantImages: {
      type: [String], // Array of image URLs or paths
      required: true,
      validate: {
        validator: function(value) {
          return value.length <= 4; // Ensures no more than 4 images
        },
        message: 'You can upload a maximum of 4 images.',
      },
    },
    watered: {
      type: String, // Values: "Watered", "Not Watered"
      required: true,
    },
    sunlight: {
      type: String, // Values: "fullSun", "halfSun", "Shade", "UV"
      required: true,
    },
    plantStatus: {
      type: String, // Values: "thriving", "blooming", "healthy", "struggling", "wilting", "dormant", "newly_planted"
      required: true,
    },
    diaryDate: {
      type: Date, // The date the diary entry is made
      required: true,
    },
    fertilizer: {
      type: String, // Fertilizer used
      required: true,
    },
    plantUpdate: {
      type: String, // Description of the plant’s status for the day
      required: true,
    },
    growthObservation: {
      type: String, // Observations regarding plant growth
      required: true,
    },
    healthIssues: {
      type: String, // Notes on pests, diseases, etc.
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

const PlantDiary = mongoose.model("PlantDiary", PlantDiarySchema);

module.exports = PlantDiary;
