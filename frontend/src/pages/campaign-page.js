// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import CampaignCardSh from '../components/campaign-card-sh';
// import CampaignHeaderCarousel from '../carousels/campaign-header-carousel';
// import FilterDropdown from '../dropdowns/filter-dropdown';
// import Pagination from '../components/pagination';
// import SearchBar from '../components/search-bar';
// import useCampaigns from '../hooks/useCampaigns'; // Hook with pagination
// import useAllCampaigns from '../hooks/useAllCampaigns'; // Fetch all campaigns (for search)
// import useRecentCampaigns from '../hooks/useRecentCampaigns'; // Fetch recent campaigns

// const CampaignPage = () => {
//   const [searchQuery, setSearchQuery] = useState(''); // For search functionality
//   const [currentPage, setCurrentPage] = useState(1); // For pagination
//   const [filteredCampaigns, setFilteredCampaigns] = useState([]); // For search filtering

//   // Fetch campaigns with pagination using the custom hook
//   const { campaigns, loading, error, totalPages } = useCampaigns(currentPage, 6);

//   // Fetch all campaigns for search filtering (hook)
//   const { allCampaigns } = useAllCampaigns();

//   // Fetch recent campaigns (hook)
//   const { recentCampaigns } = useRecentCampaigns();

//   // Filter campaigns based on search query
//   useEffect(() => {
//     if (searchQuery) {
//       const filtered = allCampaigns.filter((campaign) =>
//         campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredCampaigns(filtered);
//     } else {
//       setFilteredCampaigns(campaigns); // Default to paginated campaigns when no search query
//     }
//   }, [searchQuery, allCampaigns, campaigns]);

//   // Handle search queries passed from SearchBar
//   const handleSearch = (query) => {
//     setSearchQuery(query); // Update search query
//     setCurrentPage(1); // Reset page to 1 when search query changes
//   };

//   return (
//     <div>
//       {/* Carousel */}
//       <CampaignHeaderCarousel />

//       <div className='my-10 gap-60 flex item-center justify-center'>
//         <p className="text-xl font-bold text-gray-100 font-josefin-sans">
//           List of all the campaigns
//         </p>
//         <div>
//           <FilterDropdown />
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className='w-full text-gray-100 mb-4'>
//         <SearchBar onSearch={handleSearch} placeholder={"Search Campaigns"} />
//       </div>

//       <div className='flex px-20 gap-8 justify-between'>
//         <div className='flex flex-col pl-4 bg-navygreen-100 rounded-pl items-start w-[230px]'>
//           <h2 className='mt-2 font-bold text-md ml-2'>Categories</h2>
//           <ul className='flex flex-col gap-y-2 rounded-lg mt-4 text-sm'>
//             <li className='p-2 hover:bg-navygreen-200 rounded-lg hover:font-semibold'>Campaigns</li>
//             <li className='p-2 hover:bg-navygreen-200 rounded-lg hover:font-semibold'>Social Groups</li>
//           </ul>
//         </div>

//         <div>
//           {/* Display filtered or paginated campaigns */}
//           {filteredCampaigns.length > 0 ? (
//             <div className='grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
//               {filteredCampaigns.map((campaign) => (
//                 <CampaignCardSh key={campaign._id} campaign={campaign} />
//               ))}
//             </div>
//           ) : (
//             <div className='text-center text-gray-200 text-mini font-semibold my-10'>
//               No such campaign exists.
//               <img className='mt-4 opacity-80' src='assets/plant.png' alt="No campaigns" />
//             </div>
//           )}

//           {/* Pagination */}
//           <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
//         </div>

//         <div className='pr-4 max-w-[350px]'>
//           <h2 className='mt-2 font-bold text-md ml-2'>Recents</h2>
//           <div className='grid grid-cols-1'>
//             {recentCampaigns.map((campaign) => (
//               <div key={campaign._id} className='mt-4 flex flex-row gap-4'>
//                 <img
//                   src={`/assets/${campaign.image}`}
//                   alt='campaign pic'
//                   className='w-20 h-20 object-cover rounded-md'
//                 />
//                 <div className='self-center flex flex-col'>
//                   <h3 className='text-sm font-semibold'>{campaign.name}</h3>
//                   <p className='text-sm font-josefin-sans text-gray-500'>{new Date(campaign.createdAt).toLocaleDateString()}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CampaignPage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CampaignCardSh from '../components/campaign-card-sh';
import SocialProfileCard from '../components/social-profile-card';
import CampaignHeaderCarousel from '../carousels/campaign-header-carousel';
import FilterDropdown from '../dropdowns/filter-dropdown';
import Pagination from '../components/pagination';
import SearchBar from '../components/search-bar';
import useCampaigns from '../hooks/useCampaigns';
import useAllCampaigns from '../hooks/useAllCampaigns';
import useRecentCampaigns from '../hooks/useRecentCampaigns';
import useAllSocialGroups from '../hooks/useAllSocialGroup';

