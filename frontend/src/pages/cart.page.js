import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Sample cart data (you can fetch this from state or context in a real app)
  const [cartItems, setCartItems] = useState([
    { id: 1, image: '/assets/products/plant-1.jpeg', title: 'Green & Purple Cactus', price: 40, quantity: 1 },
    { id: 2, image: '/assets/products/plant-2.jpeg', title: 'Snake Plant', price: 76, quantity: 2 },
  ]);

  // Handle quantity change
  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/shop" className="text-green-500">Continue shopping</Link>.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {/* Quantity Selector */}
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="border border-gray-300 rounded-md w-16 p-1 mr-4 text-center"
                  />
                  {/* Remove Item Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="flex justify-end mt-6">
            <div className="text-right">
              <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
              <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
