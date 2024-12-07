const Seller = require("../models/seller.model");

const createSeller = async (req, res) => {
  try {
    const seller = new Seller(req.body);
    await seller.save();
    res.status(201).json(seller);
  } catch (error) {
    console.error(error); // This will log the error details
    res.status(500).json({ message: error.message });
  }
};  

const getSeller = async (req, res) => {
  try {
    const { id } = req.params;
    const seller = await Seller.findById(id);
    res.status(200).json(seller);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSellersOnWait = async (req, res) => {
  try {
    const sellers = await Seller.find({ status: 'on wait' });
    res.status(200).json(sellers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSellersCountOnWait = async (req, res) => {
  try {
    const count = await Seller.countDocuments({ status: 'on wait' });
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSeller = async (req, res) => {
  try {
    const { id } = req.params;

    const seller = await Seller.findByIdAndUpdate(id, req.body);

    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }

    const updatedSeller = await Seller.findById(id);
    res.status(200).json(updatedSeller);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    createSeller,
    getSellersOnWait,
    getSellersCountOnWait,
    getSeller,
    updateSeller,
};

