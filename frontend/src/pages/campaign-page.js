// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SearchBar from '../components/search-bar';
// import CampaignCardSh from '../components/campaign-card-sh';
// import CampaignDetailsPopup from '../popups/campaign-details-popup';
// import CampaignHeaderCarousel from '../carousels/campaign-header-carousel';
// import FilterDropdown from '../dropdowns/filter-dropdown';
// import Widget from '../components/widget';

// const CampaignPage = () => {
//   //api
//   const [campaigns, setCampaigns] = useState([]);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/campaigns');
//         setCampaigns(response.data);
//         console.log('campaigns: ' + response.data);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   const openPopup = (campaign) => {
//     setSelectedCampaign(campaign);
//   };

//   const closePopup = () => {
//     setSelectedCampaign(null);
//   };

//   //jsx
//   return (
//     <div>
//       <CampaignHeaderCarousel/>
//       <div className='flow-root mt-20 mb-10 ml-20 mr-[450px]'>
//         <p className="float-left text-xl font-bold text-gray-100 font-josefin-sans">List of all the campaigns</p>
//         <div className='float-right'>
//           <FilterDropdown/>
//         </div>
//         <div className='float-right mr-2'>
//           <SearchBar/>
//         </div>
//       </div>
//       <div className='flex'>
//         <div className='ml-20 grid grid-cols-1 md:gap-4 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10'>
//           {/* Render CampaignCardSh components for each campaign */}
//           {campaigns.map(campaign => (
//             <CampaignCardSh key={campaign._id} campaign={campaign} openPopup={openPopup}/>
//           ))}
//         </div>
//         <div className="mr-10">
//           <Widget />
//         </div>
//       </div>
      
//       {selectedCampaign && (
//         <CampaignDetailsPopup campaign={selectedCampaign} closePopup={closePopup} />
//       )}
//     </div>
//   );
// }

// export default CampaignPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/search-bar';
import CampaignCardSh from '../components/campaign-card-sh';
import CampaignDetailsPopup from '../popups/campaign-details-popup';
import CampaignHeaderCarousel from '../carousels/campaign-header-carousel';
import FilterDropdown from '../dropdowns/filter-dropdown';
import Widget from '../components/widget';

const CampaignPage = () => {
  //api
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // New state for search query

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/campaigns');
        setCampaigns(response.data);
        console.log('campaigns: ' + response.data);
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

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter campaigns based on search query
  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      <div className='flex'>
        <div className='ml-20 grid grid-cols-1 md:gap-4 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10'>
          {/* Render CampaignCardSh components for each filtered campaign */}
          {filteredCampaigns.map(campaign => (
            <CampaignCardSh key={campaign._id} campaign={campaign}/>
          ))}
        </div>
        <div className="justify-self-end">
          <Widget />
        </div>
      </div>
      {selectedCampaign && (
        <CampaignDetailsPopup campaign={selectedCampaign} closePopup={closePopup} />
      )}
    </div>
  );
}

export default CampaignPage;