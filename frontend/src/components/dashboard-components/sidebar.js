
import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaBullhorn, FaCalendarAlt, FaUser, FaChartBar, FaArrowLeft } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-52 bg-dashboard text-white">
      <div className="flex items-center justify-start ml-10 h-16 border-b border-gray-800">
        <div className="flex items-start">
          <FaChartLine className="text-green text-2xl mr-2" />
          <span className="text-xl font-semibold">Plantify</span>
        </div>
      </div>
      <div className="flex flex-col p-4 space-y-4 flex-grow">
        <div className="space-y-1">
          <Link to="/social-dashboard/onboard" className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded" aria-label="Dashboard">
            <FaChartLine className="mr-3" />
            Dashboard
          </Link>
          <Link to="/social-dashboard/campaigns" className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded" aria-label="Campaigns">
            <FaBullhorn className="mr-3" />
            Campaigns
          </Link>
          <Link to="/profile" className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded" aria-label="Profile">
            <FaUser className="mr-3" />
            Profile
          </Link>
          {/* <Link to="/Calendar" className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded" aria-label="Calendar">
            <FaCalendarAlt className="mr-3" />
            Calendar
          </Link> */}
         
        </div>
        <div className="mt-auto space-y-1">
          <div className="text-gray-500 uppercase text-xs">Others</div>
          <Link to="/Insights" className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded" aria-label="Chart">
            <FaChartBar className="mr-3" />
            Insights
          </Link>
        </div>
      </div>
      <div className="p-4">
        <Link to="/" className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded" aria-label="Back">
          <FaArrowLeft className="mr-3" />
          Back
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

