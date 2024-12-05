import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Sidebar from '../components/social-media-components/side-bar';
import PostFeed from '../components/social-media-components/post-feed';
import Suggestions from '../components/social-media-components/suggestions';
import ExplorePage from '../components/social-media-components/explore';
import ProfilePage from '../components/social-media-components/profile-page';

const PlantifyLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen pt-20 mb-11">
      <div className="lg:w-1/5 w-full lg:sticky top-20">
        <Sidebar />
      </div>
      <div className="flex-grow flex">
        <Routes>
          {/* Main Feed Route */}
          <Route
            path=""
            element={
              <div className="flex w-full">
                <div className="w-4/6 h-full max-h-screen lg:overflow-y-auto no-scrollbar">
                  <PostFeed />
                </div>
                <div className="w-1/3 h-full mt-5 ml-2 mr-3">
                  <Suggestions />
                </div>
              </div>
            }
          />
          {/* Explore Page Route */}
          <Route
            path="explore"
            element={
              <div className="w-full h-full">
                <ExplorePage />
              </div>
            }
          />

          {/* Profile Page Route */}
          <Route
            path="profile-socialmedia"
            element={
              <div className="w-full h-full">
                <ProfilePage />
              </div>
            }
          />

          {/* Redirect to Main Feed if no other route matches */}
          <Route path="*" element={<Navigate to="/plantify-network" />} />
        </Routes>
      </div>
    </div>
  );
};

export default PlantifyLayout;
