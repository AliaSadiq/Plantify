import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import useCount from '../hooks/useCount';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const url = {
    socialGroupsOnWait: "http://localhost:5000/api/socialgroup/count-on-wait",
    sellersOnWait: "http://localhost:5000/api/sellers/count-on-wait",
  };
  const {count: onWaitSocialGroupsCount, loading: sloading , error: serror} = useCount(url.socialGroupsOnWait);
  const {count: onWaitSellersCount, loading: slloading, error: slerror} = useCount(url.sellersOnWait);

  const toggleSidebar = () => setIsOpen(!isOpen);

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
        className={`fixed h-full flex flex-col w-62 bg-navygreen-100 px-4 rounded-r-pl text-white dark:bg-forest-100 transform lg:translate-x-0 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-center p-4 mt-2">
            <p className="text-lg font-bold">Pl</p>
            <span><img src='assets/leaf.png' alt="Leaf Logo" /></span>
            <p className='text-lg font-bold'>ntify</p>
        </div>
        <ul className='flex flex-col gap-y-2 p-4 w-full h-full text-gray-100 dark:text-white dark:text-opacity-60 text-sm font-semibold'>
          <NavLink to="/" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
            }`
          }>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
            <p>Dashboard</p>
          </NavLink>
          <NavLink to="verify-socialGroup" className={({ isActive }) =>
            `relative flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
            }`
          }>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <p>Unverified Groups</p>
            <p className='absolute top-2 left-1 bg-danger text-white px-2 rounded-full'>{onWaitSocialGroupsCount}</p>
          </NavLink>
          <NavLink to="verify-seller" className={({ isActive }) =>
            `relative flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
            }`
          }>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <p>Unverified Sellers</p>
            <p className='absolute top-2 left-1 bg-danger text-white px-2 max-h-fit rounded-full'>{onWaitSellersCount}</p>
          </NavLink>
          <NavLink to="social-groups" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
            }`
          }>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <p>Social Groups</p>
          </NavLink>
          <NavLink to="campaign-reports" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
            }`
          }>
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <p>Campaign Reports</p>
          </NavLink>
          <NavLink to="users" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
            }`
          }>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <p>Users</p>
          </NavLink>
          <NavLink to="add-plantify-admin" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
            }`
          }>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <p>Add Admin</p>
          </NavLink>
          <NavLink to="contact-us" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
            }`
          }>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <p>Contact Us</p>
          </NavLink>
          <NavLink to="/" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
            }`
          }>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="size-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
              </svg>
              <p>Logout</p>
          </NavLink>
        </ul>
      </div>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden" 
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;