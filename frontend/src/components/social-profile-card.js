import React from "react";
import { Link } from "react-router-dom";

const SocialProfileCard = ({ profileData }) => {
  return (
    <div
      className={`flex flex-col bg-white rounded-[20px] max-w-fit shadow-2xl overflow-hidden font-josefin-sans p-2`}
    >
      {/* Image Section */}
      <div className="">
      <Link to={`/campaign/social-group/${profileData._id}`} className="">
          <img
            src={`/assets/${profileData.banner}`}
            alt="Profile Background"
            className="w-80 h-28 object-cover rounded-[20px]"
          />
        </Link>
      </div>

      {/* Text Details Section */}
      <div className="p-4">
        <h2 className="text-mini font-semibold mb-1">{profileData.name}</h2>
        <p className="text-sm text-gray-500 mb-2">{profileData.description}</p>
        <div className="flex gap-2">
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
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg> */}
            <p className="text-sm">  {profileData.followers.length || 0} Followers</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
        <div className="flex items-center text-gray-500">
          <p className="text-sm truncate w-[150px]"> 
            {profileData.initiative || 'No description available.'}
          </p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default SocialProfileCard;
