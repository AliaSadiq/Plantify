import React, { useState } from 'react';

const PlantSocialMedia = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(true);

  const toggleProfile = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (
    <div className="flex bg-white h-screen">
      {/* Profile Sidebar */}
      {isProfileVisible && (
        <div className="w-64 h-full bg-gray-100 p-4 fixed top-0 left-0 transition-all duration-500">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">User Profile</h2>
            <button onClick={toggleProfile} className="bg-red-400 text-white px-2 py-1 rounded">
              Hide
            </button>
          </div>
          <div className="mt-4">
            <p>Name: Plant Lover</p>
            <p>Followers: 123</p>
            {/* Add more profile details */}
          </div>
        </div>
      )}

      {/* Main content */}
      <div className={`flex-1 ml-${isProfileVisible ? '64' : '0'} transition-all duration-500`}>
        {/* Show Profile Button (only when profile is hidden) */}
        {!isProfileVisible && (
          <button
            onClick={toggleProfile}
            className="bg-red-400 text-white px-2 py-1 rounded fixed top-4 left-4 z-50"
          >
            Show Profile
          </button>
        )}

        {/* Plant Diaries at the top */}
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">Plant Diaries</h1>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {/* Tall Diary Cards */}
            <div className="bg-gray-200 w-40 h-80 rounded
            -lg shadow-md flex items-center justify-center">
              Diary 1
            </div>
            <div className="bg-gray-200 w-40 h-80 rounded-lg shadow-md flex items-center justify-center">
              Diary 2
            </div>
            <div className="bg-gray-200 w-40 h-80 rounded-lg shadow-md flex items-center justify-center">
              Diary 3
            </div>
            {/* Add more diaries as needed */}
          </div>
        </div>

        {/* Posts Section below diaries */}
        <div className="grid grid-cols-3 gap-4 p-4">
          {/* Square Post Cards */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md h-64 flex items-center justify-center">
            Post 1
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md h-64 flex items-center justify-center">
            Post 2
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md h-64 flex items-center justify-center">
            Post 3
          </div>
          {/* Add more posts */}
        </div>
      </div>
    </div>
  );
};

export default PlantSocialMedia;
