import React, { useState } from 'react';
import logo from '../logo.png'; // Import your logo image
//import { DocumentTextIcon } from '@heroicons/react/solid';

const Sidebar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="text-left ml-6 bg-nav-green w-1/6 h-screen fixed top-0 left-0 overflow-y-auto mt-20 rounded-md">
      <div className="mt-3 ml-8">
        <img src={logo} alt="Logo" className="w-14 mb-5" />
      </div>
      <hr className="w-full border-t border-black border-opacity-15 my-4" />
      <ul className="font-josefins font-light text-sm text-darkgray-700 ml-3">
        <li className="my-4 pl-4">Dashboard</li>
        <li className="my-4 pl-4">Campaigns</li>
        <li className="my-4 pl-4">Team</li>
        <li className="my-4 pl-4">Products</li>
        <li className="my-4 pl-4">
          <div className="flex items-center cursor-pointer" onClick={toggleSubMenu}>
            <span>Manage Products</span>
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isSubMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              )}
            </svg>
          </div>
          {isSubMenuOpen && (
            <ul className="pl-8">
              <li className="my-2">Create</li>
              <li className="my-2">Edit</li>
              <li className="my-2">Delete</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
