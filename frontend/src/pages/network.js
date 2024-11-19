// import React from 'react';
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import Sidebar from '../components/social-media-components/side-bar';
// import PostFeed from '../components/social-media-components/post-feed';
// import Suggestions from '../components/social-media-components/suggestions';
// import ProfilePage from '../components/social-media-components/profile-page';
// import ExplorePage from '../components/social-media-components/explore';

// const PlantifyLayout = () => {
//   const location = useLocation();

//   return (
//     <div className="flex h-screen pt-20 mb-11">
//       {/* Sidebar remains fixed */}
//       <Sidebar />

//       {/* Main Content Area */}
//       <div className="flex-grow flex">
//         <Routes>
//           {/* Route for Main Feed and Suggestions */}
//           <Route
//             path="/plantify-network"
//             element={
//               <div className="flex w-full">
//                 <div className="w-4/6 h-full overflow-y-auto px-4">
//                   <h1>Post Feed</h1> {/* Temporary text for debugging */}
//                   <PostFeed />
//                 </div>
//                 <div className="w-1/3 h-full">
//                   <h1>Suggestions</h1> {/* Temporary text for debugging */}
//                   <Suggestions />
//                 </div>
//               </div>
//             }
//           />

//           {/* Explore Page */}
//           <Route
//             path="/explore"
//             element={
//               <div className="flex w-full">
//                 <h1>Explore Page</h1> {/* Temporary text for debugging */}
//                 <ExplorePage />
//               </div>
//             }
//           />

//           {/* Profile Page */}
//           <Route
//             path="/profile-socialmedia"
//             element={
//               <div className="flex w-full">
//                 <h1>Profile Page</h1> {/* Temporary text for debugging */}
//                 <ProfilePage />
//               </div>
//             }
//           />

//           {/* Redirect to Main Feed if Path Not Found */}
//           <Route path="*" element={<Navigate to="/plantify-network" replace />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default PlantifyLayout;
// 
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


// import React from 'react';
// import Sidebar from '../components/social-media-components/side-bar';
// import PostFeed from '../components/social-media-components/post-feed';
// import Suggestions from '../components/social-media-components/suggestions';

// const PlantifyLayout = () => {
//   return (
//     <div className="flex h-screen pt-20 mb-11">
//       {/* Sidebar remains fixed */}
//       <Sidebar />

//       {/* Main Content Area */}
//       <div className="flex-grow flex">
//         <div className="flex w-full">
//           <div className="w-4/6 h-full overflow-y-auto px-4">
//             <h1>Post Feed</h1> {/* Debugging text */}
//             <PostFeed />
//           </div>
//           <div className="w-1/3 h-full">
//             <h1>Suggestions</h1> {/* Debugging text */}
//             <Suggestions />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlantifyLayout;
