import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import useCount from '../hooks/useCount';

const Sidebar = ( ) => {
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
            `relative flex flex-row items-center gap-2 p-4 rounded-pl ${
              isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
            }`
          }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
            </svg>
            <p>Unverified Sellers</p>
            <p className='absolute top-2 left-1 bg-danger text-white px-2 max-h-fit rounded-full'>{onWaitSellersCount}</p>
          </NavLink>
          <NavLink to="social-groups" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded-pl ${
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
            `flex flex-row items-center gap-2 p-4 rounded-pl ${
              isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
            }`
          }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p>Campaign Reports</p>
          </NavLink>
          <NavLink to="users" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
            }`
          }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            <p>Users</p>
          </NavLink>
          <NavLink to="add-plantify-admin" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
            }`
          }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
            <p>Add Admin</p>
          </NavLink>
          <NavLink to="contact-us" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
            }`
          }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
            <p>Contact Us</p>
          </NavLink>
          <NavLink to="/logout-plantify-admin" className={({ isActive }) =>
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