const CampaignPage = () => {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [category, setCategory] = useState('campaigns'); 

  const { campaigns, loading: loadingCampaigns, error: errorCampaigns, totalPages: campaignTotalPages } = useCampaigns(currentPage, 6);
  const { allCampaigns } = useAllCampaigns();
  const { allSocialGroups, loading: loadingSocialGroups, error: errorSocialGroups } = useAllSocialGroups();
  const { recentCampaigns } = useRecentCampaigns();

  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [filteredSocialGroups, setFilteredSocialGroups] = useState([]);
  const [totalPages, setTotalPages] = useState(campaignTotalPages); // State for total pages

  useEffect(() => {
    if (searchQuery) {
      if (category === 'campaigns') {
        const filtered = allCampaigns.filter(campaign =>
          campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCampaigns(filtered);
        setTotalPages(Math.ceil(filtered.length / 6)); // Calculate total pages for filtered campaigns
      } else if (category === 'socialgroups') {
        const filtered = allSocialGroups.filter(group =>
          group.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredSocialGroups(filtered);
        setTotalPages(Math.ceil(filtered.length / 6)); // Calculate total pages for filtered social groups
      }
    } else {
      if (category === 'campaigns') {
        setFilteredCampaigns(campaigns);
        setTotalPages(campaignTotalPages);
      } else if (category === 'socialgroups') {
        const paginatedSocialGroups = allSocialGroups.slice((currentPage - 1) * 6, currentPage * 6); // Paginate social groups
        setFilteredSocialGroups(paginatedSocialGroups);
        setTotalPages(Math.ceil(allSocialGroups.length / 6)); // Set total pages for social groups
      }
    }
  }, [searchQuery, category, allCampaigns, campaigns, allSocialGroups, currentPage]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); 
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div>
      <CampaignHeaderCarousel />

      <div className="my-10 gap-60 flex item-center justify-center">
        <p className="text-xl font-bold text-gray-100 font-josefin-sans">
          List of all the {category === 'campaigns' ? 'campaigns' : 'social groups'}
        </p>
        <div>
          <FilterDropdown />
        </div>
      </div>

      <div className="w-full text-gray-100 mb-4">
        <SearchBar onSearch={handleSearch} placeholder={`Search ${category === 'campaigns' ? 'Campaigns' : 'Social Groups'}`} />
      </div>

      <div className="flex px-20 gap-8 justify-between">
        {/* Fun and Plant-Related Categories Corner */}
        <div className='flex flex-col items-start w-[230px] bg-white rounded-lg p-4'>
          <h2 className='mt-2 font-bold text-lg ml-2 text-navygreen-500'>
            Categories
          </h2>
          <ul className='flex flex-col gap-2 mt-4 text-sm'>
            <li
              onClick={() => handleCategoryChange('campaigns')}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-2 
                ${category === 'campaigns' ? 'bg-navygreen-500 text-white' : 'hover:bg-navygreen-100 text-navygreen-500'}`}
            >
              <img
                src='/assets/leaf-icon.png'
                alt='Campaign Icon'
                className='w-5 h-5'
              />
              Campaigns
            </li>
            <li
              onClick={() => handleCategoryChange('socialgroups')}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-2 
                ${category === 'socialgroups' ? 'bg-navygreen-500 text-white' : 'hover:bg-navygreen-100 text-navygreen-500'}`}
            >
              <img
                src='/assets/flower-icon.png'
                alt='Social Group Icon'
                className='w-5 h-5'
              />
              Social Groups
            </li>
          </ul>
        </div>

        <div>
          {/* Render Campaigns or Social Groups based on category */}
          {category === 'campaigns' ? (
            filteredCampaigns.length > 0 ? (
              <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {filteredCampaigns.map((campaign) => (
                  <CampaignCardSh key={campaign._id} campaign={campaign} />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-200 text-mini font-semibold my-10">
                No such campaign exists.
                <img className="mt-4 opacity-80" src="assets/plant.png" alt="No campaigns" />
              </div>
            )
          ) : (
            filteredSocialGroups.length > 0 ? (
              <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {filteredSocialGroups.map((group) => (
                  <SocialProfileCard key={group._id} profileData={group} />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-200 text-mini font-semibold my-10">
                No such social group exists.
                <img className="mt-4 opacity-80" src="assets/plant.png" alt="No groups" />
              </div>
            )
          )}

          {/* Pagination applied to both campaigns and social groups */}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>

        <div className="pr-4 max-w-[350px]">
          <h2 className="mt-2 font-bold text-md ml-2">Recents</h2>
          <div className="grid grid-cols-1">
            {recentCampaigns.map((campaign) => (
              <div key={campaign._id} className="mt-4 flex flex-row gap-4">
                <img
                  src={`/assets/${campaign.image}`}
                  alt="campaign pic"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="self-center flex flex-col">
                  <h3 className="text-sm font-semibold">{campaign.name}</h3>
                  <p className="text-sm font-josefin-sans text-gray-500">{new Date(campaign.createdAt).toLocaleDateString()}</p>
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
