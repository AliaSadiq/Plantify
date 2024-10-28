import { useState } from 'react';
import Button from '../../components/button';
import { BellIcon, PlusIcon } from "@heroicons/react/24/outline";
import CreatePost from './create-post-form';

const SuggestionsBox = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);

  const handleOpenCreatePost = () => setShowCreatePost(true);
  const handleCloseCreatePost = () => setShowCreatePost(false);

  return (
    <div className="w-full bg-transparent p-4">
      {/* Search, Notification, and Create Post Section */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mb-4 space-y-2 sm:space-y-0">
        {/* Search Input */}
        <input 
          type="text" 
          placeholder="Search..." 
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 w-full sm:w-2/3"
        />
        
        {/* Notification Icon */}
        <button className="text-gray-600 hover:text-green-600">
          <BellIcon className="w-6 h-6" />
        </button>

        {/* Create Post Button with Plus Icon */}
        <button  
          className="shadow-md bg-black text-white p-2 rounded-full flex items-center justify-center w-10 h-10"
          onClick={handleOpenCreatePost}
        >
          <PlusIcon className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Create Post Popup Form */}
      {showCreatePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <CreatePost onClose={handleCloseCreatePost} />
        </div>
      )}

      {/* Suggestions Box Container */}
      <div className="w-full bg-white bg-opacity-90 backdrop-blur-md border border-gray-100 p-4 sm:p-6 rounded-lg mt-4">
        {/* Suggestions For You Section */}
        <div className="mb-6">
          <p className="text-gray-700 font-semibold mb-4">Suggestions For You</p>
          <div className="space-y-4">
            {['Sarah Tancredi', 'Arthur Shelby', 'Vin Diesel'].map((user, idx) => (
              <div key={idx} className="flex justify-between items-center bg-white p-2 sm:p-4 rounded-pl border border-gray-50">
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://via.placeholder.com/100" 
                    alt={user} 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <p className="text-gray-700 text-sm sm:text-base">{user}</p>
                </div>
                <button className="text-purple-600 hover:text-purple-700 text-sm sm:text-base">Follow</button>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Post Activity Section */}
        <div className="mt-6">
          <p className="text-gray-700 font-semibold mb-2">Latest Post Activity</p>
          {/* Add latest post content here if needed */}
        </div>
      </div>
    </div>
  );
};

export default SuggestionsBox;
