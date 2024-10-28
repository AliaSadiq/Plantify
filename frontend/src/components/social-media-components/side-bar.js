import React from 'react';
import { HomeIcon, BookmarkIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Plant from '../.././images/carousel-1.jpeg';
import { MapPinIcon } from "@heroicons/react/24/outline"; // Ensure to import the pin icon

const Sidebar = () => {
  return (
    <div className="w-72 h-full bg-white bg-opacity-70 backdrop-blur-md border  border-gray-50 p-6">
      <nav className="flex flex-col space-y-4">
        {[
          { name: 'Home', icon: <HomeIcon className="w-6 h-6 mr-2" /> },
          { name: 'Profile', icon: <UserCircleIcon className="w-6 h-6 mr-2" /> },
          { name: 'Saved Posts', icon: <BookmarkIcon className="w-6 h-6 mr-2" /> },
        ].map((item, idx) => (
          <a 
            key={idx}
            href="#" 
            className="flex items-center text-gray-700 hover:text-green-600 transition duration-200 ease-in-out pl-2"
          >
            {item.icon} {item.name}
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

      <div className="mt-6 bg-white border border-gray-200 rounded-lg p-2 relative">
        <img 
          className="w-full h-40 object-cover rounded-md" 
          src={Plant }
          alt="Pinned plant" 
        />
        <MapPinIcon  className="absolute top-2 right-2 w-4 h-4 text-gray-600" />
        <p className="absolute bottom-2 left-2 text-white font-semibold text-lg">Green Ivy</p>
      </div>
    </div>
  );
};

export default Sidebar;
