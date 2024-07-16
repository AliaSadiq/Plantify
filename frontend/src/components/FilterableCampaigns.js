// // FilterableCampaigns.js

// import React, { useState, useEffect } from 'react';
// import { FiFilter } from 'react-icons/fi';
// import axios from 'axios';
// import CampaignList from '../components/CampaignList';
// import FilterDropdown from '../components/FilterDropdown';

// const FilterableCampaigns = () => {
//   const [filter, setFilter] = useState('all');
//   const [campaigns, setCampaigns] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/campaigns');
//         setCampaigns(response.data.campaigns);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//         if (error.response) {
//           console.error('Error response:', error.response.data);
//         } else if (error.request) {
//           console.error('Error request:', error.request);
//         } else {
//           console.error('Error message:', error.message);
//         }
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//     setShowDropdown(false);
//   };

//   const handleEdit = (id) => {
//     // Implement edit functionality, e.g., redirect to edit page
//     console.log('Editing campaign with ID:', id);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/campaigns/${id}`);
//       // After successful deletion, update campaigns list
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
//         <FilterDropdown show={showDropdown} onFilterChange={handleFilterChange} />
//       </div>
//       <div className="overflow-y-auto max-h-[460px] w-[650px] pl-20">
//         <CampaignList campaigns={filteredCampaigns} onEdit={handleEdit} onDelete={handleDelete} />
//       </div>
//     </div>
//   );
// };

// export default FilterableCampaigns;
import React, { useState, useEffect } from 'react';
import { FiFilter } from 'react-icons/fi';
import axios from 'axios';
import CampaignList from './CampaignList';
import FilterDropdown from './FilterDropdown';

const FilterableCampaigns = () => {
  const [filter, setFilter] = useState('all');
  const [campaigns, setCampaigns] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

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

  const handleEdit = (id) => {
    console.log('Editing campaign with ID:', id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/campaigns/${id}`);
      const updatedCampaigns = campaigns.filter(campaign => campaign._id !== id);
      setCampaigns(updatedCampaigns);
      window.alert('Your campaign has been deleted.');
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
        <h5 className="text-sm font-bold py-2 px-4">Filter by:</h5>
        <button
          className="mx-2 py-1 px-4 rounded-full bg-gray-200"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FiFilter className="h-6 w-6" />
        </button>
        {showDropdown && (
          <FilterDropdown onFilterChange={handleFilterChange} />
        )}
      </div>
      <div className="overflow-y-auto max-h-[460px] w-[650px] pl-20">
        <CampaignList campaigns={filteredCampaigns} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default FilterableCampaigns;
