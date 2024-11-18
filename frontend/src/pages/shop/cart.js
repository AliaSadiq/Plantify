
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  // Navigate to checkout page
  const handlecheckout = () => {
    navigate('/checkout');
  }

  // Update quantity of a product in the cart
  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
  };

  // Update quantity of a product in the cart
 
  // Remove item from cart
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item._id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
  };

 
  // Calculate total price of all items in the cart
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl lg:mb-10 mx-auto pt-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl mt-10 text-center font-josefin-sans font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/shop" className="text-green-500 font-josefin-sans">Continue shopping</Link>.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b border-gray-300 py-4">
                <img 
                  src={item.images && item.images[0] ? `/assets/${item.images[0]}` : "/assets/default-image.jpg"} 
                  alt={item.title} 
                  className="w-20 h-20 object-cover rounded-lg" 
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-md font-josefin-sans font-semibold">{item.name}  </h3>
                  <p className="text-gray-600">Rs.{item.price}</p>
                  
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                    className="border border-gray-300 rounded-md w-16 p-1 mr-4 text-center"
                  />
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.292 4a1 1 0 01.707-.293h6a1 1 0 01.707.293l1.293 1.293H16a2 2 0 012 2v1H2V7a2 2 0 012-2h.707L6.292 4zM4 9v6a2 2 0 002 2h8a2 2 0 002-2V9H4zm6 3.5a.5.5 0 11-1 0V10a.5.5 0 011 0v2.5z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            <Link to="/shop" className="mt-4 inline-block text-green-500">
              ← Continue Shopping
            </Link>
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 rounded-lg h-60 w-80 shadow-md">
            <h2 className="text-lg font-bold mb-4">Cart Total</h2>
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">Rs.{totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-gray-500 text-sm mb-4">Shipping calculated at checkout</p>
              <button 
                onClick={handlecheckout}
                className="font-josefin-sans text-xs sm:text-sm font-semibold text-white bg-black p-3 sm:p-4 rounded hover:rounded-full border-2 border-black mr-2 sm:mr-4">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
