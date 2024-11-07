import React, { useState } from 'react';
import Sidebar from '../components/social-media-components/side-bar';
import PostFeed from '../components/social-media-components/post-feed';
import Suggestions from '../components/social-media-components/suggestions';
import ProfilePage from '../components/social-media-components/profile-page';

const PlantifyNetwork = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const openProfile = (profile) => {
    setProfileData(profile);
    setIsProfileOpen(true);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
    setProfileData(null);
  };

  return (
    <div className="flex h-screen pt-20 mb-11">
      {/* Sidebar: Left part, remains static */}
      <div>
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex">
        {isProfileOpen ? (
          <ProfilePage profile={profileData} onClose={closeProfile} />
        ) : (
          <>
            {/* PostFeed: Takes a fixed width */}
            <div className="w-4/6 h-full overflow-y-auto px-4">
              <PostFeed onProfileClick={openProfile} />
            </div>

            {/* Suggestions: Right part takes a fixed width */}
            <div className="w-1/3 h-full">
              <Suggestions />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlantifyNetwork;
