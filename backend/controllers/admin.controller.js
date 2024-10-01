const Admin = require("../models/admin.model");
const bcrypt = require("bcrypt");

const createAdmin = async (req, res) => {
  try {
    const { fullname, email, password, avatar } = req.body;

    // Generate a salt to hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the user with the hashed password and avatar
    const admin = await Admin.create({
      fullname,
      email,
      password: hashedPassword,
      avatar // This will be either the selected avatar or the default one
    });

    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAdmin = async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findById(id);
      res.status(200).json(admin);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
    createAdmin,
    getAdmin
}