// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';
// import axios from 'axios';

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [socialGroupId, setSocialGroupId] = useState(null);

//   useEffect(() => {
//     const fetchSocialGroupId = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem('user'));
//         if (user) {
//           const response = await axios.get(`http://localhost:5000/api/socialgroup/user/${user._id}`);
//           const socialGroup = response.data;
//           if (socialGroup) {
//             setSocialGroupId(socialGroup._id);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching social group ID:', error);
//       }
//     };

//     fetchSocialGroupId();
//   }, []);

//   const handleDashboardClick = () => {
//     if (socialGroupId) {
//       navigate(`/social-dashboard/${socialGroupId}`);
//     } else {
//       console.log('Social group ID not available');
//     }
//   };

//   return (
//     <div className="fixed h-full shadow-md flex flex-col w-60 bg-transparent px-4 rounded-r-pl text-white dark:bg-gray-100">
//       <div className="flex gap-2 items-center justify-center p-4 mt-2 border-b-[1px] border-gray-100">
//         <svg 
//           xmlns="http://www.w3.org/2000/svg" 
//           fill="none" 
//           viewBox="0 0 24 24" 
//           strokeWidth={1.5} 
//           stroke="currentColor" 
//           className="text-gray-100 size-8"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
//         </svg>
//         <span className="text-lg text-gray-100 font-semibold">Plantify</span>
//       </div>
//       <ul className='flex flex-col gap-y-2 p-4 w-full h-full text-gray-100 text-sm'>
//         <li 
//           className='flex flex-row items-center gap-2 hover:bg-navygreen-200 p-4 rounded rounded-pl cursor-pointer'
//           onClick={handleDashboardClick}
//         >
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             strokeWidth={1.5} 
//             stroke="currentColor" 
//             className="size-4"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
//             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
//           </svg>
//           <p>Dashboard</p>
//         </li>
//         <Link to="campaigns">
//           <li className='flex flex-row gap-2 items-center hover:bg-navygreen-200 p-4 rounded rounded-pl'>
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               viewBox="0 0 512 512"
//               className='size-4'
//             >
//               <path d="M132 238.3c23.6-9.3 49.2-14.3 76-14.3l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-28.8 0-56 6.9-80 19.2C129.7 353.2 193.5 416 272 416c0 0 0 0 0 0l.8 0c109-.5 207.2-110.5 207.2-259.4c0-23-2.4-45.2-6.9-66.3C447.5 113.7 413.4 128 376 128l-104 0c-67.9 0-124.9 47-140 110.3zM96.7 256.3C104.7 166.4 180.1 96 272 96l104 0c35.2 0 66.6-16.2 87.2-41.7l.6-.8c2.3-2.9 4.4-5.8 6.4-8.9c1.6-2.5 3.2-5.1 4.6-7.8c3.5-6.5 13.6-6.8 16.2 .1c1.3 3.5 2.5 7 3.7 10.6s2.3 7.1 3.4 10.8l.4 1.5c8.8 30.3 13.5 62.8 13.5 96.8C512 317.1 405.1 447.3 273 448l-1 0c-89.4 0-163.2-66.7-174.5-153C57.5 327.3 32 376.7 32 432l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-73.9 38.6-138.9 96.7-175.7z"/>
//             </svg>
//             <p>Campaigns</p>
//           </li>
//         </Link>
//         <Link to="Requests">
//           <li className='flex flex-row gap-2 hover:bg-navygreen-200 p-4  rounded-pl'>
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               strokeWidth={1.5} 
//               stroke="currentColor" 
//               className="size-4"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//             </svg>
//             <p>Requests</p>
//           </li>
//         </Link>
//         <Link to="Messages">
//           <li className='flex flex-row gap-2 hover:bg-navygreen-200 p-4  rounded-pl'>
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               strokeWidth={1.5} 
//               stroke="currentColor" 
//               className="size-4"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//             </svg>
//             <p>Messages</p>
//           </li>
//         </Link>
//       </ul>
//       <div className="p-4">
//         <Link to="/" className="text-gray-100 items-center text-sm flex flex-row gap-2 hover:bg-navygreen-200 p-2 rounded rounded-pl" aria-label="Back">
//           <FaArrowLeft className="mr-3" />
//           <p>Back</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate, NavLink } from 'react-router-dom';
// import { FaArrowLeft, FaEnvelope, FaHandshake, FaUserEdit } from 'react-icons/fa';
// import axios from 'axios';

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [socialGroupId, setSocialGroupId] = useState(null);

