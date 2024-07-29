import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Sidebar = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="fixed h-full flex flex-col w-60 bg-navygreen-100 px-4 rounded-r-pl text-white dark:bg-gray-100">
      <div className="flex gap-2 items-center justify-center p-4 mt-2 border-b-[1px] border-gray-100">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="text-gray-100 size-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
        </svg>
        <span className="text-lg text-gray-100 font-semibold">Plantify</span>
      </div>
      <div className='text-gray-100 self-center mt-4 flex items-center gap-4 pl-2 py-2 pr-4 max-w-fit bg-navygreen-200 rounded rounded-pl'>
        <img src='/assets/testimonial-1.jpeg' className='w-12 rounded rounded-pl'/>
        <p className='text-sm font-semibold'>{user.username}</p>
      </div>
      <ul className='flex flex-col gap-y-2 p-4 w-full h-full text-gray-100 text-sm'>
        <Link to="/">
          <li className='flex flex-row items-center gap-2 hover:bg-navygreen-200 p-4 rounded rounded-pl'>
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
        <Link to="campaigns">
          <li className='flex flex-row gap-2 items-center hover:bg-navygreen-200 p-4 rounded rounded-pl'>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"
            className='size-4'
          >
            <path d="M132 238.3c23.6-9.3 49.2-14.3 76-14.3l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-28.8 0-56 6.9-80 19.2C129.7 353.2 193.5 416 272 416c0 0 0 0 0 0l.8 0c109-.5 207.2-110.5 207.2-259.4c0-23-2.4-45.2-6.9-66.3C447.5 113.7 413.4 128 376 128l-104 0c-67.9 0-124.9 47-140 110.3zM96.7 256.3C104.7 166.4 180.1 96 272 96l104 0c35.2 0 66.6-16.2 87.2-41.7l.6-.8c2.3-2.9 4.4-5.8 6.4-8.9c1.6-2.5 3.2-5.1 4.6-7.8c3.5-6.5 13.6-6.8 16.2 .1c1.3 3.5 2.5 7 3.7 10.6s2.3 7.1 3.4 10.8l.4 1.5c8.8 30.3 13.5 62.8 13.5 96.8C512 317.1 405.1 447.3 273 448l-1 0c-89.4 0-163.2-66.7-174.5-153C57.5 327.3 32 376.7 32 432l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-73.9 38.6-138.9 96.7-175.7z"/>
          </svg>
              <p>Campaigns</p>
          </li>
        </Link>
        <Link to="social-profile">
          <li className='flex flex-row gap-2 hover:bg-navygreen-200 p-4 rounded rounded-pl'>
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
            <p>Social Profile</p>
          </li>
        </Link>
      </ul>
      <div className="p-4">
        <Link to="/" className="text-gray-100 items-center text-sm flex flex-row gap-2 hover:bg-navygreen-200 p-2 rounded rounded-pl" aria-label="Back">
          <FaArrowLeft className="mr-3" />
          <p>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

