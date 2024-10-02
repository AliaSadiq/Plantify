// components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/5 h-full bg-white shadow-lg p-4">
      <div className="text-xl font-bold text-purple-700 mb-4">Chaatter</div>
      
      <nav className="flex flex-col space-y-4">
        <a href="#" className="flex items-center text-gray-700">
          <span className="material-icons mr-2">home</span> Home
        </a>
        <a href="#" className="flex items-center text-gray-700">
          <span className="material-icons mr-2">message</span> Messages
        </a>
        <a href="#" className="flex items-center text-gray-700">
          <span className="material-icons mr-2">person</span> Profile
        </a>
        <a href="#" className="flex items-center text-gray-700">
          <span className="material-icons mr-2">bookmark</span> Saved Posts
        </a>
        <a href="#" className="flex items-center text-gray-700">
          <span className="material-icons mr-2">settings</span> Settings
        </a>
      </nav>

      <div className="mt-10">
        <p className="text-gray-500">Account</p>
        <div className="flex items-center mt-2">
          <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/150" alt="user avatar" />
          <div className="ml-2">
            <p className="text-gray-700">Michael</p>
            <p className="text-sm text-gray-500">@michaelco</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <a href="#" className="block bg-purple-600 text-white text-center py-2 rounded-lg">
          Get Cofeed on App Store
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
