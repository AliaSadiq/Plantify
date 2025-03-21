
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Modal from 'react-modal';
// import { CheckCircleIcon } from '@heroicons/react/24/outline';
// import axios from "axios";

// const Checkout = () => {
//   const navigate = useNavigate();

//   // Cart items from localStorage
//   const [cartItems, setCartItems] = useState([]);
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(savedCart);
//   }, []);

//   // State for form values and validation errors
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     postalCode: '',
//     city: '',
//     phone: '',
//     payment: 'cod',
//   });

//   const [errors, setErrors] = useState({});
//   const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

//   // Handle form changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };
//   const handleOrder = async () => {
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors); // Set validation errors
//       return;
//     }
  
//     // Prepare the order data
//     const orderData = {
//       email: formData.email,
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       address: formData.address,
//       postalCode: formData.postalCode,
//       city: formData.city,
//       phone: formData.phone,
//       payment: formData.payment,
//       items: cartItems.map(item => ({
//         productId: item._id, // assuming productId is in the cart item
//         name: item.name,
//         price: item.price,
//         quantity: item.quantity,
//         images:item.images[0],
//       })),
//       totalPrice: totalPrice + 200, // including shipping
//     };
  
//     try {
//       const response = await axios.post("BACKEND_URL/api/orders", orderData, {
//       // const response = await fetch('BACKEND_URL/api/orders', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         // body: JSON.stringify(orderData),
//        });
  
//       const data = await response.json();
//       if (data.success) {
        
//         setIsSuccessModalOpen(true); // Show success modal
//       } else {
//         console.error('Failed to place order:', data.message);
//       }
//     } catch (error) {
//       console.error('Error placing order:', error);
//     }
//   };
  
//   // Validate form fields
//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = 'Email or phone number is required';
//     if (!formData.firstName) newErrors.firstName = 'First name is required';
//     if (!formData.lastName) newErrors.lastName = 'Last name is required';
//     if (!formData.address) newErrors.address = 'Address is required';
//     if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';
//     if (!formData.city) newErrors.city = 'City is required';
//     if (!formData.phone) newErrors.phone = 'Phone number is required';
    
//     return newErrors;
//   };

 
//   // Close success modal and navigate to shop
//   const closeSuccessModal = () => {
//     setIsSuccessModalOpen(false);
//     navigate('/shop');
//   };

//   // Calculate total price
//   const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="max-w-7xl mx-auto mt-10 pt-10 mb-10 px-4 lg:px-8">
//       <h1 className="text-2xl text-center mt-10 font-josefin-sans font-semibold mb-4">Checkout</h1>

//       <div className="grid grid-cols-1 p-4 rounded-md bg-neutral mt-5 lg:grid-cols-2 gap-8">
        
//         {/* Left Section: Contact and Delivery Form */}
//         <div>
//           <h2 className="text-xl font-josefin-sans font-semibold mb-4">Contact</h2>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email/PhoneNumber"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border font-josefin-sans border-gray-300 rounded-lg p-2 mb-4"
//           />
//           {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

//           <h2 className="text-xl font-josefin-sans font-semibold mb-4">Delivery</h2>

//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First name"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="border font-josefin-sans border-gray-300 rounded-lg p-2"
//             />
//             {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}

//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last name"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="border font-josefin-sans border-gray-300 rounded-lg p-2"
//             />
//             {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
//           </div>

//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={formData.address}
//             onChange={handleChange}
//             className="w-full border font-josefin-sans border-gray-300 rounded-lg p-2 mb-4"
//           />
//           {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}

//           <input
//             type="text"
//             name="postalCode"
//             placeholder="Postal code"
//             value={formData.postalCode}
//             onChange={handleChange}
//             className="w-full border font-josefin-sans border-gray-300 rounded-lg p-2 mb-4"
//           />
//           {errors.postalCode && <span className="text-red-500 text-sm">{errors.postalCode}</span>}

//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <input
//               type="text"
//               name="city"
//               placeholder="City"
//               value={formData.city}
//               onChange={handleChange}
//               className="border font-josefin-sans border-gray-300 rounded-lg p-2"
//             />
//             {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}

//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="border font-josefin-sans border-gray-300 rounded-lg p-2"
//             />
//             {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
//           </div>

//           <h2 className="text-lg font-semibold mb-2">Payment</h2>
//           <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>

