const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    postalCode: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    payment: { type: String, default: 'cod' }, // default to COD (Cash on Delivery)
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        images:{type:  String,required :true },
      },
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'pending' }, // Default status is pending
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
