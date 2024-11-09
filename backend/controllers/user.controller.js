const User = require("../models/user.model");
const SocialGroup = require("../models/socialgroup.model");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { username, email, password, avatar } = req.body;

    // Generate a salt to hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the user with the hashed password and avatar
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      avatar // This will be either the selected avatar or the default one
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Delete user API
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user is a social user
    if (user.isSocial) {
      // Find and delete the corresponding social group
      const socialGroup = await SocialGroup.findOne({ user: user._id });
      if (socialGroup) {
        await SocialGroup.deleteOne({ _id: socialGroup._id });
      }
    }

    // Delete the user
    await User.deleteOne({ _id: user._id });

    res.status(200).json({ message: "User and corresponding social group deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const deleteUser = async (req, res) => {
//   try {
//     const userId = req.params.id;

//     // Find the user by ID
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Check if the user is a social user
//     if (user.isSocial) {
//       // Find and delete the corresponding social group
//       const socialGroup = await SocialGroup.findOne({ user: user._id });
//       if (socialGroup) {
//         await socialGroup.remove();
//       }
//     }

//     // Delete the user
//     await user.remove();

//     res.status(200).json({ message: "User and corresponding social group deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const user = await User.findByIdAndDelete(id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const loginUser = async (req, res) => {
  try {
      const { email, password } = req.body;
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      // Check if password matches
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      console.log("Outgoing data:", user);
      // If email and password are correct, return the user data
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await User.findById(id);
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  loginUser,
  updateUser,
  deleteUser,
};