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

module.exports = {
    createSeller,
};