//           {/* Payment Option */}
//           <div className="mb-6 border-2 border-navygreen-300 rounded-md p-4 bg-navygreen-100">
//             <label className="font-medium text-gray-800 cursor-pointer">
//               <input
//                 type="radio"
//                 name="payment"
//                 value="cod"
//                 checked={formData.payment === 'cod'}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               Cash on Delivery (COD)
//             </label>
//           </div>

//           <button 
//             onClick={handleOrder}
//             className="font-josefin-sans w-full text-md lg:text-md mb-10 sm:text-md font-semibold text-white bg-black p-3 sm:p-4 rounded hover:rounded-full border-2 border-black mr-2 sm:mr-4"
//           >
//             Complete order
//           </button>
//         </div>

//         {/* Right Section: Order Summary */}
//         <div>
//           <h2 className="text-xl mb-4 font-josefin-sans font-semibold">Order Summary</h2>

//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
//               <div className="flex items-center">
//                 <img
//                   src={item.images && item.images[0] ? `/assets/${item.images[0]}` : '/assets/default-image.jpg'}
//                   alt={item.name}
//                   className="w-16 h-16 object-cover rounded-lg mr-4"
//                 />
//                 <div>
//                   <h3 className="text-md font-josefin-sans font-semibold">{item.name}</h3>
//                   <span className="text-gray-600">₹{item.price}</span>
//                 </div>
//               </div>
//               <span className="text-gray-600">₹{item.price * item.quantity}</span>
//             </div>
//           ))}
          
