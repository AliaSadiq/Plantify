import {React, useState, useEffect} from "react";
import { UserGroupIcon, HeartIcon } from "@heroicons/react/24/solid";
import Button from "./button";
import DonationModal from "../popups/donation-modal";
import SignUpModal from "../popups/signup-modal";

const CamapignCardSh = ({ campaign, openPopup,shape }) => {
  console.log("koko: " + campaign.start_date);
  const handleCardClick = () => {
    openPopup(campaign);
  };
  const cardSizeClass = shape === "rectangle" ? "w-[750px] h-32" : "w-80 h-52"; // Adjusted size based on shape
  // State for donation modal visibility
  const [showDonationModal, setShowDonationModal] = useState(false);
  // State for signup modal visibility
  const [showSignupModal, setShowSignupModal] = useState(false);

  // Open donation modal
  const openDonationModal = () => {
    const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          setShowDonationModal(true);
        } else {
          setShowSignupModal(true);
        }
  }

  // Close donation modal
  const closeDonationModal = () => {
    setShowDonationModal(false);
  }

  // Close signup modal
  const closeSignupModal = () => {
    setShowSignupModal(false);
  }
  //for donate
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user._id) {
        setUserId(user._id);
        console.log("Fetched userId from localStorage:", user._id);

    }
  }, [1]);

  return (
    <div
      className={`relative overflow-hidden ${cardSizeClass}`} // Use the calculated size
    >
      <img 
        src={`/assets/${campaign.image}` }
        alt="Campaign Background" 
        className="w-full h-full object-cover" 
        onClick={handleCardClick}
      />
      <div className="absolute top-2 left-2 flex gap-4 items-center font-josefin-sans mx-2">
        <h2 className="text-white text-lg font-semibold mr-2">{campaign.name}</h2>
        <Button text='Donate' onClick={openDonationModal} color='fill'/>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-between p-2 bg-white bg-opacity-50 font-josefin-sans py-6">
        <div className="text-gray-100">
          <p className="text-xs font-medium">Location: <span className="font-medium">{campaign.location}</span></p>
          <p className="text-xs font-medium mt-2">Date: <span className="font-medium">{new Date(campaign.start_date).toLocaleDateString('en-GB')}</span></p>
        </div>
        <div className="text-white font-josefin-sans">
          <div className="text-gray-100 flex items-center">
            <UserGroupIcon className="h-4 w-4 text-gray-100 mr-1" />
            <p className="text-xs font-light">10 Volunteers</p>
          </div>
          <div className="bg-sage-100 h-2 rounded-full overflow-hidden border-2 border-white mt-[8px]">
            <div className="bg-navygreen-300 h-full" style={{ width: `${(campaign.collected_donation / campaign.targeted_donation) * 100}%` }}></div>
          </div>
        </div>
      </div>
      <DonationModal showModal={showDonationModal} closeModal={closeDonationModal} campaignId={campaign._id} userId={userId}/>
      <div className="z-10">
        <SignUpModal showModal={showSignupModal} closeModal={closeSignupModal} />
      </div>
    </div>
  );
}

export default CamapignCardSh;