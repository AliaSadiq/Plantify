// src/pages/Orders.js
import React from 'react';

const Orders = () => {
  const orders = [
    { id: 101, customer: "Alice Brown", total: "$120", status: "Shipped", date: "2024-11-01" },
    { id: 102, customer: "John Smith", total: "$85", status: "Processing", date: "2024-11-02" },
    { id: 103, customer: "Claire Green", total: "$140", status: "Delivered", date: "2024-11-03" },
    // ...more orders
  ];

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Orders</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="text-left text-gray-700 uppercase border-b">
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{order.id}</td>
              <td className="px-4 py-2 border-b">{order.customer}</td>
              <td className="px-4 py-2 border-b">{order.total}</td>
              <td className="px-4 py-2 border-b">
                <span className={`px-2 py-1 text-sm rounded-full ${order.status === "Shipped" ? "bg-green-200 text-green-800" : order.status === "Delivered" ? "bg-blue-200 text-blue-800" : "bg-yellow-200 text-yellow-800"}`}>
                  {order.status}
                </span>
              </td>
              <td className="px-4 py-2 border-b">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
