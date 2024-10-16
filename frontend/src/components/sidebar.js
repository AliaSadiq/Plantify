import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed h-full flex flex-col w-62 bg-navygreen-100 px-4 rounded-r-pl text-white dark:bg-forest-100">
      {/* <div className="flex items-center justify-center p-4 mt-2 border-b-[1px] border-gray-100">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="text-gray-100 dark:text-white size-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
        </svg>
        <span className="text-lg text-gray-100 dark:text-white font-semibold">Plantify</span>
      </div> */}
      {/* <div className='text-gray-100 self-center mt-4 flex items-center gap-4 pl-2 py-2 pr-4 max-w-fit bg-navygreen-200 rounded rounded-pl'>
        <img src='/assets/testimonial-1.jpeg' className='w-12 rounded rounded-pl'/>
        <p className='text-sm font-semibold'>admin</p>
      </div> */}
      <div className="flex items-center justify-center p-4 mt-2">
          <p className="text-lg font-bold">Pl</p>
          <span><img src='assets/leaf.png' alt="Leaf Logo" /></span>
          <p className='text-lg font-bold'>ntify</p>
      </div>
      <ul className='flex flex-col gap-y-2 p-4 w-full h-full text-gray-100 dark:text-white dark:text-opacity-60 text-sm font-semibold'>
        <Link to="/">
          <li className='flex flex-row items-center gap-2 hover:bg-navygreen-200 dark:hover:bg-opacity-30 p-4 rounded rounded-pl'>
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
          </li>
        </Link>
        <Link to="verify-socialGroup">
          <li className='flex flex-row items-center gap-2 hover:bg-navygreen-200 dark:hover:bg-opacity-30 p-4 rounded rounded-pl'>
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
          </li>
        </Link>
        <Link to="social-groups">
          <li className='flex flex-row items-center gap-2 hover:bg-navygreen-200 dark:hover:bg-opacity-30 p-4 rounded rounded-pl'>
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
          </li>
        </Link>
        <Link to="verify-socialGroup">
          <li className='flex flex-row items-center gap-2 hover:bg-navygreen-200 dark:hover:bg-opacity-30 p-4 rounded rounded-pl'>
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
          </li>
        </Link>
        <Link to="users">
          <li className='flex flex-row items-center gap-2 hover:bg-navygreen-200 dark:hover:bg-opacity-30 p-4 rounded rounded-pl'>
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
          </li>
        </Link>
        <Link to="add-plantify-admin">
          <li className='flex flex-row items-center gap-2 hover:bg-navygreen-200 dark:hover:bg-opacity-30 p-4 rounded rounded-pl'>
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
          </li>
        </Link>
        <Link to="contact-us">
          <li className='flex flex-row items-center gap-2 hover:bg-navygreen-200 dark:hover:bg-opacity-30 p-4 rounded rounded-pl'>
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
          </li>
        </Link>
        <Link to="logout">
          <li className='flex flex-row items-center gap-2 hover:bg-navygreen-200 dark:hover:bg-opacity-30 p-4 rounded rounded-pl'>
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
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;