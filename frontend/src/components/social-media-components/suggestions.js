import React from 'react';

const SuggestionsBox = () => {
  return (
    <div className="w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
        />
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-green-600">
            <span className="material-icons">notifications</span>
          </button>
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200">
            Post
          </button>
        </div>
      </div>

      <div>
        <p className="text-gray-700 font-semibold mb-2">Suggestions For You</p>
        {['Sarah Tancredi', 'Arthur Shelby', 'Vin Diesel'].map((user, idx) => (
          <div key={idx} className="flex justify-between items-center mb-4">
            <p className="text-gray-700">{user}</p>
            <button className="text-purple-600 hover:text-purple-700">Follow</button>
          </div>
        ))}
      </div>

      {/* Latest Post Activity */}
      <div className="mt-6">
        <p className="text-gray-700 font-semibold mb-2">Latest Post Activity</p>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-700">Minimalist Stairs</p>
          <p className="text-gray-500 text-sm">Liked by 17 people</p>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsBox;
