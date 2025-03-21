
// import React, { useState, useEffect } from 'react';
// import { EyeIcon, TrashIcon } from '@heroicons/react/24/solid';
// import axios from 'axios';
// import { Link } from 'react-router-dom';  // Import Link for navigation

// const ManageOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("BACKEND_URL/api/orders"); // Adjust to your API
//         if (response.data.success) {
//           setOrders(response.data.orders);
//         }
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen lg:ml-[245px] p-4">
//       <div className="bg-neutral p-4 rounded-pl">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-semibold text-gray-800">Order List</h1>
//         </div>

//         {/* Product Table */}
//         <div className="overflow-x-auto bg-white rounded-lg shadow-md">
//           <table className="min-w-full bg-white">
//             <thead className="border-b bg-navygreen-300">
//               <tr>
//                 <th className="px-6 py-3 text-left text-sm font-semibold text-white">S.No</th>
//                 <th className="px-6 py-3 text-left text-sm font-semibold text-white">Name</th>
//                 {/* <th className="px-6 py-3 text-left text-sm font-semibold text-white">Name</th> */}
//                 <th className="px-6 py-3 text-left text-sm font-semibold text-white">Price</th>
//                 <th className="px-6 py-3 text-left text-sm font-semibold text-white">Quantity</th>
//                 <th className="px-6 py-3 text-left text-sm font-semibold text-white">Stock</th>
//                 <th className="px-6 py-3 text-left text-sm font-semibold text-white">Status</th>
//                 <th className="px-6 py-3 text-left text-sm font-semibold text-white">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order, index) => (
//                 <tr  key={order._id} className="border-b hover:text-white hover:bg-navygreen-100">
//                   <td className="px-6 py-4">{index + 1}</td>
//                   <td className="px-6 py-4 flex items-center">
//                     <img 
//               src={order.images && order.images[0] ? `/assets/${order.images[0]}` : "/assets/default-image.jpg"}
//               alt="Product" className="w-12 h-12 rounded-md" 

//                     />
//                     <span>{order.name}</span>
//                   </td>
//                   {/* <td className="px-6 py-4">{product.name}</td> */}
//                   <td className="px-6 py-4">{order.price}</td>
//                   <td className="px-6 py-4">{order.quantity}</td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs ${order.quantity === 0 ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'}`}
//                     >
//                       {order.quantity === 0 ? 'Out of stock' : 'In stock'}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs ${
//                         order.status === 'Success'
//                           ? 'bg-green-100 text-green-500'
//                           : order.status === 'pending'
//                           ? 'bg-yellow-200 text-yellow-900'
//                           : 'bg-red-100 text-red-500'
//                       }`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 flex space-x-4">
//                     {/* Using Link to navigate to the order detail page */}
//                     <Link to={`/order/${order._id}`}>
//                       <EyeIcon className="w-5 h-5 text-blue-500 cursor-pointer" />
//                     </Link>
//                     <TrashIcon className="w-5 h-5 text-red-500 cursor-pointer" />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageOrders;
// import React, { useState, useEffect } from 'react';
// import { EyeIcon, TrashIcon } from '@heroicons/react/24/solid';
// import axios from 'axios';
// import { Link } from 'react-router-dom';  // Import Link for navigation
// import Modal from "react-modal";
// import {
//   ExclamationCircleIcon,
//   CheckCircleIcon,
// } from "@heroicons/react/24/outline";
// const ManageOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [orderToDelete, setOrderToDelete] = useState(null);
//   const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);


//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("BACKEND_URL/api/orders"); // Adjust to your API
//         console.log(response.data); // Log the response to see the data structure

