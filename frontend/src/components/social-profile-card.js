import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from './button';
import RequestCampaignForm from '../profileComp/request-campaign-form';

const SocialProfileCard = ({ profileData }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Function to open the form modal
  const handleFlowClick = () => {
    setIsFormOpen(true);
  };

  // Function to close the form modal
  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div
      className={`flex flex-col bg-white rounded-[20px] max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-2xl overflow-hidden font-josefin-sans p-2`}
    >
      {/* Image Section */}
      <div className="">
        <Link to={`/campaign/social-group/${profileData._id}`} className="">
          <img
            src={`/assets/${profileData.banner}`}
            alt="Profile Background"
            className="w-full h-28 object-cover rounded-[20px]"
          />
        </Link>
      </div>
  
      {/* Text Details Section */}
      <div className="p-4">
        <h2 className="text-base font-semibold mb-1">{profileData.name}</h2>
        <p className="text-sm text-gray-500 mb-2">{profileData.description}</p>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className="text-sm">{profileData.location}</span>
          </div>
  
          <div className="flex items-center mb-2">
            <p className="text-sm">  {profileData.followers.length || 0} Followers</p>
          </div>
        </div>
  
        {/* Request for Campaign Button */}
        <div className="flex justify-between items-center">
          <Button 
            text="Request Campaign"
            className="py-2 ml-3" 
            onClick={handleFlowClick}
          />
        </div>
      </div>
  
      {/* Render the RequestCampaignForm as a modal when isFormOpen is true */}
      {isFormOpen && (
        <RequestCampaignForm 
          socialGroupId={profileData._id} 
          onClose={closeForm} 
        />
      )}
    </div>
  );
  
};

export default SocialProfileCard;
