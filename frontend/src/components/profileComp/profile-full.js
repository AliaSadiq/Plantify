// import React, { useState } from 'react';
// import header from '../assets/header-image.jpg';
// import ProfilePart from './profile-card';
// import CampaignList from './campaign-list';

// const FrameComponent1 = () => {
//   const [activeTab, setActiveTab] = useState('campaigns');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <section className="self-stretch flex flex-col items-end justify-start  max-w-full text-left  gap-[50px] text-darkslateblue-100">
//       <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
//         {/* Header Section */}
//         <div className=" flex-1 relative top-0 overflow-hidden">
//           <img
//             className="w-full h-[300px] mt-0 object-cover"
//             alt="Header Image"
//             src={header}
//           />
       
//         </div>

//         {/* Profile Section */}
//         <ProfilePart />

//       </div>

//       {/* Parent div for Campaign and Impact sections with partial overlap */}
//       <div
//         className="absolute top-[203px] left-[350px] w-[900px] flex flex-col justify-start gap-[21px] text-left text-5xl font-josefin-sans border-1.5 bg-white p-4 shadow-lg"
//       >
//         {/* Initiative Section */}
//         <div className="flex flex-col justify-start gap-5 pl-8">
//           <h2 className="text-xl font-bold  gap-5">Initiative</h2>
//           <p className="text-base text-gray-600">
//             We are committed to making a difference in our communities through various campaigns and impact initiatives.
//             Hahaha in your face iugly thing , i aint making this BS FYP nayysoon you minus headed muttoned head.hahahhahahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
//           </p>
//         </div>

//         {/* Campaign and Impact Tabs */}
//         <div className="flex flex-row items-start justify-start gap-40 pl-8  text-lg">
//           <h3
//             className={`text-inherit font-semibold cursor-pointer ${
//               activeTab === 'campaigns' ? 'border-b-2 border-solid border-black font-bold' : ''
//             }`}
//             onClick={() => handleTabClick('campaigns')}
//           >
//             Campaigns
//           </h3>
//           <h3
//             className={`text-inherit font-normal font-inter text-darkgray cursor-pointer ${
//               activeTab === 'impact' ? 'border-b-2 border-solid border-black font-bold' : ''
//             }`}
//             onClick={() => handleTabClick('impact')}
//           >
//             Impact
//           </h3>
//         </div>

//         {/* Campaign and Impact Lists */}
//         <div className="flex flex-col justify-start gap-[50px]">
//           {activeTab === 'campaigns' && (
//             <div className="box-border max-w-full py-2 gap-2 pr-0 pl-8">
//               <CampaignList shape="rectangle" />
//             </div>
//           )}
//           {activeTab === 'impact' && (
//             <div className="box-border max-w-full py-0 pr-0 pl-8">
//               Impact content goes here
//             </div>
//           )}
//         </div>
//       </div>
    
//     </section>
//   );
// };

// export default FrameComponent1;
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import header from '../../assets/campaign.jpg';
import ProfilePart from './profile-card';
import CampaignCardSh from '../campaign-card-sh';
import TeamComponent from "./my-team";

const SocialProfilePage = () => {
  // Initialize state for campaigns and active tab
  const [campaigns, setCampaigns] = useState([]); // To store fetched campaigns
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [activeTab, setActiveTab] = useState('campaigns'); // To manage active tab

  // Fetch campaigns when the component mounts
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/campaigns'); // Replace with your API endpoint
        setCampaigns(response.data); // Set the fetched campaigns
      } catch (error) {
        console.error('Error fetching campaigns:', error); // Handle error
      }
    };

    fetchCampaigns(); // Call the fetch function
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  const openPopup = (campaign) => {
    setSelectedCampaign(campaign);
  };

  const closePopup = () => {
    setSelectedCampaign(null);
  };

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="self-stretch flex flex-col items-end justify-start max-w-full text-left gap-[50px] text-darkslateblue-100">
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        {/* Header Section */}
        <div className="flex-1 relative top-[-50px] overflow-hidden">
          <img
            className="w-full h-[300px] mt-0 object-cover"
            alt="Header Image"
            src={header}
          />
        </div>

        {/* Profile Section */}
        <ProfilePart />
      </div>

      {/* Main content with campaigns and impact sections */}
      <div
        className="absolute top-[203px] left-[350px] w-[900px] flex flex-col justify-start gap-[21px] text-left text-5xl font-josefin-sans border-1.5 bg-white p-4 shadow-lg"
      >
        {/* Initiative Section */}
        <div className="flex flex-col justify-start gap-5 pl-8">
          <h2 className="text-xl font-bold">Initiative</h2>
          <p className="text-base text-gray-600">
            We are committed to making a difference in our communities through various campaigns and impact initiatives.
          </p>
        </div>

        {/* Campaign and Impact Tabs */}
        <div className="flex flex-row items-start justify-start gap-40 pl-8 text-lg">
          <h3
            className={`text-inherit font-semibold cursor-pointer ${
              activeTab === 'campaigns' ? 'border-b-2 border-solid border-black font-bold' : ''
            }`}
            onClick={() => handleTabClick('campaigns')}
          >
            Campaigns
          </h3>
          <h3
            className={`text-inherit font-normal text-darkgray cursor-pointer ${
              activeTab === 'impact' ? 'border-b-2 border-solid border-black font-bold' : ''
            }`}
            onClick={() => handleTabClick('impact')}
          >
            Impact
          </h3>
        </div>

        {/* Campaign and Impact Lists */}
        <div className="flex flex-col justify-start gap-[50px]">
          {activeTab === 'campaigns' && (
            <div className="box-border max-w-full h-[70px] py-2 gap-2 pr-0 pl-8">
             {campaigns.slice(0, 6).map(campaign => (
    <CampaignCardSh key={campaign._id} campaign={campaign} openPopup={openPopup} shape="rectangle" />
  ))}
            </div>
          )}
          {activeTab === 'impact' && (
            <div className="box-border max-w-full py-0 pr-0 pl-8">
              {/* Placeholder for Impact content */}
              Impact content goes here
            </div>
          )}
        </div>

      </div>
      <div className="h-[50px] "> <TeamComponent/></div>
    </section>

  );
};

export default SocialProfilePage;

