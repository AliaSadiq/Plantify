const jwt = require('jsonwebtoken');
const Admin = require('../models/admin.model');

const authenticateAdmin = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!admin) {
      throw new Error('Admin not found');
    }

    req.token = token;
    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate.' });
  }
};

module.exports = {
  authenticateAdmin,
};
