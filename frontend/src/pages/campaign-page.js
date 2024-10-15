import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CampaignCardSh from '../components/campaign-card-sh';
import CampaignHeaderCarousel from '../carousels/campaign-header-carousel';
import FilterDropdown from '../dropdowns/filter-dropdown';
import Pagination from '../components/pagination';
import SearchBar from '../components/search-bar';
import useCampaigns from '../hooks/useCampaigns'; // Hook with pagination
import useAllCampaigns from '../hooks/useAllCampaigns'; // Fetch all campaigns (for search)
import useRecentCampaigns from '../hooks/useRecentCampaigns'; // Fetch recent campaigns

const CampaignPage = () => {
  const [searchQuery, setSearchQuery] = useState(''); // For search functionality
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const [filteredCampaigns, setFilteredCampaigns] = useState([]); // For search filtering

  // Fetch campaigns with pagination using the custom hook
  const { campaigns, loading, error, totalPages } = useCampaigns(currentPage, 6);

  // Fetch all campaigns for search filtering (hook)
  const { allCampaigns } = useAllCampaigns();

  // Fetch recent campaigns (hook)
  const { recentCampaigns } = useRecentCampaigns();

  // Filter campaigns based on search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = allCampaigns.filter((campaign) =>
        campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCampaigns(filtered);
    } else {
      setFilteredCampaigns(campaigns); // Default to paginated campaigns when no search query
    }
  }, [searchQuery, allCampaigns, campaigns]);

  // Handle search queries passed from SearchBar
  const handleSearch = (query) => {
    setSearchQuery(query); // Update search query
    setCurrentPage(1); // Reset page to 1 when search query changes
  };

  return (
    <div>
      {/* Carousel */}
      <CampaignHeaderCarousel />

      <div className='my-10 gap-60 flex item-center justify-center'>
        <p className="text-xl font-bold text-gray-100 font-josefin-sans">
          List of all the campaigns
        </p>
        <div>
          <FilterDropdown />
        </div>
      </div>

      {/* Search Bar */}
      <div className='w-full text-gray-100 mb-4'>
        <SearchBar onSearch={handleSearch} placeholder={"Search Campaigns"} />
      </div>

      <div className='flex px-20 gap-8 justify-between'>
        <div className='flex flex-col pl-4 bg-navygreen-100 rounded-pl items-start w-[230px]'>
          <h2 className='mt-2 font-bold text-md ml-2'>Categories</h2>
          <ul className='flex flex-col gap-y-2 rounded-lg mt-4 text-sm'>
            <li className='p-2 hover:bg-navygreen-200 rounded-lg hover:font-semibold'>Campaigns</li>
            <li className='p-2 hover:bg-navygreen-200 rounded-lg hover:font-semibold'>Social Groups</li>
          </ul>
        </div>

        <div>
          {/* Display filtered or paginated campaigns */}
          {filteredCampaigns.length > 0 ? (
            <div className='grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
              {filteredCampaigns.map((campaign) => (
                <CampaignCardSh key={campaign._id} campaign={campaign} />
              ))}
            </div>
          ) : (
            <div className='text-center text-gray-200 text-mini font-semibold my-10'>
              No such campaign exists.
              <img className='mt-4 opacity-80' src='assets/plant.png' alt="No campaigns" />
            </div>
          )}

          {/* Pagination */}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>

        <div className='pr-4 max-w-[350px]'>
          <h2 className='mt-2 font-bold text-md ml-2'>Recents</h2>
          <div className='grid grid-cols-1'>
            {recentCampaigns.map((campaign) => (
              <div key={campaign._id} className='mt-4 flex flex-row gap-4'>
                <img
                  src={`/assets/${campaign.image}`}
                  alt='campaign pic'
                  className='w-20 h-20 object-cover rounded-md'
                />
                <div className='self-center flex flex-col'>
                  <h3 className='text-sm font-semibold'>{campaign.name}</h3>
                  <p className='text-sm font-josefin-sans text-gray-500'>{new Date(campaign.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;


