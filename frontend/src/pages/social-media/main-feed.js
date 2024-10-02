import React from 'react';
import Sidebar from './components/Sidebar';
import StoryBar from './components/StoryBar';
import PostFeed from './components/PostFeed';
import Suggestions from './components/Suggestions';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Top Story Avatars */}
        <StoryBar />
        
        {/* Post Feed and Suggestions */}
        <div className="flex w-full px-4 mt-6">
          <div className="w-3/4">
            <PostFeed />
          </div>
          <div className="w-1/4 ml-4">
            <Suggestions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
