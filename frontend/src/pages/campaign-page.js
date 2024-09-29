

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CampaignCardSh from '../components/campaign-card-sh';
import CampaignDetailsPopup from '../popups/campaign-details-popup';
import CampaignHeaderCarousel from '../carousels/campaign-header-carousel';
import FilterDropdown from '../dropdowns/filter-dropdown';
import moment from 'moment';
import Pagination from '../components/pagination'; // Custom pagination component

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [recentCampaigns, setRecentCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const [totalPages, setTotalPages] = useState(1); // Total number of pages
  const [searchQuery, setSearchQuery] = useState(''); // For search functionality
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  // Fetch campaigns with pagination and search query
  const fetchCampaigns = async (page = 1, query = '') => {
    try {
      const response = await axios.get(`${apiUrl}/api/campaigns?page=${page}&limit=6&search=${query}`);
      setCampaigns(response.data.campaigns);
      setFilteredCampaigns(response.data.campaigns);
      setTotalPages(response.data.totalPages); // Assuming backend sends total pages

      // Sort and set recent campaigns (if needed)
      const sortedCampaigns = response.data.campaigns.sort((a, b) => moment(b.createdAt) - moment(a.createdAt));
      const topRecentCampaigns = sortedCampaigns.slice(0, 3);
      setRecentCampaigns(topRecentCampaigns);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
    }
  };

  useEffect(() => {
    fetchCampaigns(currentPage, searchQuery);
  }, [currentPage, searchQuery]); // Refetch when page or search query changes

  const openPopup = (campaign) => {
    setSelectedCampaign(campaign);
  };

  const closePopup = () => {
    setSelectedCampaign(null);
  };

  // Handle search queries passed from SearchBar
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset page to 1 when search query changes
  };

  return (
    <div>
      {/* Carousel */}
      <CampaignHeaderCarousel campaigns={campaigns} setFilteredCampaigns={setFilteredCampaigns} onSearch={handleSearch} />
      <div className='my-10 gap-60 flex item-center justify-center'>
        <p className="text-xl font-bold text-gray-100 font-josefin-sans">
          List of all the campaigns
        </p>
        <div className=''>
          <FilterDropdown />
        </div>
      </div>
      <div className='flex px-20 gap-8 justify-between'>
        <div className='flex flex-col pl-4 bg-navygreen-100 rounded-pl items-start w-[230px]'>
          <h2 className='mt-2 font-bold text-md ml-2'>Categories</h2>
          <ul className='flex flex-col gap-y-2 rounded-lg mt-4 text-sm'>
            <li className='p-2 hover:bg-navygreen-200 rounded-lg hover:font-semibold'>Donation Campaigns</li>
            <li className='p-2 hover:bg-navygreen-200 rounded-lg hover:font-semibold'>Awareness Campaigns</li>
          </ul>
        </div>
        <div>
          {filteredCampaigns.length > 0 ? (
            <div className='grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
              {filteredCampaigns.map(campaign => (
                <CampaignCardSh key={campaign._id} campaign={campaign} />
              ))}
            </div>
          ) : (
            <div className='text-center text-gray-200 text-mini font-semibold my-10'>
              No such campaign exists.
              <img className='mt-4 opacity-80' src='assets/plant.png' />
            </div>
          )}
          {/* Pagination */}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
        <div className='pr-4 max-w-[350px]'>
          <h2 className='mt-2 font-bold text-md ml-2'>Recents</h2>
          <div className='grid grid-cols-1'>
            {recentCampaigns.map(campaign => (
              <div key={campaign._id} className='mt-4 flex flex-row gap-4'>
                <img src={`/assets/${campaign.image}`} alt='campaign pic' className='w-20 h-20 object-cover rounded-md' />
                <div className='self-center flex flex-col'>
                  <h3 className='text-sm font-semibold'>{campaign.name}</h3>
                  <p className='text-sm font-josefin-sans text-gray-500'>{moment(campaign.createdAt).format('DD-MM-YYYY')}</p>
                </div>
              </div>
            ))}
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
