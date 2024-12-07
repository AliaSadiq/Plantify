import React from 'react';

const StoryBar = () => {
  const users = [
    { name: "You", image: "https://via.placeholder.com/150" },
    { name: "Supardi", image: "https://via.placeholder.com/150" },
    { name: "Dean", image: "https://via.placeholder.com/150" },
    { name: "Theodore", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="flex space-x-6 p-4 bg-white bg-opacity-90 backdrop-blur-md shadow-md rounded-lg">
      {users.map((user, idx) => (
        <div key={idx} className="text-center">
          <img className="w-16 h-16 rounded-full" src={user.image} alt={user.name} />
          <p className="text-sm mt-2 text-gray-700">{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryBar;
