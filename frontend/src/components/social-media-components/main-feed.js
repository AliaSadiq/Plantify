import React, { useState } from 'react';

const PlantSocialMedia = () => {
  // State to toggle the profile visibility
  const [isProfileVisible, setIsProfileVisible] = useState(true);

  // Function to toggle profile
  const toggleProfile = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Plant Diaries Section */}
      <div className="bg-green-200 p-4">
        <h1 className="text-xl font-bold">Plant Diaries</h1>
        <div className="flex overflow-x-scroll space-x-4 mt-2">
          {/* Example of Diary Cards */}
          <div className="bg-green-300 p-4 rounded-md w-40">Diary 1</div>
          <div className="bg-green-300 p-4 rounded-md w-40">Diary 2</div>
          <div className="bg-green-300 p-4 rounded-md w-40">Diary 3</div>
          {/* Add more diary items as needed */}
        </div>
      </div>

      {/* Main Content: Posts and Sidebar */}
      <div className="flex flex-1">
        {/* Posts Section */}
        <div className={`p-4 transition-all duration-500 ${isProfileVisible ? 'flex-1' : 'w-full'}`}>
          <h2 className="text-lg font-semibold">Posts</h2>
          <div className="bg-white p-4 rounded-md shadow-md mb-4">Post 1 content...</div>
          <div className="bg-white p-4 rounded-md shadow-md mb-4">Post 2 content...</div>
          {/* Add more posts here */}
        </div>

        {/* Profile Sidebar */}
        {isProfileVisible && (
          <div className="bg-blue-200 p-4 w-64 transition-all duration-500">
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

        {/* Toggle Button (when the profile is hidden) */}
        {!isProfileVisible && (
          <button
            onClick={toggleProfile}
            className="bg-red-400 text-white px-2 py-1 rounded fixed top-4 right-4"
          >
            Show Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default PlantSocialMedia;