//   useEffect(() => {
//     const fetchSocialGroupId = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem('user'));
//         if (user) {
//           const response = await axios.get(`http://localhost:5000/api/socialgroup/user/${user._id}`);
//           const socialGroup = response.data;
//           if (socialGroup) {
//             setSocialGroupId(socialGroup._id);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching social group ID:', error);
//       }
//     };

//     fetchSocialGroupId();
//   }, []);

//   const handleDashboardClick = () => {
//     if (socialGroupId) {
//       navigate(`/social-dashboard/${socialGroupId}`);
//     } else {
//       console.log('Social group ID not available');
//     }
//   };

//   return (
//     <div className="fixed h-full shadow-md flex flex-col w-60 bg-transparent px-4 rounded-r-pl text-white dark:bg-gray-100">
//       <div className="flex gap-2 items-center justify-center p-4 mt-2 border-b-[1px] border-gray-100">
//         <svg 
//           xmlns="http://www.w3.org/2000/svg" 
//           fill="none" 
//           viewBox="0 0 24 24" 
//           strokeWidth={1.5} 
//           stroke="currentColor" 
//           className="text-gray-100 size-8"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
//         </svg>
//         <span className="text-lg text-gray-100 font-semibold">Plantify</span>
//       </div>
//       <ul className='flex flex-col gap-y-2 p-4 w-full h-full text-gray-100 text-sm'>
//         <li 
//           className='flex flex-row items-center gap-2 hover:bg-navygreen-200 p-4 rounded rounded-pl cursor-pointer'
//           onClick={handleDashboardClick}
//         >
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             strokeWidth={1.5} 
//             stroke="currentColor" 
//             className="size-6"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
//             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
//           </svg>
//           <p className='font-josefin-sans text-sm'>Dashboard</p>
//         </li>
//         <Link to="campaigns">
//           <li className='flex flex-row gap-2 items-center hover:bg-navygreen-200 p-4 rounded rounded-pl'>
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               viewBox="0 0 512 512"
//               className='size-6'
//             >
//               <path d="M132 238.3c23.6-9.3 49.2-14.3 76-14.3l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-28.8 0-56 6.9-80 19.2C129.7 353.2 193.5 416 272 416c0 0 0 0 0 0l.8 0c109-.5 207.2-110.5 207.2-259.4c0-23-2.4-45.2-6.9-66.3C447.5 113.7 413.4 128 376 128l-104 0c-67.9 0-124.9 47-140 110.3zM96.7 256.3C104.7 166.4 180.1 96 272 96l104 0c35.2 0 66.6-16.2 87.2-41.7l.6-.8c2.3-2.9 4.4-5.8 6.4-8.9c1.6-2.5 3.2-5.1 4.6-7.8c3.5-6.5 13.6-6.8 16.2 .1c1.3 3.5 2.5 7 3.7 10.6s2.3 7 3.4 10.8l.4 1.5c8.8 30.3 13.5 62.8 13.5 96.8C512 317.1 405.1 447.3 273 448l-1 0c-89.4 0-163.2-66.7-174.5-153C57.5 327.3 32 376.7 32 432l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-73.9 38.6-138.9 96.7-175.7z"/>
//             </svg>
//             <p className='font-josefin-sans text-sm'>Campaigns</p>
//           </li>
//         </Link>
//         <Link to="requestCampaigns">
//           <li className='flex flex-row gap-2 hover:bg-navygreen-200 p-4 rounded-pl'>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" className="size-6">
//               <rect x="3" y="3" width="20" height="20" rx="2" ry="2" stroke="currentColor" stroke-width={1.5} fill="none"/>
//               <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v8m0 0l4-4m-4 4l-4-4" />
//             </svg>
//             <p className='font-josefin-sans text-sm'>Requests</p>
//           </li>
//         </Link>
//         {/* <Link to="messages">
//           <li className='flex flex-row gap-2 hover:bg-navygreen-200 p-4  rounded-pl'>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2M21 8l-9 6.75L3 8M21 8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
//             </svg>
//             <p className='font-josefin-sans text-sm'>Messages</p>
//           </li>
//         </Link> */}
//           <NavLink to="profile" className={({ isActive }) =>
//             `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
//               isActive ? 'bg-navygreen-200 bg-opacity-30' : 'hover:bg-navygreen-200 dark:hover:bg-opacity-30'
//             }`
//           }>
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               strokeWidth={1.5} 
//               stroke="currentColor" 
//               className="size-4"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//             </svg>
//             <p>Profile</p>
//           </NavLink>
//       </ul>
//       <div className="p-4">
//         <Link to="/" className="text-gray-100 items-center text-sm flex flex-row gap-2 hover:bg-navygreen-200 p-2 rounded rounded-pl" aria-label="Back">
//           <FaArrowLeft className="mr-3 size-6 " />
//           <p className='font-josefin-sans text-md'>Back</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, {useState, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//import useCount from '../hooks/useCount';
import axios from 'axios';

