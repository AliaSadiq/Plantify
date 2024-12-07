
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiPackage, FiArrowDown ,FiShoppingCart,FiShoppingBag, FiBarChart2, FiLogOut } from 'react-icons/fi'; // Importing icons
import { ArrowDownCircleIcon, ArrowDownIcon, ArrowDownRightIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleProductsDropdown = () => setIsProductsOpen(!isProductsOpen);

  return (
    <div className="relative">
      {/* Toggle button for mobile */}
      <button 
        className="lg:hidden p-3 text-white bg-navygreen-100 rounded-full fixed top-4 left-4 z-20"
        onClick={toggleSidebar}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed h-full flex flex-col w-64 bg-navygreen-100 px-4 rounded-r-pl text-white dark:bg-forest-100 transform lg:translate-x-0 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex items-center justify-center p-4 mt-2">
          <p className="text-lg font-bold">Pl</p>
          <span><img src='assets/leaf.png' alt="Leaf Logo" /></span>
          <p className='text-lg font-bold'>ntify</p>
        </div>
        <ul className='flex flex-col gap-y-2 p-4 w-full h-full text-gray-100 dark:text-white dark:text-opacity-60 text-sm font-semibold'>
          <NavLink to="/seller" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${isActive ? 'bg-navygreen-200 bg-opacity-30 text-green-400' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
            <p>Dashboard</p>
          </NavLink>

          {/* Products Dropdown */}
          <li className="relative">
            <button
              className="flex items-center gap-2 p-4 rounded rounded-pl w-full text-left"
              onClick={toggleProductsDropdown}
            >
              <FiPackage className="size-4" /> {/* Product icon */}
              <p>Products </p> <ArrowDownIcon className='ml-14 size-4'/>
            </button>

            <ul
              className={`pl-6 transition-all duration-300 ease-in-out ${isProductsOpen ? "max-h-[300px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}
            >
              <NavLink to="create-product" className={({ isActive }) =>
                `block p-2 rounded rounded-pl ${isActive ? 'bg-navygreen-200 bg-opacity-30 text-green-400' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-50'}`}
              >
              
                <p>Add Product</p>
              </NavLink>
              <NavLink to="product-list" className={({ isActive }) =>
                `block p-2 rounded rounded-pl ${isActive ? 'bg-navygreen-200 bg-opacity-30 text-green-400' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-50'}`}
              >
                <p>Product List</p>
              </NavLink>
              
            </ul>
          </li>

          {/* Other Sidebar Links */}
          <NavLink to="manage-orders" className={({ isActive }) =>
            `relative flex flex-row items-center gap-2 p-4 rounded rounded-pl ${isActive ? 'bg-navygreen-200 bg-opacity-30 text-green-400' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'}`}
          >
            <FiShoppingBag className="size-4" /> {/* Icon for Orders */}
            <p>Orders</p>
          </NavLink>
          {/* <NavLink to="my-store" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${isActive ? 'bg-navygreen-200 bg-opacity-30 text-green-400' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'}`}
          >
            <FiShoppingCart className="size-4" /> {/* Icon for Reports */}
            {/* <p>My store</p> 
          </NavLink> */}
          <NavLink to="/" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${isActive ? 'bg-navygreen-200 bg-opacity-30 text-green-400' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'}`}
          >
            <FiLogOut className="size-4" /> {/* Icon for Logout */}
            <p>Logout</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
