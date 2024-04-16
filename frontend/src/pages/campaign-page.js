import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CampaignList from '../components/campaign-list';
import CampaignDetails from '../components/campaign-details';
import SearchBar from '../components/search-bar';

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/campaigns');
        setCampaigns(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const handleSelectCampaign = (campaignId) => {
    setSelectedCampaignId(campaignId);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("campaigns before passing: ", campaigns)
  return (
    <div>
      <div className="flex flex-col items-center mt-40 ml-[50px]">
        <h1 className="text-3xl font-bold my-4">Campaigns</h1>
        <p className="text-gray-600 mb-4">List of all campaigns on Plantify</p>
        <SearchBar onSearch={handleSearch} />
      </div>


      <div className="flex gap-4 mt-4">
        <div className="w-[500px] mt-20">
          <CampaignList campaigns={filteredCampaigns} onSelectCampaign={handleSelectCampaign} />
        </div>
        <div className="flex-1 mt-20 mr-[50px]">
          <CampaignDetails campaign={campaigns.find(campaign => campaign._id === selectedCampaignId)} />
        </div>
      </div>
    </div>
  );
}

export default CampaignPage;