//         if (response.data.success) {
//           setOrders(response.data.orders);
//         }
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (orders.length === 0) {
//     return <div>No orders found</div>;  // Handle case when there are no orders
//   }
// // Open delete confirmation modal
// const confirmDelete = (id) => {
//   setOrderToDelete(id);
//   setIsDeleteModalOpen(true);
// };

// // Handle delete product
// const handleDelete = async () => {
//   try {
//     await axios.delete(
//       `BACKEND_URL/api/orders/${orderToDelete}`
//     );
//     setOrders(
//       orders.filter((order) => order._id !== orderToDelete)
//     );
//     setIsDeleteModalOpen(false);
//     setIsSuccessModalOpen(true);
//   } catch (error) {
//     console.error("Error deleting product:", error);
//     alert("Error deleting product. Please try again.");
//   }
// };
// const closeSuccessModal = () => setIsSuccessModalOpen(false);

//   return (
//     <div className="min-h-screen lg:ml-[245px] p-4">
//       <div className="bg-neutral p-4 rounded-pl">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-semibold text-gray-800">Order List</h1>
//         </div>

//         {/* Product Table */}
//         <div className="overflow-x-auto bg-white rounded-lg shadow-md">
//           <table className="min-w-full bg-white">
//             <thead className="border-b bg-navygreen-300">
//               <tr>
//                 <th className="px-6 py-3 text-left text-sm font-semibold text-white">S.No</th>
//                 <th className="px-6 py-3 text-left text-sm font-semibold text-white">Name</th>
//                 <th className="px-6 py-3 text-left text-sm font-semibold text-white">Price</th>
//                 <th className="px-6 py-3 text-left text-sm font-semibold text-white">Quantity</th>
//                 <th className="px-6 py-3 text-left text-sm font-semibold text-white">Stock</th>
//                 <th className="px-6 py-3 text-left text-sm font-semibold text-white">Status</th>
//                 <th className="px-6 py-3 text-left text-sm font-semibold text-white">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order, index) => (
//                 <tr key={order._id} className="border-b hover:text-white hover:bg-navygreen-100">
//                   <td className="px-6 py-4">{index + 1}</td>
//                   <td className="px-6 py-4 flex items-center">
//                     <img 
//                       src={order.images && order.images[0] ? `/assets/${order.images[0]}` : "/assets/default-image.jpg"} 
//                       alt="Product" 
//                       className="w-12 h-12 rounded-md" 
//                     />
//                     <span>{order.name}</span>
//                   </td>
//                   <td className="px-6 py-4">{order.price}</td>
//                   <td className="px-6 py-4">{order.quantity}</td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs ${order.quantity === 0 ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'}`}
//                     >
//                       {order.quantity === 0 ? 'Out of stock' : 'In stock'}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs ${
//                         order.status === 'Success'
//                           ? 'bg-green-100 text-green-500'
//                           : order.status === 'pending'
//                           ? 'bg-yellow-200 text-yellow-900'
//                           : 'bg-red-100 text-red-500'
//                       }`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 flex space-x-4">
//                     {/* Using Link to navigate to the order detail page */}
//                     <Link to={`/order/${order._id}`}>
//                       <EyeIcon className="w-5 h-5 text-blue-500 cursor-pointer" />
//                     </Link>
//                     <TrashIcon className="w-5 h-5 text-red-500 cursor-pointer" 
//                     onClick={() => confirmDelete(order._id)}/>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <Modal
//         isOpen={isDeleteModalOpen}
//         onRequestClose={() => setIsDeleteModalOpen(false)}
//         className="modal p-8 bg-white rounded-lg shadow-xl"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
//       >
//         <div className="place-items-center mb-4">
//           <ExclamationCircleIcon
//             className="text-red-500"
//             width={40}
//             height={40}
//           />
//           <h2 className="text-sm font-semibold">
//             Are you sure you want to delete this product?
//           </h2>
//         </div>
//         <div className="flex space-x-4 ml-16 items-center mt-4">
//           <button
//             className="font-josefin-sans text-xs sm:text-sm font-semibold text-white bg-navygreen-300 p-2 sm:p-4 rounded hover:rounded-full border-2 border-navygreen-300 mr-2 sm:mr-4"
//             onClick={handleDelete}
//           >
//             Yes
//           </button>
//           <button
//             className="font-josefin-sans text-xs sm:text-sm font-semibold text-black bg-white p-2 sm:p-4 rounded hover:rounded-full border-2 border-navygreen-300 mr-2 sm:mr-4"
//             onClick={() => setIsDeleteModalOpen(false)}
//           >
//             No
//           </button>
//         </div>
//       </Modal>

//       <Modal
//         isOpen={isSuccessModalOpen}
//         onRequestClose={closeSuccessModal}
//         className="modal p-8 bg-white rounded-lg shadow-xl"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
//       >
//         <div className="place-items-center mb-4">
//           <CheckCircleIcon className="text-green-500" width={40} height={40} />
//           <h2 className="text-sm font-semibold">
//             Order deleted successfully!
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

// export default ManageOrders;
import React, { useState, useEffect } from 'react';
import { EyeIcon, TrashIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Import Link for navigation
import Modal from "react-modal";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderToDelete, setOrderToDelete] = useState(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("BACKEND_URL/api/orders"); // Adjust to your API
        console.log(response.data); // Log the response to see the data structure

        if (response.data.success) {
          setOrders(response.data.orders);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (orders.length === 0) {
    return <div>No orders found</div>;  // Handle case when there are no orders
  }

  // Open delete confirmation modal
  const confirmDelete = (id) => {
    setOrderToDelete(id);
    setIsDeleteModalOpen(true);
  };

  // Handle delete product
  const handleDelete = async () => {
    try {
      await axios.delete(
        `BACKEND_URL/api/orders/${orderToDelete}`
      );
      setOrders(
        orders.filter((order) => order._id !== orderToDelete)
      );
      setIsDeleteModalOpen(false);
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting product. Please try again.");
    }
  };

  const closeSuccessModal = () => setIsSuccessModalOpen(false);

  return (
    <div className="min-h-screen lg:ml-[245px] p-4">
      <div className="bg-neutral p-4 rounded-pl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Order List</h1>
        </div>

        {/* Product Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full bg-white">
            <thead className="border-b bg-navygreen-300">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">S.No</th>
                {/* <th className="px-6 py-3 text-left text-sm font-semibold text-white">Customer</th> */}
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Product Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Quantity</th>
       <th className="px-6 py-3 text-left text-sm font-semibold text-white">Stock</th>

                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Status</th>

                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <React.Fragment key={order._id}>
                  {/* Loop through each item in the order */}
                  {order.items.map((item, itemIndex) => (
                    <tr key={item._id} className="border-b hover:text-white hover:bg-navygreen-100">
                      {itemIndex === 0 && (
                        <td rowSpan={order.items.length} className="px-6 py-4">{index + 1}</td>
                      )}
                      {/* {itemIndex === 0 && (
                        <td rowSpan={order.items.length} className="px-6 py-4"></td>
                      )} */}
                      <td className="px-6 py-4 flex items-center">
                        <img
                          src={item.images ? `/assets/${item.images}` : "/assets/default-image.jpg"}
                          alt="Product"
                          className="w-12 h-12 mr-5 rounded-md"
                        />
                        <span>{item.name}</span>
                      </td>
                      <td className="px-6 py-4">{item.price}</td>
                      <td className="px-6 py-4">{item.quantity}</td>
                      <td className="px-6 py-4">
                   <span
                      className={`px-2 py-1 rounded-full text-xs ${order.quantity === 0 ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'}`}
                    >
                      {order.quantity === 0 ? 'Out of stock' : 'In stock'}
                    </span>
                  </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${order.status === 'Success' ? 'bg-green-100 text-green-500' : order.status === 'pending' ? 'bg-yellow-200 text-yellow-900' : 'bg-red-100 text-red-500'}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex space-x-4">
                        <Link to={`/seller/orders-detail/${order.id}`}>
                          <EyeIcon className="w-5 h-5 text-blue-500 cursor-pointer" />
                        </Link>
                        <TrashIcon
                          className="w-5 h-5 text-red-500 cursor-pointer"
                          onClick={() => confirmDelete(order._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
        className="modal p-8 bg-white rounded-lg shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="place-items-center mb-4">
          <ExclamationCircleIcon className="text-red-500" width={40} height={40} />
          <h2 className="text-sm font-semibold">
            Are you sure you want to delete this product?
          </h2>
        </div>
        <div className="flex space-x-4 ml-16 items-center mt-4">
          <button
            className="font-josefin-sans text-xs sm:text-sm font-semibold text-white bg-navygreen-300 p-2 sm:p-4 rounded hover:rounded-full border-2 border-navygreen-300 mr-2 sm:mr-4"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button
            className="font-josefin-sans text-xs sm:text-sm font-semibold text-black bg-white p-2 sm:p-4 rounded hover:rounded-full border-2 border-navygreen-300 mr-2 sm:mr-4"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            No
          </button>
        </div>
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeSuccessModal}
        className="modal p-8 bg-white rounded-lg shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="place-items-center mb-4">
          <CheckCircleIcon className="text-green-500" width={40} height={40} />
          <h2 className="text-sm font-semibold">
            Order deleted successfully!
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

export default ManageOrders;
