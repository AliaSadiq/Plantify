import React from 'react';

const ProfilePage = ({ profile, onClose }) => {
  return (
    <div className="w-full p-4 flex flex-col items-start">
      <div className="flex mb-11 w-full"> {/* Full width for the container */}
        {/* Profile Image */}
        <div className="w-1/3 h-40 flex-shrink-0 flex items-center justify-center mr-6"> {/* Fixed width for the image container */}
          <div className="w-36 h-36 bg-gray-200 rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-400 to-red-500 flex items-center justify-center"> {/* Circle shape */}
            <img
              src={profile.avatar || 'path_to_default_avatar.jpg'}
              alt={profile.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="w-2/3 flex-grow flex flex-col justify-between"> {/* Adjusted width and layout */}
          <div>
            <h2 className="text-xl font-semibold">{profile.name}</h2> {/* Smaller size */}
            <p className="text-gray-500">{profile.type}</p>
            <div className="flex space-x-6 text-sm mt-2">
              <span><strong>100</strong> posts</span>
              <span><strong>300</strong> followers</span>
              <span><strong>250</strong> following</span>
            </div>
            <p className="text-gray-700 mt-2">Bio about the user goes here...</p>
            <p className="text-gray-700 mt-2">Justice - Humanity - Self Esteem</p>
          </div>
          <p className="text-gray-700 mt-2">Official Instagram account of {profile.name}</p>
        </div>
      </div>

      {/* Tabs for Posts and Tagged */}
      <div className="flex space-x-4 justify-center border-t border-gray-300 pt-4 w-full mt-4">
        <button className="text-black font-medium">Posts</button>
        <button className="text-gray-400">Video</button>
        <button className="text-gray-400">Adoption</button>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-4 mt-4 w-full">
        <div className="h-60 bg-gray-300 rounded-lg"></div>
        <div className="h-60 bg-gray-300 rounded-lg"></div>
        <div className="h-60 bg-gray-300 rounded-lg"></div>
      </div>

      <button onClick={onClose} className="mt-4 text-blue-500">Close Profile</button>
    </div>
  );
};

export default ProfilePage;
