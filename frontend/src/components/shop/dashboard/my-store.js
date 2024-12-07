// src/pages/Reports.js
import React from 'react';

const Reports = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-medium text-gray-600">Monthly Sales</h3>
        <p className="text-2xl font-semibold text-gray-800">$45,200</p>
        <p className="text-sm text-gray-500">Compared to last month</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-medium text-gray-600">Top Selling Product</h3>
        <p className="text-xl font-semibold text-gray-800">Fiddle Leaf Fig</p>
        <p className="text-sm text-gray-500">Sales: 320 units</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-medium text-gray-600">Total Inventory Value</h3>
        <p className="text-2xl font-semibold text-gray-800">$12,300</p>
        <p className="text-sm text-gray-500">Across all products</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-medium text-gray-600">Pending Orders</h3>
        <p className="text-2xl font-semibold text-gray-800">15</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-medium text-gray-600">Customer Retention Rate</h3>
        <p className="text-2xl font-semibold text-gray-800">78%</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-medium text-gray-600">Average Order Value</h3>
        <p className="text-2xl font-semibold text-gray-800">$75</p>
      </div>
    </div>
  );
};

export default Reports;
