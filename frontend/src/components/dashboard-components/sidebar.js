import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEnvelope, FaHandshake } from 'react-icons/fa';
import axios from 'axios';

const Sidebar = () => {
  const navigate = useNavigate();
  const [socialGroupId, setSocialGroupId] = useState(null);

  useEffect(() => {
    const fetchSocialGroupId = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          const apiUrl = process.env.REACT_APP_API_BASE_URL;
          const response = await axios.get(`${apiUrl}/api/socialgroup/user/${user._id}`);
          const socialGroup = response.data;
          if (socialGroup) {
            setSocialGroupId(socialGroup._id);
          }
        }
      } catch (error) {
        console.error('Error fetching social group ID:', error);
      }
    };

    fetchSocialGroupId();
  }, []);

  const handleDashboardClick = () => {
    if (socialGroupId) {
      navigate(`/social-dashboard/${socialGroupId}`);
    } else {
      console.log('Social group ID not available');
    }
  };

  return (
    <div className="fixed h-full shadow-md flex flex-col w-60 bg-transparent px-4 rounded-r-pl text-white dark:bg-gray-100">
      <div className="flex gap-2 items-center justify-center p-4 mt-2 border-b-[1px] border-gray-100">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="text-gray-100 size-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
        </svg>
        <span className="text-lg text-gray-100 font-semibold">Plantify</span>
      </div>
      <ul className='flex flex-col gap-y-4 p-4 w-full h-full text-gray-100 text-sm'>
        <li 
          className='flex flex-row items-center gap-2 mb-4 hover:bg-navygreen-200 p-4 rounded rounded-pl cursor-pointer'
          onClick={handleDashboardClick}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
          </svg>
          <p className='font-josefin-sans text-md'>Dashboard</p>
        </li>
        <Link to="campaigns">
          <li className='flex flex-row gap-2 items-center mb-4 hover:bg-navygreen-200 p-4 rounded rounded-pl'>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              className='size-6'
            >
              <path d="M132 238.3c23.6-9.3 49.2-14.3 76-14.3l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-28.8 0-56 6.9-80 19.2C129.7 353.2 193.5 416 272 416c0 0 0 0 0 0l.8 0c109-.5 207.2-110.5 207.2-259.4c0-23-2.4-45.2-6.9-66.3C447.5 113.7 413.4 128 376 128l-104 0c-67.9 0-124.9 47-140 110.3zM96.7 256.3C104.7 166.4 180.1 96 272 96l104 0c35.2 0 66.6-16.2 87.2-41.7l.6-.8c2.3-2.9 4.4-5.8 6.4-8.9c1.6-2.5 3.2-5.1 4.6-7.8c3.5-6.5 13.6-6.8 16.2 .1c1.3 3.5 2.5 7 3.7 10.6s2.3 7.1 3.4 10.8l.4 1.5c8.8 30.3 13.5 62.8 13.5 96.8C512 317.1 405.1 447.3 273 448l-1 0c-89.4 0-163.2-66.7-174.5-153C57.5 327.3 32 376.7 32 432l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-73.9 38.6-138.9 96.7-175.7z"/>
            </svg>
            <p className='font-josefin-sans text-md'>Campaigns</p>
          </li>
        </Link>
        <Link to="requestCampaigns">
          <li className='flex flex-row gap-2 hover:bg-navygreen-200 p-4 mb-4 rounded-pl'>
            {/* <FaHandshake className="size-6" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" className="size-6">
  <rect x="3" y="3" width="20" height="20" rx="2" ry="2" stroke="currentColor" stroke-width={1.5} fill="none"/>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v8m0 0l4-4m-4 4l-4-4" />
</svg>



            <p className='font-josefin-sans text-md'>Requests</p>
          </li>
        </Link>
        <Link to="Messages">
          <li className='flex flex-row gap-2 hover:bg-navygreen-200 p-4  rounded-pl'>
            {/* <FaEnvelope className="size-6" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2M21 8l-9 6.75L3 8M21 8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
</svg>

            <p className='font-josefin-sans text-md'>Messages</p>
          </li>
        </Link>
      </ul>
      <div className="p-4">
        <Link to="/" className="text-gray-100 items-center text-sm flex flex-row gap-2 hover:bg-navygreen-200 p-2 rounded rounded-pl" aria-label="Back">
          <FaArrowLeft className="mr-3 size-6 " />
          <p className='font-josefin-sans text-md'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
