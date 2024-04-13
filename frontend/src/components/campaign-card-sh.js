import React from "react";
import campaignPic from "../assets/campaign.jpg";
import { UserGroupIcon, HeartIcon } from "@heroicons/react/24/solid";

const CamapignCardSh = ({ campaign, onClick }) => {
  const progress = (campaign.collected_donation/campaign.target_donation)*100;

  const handleClick = () => {
    onClick(campaign.id);
  };

  return (
    <div className="flex items-center gap-4 py-4 px-4 bg-palegreen-100 rounded-lg shadow-md mt-2" onClick={handleClick}>
      <img
          className="flex-shrink-0 w-24 h-auto rounded-lg object-cover"
          src={campaignPic}
          loading="lazy"
          alt=""
      />
      <div className="flex flex-col flex-grow font-josefin-sans text-gray-100">
        <div className="flex items-center justify-between">
            <p className="text-mini font-bold">{campaign.name}</p>
            <HeartIcon className="w-[20px] h-[20px] relative hover:text-pink-500" />
        </div>
        <p className="text-sm mt-1">{campaign.location}</p>
        <p className="text-sm">{campaign.start_date}</p>
        <div className="flex items-center mt-2">
            <UserGroupIcon className="w-5 h-5" />
            <p className="text-sm ml-1">17 volunteers</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          {/* <button className="text-sm text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Donate Now</button> */}
          <div className="flex-1 ml-20">
              <div className="bg-palegreen-50 border-[0.5px] border-navygreen-300 h-3 rounded-full">
                  <div className="bg-navygreen-300 h-full rounded-full " style={{ width: progress }}></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">{campaign.collected_donation}Rs raised of {campaign.target_donation}Rs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CamapignCardSh;
    