import { React } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../components/social-media-components/side-bar';
import PostFeed from '../components/social-media-components/post-feed';
import Suggestions from '../components/social-media-components/suggestions';

const PlantifyNetwork = () => {
  return (
    <div className="flex h-screen pt-20">
      {/* Sidebar: Left part, remains static */}
      <div>
        <Sidebar />
      </div>

      {/* Main Content: Center part with PostFeed, scrollable vertically */}
      <div className="flex flex-col w-3/5 h-full overflow-y-auto">
        <div className="w-full px-4">
          <PostFeed />
        </div>
      </div>

      {/* Suggestions: Right part, takes remaining space */}
      <div className="flex-grow px-4">
        <Suggestions />
      </div>
    </div>
  );
};

export default PlantifyNetwork;
