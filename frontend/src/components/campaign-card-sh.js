// import {React, useState, useEffect} from "react";
// import { UserGroupIcon, HeartIcon } from "@heroicons/react/24/solid";
// import Button from "./button";
// import DonationModal from "../popups/donation-modal";
// import SignUpModal from "../popups/signup-modal";

// const CamapignCardSh = ({ campaign, openPopup,shape }) => {
//   console.log("koko: " + campaign.start_date);
//   const handleCardClick = () => {
//     openPopup(campaign);
//   };
//   const cardSizeClass = shape === "rectangle" ? "w-[750px] h-32" : "w-80 h-52"; // Adjusted size based on shape
//   // State for donation modal visibility
//   const [showDonationModal, setShowDonationModal] = useState(false);
//   // State for signup modal visibility
//   const [showSignupModal, setShowSignupModal] = useState(false);

//   // Open donation modal
//   const openDonationModal = () => {
//     const user = JSON.parse(localStorage.getItem('user'));
//         if (user) {
//           setShowDonationModal(true);
//         } else {
//           setShowSignupModal(true);
//         }
//   }

//   // Close donation modal
//   const closeDonationModal = () => {
//     setShowDonationModal(false);
//   }

//   // Close signup modal
//   const closeSignupModal = () => {
//     setShowSignupModal(false);
//   }
//   //for donate
//   const [userId, setUserId] = useState(null);
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user && user._id) {
//         setUserId(user._id);
//         console.log("Fetched userId from localStorage:", user._id);

//     }
//   }, [1]);

//   return (
//     <div
//       className={`relative overflow-hidden ${cardSizeClass}`} // Use the calculated size
//     >
//       <img 
//         src={`/assets/${campaign.image}` }
//         alt="Campaign Background" 
//         className="w-full h-full object-cover" 
//         onClick={handleCardClick}
//       />
//       <div className="absolute top-2 left-2 flex gap-4 items-center font-josefin-sans mx-2">
//         <h2 className="text-white text-lg font-semibold mr-2">{campaign.name}</h2>
//         <Button text='Donate' onClick={openDonationModal} color='fill'/>
//       </div>
//       <div className="absolute bottom-0 left-0 w-full flex justify-between p-2 bg-white bg-opacity-50 font-josefin-sans py-6">
//         <div className="text-gray-100">
//           <p className="text-xs font-medium">Location: <span className="font-medium">{campaign.location}</span></p>
//           <p className="text-xs font-medium mt-2">Date: <span className="font-medium">{new Date(campaign.start_date).toLocaleDateString('en-GB')}</span></p>
//         </div>
//         <div className="text-white font-josefin-sans">
//           <div className="text-gray-100 flex items-center">
//             <UserGroupIcon className="h-4 w-4 text-gray-100 mr-1" />
//             <p className="text-xs font-light">{campaign.volunteers} Volunteers</p>
//           </div>
//           <div className="bg-sage-100 h-2 rounded-full overflow-hidden border-2 border-white mt-[8px]">
//             <div className="bg-navygreen-300 h-full" style={{ width: `${(campaign.collected_donation / campaign.targeted_donation) * 100}%` }}></div>
//           </div>
//         </div>
//       </div>
//       <DonationModal showModal={showDonationModal} closeModal={closeDonationModal} campaignId={campaign._id} userId={userId}/>
//       <div className="z-10">
//         <SignUpModal showModal={showSignupModal} closeModal={closeSignupModal} />
//       </div>
//     </div>
//   );
// }

// export default CamapignCardSh;

//new card + popup
// import { React, useState, useEffect } from "react";
// import { UserGroupIcon, HeartIcon } from "@heroicons/react/24/solid";
// import Button from "./button";
// import DonationModal from "../popups/donation-modal";
// import SignUpModal from "../popups/signup-modal";

// const CampaignCardSh = ({ campaign, openPopup, shape }) => {
//   const handleCardClick = () => {
//     openPopup(campaign);
//   };

//   // State for donation modal visibility
//   const [showDonationModal, setShowDonationModal] = useState(false);
//   // State for signup modal visibility
//   const [showSignupModal, setShowSignupModal] = useState(false);

//   // Open donation modal
//   const openDonationModal = () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       setShowDonationModal(true);
//     } else {
//       setShowSignupModal(true);
//     }
//   };

//   // Close donation modal
//   const closeDonationModal = () => {
//     setShowDonationModal(false);
//   };

//   // Close signup modal
//   const closeSignupModal = () => {
//     setShowSignupModal(false);
//   };

//   // Fetch user ID from local storage
//   const [userId, setUserId] = useState(null);
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user._id) {
//       setUserId(user._id);
//       console.log("Fetched userId from localStorage:", user._id);
//     }
//   }, []);

//   return (
//     <div
//       className={`bg-white rounded-[20px] w-80 shadow-lg overflow-hidden font-josefin-sans p-2`} // Rounded corners and shadow for a card look
//     >
//       {/* Image Section */}
//       <div className="relative">
//         <img
//           src={`/assets/${campaign.image}`}
//           alt="Campaign Background"
//           className="w-full h-28 object-cover rounded-[20px]"
//           onClick={handleCardClick}
//         />
//         {/* Heart Icon */}
//         <div className="absolute top-2 right-2">
//           <HeartIcon className="w-6 text-red-500" />
//         </div>
//       </div>
//       {/* Text Details Section */}
//       <div className="p-4">
//         <h2 className="text-mini font-semibold mb-1">{campaign.name}</h2>
//         <div className="flex gap-2">
//           <div className="flex items-center mb-2">
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               strokeWidth="1.5" 
//               stroke="currentColor" 
//               className="w-4 h-4 mr-1"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//             </svg>
//             <span className="text-sm">{campaign.location}</span>
//           </div>
          
//           <div className="flex items-center mb-2">
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               strokeWidth={1.5} 
//               stroke="currentColor" 
//               className="w-4 h-4 mr-1"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
//             </svg>
//             <span className="text-sm">
//               {new Date(campaign.start_date).toLocaleDateString("en-GB")}
//             </span>
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
//           <div
//             className="bg-navygreen-300 h-full rounded-full"
//             style={{
//               width: `${(campaign.collected_donation / campaign.targeted_donation) * 100}%`,
//             }}
//           ></div>
//         </div>
//         <div className="flex justify-between items-center">
//           <div className="flex items-center text-gray-500">
//             <UserGroupIcon className="h-4 w-4 mr-1" />
//             <p className="text-sm">{campaign.volunteers} Volunteers</p>
//           </div>
//         </div>
//       </div>

//       {/* Donate Button Section */}
//       {/* <div className="flex justify-end">
//         <Button
//           text="Donate"
//           onClick={openDonationModal}
//           color="fill"
//           className="py-2 px-4"
//         />
//       </div> */}

//       {/* Modals */}
//       <DonationModal
//         showModal={showDonationModal}
//         closeModal={closeDonationModal}
//         campaignId={campaign._id}
//         userId={userId}
//       />
//       <SignUpModal
//         showModal={showSignupModal}
//         closeModal={closeSignupModal}
//       />
//     </div>
//   );
// };

// export default CampaignCardSh;

import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserGroupIcon, HeartIcon } from "@heroicons/react/24/solid";
import Button from "./button";
import DonationModal from "../popups/donation-modal";
import SignUpModal from "../popups/signup-modal";

