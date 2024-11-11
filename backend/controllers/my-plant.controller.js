const MyPlant = require("../models/my-plant.model");


const createMyPlant = async (req, res) => {
    try {
        const plant = await MyPlant.create(req.body);
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

module.exports = {
    createMyPlant,
    getPlantsByUser,
};