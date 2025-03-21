// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// const OrderDetail = () => {
//     const { orderId } = useParams();
//     const [order, setOrder] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const fetchOrderDetails = async () => {
//         try {
//           const response = await axios.get(`BACKEND_URL/api/orders/${orderId}`);
//           if (response.data.success) {
//             setOrder(response.data.order);
//           } else {
//             setError('Order not found.');
//           }
//         } catch (error) {
//           setError('Failed to load order details.');
//           console.error('Error fetching order details:', error);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchOrderDetails();
//     }, [orderId]);
  
//     if (loading) {
//       return <div>Loading order details...</div>;
//     }
  
//     if (error) {
//       return <div>{error}</div>;
//     }
  
//     if (!order) {
//       return <div>Order not found</div>;
//     }
  
//     return (
//       <div className="min-h-screen lg:ml-[245px] p-4">
//         <div className="bg-neutral p-4 rounded-pl">
//           <h2 className="text-2xl font-semibold text-gray-800">Order Details</h2>
//           <div className="p-6 rounded-lg shadow-md mt-4">
//             <p><strong>Order ID:</strong> {order._id}</p>
//             <p><strong>Email:</strong> {order.email}</p>
//             <p><strong>First Name:</strong> {order.firstName}</p>
//             <p><strong>Last Name:</strong> {order.lastName}</p>
//             <p><strong>Address:</strong> {order.address}</p>
//             <p><strong>Postal Code:</strong> {order.postalCode}</p>
//             <p><strong>City:</strong> {order.city}</p>
//             <p><strong>Phone:</strong> {order.phone}</p>
//             <p><strong>Payment Method:</strong> {order.payment}</p>
  
//             <h3 className="mt-6 text-lg font-semibold">Items:</h3>
//             <ul>
//               {order.items.map((item, idx) => (
//                 <li key={idx}>
//                   <strong>{item.name}</strong> - {item.quantity} x ${item.price} = ${item.totalPrice}
//                 </li>
//               ))}
//             </ul>
  
//             <p className="mt-4"><strong>Status:</strong> {order.status}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
// const OrderDetail = () => {
//   const { orderId } = useParams(); 
//   console.log('Order ID from URL:', orderId);  // Log orderId to check its value
// // Get the orderId from the URL
//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrderDetails = async () => {
//       try {
//         console.log('Fetching order details for order ID:', orderId);
//         const response = await axios.get(`BACKEND_URL/api/orders/${orderId}`);
//         console.log('API response:', response);
  
//         if (response.data.success) {
//           setOrder(response.data.order);
//         } else {
//           console.error('Order not found:', response.data.message || 'No message from API');
//           setOrder(null);
//         }
//       } catch (error) {
//         console.error('Error fetching order details:', error);
//         setOrder(null);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchOrderDetails();
//   }, [orderId]);
  
//   if (loading) {
//     return <div>Loading order details...</div>;
//   }

//   if (!order) {
//     return <div>Order not found</div>;
//   }

//   return (
//     <div className="min-h-screen lg:ml-[245px] p-4">
//       <div className="bg-neutral p-4 rounded-pl">
//       <h2 className="text-2xl font-semibold text-gray-800">Order Details</h2>
//       <div className=" p-6 rounded-lg shadow-md mt-4">
//         <p><strong>Order ID:</strong> {order._id}</p>
//         <p><strong>Email:</strong> {order.email}</p>
//         <p><strong>First Name:</strong> {order.firstName}</p>
//         <p><strong>Last Name:</strong> {order.lastName}</p>
//         <p><strong>Address:</strong> {order.address}</p>
//         <p><strong>Postal Code:</strong> {order.postalCode}</p>
//         <p><strong>City:</strong> {order.city}</p>
//         <p><strong>Phone:</strong> {order.phone}</p>
//         <p><strong>Payment Method:</strong> {order.payment}</p>

//         <h3 className="mt-6 text-lg font-semibold">Items:</h3>
//         <ul>
//           {order.items.map((item, idx) => (
//             <li key={idx}>
//               <strong>{item.name}</strong> - {item.quantity} x ${item.price} = ${item.totalPrice}
//             </li>
//           ))}
//         </ul>

//         <p className="mt-4"><strong>Status:</strong> {order.status}</p>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default OrderDetail;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OrderDetail = () => {
  const { orderId } = useParams(); // Get the orderId from the URL
  console.log('Order ID from URL:', orderId); // Log to check if it's correct

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`BACKEND_URL/api/orders/${orderId}`);
        if (response.data.success) {
          setOrder(response.data.order);
        } else {
          setError('Order not found.');
        }
      } catch (error) {
        setError('Failed to load order details.');
        console.error('Error fetching order details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  if (loading) {
    return <div>Loading order details...</div>;
  }

  if (error) {
    return <div> {error}</div>;
  }

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div className="min-h-screen lg:ml-[245px] p-4">
      <div className="bg-neutral p-4 rounded-pl">
        <h2 className="text-2xl font-semibold text-gray-800">Order Details</h2>
        <div className="p-6 rounded-lg shadow-md mt-4">
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Email:</strong> {order.email}</p>
          <p><strong>First Name:</strong> {order.firstName}</p>
          <p><strong>Last Name:</strong> {order.lastName}</p>
          <p><strong>Address:</strong> {order.address}</p>
          <p><strong>Postal Code:</strong> {order.postalCode}</p>
          <p><strong>City:</strong> {order.city}</p>
          <p><strong>Phone:</strong> {order.phone}</p>
          <p><strong>Payment Method:</strong> {order.payment}</p>

          <h3 className="mt-6 text-lg font-semibold">Items:</h3>
          <ul>
            {order.items.map((item, idx) => (
              <li key={idx}>
                <strong>{item.name}</strong> - {item.quantity} x ${item.price} = ${item.totalPrice}
              </li>
            ))}
          </ul>

          <p className="mt-4"><strong>Status:</strong> {order.status}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