const Sidebar = ( ) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [socialGroupId, setSocialGroupId] = useState(null);

  useEffect(() => {
    const fetchSocialGroupId = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          const response = await axios.get(`http://localhost:5000/api/socialgroup/user/${user._id}`);
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
        className={`fixed h-full flex flex-col w-64 bg-navygreen-100 px-4 rounded-r-pl text-white dark:bg-forest-100 transform lg:translate-x-0 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-center p-4 mt-2">
            <p className="text-lg font-bold">Pl</p>
            <span><img src='/assets/leaf.png' alt="Leaf Logo" /></span>
            <p className='text-lg font-bold'>ntify</p>
        </div>
        <ul className='flex flex-col gap-y-2 p-4 w-full h-full text-gray-100 dark:text-white dark:text-opacity-60 text-sm font-semibold'>
          <li 
            className="flex flex-row items-center gap-2 p-4 hover:bg-navygreen-200 dark:hover:bg-opacity-30 rounded-pl cursor-pointer" 
            onClick={handleDashboardClick}
          >
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
          <NavLink to="campaigns" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 dark:bg-opacity-30' : 'hover:bg-navygreen-200 hover:bg-opacity-30'
            }`
          }>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#222222" stroke={0.5}>
              <path d="M480-120 352-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T79-621q0-94 63-156.5T299-840q52 0 99 22t82 62q35-40 82-62t99-22q94 0 157 62.5T881-621q0 46-15.5 88t-49 87q-33.5 45-85 96T608-234L480-120ZM171-560h618q6-16 9-31t3-30q0-60-41.5-99.5T661-760q-47 0-86.5 27.5T504-660h-48q-31-45-70.5-72.5T299-760q-57 0-98.5 39.5T159-621q0 15 3 30t9 31Zm102 140h414q16-17 29-31.5t24-28.5H220q11 14 24 28.5t29 31.5Zm207 192q36-32 67.5-59.5T605-340H355q26 25 57.5 52.5T480-228Zm0-332Z"/>
            </svg>
            <p>Campaigns</p>
          </NavLink>
          <NavLink to="requestCampaigns" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded-pl ${
              isActive ? 'bg-navygreen-200 dark:bg-opacity-30' : 'hover:bg-navygreen-200 hover:bg-opacity-30'
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
            <p>Requests</p>
          </NavLink>
          <NavLink to="profile" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 dark:bg-opacity-30' : 'hover:bg-navygreen-200 hover:bg-opacity-30'
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
            <p>Profile</p>
          </NavLink>
          <NavLink to="/" className={({ isActive }) =>
            `flex flex-row items-center gap-2 p-4 rounded rounded-pl ${
              isActive ? 'bg-navygreen-200 dark:bg-opacity-30' : 'hover:bg-navygreen-200 hover:bg-opacity-30'
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
            <p>Back</p>
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
