const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path according to your structure

const adminAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'your_jwt_secret'); // Use the same secret as in your auth
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user || user.role !== 'admin') {
      return res.status(403).send({ error: 'Access denied. Admins only.' });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({ error: 'Please authenticate as an admin.' });
  }
};

module.exports = adminAuth;
