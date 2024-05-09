import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/search-bar';
import CampaignCardSh from '../components/campaign-card-sh';
import CampaignDetailsPopup from '../components/popups/campaign-details-popup';
import widget from '../assets/campaign.jpg';
import CampaignHeaderCarousel from '../components/carousels/campaign-header-carousel';
import FilterDropdown from '../components/dropdowns/filter-dropdown';

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
      <CampaignHeaderCarousel/>
      <div className='flow-root mt-20 mb-10 ml-20 mr-[450px]'>
        <p className="float-left text-xl font-bold text-gray-100 font-josefin-sans">List of all the campaigns</p>
        <div className='float-right'>
          <FilterDropdown/>
        </div>
        <div className='float-right mr-2'>
          <SearchBar/>
        </div>
      </div>
      <div className='flex flex-row gap-4'>
        <div className='ml-20 grid grid-cols-3 gap-4 mb-10'>
          {/* Render CampaignCardSh components for each campaign */}
          {campaigns.map(campaign => (
            <CampaignCardSh key={campaign._id} campaign={campaign} openPopup={openPopup}/>
          ))}
        </div>
        <div className='max-w-96 h-full drop-shadow-sm px-8 mr-10'>
          <p className='text-bold text-lg text-gray-100 font-josefin-sans mb-10'>RECENT CAMPAIGNS</p>
          <div className='grid grid-cols-1 gap-y-4'>
            <div className='flex flex-row gap-6'>
              <img src={widget} className='w-20 h-20'></img>
              <div className='self-center flex flex-col'>
                <h3 className='text-sm font-semibold'>Sindh Campaign by Riphah Green Club</h3>
                <p className='text-sm font-josefin-sans text-gray-500'>20-4-2024</p>
              </div>
            </div>
            <div className='flex flex-row gap-6'>
              <img src={widget} className='w-20 h-20'></img>
              <div className='self-center flex flex-col'>
                <h3 className='text-sm font-semibold'>Sindh Campaign by Riphah Green Club</h3>
                <p className='text-sm font-josefin-sans text-gray-500'>20-4-2024</p>
              </div>
            </div>
            <div className='flex flex-row gap-6'>
              <img src={widget} className='w-20 h-20'></img>
              <div className='self-center flex flex-col'>
                <h3 className='text-sm font-semibold'>Sindh Campaign by Riphah Green Club</h3>
                <p className='text-sm font-josefin-sans text-gray-500'>20-4-2024</p>
              </div>
            </div>
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