//           <div className="border-t border-gray-300 pt-4">
//             <div className="flex justify-between mb-2">
//               <span className="font-josefin-sans text-gray-600">Subtotal</span>
//               <span className="font-semibold">Rs.{totalPrice}</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-600 font-josefin-sans">Shipping</span>
//               <span className="text-gray-600 font-josefin-sans">₹Rs.200</span>
//             </div>
//             <div className="flex justify-between mt-4 pt-4 border-t border-gray-300">
//               <span className="text-lg font-semibold font-josefin-sans">Total</span>
//               <span className="text-lg font-semibold">Rs.{totalPrice + 200}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Success Modal */}
//       <Modal
//         isOpen={isSuccessModalOpen}
//         onRequestClose={closeSuccessModal}
//         className="modal p-8 bg-white rounded-lg shadow-xl"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
//       >
//         <div className="place-items-center mb-4 text-center">
//           <CheckCircleIcon className="text-green-500" width={40} height={40} />
//           <h2 className="text-sm font-semibold mt-2">
//             Your order has been placed successfully!<br />
//             Thanks for shopping 🤗!
//           </h2>
//         </div>
//         <button
//           className="font-josefin-sans text-xs sm:text-sm font-semibold text-white bg-navygreen-300 p-3 sm:p-4 rounded hover:rounded-full border-2 border-navygreen-300 mr-2 sm:mr-4"
//           onClick={closeSuccessModal}
//         >
//           OK
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default Checkout;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();
  // const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Cart items from localStorage
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  // State for form values and validation errors
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    phone: '',
    payment: 'cod',
  });

  const [errors, setErrors] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Clear the error when the user types in the input field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '' // clear error for the specific field
    }));
  };

  // Handle Order
  const handleOrder = async () => {
    const formErrors = validateForm(); // Get validation errors
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Set validation errors
      return;
    }

    // Prepare the order data
    const orderData = {
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      postalCode: formData.postalCode,
      city: formData.city,
      phone: formData.phone,
      payment: formData.payment,
      items: cartItems.map(item => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        images: item.images[0],
      })),
      totalPrice: totalPrice + 200, // including shipping
    };

    try {
      const response = await axios.post("BACKEND_URL/api/orders", orderData);
      const data = await response.data;
      if (data.success) {
        setIsSuccessModalOpen(true); // Show success modal
      } else {
        console.error('Failed to place order:', data.message);
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

//   // Close success modal and navigate to shop
  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    navigate('/shop');
  };
  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email or phone number is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // First name validation (only alphabets)
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newErrors.firstName = 'First name should only contain alphabets';
    }

    // Last name validation (only alphabets)
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Last name should only contain alphabets';
    }

    // Address validation
    if (!formData.address) newErrors.address = 'Address is required';

    // Postal code validation (7 digits)
    if (!formData.postalCode) {
      newErrors.postalCode = 'Postal code is required';
    } else if (!/^\d{7}$/.test(formData.postalCode)) {
      newErrors.postalCode = 'Postal code should be exactly 7 digits';
    }

    // City validation
    if (!formData.city) newErrors.city = 'City is required';

    // Phone validation (11 digits)
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number should be exactly 11 digits';
    }

    return newErrors;
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto mt-10 pt-10 mb-10 px-4 lg:px-8">
      <h1 className="text-2xl text-center mt-10 font-josefin-sans font-semibold mb-4">Checkout</h1>

      <div className="grid grid-cols-1 p-4 rounded-md bg-neutral mt-5 lg:grid-cols-2 gap-8">
        {/* Left Section: Contact and Delivery Form */}
        <div>
          <h2 className="text-xl font-josefin-sans font-semibold mb-4">Contact</h2>
          <input
            type="email"
            name="email"
            placeholder="Email/PhoneNumber"
            value={formData.email}
            onChange={handleChange}
            className="w-full border font-josefin-sans border-gray-300 rounded-lg p-2 mb-4"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

          <h2 className="text-xl font-josefin-sans font-semibold mb-4">Delivery</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="border font-josefin-sans border-gray-300 rounded-lg p-2"
            />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}

            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="border font-josefin-sans border-gray-300 rounded-lg p-2"
            />
            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
          </div>

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border font-josefin-sans border-gray-300 rounded-lg p-2 mb-4"
          />
          {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}

          <input
            type="text"
            name="postalCode"
            placeholder="Postal code"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full border font-josefin-sans border-gray-300 rounded-lg p-2 mb-4"
          />
          {errors.postalCode && <span className="text-red-500 text-sm">{errors.postalCode}</span>}

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border font-josefin-sans border-gray-300 rounded-lg p-2"
            />
            {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border font-josefin-sans border-gray-300 rounded-lg p-2"
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
          </div>

          <h2 className="text-lg font-semibold mb-2">Payment</h2>
          <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>

          {/* Payment Option */}
          <div className="mb-6 border-2 border-navygreen-300 rounded-md p-4 bg-navygreen-100">
            <label className="font-medium text-gray-800 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={formData.payment === 'cod'}
                onChange={handleChange}
                className="mr-2"
              />
              Cash on Delivery (COD)
            </label>
          </div>

          <button
            onClick={handleOrder}
            className="font-josefin-sans w-full text-md lg:text-md mb-10 sm:text-md font-semibold text-white bg-black p-3 sm:p-4 rounded hover:rounded-full border-2 border-black mr-2 sm:mr-4"
          >
            Complete order
          </button>
        </div>

        {/* Right Section: Order Summary */}
        <div>
          <h2 className="text-xl mb-4 font-josefin-sans font-semibold">Order Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
              <div className="flex items-center">
                <img
                  src={item.images && item.images[0] ? `/assets/${item.images[0]}` : '/assets/default-image.jpg'}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-md font-josefin-sans font-semibold">{item.name}</h3>
                  <span className="text-gray-600">Rs.{item.price}</span>
                </div>
              </div>
              <span className="text-gray-600">Rs.{item.price * item.quantity}</span>
            </div>
          ))}

          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between mb-2">
              <span className="font-josefin-sans text-gray-600">Subtotal</span>
              <span className="font-semibold">Rs.{totalPrice}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 font-josefin-sans">Shipping</span>
              <span className="text-gray-600 font-josefin-sans">Rs.200</span>
            </div>
            <div className="flex justify-between mt-4 pt-4 border-t border-gray-300">
              <span className="text-lg font-semibold font-josefin-sans">Total</span>
              <span className="text-lg font-semibold">Rs.{totalPrice + 200}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeSuccessModal}
        className="modal p-8 bg-white rounded-lg shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="place-items-center mb-4 text-center">
          <CheckCircleIcon className="text-green-500" width={40} height={40} />
          <h2 className="text-sm font-semibold mt-2">
            Your order has been placed successfully!<br />
            Thanks for shopping 🤗!
          </h2>
        </div>
        <button
          className="font-josefin-sans text-xs sm:text-sm font-semibold text-white bg-navygreen-300 p-3 sm:p-4 rounded hover:rounded-full border-2 border-navygreen-300 mr-2 sm:mr-4"
          onClick={closeSuccessModal}
        >
          OK
        </button>
      </Modal>
    </div>
  );
};

export default Checkout;
