const UserMessage = require("../models/user-message.model");

const createUserMessage = async (req, res) => {
    try {
      const message = await UserMessage.create(req.body);
      res.status(200).json(message);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const getUserMessages = async (req, res) => {
    try {
        const messages = await UserMessage.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createUserMessage,
    getUserMessages,
};