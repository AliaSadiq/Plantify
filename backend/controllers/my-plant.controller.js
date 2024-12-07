const MyPlant = require("../models/my-plant.model");


const createMyPlant = async (req, res) => {
  const { user, name, image, type, description, plantationDate } = req.body;

  try {
      const plant = new MyPlant({
          user,
          name,
          image, // Storing the image name directly
          type,
          description,
          plantationDate
      });
      
      await plant.save();
      res.status(201).json({ message: "Plant added successfully", plant });
  } catch (error) {
      res.status(500).json({ message: "Failed to add plant", error: error.message });
  }
};

const getMyPlant = async (req, res) => {
    try {
      const { id } = req.params;
      const plant = await MyPlant.findById(id);
      res.status(200).json(plant);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const getPlantsByUser = async (req, res) => {
  try {
      const { userId } = req.params; 
      const plants = await MyPlant.find({ user: userId });  
      if (!plants) {
          return res.status(404).json({ message: "No plants found for this user." });
      }
      res.status(200).json(plants);  // Return the plants found
  } catch (error) {
      res.status(500).json({ message: error.message });  // Return error if any
  }
};

const deleteMyPlant = async (req, res) => {
  try {
    const { id } = req.params;

    const plant = await MyPlant.findByIdAndDelete(id);

    if (!plant) {
      return res.status(404).json({ message: "plant not found" });
    }

    res.status(200).json({ message: "plant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Plant
const updateMyPlant = async (req, res) => {
  const { id } = req.params;
  const { name, plantationDate, type, description, image } = req.body; // Get data from JSON body

  try {
      // Find the plant by ID
      const plant = await MyPlant.findById(id);

      if (!plant) {
          return res.status(404).json({ message: "Plant not found" });
      }

      // Update the plant with the new data
      const updatedPlant = await MyPlant.findByIdAndUpdate(
          id,
          {
              name: name || plant.name,
              image: image || plant.image,  // Assuming image is just a filename
              type: type || plant.type,
              description: description || plant.description,
              plantationDate: plantationDate || plant.plantationDate,
          },
          { new: true } // Return the updated plant
      );

      return res.status(200).json(updatedPlant);
  } catch (error) {
      console.error("Error updating plant:", error.message);
      return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
    createMyPlant,
    getPlantsByUser,
    getMyPlant,
    deleteMyPlant,
    updateMyPlant,
};