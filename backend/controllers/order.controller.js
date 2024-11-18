const Order = require('../models/order.model');

// Create Order
const createOrder = async (req, res) => {
  try {
    const { email, firstName, lastName, address, postalCode, city, phone, payment, items, totalPrice } = req.body;

    const newOrder = new Order({
      email,
      firstName,
      lastName,
      address,
      postalCode,
      city,
      phone,
      payment,
      items,
      totalPrice,
     
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      message: 'Order placed successfully!',
      order: newOrder,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to place order.',
      error: err.message,
    });
  }
};

// Update Order
const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, firstName, lastName, address, postalCode, city, phone, payment, items, totalPrice } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(id, {
      email,
      firstName,
      lastName,
      address,
      postalCode,
      city,
      phone,
      payment,
      items,
      totalPrice,
    }, { new: true });

    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: 'Order not found.' });
    }

    res.status(200).json({ success: true, message: 'Order updated successfully!', order: updatedOrder });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update order.', error: err.message });
  }
};

// Get All Orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    if (orders.length === 0) {
      return res.status(404).json({ success: false, message: 'No orders found.' });
    }
    res.status(200).json({ success: true, orders });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve orders.', error: err.message });
  }
};

// Get Order by ID
const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found.' });
    }
    res.status(200).json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve order.', error: err.message });
  }
};

// Delete All Orders
const deleteAllOrders = async (req, res) => {
  try {
    await Order.deleteMany();
    res.status(200).json({ success: true, message: 'All orders have been deleted.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete all orders.', error: err.message });
  }
};

// Delete Order by ID
const deleteOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ success: false, message: 'Order not found.' });
    }
    res.status(200).json({ success: true, message: 'Order deleted successfully.', order: deletedOrder });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete order.', error: err.message });
  }
};

module.exports = {
  createOrder,
  updateOrder,
  getAllOrders,
  getOrderById,
  deleteAllOrders,
  deleteOrderById
};
