// const MyPlant = require("../models/my-plant.model");

// // Get all plants for a user
// const getAllPlants = async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming user ID is available in req.user
//     const plants = await MyPlant.find({ user: userId });
//     res.status(200).json(plants);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Create a new plant
// const createPlant = async (req, res) => {
//   try {
//     const { name, type, description, plantationDate } = req.body;
//     const userId = req.user._id; // Assuming user ID is available in req.user

//     const newPlant = new MyPlant({
//       user: userId,
//       name,
//       type,
//       description,
//       plantationDate,
//     });

//     await newPlant.save();
//     res.status(201).json(newPlant);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Delete a plant
// const deletePlant = async (req, res) => {
//   try {
//     const plantId = req.params.id;
//     const userId = req.user._id; // Assuming user ID is available in req.user

//     const plant = await MyPlant.findOneAndDelete({ _id: plantId, user: userId });
//     if (!plant) {
//       return res.status(404).json({ message: "Plant not found" });
//     }

//     res.status(200).json({ message: "Plant deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Edit a plant
// const editPlant = async (req, res) => {
//   try {
//     const plantId = req.params.id;
//     const userId = req.user._id; // Assuming user ID is available in req.user
//     const { name, type, description, plantationDate } = req.body;

//     const updatedPlant = await MyPlant.findOneAndUpdate(
//       { _id: plantId, user: userId },
//       { name, type, description, plantationDate },
//       { new: true }
//     );

//     if (!updatedPlant) {
//       return res.status(404).json({ message: "Plant not found" });
//     }

//     res.status(200).json(updatedPlant);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Water a plant
// const waterPlant = async (req, res) => {
//   try {
//     const plantId = req.params.id;
//     const userId = req.user._id; // Assuming user ID is available in req.user

//     const plant = await MyPlant.findOne({ _id: plantId, user: userId });
//     if (!plant) {
//       return res.status(404).json({ message: "Plant not found" });
//     }

//     plant.waterHistory.push({ date: new Date() });
//     await plant.save();

//     res.status(200).json({ message: "Plant watered successfully", plant });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get watering status for the current week
// const getWateringStatus = async (req, res) => {
//   try {
//     const plantId = req.params.id;
//     const userId = req.user._id; // Assuming user ID is available in req.user

//     const plant = await MyPlant.findOne({ _id: plantId, user: userId });
//     if (!plant) {
//       return res.status(404).json({ message: "Plant not found" });
//     }

//     const weekStatus = getCurrentWeekWateringStatus(plant.waterHistory);

//     res.status(200).json({ weekStatus });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Helper function to get current week's watering status
// const getCurrentWeekWateringStatus = (waterHistory) => {
//   const currentDate = new Date();
//   const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
//   const endOfWeek = new Date(currentDate.setDate(startOfWeek.getDate() + 6));
  
//   let weekStatus = Array(7).fill(false);

//   waterHistory.forEach((entry) => {
//     const wateringDate = new Date(entry.date);
//     if (wateringDate >= startOfWeek && wateringDate <= endOfWeek) {
//       const dayOfWeek = wateringDate.getDay();
//       weekStatus[dayOfWeek] = true;
//     }
//   });

//   return weekStatus;
// };

// module.exports = {
//   getAllPlants,
//   createPlant,
//   deletePlant,
//   editPlant,
//   waterPlant,
//   getWateringStatus,
// };
