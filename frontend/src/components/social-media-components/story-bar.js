// components/StoryBar.js
import React from 'react';

const StoryBar = () => {
  const users = [
    { name: "You", image: "https://via.placeholder.com/150" },
    { name: "Supardi", image: "https://via.placeholder.com/150" },
    { name: "Dean", image: "https://via.placeholder.com/150" },
    { name: "Theodore", image: "https://via.placeholder.com/150" },
    // Add other users here
  ];

  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow-sm">
      {users.map((user, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <img className="w-14 h-14 rounded-full" src={user.image} alt={user.name} />
          <p className="text-xs mt-1">{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryBar;
