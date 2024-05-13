
import React, { useState } from "react";
import { FaCog, FaChartLine, FaUser, FaPlusCircle, FaBullhorn } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className="fixed bg-greent w-10 h-72 flex flex-col bg-gg rounded-r-full justify-between items-center top-40 bottom-30 overflow-auto">
      <ul className="mt-8">
        <li className="mb-4">
          <Link className="nav-link" to="/onboard" onClick={() => handleIconClick('chart')}>
            <FaChartLine className={`h-8 w-8 ${activeIcon === 'chart' ? 'text-ngreen' : 'text-gray-400'} hover:text-ngreen`} />
          </Link>
        </li>
        <li className="mb-4 ml-1">
          <Link className="nav-link" to="/inbox" onClick={() => handleIconClick('bullhorn')}>
            <FaBullhorn className={`h-7 w-6 ${activeIcon === 'bullhorn' ? 'text-ngreen' : 'text-gray-400'} hover:text-ngreen`} />
          </Link>
        </li>
        <li className="mb-4 mr-1">
          <Link className="nav-link" to="/createCampaign" onClick={() => handleIconClick('plus')}>
            <FaPlusCircle className={`h-8 w-8 ${activeIcon === 'plus' ? 'text-ngreen' : 'text-gray-400'} hover:text-ngreen`} />
          </Link>
        </li>
        <li className="mb-4">
          <Link className="nav-link" to="/profile" onClick={() => handleIconClick('user')}>
            <FaUser className={`h-7 w-8 ${activeIcon === 'user' ? 'text-ngreen' : 'text-gray-400'} hover:text-ngreen`} />
          </Link>
        </li>
        <li className="mb-4">
          <Link className="nav-link" to="/settingPage" onClick={() => handleIconClick('cog')}>
            <FaCog className={`h-8 w-8 ${activeIcon === 'cog' ? 'text-ngreen' : 'text-gray-400'} hover:text-ngreen`} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
