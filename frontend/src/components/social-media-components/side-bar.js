import React from 'react';
import { HomeIcon, BookmarkIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Plant from '../../images/carousel-1.jpeg';
import useFetchUserLocalStorage from '../../hooks/useFetchUserLocalStorage';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = useFetchUserLocalStorage();
  const { username, avatar, email } = userData || {};

  const handleProfileClick = () => {
    navigate('/plantify-network/profile-socialmedia', {
      state: { myProfile: true},
    });
  };
  

  const menuItems = [
    { name: 'Home', icon: <HomeIcon className="w-6 h-6 mr-2" />, path: '/plantify-network' },
    { name: 'Explore', icon: <UserCircleIcon className="w-6 h-6 mr-2" />, path: '/plantify-network/explore' },
  
  ];

  return (
    <>
      {/* Sidebar for Larger Screens */}
      <div className="w-72 max-h-fit p-6 hidden lg:block z-10 border-2 border-navygreen-100 rounded-r-pl">
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
        {/* Account Section */}
        <div className="mt-10" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
          <p className="text-gray-500">Account</p>
          <div className="flex items-center mt-2">
            <img 
              className="w-10 h-10 rounded-full" 
              src={`/assets/avatars/${avatar}`}
              alt="user avatar" 
            />
            <div className="ml-2">
              <p className="text-gray-700">{username || "Guest"}</p>
              <p className="text-sm text-gray-500">@{email || "guestuser"}</p>
            </div>
          </div>
        </div>
        {/* Pinned Plant Section */}
        {/* <div className="mt-6 bg-white border border-gray-200 rounded-lg p-2 relative">
          <img 
            className="w-full h-40 object-cover rounded-md" 
            src={Plant}
            alt="Pinned plant" 
          />
          <MapPinIcon className="absolute top-2 right-2 w-4 h-4 text-gray-600" />
          <p className="absolute bottom-2 left-2 text-white font-semibold text-lg">Green Ivy</p>
        </div> */}
      </div>

      {/* Bottom Navigation for Smaller Screens */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-inner border-t border-gray-200 flex justify-around py-2 lg:hidden z-10">
        {menuItems.map((item, idx) => (
          <Link key={idx} to={item.path} className="flex flex-col items-center text-gray-700">
            {item.icon}
            <span className="text-xs">{item.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
