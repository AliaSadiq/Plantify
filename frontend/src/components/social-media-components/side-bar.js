import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-full h-full bg-white bg-opacity-70 backdrop-blur-md shadow-lg p-4">
      <div className="text-xl font-bold text-green-700 mb-4">Chaatter</div>
      
      <nav className="flex flex-col space-y-4">
        {['Home', 'Messages', 'Profile', 'Saved Posts', 'Settings'].map((item, idx) => (
          <a 
            key={idx}
            href="#" 
            className="flex items-center text-gray-700 hover:text-green-600 transition duration-200 ease-in-out"
          >
            <span className="material-icons mr-2">{item.toLowerCase()}</span> {item}
          </a>
        ))}
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
        <a href="#" className="block bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition duration-200">
          Get Cofeed on App Store
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
