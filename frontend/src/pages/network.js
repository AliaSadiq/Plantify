import {React, useS} from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../components/social-media-components/side-bar';
import StoryBar from '../components/social-media-components/story-bar';
import PostFeed from '../components/social-media-components/post-feed';
import Suggestions from '../components/social-media-components/suggestions';


const PlantifyNetwork = () => {


  return (
    <div className="flex h-screen pt-20">
      {/* Sidebar: Left part, remains static */}
      <div className="">
        <Sidebar />
      </div>

      {/* Main Content: Center part, includes StoryBar and PostFeed, becomes scrollable */}
      <div className="flex flex-col w-3/5 h-full overflow-y-auto">
        
        {/* Story Bar: Fixed height, scrollable horizontally */}
       

        {/* Post Feed: Scrollable vertically if posts overflow */}
        <div className="flex-grow mt-4 ">
          <PostFeed />
        </div>
      </div>

      {/* Suggestions: Right part, remains static */}
      <div className="w-1/5 px-4">
        <Suggestions />
      </div>
    </div>
  );
}


export default PlantifyNetwork;