// import React, { useState } from 'react';
// import { HomeIcon, BookmarkIcon, UserCircleIcon } from "@heroicons/react/24/solid";
// import { MapPinIcon } from "@heroicons/react/24/outline";
// import { Link, useLocation } from 'react-router-dom';
// import Plant from '../.././images/carousel-1.jpeg';

// const Sidebar = () => {
//   const location = useLocation();
  
//   // Define the items
//   const menuItems = [
//     { name: 'Home', icon: <HomeIcon className="w-6 h-6 mr-2" />, path: '/plantify-network' },
//     { name: 'Explore', icon: <UserCircleIcon className="w-6 h-6 mr-2" />, path: '/explore' },
//     { name: 'Saved Posts', icon: <BookmarkIcon className="w-6 h-6 mr-2" />, path: '/saved' },
//   ];

//   return (
//     <div className="w-72 h-full bg-white bg-opacity-70 backdrop-blur-md border border-gray-50 p-6">
//       <nav className="flex flex-col ">
//         {menuItems.map((item, idx) => {
//           const isActive = location.pathname === item.path;

//           return (
//             <Link
//               key={idx}
//               to={item.path}
//               className={`relative flex items-center transition duration-300 ease-in-out ${
//                 isActive
//                   ? 'bg-palegreen-200 text-black w-40 rounded-full  border border-b-2 border-black mb-1' // Shifted left with slight shrink from right
//                   : 'text-black w-40 rounded-full hover:bg-palegreen-200 hover:text-black' // Default hover style
//               }`}
//               style={{
//                 paddingLeft: isActive ? '2rem' : '1.5rem', // Slightly more padding for active tab
//                 paddingRight: '1.5rem',
//                 height: '2.5rem', // Fixed height for alignment
//               }}
//             >
//               {/* Absolute container for icon and text to keep them in place */}
//               <div className="absolute inset-y-0 left-4 flex items-center">
//                 {item.icon}
//                 <span className="font-semibold ml-2">{item.name}</span>
//               </div>
//             </Link>
//           );
//         })}
//       </nav>


//       <div className="mt-10">
//         <p className="text-gray-500">Account</p>
//         <div className="flex items-center mt-2">
//           <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/150" alt="user avatar" />
//           <div className="ml-2">
//             <p className="text-gray-700">Michael</p>
//             <p className="text-sm text-gray-500">@michaelco</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 bg-white border border-gray-200 rounded-lg p-2 relative">
//         <img 
//           className="w-full h-40 object-cover rounded-md" 
//           src={Plant}
//           alt="Pinned plant" 
//         />
//         <MapPinIcon className="absolute top-2 right-2 w-4 h-4 text-gray-600" />
//         <p className="absolute bottom-2 left-2 text-white font-semibold text-lg">Green Ivy</p>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';
import { HomeIcon, BookmarkIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from 'react-router-dom';
import Plant from '../../images/carousel-1.jpeg';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Home', icon: <HomeIcon className="w-6 h-6 mr-2" />, path: '/plantify-network' },
    { name: 'Explore', icon: <UserCircleIcon className="w-6 h-6 mr-2" />, path: '/plantify-network/explore' },
    { name: 'Saved Posts', icon: <BookmarkIcon className="w-6 h-6 mr-2" />, path: '/plantify-network/saved' },
  ];

  return (
    <div className="w-72 h-full bg-white bg-opacity-70 backdrop-blur-md border border-gray-50 p-6">
      <nav className="flex flex-col">
        {menuItems.map((item, idx) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={idx}
              to={item.path}
              className={`relative flex items-center transition duration-300 ease-in-out ${isActive ? 'bg-palegreen-200 text-black w-40 rounded-full border border-b-2 border-black mb-1' : 'text-black w-40 rounded-full hover:bg-palegreen-200 hover:text-black'}`}
              style={{
                paddingLeft: isActive ? '2rem' : '1.5rem',
                paddingRight: '1.5rem',
                height: '2.5rem',
              }}
            >
              <div className="absolute inset-y-0 left-4 flex items-center">
                {item.icon}
                <span className="font-semibold ml-2">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Additional Sidebar Content */}
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
          src={Plant}
          alt="Pinned plant" 
        />
        <MapPinIcon className="absolute top-2 right-2 w-4 h-4 text-gray-600" />
        <p className="absolute bottom-2 left-2 text-white font-semibold text-lg">Green Ivy</p>
      </div>
    </div>
  );
};

export default Sidebar;
