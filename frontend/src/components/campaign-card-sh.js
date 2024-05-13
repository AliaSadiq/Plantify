import {React, useState, useEffect} from "react";
import campaignPic from "../assets/campaign.jpg";
import camp from "../assets/campaign-card.jpeg";
import { UserGroupIcon, HeartIcon } from "@heroicons/react/24/solid";

const CamapignCardSh = ({ campaign, openPopup,shape }) => {
  const handleCardClick = () => {
    openPopup(campaign);
  };
  const cardSizeClass = shape === "rectangle" ? "w-[750px] h-32" : "w-80 h-52"; // Adjusted size based on shape
  return (
    <div
      className={`relative overflow-hidden ${cardSizeClass}`} // Use the calculated size
      onClick={handleCardClick}
    >
      <img src={camp} alt="Campaign Background" className="w-full h-full object-cover" />
      <div className="absolute top-2 left-2 flex items-center font-josefin-sans mx-2">
        <h2 className="text-white text-lg font-semibold mr-2">{campaign.name}</h2>
        <button className="text-white bg-gray-100 border border-gray-100 px-[7px] py-[7px]  mr-2">Donate</button>
        <HeartIcon className="h-[20px] w-[20px] text-white stroke-current mr-2 hover:text-pinky" />
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-between p-2 bg-white bg-opacity-50 font-josefin-sans py-6">
        <div className="text-gray-100">
          <p className="text-xs font-medium">Location: <span className="font-light">{campaign.location}</span></p>
          <p className="text-xs font-medium mt-2">Date: <span className="font-light">{campaign.start_date}</span></p>
        </div>
        <div className="text-white font-josefin-sans">
          <div className="text-gray-100 flex items-center">
            <UserGroupIcon className="h-4 w-4 text-gray-100 mr-1" />
            <p className="text-xs font-light">10 Volunteers</p>
          </div>
          <div className="bg-sage-100 h-2 rounded-full overflow-hidden border-2 border-white mt-[8px]">
            <div className="bg-navygreen-300 h-full" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CamapignCardSh;