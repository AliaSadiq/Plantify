// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import axios for making HTTP requests
// import Profile from './profile-card';
// import TeamCarousel from './my-team';
// import CampaignCard from '../components/campaign-card-sh';
// import { useParams } from 'react-router-dom';

// function SocialProfilePage() {
//   const { id } = useParams();
//   console.log(id);
//   const [campaigns, setCampaigns] = useState([]); // To store fetched campaigns
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [activeTab, setActiveTab] = useState('campaigns'); // To manage active tab

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/campaigns/${id}`); // Replace with your API endpoint
//         setCampaigns(response.data); // Set the fetched campaigns
//       } catch (error) {
//         console.error('Error fetching campaigns:', error); // Handle error
//       }
//     };

//     fetchCampaigns(); // Call the fetch function
//   }, [id]); // Add 'id' to the dependency array

//   const openPopup = (campaign) => {
//     setSelectedCampaign(campaign);
//   };

//   const closePopup = () => {
//     setSelectedCampaign(null);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className='w-full bg-white mt-[110px]'>
//       <Profile />
//       <div className='w-[1100px] mt-[50px] bg-white p-4 mx-auto'>
//         <div className="flex flex-col xs:flex-row xs:items-start xs:justify-start gap-4 xs:gap-8 pl-4 xs:pl-8 text-lg">
//           <h3
//             className={`text-inherit font-josefin-sans font-semibold cursor-pointer ${activeTab === 'campaigns' ? 'border-b-2 border-solid border-black font-bold' : ''}`}
//             onClick={() => handleTabClick('campaigns')}
//           >
//             Campaigns
//           </h3>
//           <h3
//             className={`text-inherit font-josefin-sans  font-normal text-darkgray cursor-pointer ${activeTab === 'impact' ? 'border-b-2 border-solid border-black font-bold' : ''}`}
//             onClick={() => handleTabClick('impact')}
//           >
//             Impact
//           </h3>
//         </div>
//         <div className="flex flex-col justify-start gap-[30px] mt-10">
//           {activeTab === 'campaigns' && (
//             <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mb-10 gap-y-2">
//               {campaigns && campaigns.slice(0, 6).map(campaign => (
//                 <CampaignCard key={campaign._id} campaign={campaign} openPopup={openPopup} />
//               ))}
//             </div>
//           )}
//           {activeTab === 'impact' && (
//             <div className="box-border max-w-full py-0 pr-0 pl-8">
//               {/* Placeholder for Impact content */}
//               Work in progress........
//             </div>
//           )}
//         </div>
//         <div className="w-full xs:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto p-4">
//           <TeamCarousel />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SocialProfilePage;

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useParams } from 'react-router-dom';
import CampaignCard from '../components/campaign-card-sh';
import Profile from './profile-card';
import TeamCarousel from './my-team';

function SocialProfilePage() {
  const { id } = useParams();
  console.log(id);
  const [campaigns, setCampaigns] = useState([]); // To store fetched campaigns
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [activeTab, setActiveTab] = useState('campaigns'); // To manage active tab

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/campaigns/socialgroup/${id}`); // Correctly match the backend route // Use the correct route
        console.log("Campaigns fetched for socialId:", id);
        setCampaigns(response.data); // Set the fetched campaigns
      } catch (error) {
        console.error('Error fetching campaigns:', error); // Handle error
      }
    };

    fetchCampaigns(); // Call the fetch function
  }, [id]); // Add 'id' to the dependency array

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
    <div className='w-full bg-white mt-[110px]'>
      <Profile />
      <div className='w-[1100px] mt-[50px] bg-white p-4 mx-auto'>
        <div className="flex flex-col xs:flex-row xs:items-start xs:justify-start gap-4 xs:gap-8 pl-4 xs:pl-8 text-lg">
          <h3
            className={`text-inherit font-josefin-sans font-semibold cursor-pointer ${
              activeTab === 'campaigns' ? 'border-b-2 border-solid border-black font-bold' : ''
            }`}
            onClick={() => handleTabClick('campaigns')}
          >
            Campaigns
          </h3>
          <h3
            className={`text-inherit font-josefin-sans  font-normal text-darkgray cursor-pointer ${
              activeTab === 'impact' ? 'border-b-2 border-solid border-black font-bold' : ''
            }`}
            onClick={() => handleTabClick('impact')}
          >
            Impact
          </h3>
        </div>

        <div className="flex flex-col justify-start gap-[30px] mt-10">
          {activeTab === 'campaigns' && (
            <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mb-10 gap-y-2">
              {campaigns.slice(0, 6).map(campaign => (
                <CampaignCard key={campaign._id} campaign={campaign} openPopup={openPopup} />
              ))}
            </div>
          )}
          {activeTab === 'impact' && (
            <div className="box-border max-w-full py-0 pr-0 pl-8">
              {/* Placeholder for Impact content */}
              Work in progress........
            </div>
          )}
        </div>
        <div className="w-full xs:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto p-4">
          <TeamCarousel />
        </div>
      </div>
    </div>
  );
}

export default SocialProfilePage;