const CampaignCardSh = ({ campaign, openPopup, shape }) => {

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/campaign-details');
  };

  // State for donation modal visibility
  const [showDonationModal, setShowDonationModal] = useState(false);
  // State for signup modal visibility
  const [showSignupModal, setShowSignupModal] = useState(false);

  // Open donation modal
  const openDonationModal = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setShowDonationModal(true);
    } else {
      setShowSignupModal(true);
    }
  };

  // Close donation modal
  const closeDonationModal = () => {
    setShowDonationModal(false);
  };

  // Close signup modal
  const closeSignupModal = () => {
    setShowSignupModal(false);
  };

  // Fetch user ID from local storage
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user._id) {
      setUserId(user._id);
      console.log("Fetched userId from localStorage:", user._id);
    }
  }, []);

  return (
    <div
      className={`bg-white rounded-[20px] w-80 shadow-lg overflow-hidden font-josefin-sans p-2`} // Rounded corners and shadow for a card look
    >
      {/* Image Section */}
      <div className="relative">
        <Link to={`/campaign-details/${campaign._id}`}>
          <img
            src={`/assets/${campaign.image}`}
            alt="Campaign Background"
            className="w-full h-28 object-cover rounded-[20px]"
          />
        </Link>
        {/* Heart Icon */}
        <div className="absolute top-2 right-2">
          <HeartIcon className="w-6 text-red-500" />
        </div>
      </div>
      {/* Text Details Section */}
      <div className="p-4">
        <h2 className="text-mini font-semibold mb-1">{campaign.name}</h2>
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
            <span className="text-sm">{campaign.location}</span>
          </div>
          
          <div className="flex items-center mb-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-4 h-4 mr-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <span className="text-sm">
              {new Date(campaign.start_date).toLocaleDateString("en-GB")}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
          <div
            className="bg-navygreen-300 h-full rounded-full"
            style={{
              width: `${(campaign.collected_donation / campaign.targeted_donation) * 100}%`,
            }}
          ></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-500">
            <UserGroupIcon className="h-4 w-4 mr-1" />
            <p className="text-sm">{campaign.volunteers} Donations</p>
          </div>
        </div>
      </div>

      {/* Donate Button Section */}
      {/* <div className="flex justify-end">
        <Button
          text="Donate"
          onClick={openDonationModal}
          color="fill"
          className="py-2 px-4"
        />
      </div> */}

      {/* Modals */}
      <DonationModal
        showModal={showDonationModal}
        closeModal={closeDonationModal}
        campaignId={campaign._id}
        userId={userId}
      />
      <SignUpModal
        showModal={showSignupModal}
        closeModal={closeSignupModal}
      />
    </div>
  );
};

export default CampaignCardSh;