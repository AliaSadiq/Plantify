import React, { useState } from 'react';

function ToggleSwitch() {
  const [isBulk, setIsBulk] = useState(false);

  const handleToggle = () => {
    setIsBulk(!isBulk);
  };

  return (
    <div className="flex justify-start  ">
      <div
        onClick={handleToggle}
        className={`w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
          isBulk ? 'bg-green-500' : ''
        }`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform ${
            isBulk ? 'translate-x-7' : ''
          }`}
        ></div>
      </div>
      <span className="ml-2 text-gray-700">{isBulk ? 'bulk' : 'Single'}</span>
    </div>
  );
}

export default ToggleSwitch;
