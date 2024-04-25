import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/search-bar';
import CampaignCardSh from '../components/campaign-card-sh';
import CampaignDetailsPopup from '../components/popups/campaign-details-popup';

const CampaignPage = () => {
  //api
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/campaigns');
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns();
  }, []);

  const openPopup = (campaign) => {
    setSelectedCampaign(campaign);
  };

  const closePopup = () => {
    setSelectedCampaign(null);
  };

  //jsx
  return (
    <div>
      <div className="flex flex-col items-center mt-40 ml-[50px]">
        <h1 className="text-3xl font-bold my-4">Campaigns</h1>
        <p className="text-gray-600 mb-4">List of all campaigns on Plantify</p>
        <SearchBar />
      </div>


      <div className="flex">
        <div className="flex flex-wrap justify-left gap-6 mt-40 mb-20 ml-20">
          {/* Render CampaignCardSh components for each campaign */}
          {campaigns.map(campaign => (
            <CampaignCardSh key={campaign._id} campaign={campaign} openPopup={openPopup}/>
          ))}
        </div>
        <div className="ml-auto w-80 p-4 bg-white shadow-md mt-40">
          <h2 className="text-lg font-semibold mb-4">Widget Title</h2>
          {/* New Products */}
          <div className="mb-4">
            <h3 className="text-base font-medium mb-2">New Products</h3>
            {/* Render new products here */}
          </div>
          {/* Latest Campaigns */}
          <div>
            <h3 className="text-base font-medium mb-2">Latest Campaigns</h3>
            {/* Render latest campaigns here */}
          </div>
        </div>
      </div>
      {selectedCampaign && (
        <CampaignDetailsPopup campaign={selectedCampaign} closePopup={closePopup} />
      )}
    </div>
  );
}

export default CampaignPage;
