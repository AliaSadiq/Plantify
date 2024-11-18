const express = require('express');
const { 
  createOrder, 
  updateOrder, 
  getAllOrders, 
  getOrderById, 
  deleteAllOrders, 
  deleteOrderById 
} = require('../controllers/order.controller');

const router = express.Router();

router.post('/', createOrder); // Create order
router.put('/:id', updateOrder); // Update order by ID
router.get('/', getAllOrders); // Get all orders
router.get('/:id', getOrderById); // Get order by ID
router.delete('/', deleteAllOrders); // Delete all orders
router.delete('/:id', deleteOrderById); // Delete order by ID

module.exports = router;
