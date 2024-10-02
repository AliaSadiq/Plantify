// components/Suggestions.js
import React from 'react';

const Suggestions = () => {
  const suggestions = [
    { name: "Sarah Tancredi", username: "@dr.sarah" },
    { name: "Arthur Shelby", username: "@art_shelby" },
    { name: "Vin Diesel", username: "@vindiesel" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="font-semibold text-lg mb-4">Suggestions For You</h2>
      <ul>
        {suggestions.map((suggestion, idx) => (
          <li key={idx} className="flex justify-between items-center mb-4">
            <div>
              <p className="font-semibold">{suggestion.name}</p>
              <p className="text-sm text-gray-500">{suggestion.username}</p>
            </div>
            <button className="text-purple-600">Follow</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
