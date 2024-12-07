
// import React, { useState, useEffect } from 'react';
// import { FiFilter, FiEdit, FiTrash } from 'react-icons/fi';
// import axios from 'axios';
// import EditCampaignForm from '../pages/editCampaign';
// import { useNavigate } from 'react-router-dom';
// const FilterableCampaigns = () => {
//   const [filter, setFilter] = useState('all');
//   const [campaigns, setCampaigns] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/campaigns');
//         setCampaigns(response.data.campaigns);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//     setShowDropdown(false);
//   };
//   const handleEdit = (id) => {
//     navigate(`/editCampaign/${id}`);
//   };
  

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/campaigns/${id}`);
//       const updatedCampaigns = campaigns.filter(campaign => campaign._id !== id);
//       setCampaigns(updatedCampaigns);
//     } catch (error) {
//       console.error('Error deleting campaign:', error);
//     }
//   };

//   const filteredCampaigns = campaigns.filter(campaign => {
//     if (filter === 'all') {
//       return true;
//     }
//     return campaign.status === filter;
//   });

//   return (
//     <div className="container mx-auto py-0">
//       <div className="flex justify-center mb-4 relative">
//         <h5 className="text-sm font-bold py-2 px-4 left-0">Filter by:</h5>
//         <button
//           className="mx-2 mr-96 justify-start py-1 px-4 rounded-full bg-gray-200"
//           onClick={() => setShowDropdown(!showDropdown)}
//         >
//           <FiFilter className="h-6 w-6" />
//         </button>
//         {showDropdown && (
//           <div className="absolute mr-96 top-full bg-white rounded-md shadow-lg py-1 mt-1 ">
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('all')}>All</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('ongoing')}>Ongoing</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('past')}>Past</button>
//             <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('future')}>Future</button>
//           </div>
//         )}
//       </div>
//       {selectedCampaign ? (
//   <EditCampaignForm campaign={selectedCampaign} />
// ) : (
//         <div className="overflow-y-auto max-h-[460px] w-[650px] pl-20">
//           <ul className="w-full">
//             {filteredCampaigns.map(campaign => (
//               <li key={campaign._id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex">
//                 <div className="w-1/2 pr-4">
//                   <img src={`/assest/${campaign.banner}`} alt={campaign.title} className="w-40 h-40 object-cover rounded-lg" />
//                 </div>
//                 <div className="w-1/2 flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl font-semibold mb-1">{campaign.title}</h3>
//                     <p className="text-gray-600 mb-1">Location: {campaign.location}</p>
//                     <p className="text-gray-600 mb-1">Date: {new Date(campaign.startDate).toLocaleDateString()}</p>
//                     <p className="text-gray-600 mb-2">Donations: {campaign.targetDonation}</p>
//                   </div>
//                   <div className="flex items-center mt-4">
//                     <button onClick={() => handleEdit(campaign)} className="text-blue-500 mr-2"><FiEdit /></button>
//                     <button onClick={() => handleDelete(campaign._id)} className="text-red-500"><FiTrash /></button>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterableCampaigns;

import React, { useState, useEffect } from 'react';
import { FiFilter, FiEdit, FiTrash } from 'react-icons/fi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EditCampaignForm from '../pages/editCampaign'; // Ensure this path is correct

const FilterableCampaigns = () => {
  const [filter, setFilter] = useState('all');
  const [campaigns, setCampaigns] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/campaigns');
        setCampaigns(response.data.campaigns);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns();
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setShowDropdown(false);
  };

  const handleEdit = (campaign) => {
    setSelectedCampaign(campaign);
    navigate(`/editCampaign/${campaign._id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/campaigns/${id}`);
      const updatedCampaigns = campaigns.filter(campaign => campaign._id !== id);
      setCampaigns(updatedCampaigns);
    } catch (error) {
      console.error('Error deleting campaign:', error);
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    if (filter === 'all') {
      return true;
    }
    return campaign.status === filter;
  });

  return (
    <div className="container mx-auto py-0">
      <div className="flex justify-center mb-4 relative">
        <h5 className="text-sm font-bold py-2 px-4 left-0">Filter by:</h5>
        <button
          className="mx-2 mr-96 justify-start py-1 px-4 rounded-full bg-gray-200"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FiFilter className="h-6 w-6" />
        </button>
        {showDropdown && (
          <div className="absolute mr-96 top-full bg-white rounded-md shadow-lg py-1 mt-1">
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('all')}>All</button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('ongoing')}>Ongoing</button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('past')}>Past</button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => handleFilterChange('future')}>Future</button>
          </div>
        )}
      </div>
      {selectedCampaign ? (
        <EditCampaignForm campaign={selectedCampaign} />
      ) : (
        <div className="overflow-y-auto max-h-[460px] w-[650px] pl-20">
          <ul className="w-full">
            {filteredCampaigns.map(campaign => (
              <li key={campaign._id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex">
                <div className="w-1/2 pr-4">
                  <img src={`/assest/${campaign.banner}`} alt={campaign.title} className="w-40 h-40 object-cover rounded-lg" />
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{campaign.title}</h3>
                    <p className="text-gray-600 mb-1">Location: {campaign.location}</p>
                    <p className="text-gray-600 mb-1">Date: {new Date(campaign.startDate).toLocaleDateString()}</p>
                    <p className="text-gray-600 mb-2">Donations: {campaign.targetDonation}</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <button onClick={() => handleEdit(campaign)} className="text-blue-500 mr-2"><FiEdit /></button>
                    <button onClick={() => handleDelete(campaign._id)} className="text-red-500"><FiTrash /></button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterableCampaigns;
