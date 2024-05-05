import React, { useState } from 'react';
import profileImage from '../../assets/campaign.jpg';
import { MapPinIcon } from "@heroicons/react/24/solid";
import backgroundImage from '../../assets/campaign.jpg';

// Popup form component with a frosted glass effect
const RequestCampaignForm = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-40"
      onClick={onClose}
    >
      {/* Popup with background image and glass effect */}
      <div
        className="relative bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-6 w-85 shadow-lg" // Glass effect
        style={{
          backgroundImage: `url(${backgroundImage})`, // Set the background image
          backgroundSize: 'cover', // Ensure the image covers the whole div
          backgroundPosition: 'center', // Center the image
        }}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the form
      >
        <button
          className="self-end bg-red-500 text-white rounded p-1"
          onClick={onClose}
        >
          X
        </button>
        
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Request Campaign in Your Area</h2>

        <div className="flex flex-col gap-2 w-full">
          {/* Location Field */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Location</label>
            <input
              type="text"
              className="border rounded px-2 py-1 text-sm text-gray-800"
              placeholder="Your location"
            />
          </div>

          {/* Contact Number Field */}
          <div class="flex flex-col">
            <label className="text-sm text-gray-700">Contact Number</label>
            <input
              type="text"
              className="border rounded px-2 py-1 text-sm text-gray-800"
              placeholder="Contact number"
            />
          </div>

          {/* Issue Field */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Issue</label>
            <textarea
              class="border rounded px-2 py-1 text-sm text-gray-800"
              placeholder="Describe your issue"
              rows="2"
            ></textarea>
          </div>

          {/* Image Attachment Field */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Attach Image</label>
            <input
              type="file"
              className="border rounded px-2 py-1 text-sm text-gray-800"
              accept="image/*"
            />
          </div>

          {/* Submit Button */}
          <button className="mt-3 py-2 px-8 w-40 bg-green-700 text-white rounded hover:bg-green-600 text-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

// Profile component with Request button
const Profile = () => {
  const [isRequestFormVisible, setRequestFormVisible] = useState(false);

  return (
    <div className="w-60 h-[550px] absolute bottom-[-400px] left-24 bg-white shadow-md flex flex-col items-center justify-start p-4 gap-2 z-10 border-2 rounded-b-none pt-12">
      <div className="flex justify-center items-center w-32 h-32 rounded-full border-2 border-blue-500 mt-[-15px]">
        <img className="w-28 h-28 rounded-full" loading="lazy" alt="profile" src={profileImage} />
      </div>

      <h3 className="font-semibold text-center">Melissa Peters</h3>
      <div className="flex flex-row items-center justify-center gap-2 text-xs text-dimgray">
        <MapPinIcon className="h-4 w-4 text-gray-100" />
        <span>Lagos, Nigeria</span>
      </div>

      <div className="flex flex-row py-3 items-center justify-center gap-2">
        <div className="flex flex-col items-center">
          <span className="font-bold text-lg text-green-900">122</span>
          <span class="text-sm">followers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-lg text-green-900">67</span>
          <span class="text-sm">following</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="font-bold text-lg text-green-900">37K</span>
          <span class="text-sm">likes</span>
        </div>
      </div>
      {/* Additional Information Section */}
      <div className="flex flex-col items-center  justify-between mt-2 shadow-30 rounded-lg w-38">
      <span className='text-sm  font-semibold ml-[-100px]'> Campaigns</span>
            <div className="flex flex-row items-center  justify-between mt-1 shadow-md rounded-lg w-38">
  <div className="flex items-center">
<span className="font-bold text-xl text-green-900">25</span> {/* Total number of campaigns */}
  </div>
 {/* Vertical line separator */}
 
  <div className="border-l-2 border-gray-400 h-10 mx-5"> </div>
 <div className="flex flex-col justify-between items-center"><div>
<span className="font-bold text-lg text-green-700">3</span>
<span className="text-sm text-gray-700">  Ongoing</span>
</div>
<div>
<span className="font-bold text-lg text-green-700">22</span>
 <span className="text-sm text-gray-700">  Completed</span>
</div></div>
</div>
</div>
      <div className="flex flex-row items-center py-8 justify-center gap-6 text-sm text-black mt-2">
        <button
          className="cursor-pointer py-1 px-4 bg-green-700 rounded-md hover:bg-green-600"
          onClick={() => setRequestFormVisible(true)}
        >
          Request
        </button>
        <button className="cursor-pointer py-1 px-4 bg-green-700 rounded-md hover:bg-green-600">
          Follow
        </button>
      </div>

      {/* Show the popup when the state variable is true */}
      {isRequestFormVisible && (
        <RequestCampaignForm
          onClose={() => setRequestFormVisible(false)} // Event handler to close the popup
        />
      )}
    </div>
  );
};

export default Profile;