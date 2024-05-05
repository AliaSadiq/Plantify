import React from 'react';
import campaign from '../campaign.jpg';
import { UserGroupIcon } from "@heroicons/react/24/solid"; // Import the UserCircleIcon from Heroicons

const CampaignCard = () => {
  return (
    <div className="bg-white w-80 h-40 rounded-lg overflow-hidden flex border-2 border-nav-green">
      <div className="w-full flex">
        <div className="relative h-full w-1/2 opacity-80">
          <img
            src={campaign}
            alt="Campaign"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex flex-col justify-between w-1/2">
        <p className="text-sm font-josefins font-medium">Riphah Green Club</p>
            <p className="text-xs font-josefins font-medium">Location: <span className="text-xs font-josefins font-light">California</span></p>
            <p className="text-xs font-josefins font-medium">Date: <span className="text-xs font-josefins font-light">30-10-24</span></p>
            <div className="flex items-center mt-2">
                <UserGroupIcon className="w-4 h-4 mr-2 text-light-black" />  {/*Use the UserCircleIcon */}
                <p className="text-xs font-josefins">17 volunteers</p>
            </div>
            <div className="flex items-center justify-between">
                <div>
                <div className="bg-sage-100 h-2 rounded-full overflow-hidden border-2 border-sage-200">
                    <div className="bg-nav-green h-full" style={{ width: '80%' }}></div> {/* Adjust width dynamically based on progress */}
                </div>
                <p className="text-xs font-josefins mt-1">800$ raised of 1000$</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
