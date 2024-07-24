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
import CampaignCardSh from '../components/campaign-card-sh';
import CampaignDetailsPopup from '../popups/campaign-details-popup';
import CampaignHeaderCarousel from '../carousels/campaign-header-carousel';
import FilterDropdown from '../dropdowns/filter-dropdown';
import Widget from '../components/widget';

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/campaigns');
        setCampaigns(response.data);
        setFilteredCampaigns(response.data);
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

  return (
    <div>
      {/* Carousel */}
      <CampaignHeaderCarousel campaigns={campaigns} setFilteredCampaigns={setFilteredCampaigns} />
      <div className='my-10 gap-60 flex item-center justify-center'>
          <p className="text-xl font-bold text-gray-100 font-josefin-sans">
            List of all the campaigns
          </p>
          <div className=''>
            <FilterDropdown/>
          </div>
      </div>
      <div className='flex px-20 gap-8 justify-between'>
        <div className='flex flex-col pl-4 bg-navygreen-100 rounded-pl items-start w-[230px]'>
          <h2 className='mt-2 font-bold text-md ml-2'>Categories</h2>
          <ul className='flex flex-col gap-y-2 rounded-lg mt-4 text-sm'>
            <li className='p-2 hover:bg-navygreen-200 rounded-lg hover:font-semibold'>Shabeeh Campaigns</li>
            <li className='p-2 hover:bg-navygreen-200 rounded-lg hover:font-semibold'>Alia Campaigns</li>
            <li className='p-2 hover:bg-navygreen-200 rounded-lg hover:font-semibold'>Farwa Campaigns</li>
          </ul>
        </div>
        <div className='grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
          {filteredCampaigns.map(campaign => (
            <CampaignCardSh key={campaign._id} campaign={campaign} />
          ))}
        </div>
        {/* <div className="justify-self-end">
          <Widget />
        </div> */}
        <div className='pr-4 max-w-[350px]'>
          <h2 className='mt-2 font-bold text-md ml-2'>Recents</h2>
          <div className='grid grid-cols-1'>
            <div className='mt-4 flex flex-row gap-4'>
                <img src={'/assets/campaign-5.jpeg'} alt='campaign pic' className='w-20 h-20'></img>
                <div className='self-center flex flex-col'>
                    <h3 className='text-sm font-semibold'>Sindh Campaign by Riphah Green Club</h3>
                    <p className='text-sm font-josefin-sans text-gray-500'>20-4-2024</p>
                </div>
            </div>
            <div className='mt-4 flex flex-row gap-4'>
                <img src={'/assets/campaign-5.jpeg'} alt='campaign pic' className='w-20 h-20'></img>
                <div className='self-center flex flex-col'>
                    <h3 className='text-sm font-semibold'>Sindh Campaign by Riphah Green Club</h3>
                    <p className='text-sm font-josefin-sans text-gray-500'>20-4-2024</p>
                </div>
            </div>
            <div className='mt-4 flex flex-row gap-4'>
                <img src={'/assets/campaign-5.jpeg'} alt='campaign pic' className='w-20 h-20'></img>
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