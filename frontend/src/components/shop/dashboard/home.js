// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-medium text-gray-600">Total Sales</h3>
        <p className="text-2xl font-semibold text-gray-800">$12,345</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-medium text-gray-600">Total Orders</h3>
        <p className="text-2xl font-semibold text-gray-800">450</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-medium text-gray-600">Total Views</h3>
        <p className="text-2xl font-semibold text-gray-800">23,000</p>
      </div>
    </div>
  );
};

export default Home;
