
import React, { useState, useEffect } from 'react';
import CampaignList from '../components/campaign-list';
import CampaignDetails from '../components/campaign-details';
import axios from 'axios';

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);

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

  return (
    <div className="flex gap-[1px]">
      <div className="w-[500px]">
        <CampaignList campaigns={campaigns} onSelectCampaign={handleSelectCampaign} />
      </div>
      <div className="flex-1 mt-40 mr-[20px]">
        <CampaignDetails campaign={campaigns.find(campaign => campaign.id === selectedCampaignId)} />
      </div>
    </div>
  );
}

export default CampaignPage;

