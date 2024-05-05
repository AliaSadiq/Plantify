// import React, { useState } from 'react';

// const FilterableCampaigns = () => {
//   const [filter, setFilter] = useState('all');
//   const [campaigns, setCampaigns] = useState([
//     { id: 1, name: 'Campaign 1', status: 'ongoing' },
//     { id: 2, name: 'Campaign 2', status: 'past' },
//     { id: 3, name: 'Campaign 3', status: 'future' },
//     // Add more campaigns with different statuses
//   ]);

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//   };

//   const filteredCampaigns = campaigns.filter(campaign => {
//     if (filter === 'all') {
//       return true;
//     }
//     return campaign.status === filter;
//   });

//   return (
//     <div className="container mx-auto py-8">
//       <div className="flex justify-center mb-4">
//       <h5 className="text-sm font-bold py-2 px-4 ml-auto ">Filter by:</h5>
//         <button
//           className={`mx-2 py-1 px-14 rounded-3xl ${
//             filter === 'all' ? 'bg-gg text-black' : 'bg-gray-200'
//           }`}
//           onClick={() => handleFilterChange('all')}
//         >
//           All
//         </button>
//         <button
//           className={`mx-2 py-1 px-10 rounded-3xl ${
//             filter === 'ongoing' ? 'bg-gg text-black' : 'bg-gray-200'
//           }`}
//           onClick={() => handleFilterChange('ongoing')}
//         >
//           Ongoing
//         </button>
//         <button
//           className={`mx-2 py-1 px-14 rounded-3xl ${
//             filter === 'past' ? 'bg-gg text-black' : 'bg-gray-200'
//           }`}
//           onClick={() => handleFilterChange('past')}
//         >
//           Past
//         </button>
//         <button
//           className={`mx-2 py-1 px-12 rounded-3xl ${
//             filter === 'future' ? 'bg-gg text-black ' : 'bg-gray-200'
//           }`}
//           onClick={() => handleFilterChange('future')}
//         >
//           Future
//         </button>
//       </div>
//       <ul>
//         {filteredCampaigns.map(campaign => (
//           <li key={campaign.id} className="text-xl py-2">
//             {campaign.name} - {campaign.status}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FilterableCampaigns;
// import React, { useState } from 'react';

// const FilterableCampaigns = () => {
//   const [filter, setFilter] = useState('all');
//   const [campaigns, setCampaigns] = useState([
//     { 
//       id: 1, 
//       name: 'Campaign 1', 
//       status: 'ongoing', 
//       location: 'New York', 
//       date: 'April 30, 2024', 
//       image: 'campaign1.jpg', 
//       donations: 120 
//     },
//     { 
//       id: 2, 
//       name: 'Campaign 2', 
//       status: 'past', 
//       location: 'Los Angeles', 
//       date: 'March 15, 2024', 
//       image: 'campaign2.jpg', 
//       donations: 75 
//     },
//     { 
//       id: 3, 
//       name: 'Campaign 3', 
//       status: 'future', 
//       location: 'Chicago', 
//       date: 'June 10, 2024', 
//       image: 'campaign3.jpg', 
//       donations: 200 
//     },
//     // Add more campaigns with different statuses
//   ]);

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//   };

//   const filteredCampaigns = campaigns.filter(campaign => {
//     if (filter === 'all') {
//       return true;
//     }
//     return campaign.status === filter;
//   });

//   return (
//     <div className="container mx-auto py-8">
//       <div className="flex justify-center mb-4">
//         <h5 className="text-sm font-bold py-2 px-4 ml-auto">Filter by:</h5>
//         <button
//           className={`mx-2 py-1 px-14 rounded-3xl ${
//             filter === 'all' ? 'bg-gg text-black' : 'bg-gray-200'
//           }`}
//           onClick={() => handleFilterChange('all')}
//         >
//           All
//         </button>
//         <button
//           className={`mx-2 py-1 px-10 rounded-3xl ${
//             filter === 'ongoing' ? 'bg-gg text-black' : 'bg-gray-200'
//           }`}
//           onClick={() => handleFilterChange('ongoing')}
//         >
//           Ongoing
//         </button>
//         <button
//           className={`mx-2 py-1 px-14 rounded-3xl ${
//             filter === 'past' ? 'bg-gg text-black' : 'bg-gray-200'
//           }`}
//           onClick={() => handleFilterChange('past')}
//         >
//           Past
//         </button>
//         <button
//           className={`mx-2 py-1 px-12 rounded-3xl ${
//             filter === 'future' ? 'bg-gg text-black ' : 'bg-gray-200'
//           }`}
//           onClick={() => handleFilterChange('future')}
//         >
//           Future
//         </button>
//       </div>
//       <div className="overflow-y-auto max-h-96">
//         <ul className="w-full">
//           {filteredCampaigns.map(campaign => (
//             <li key={campaign.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
//               <img src={campaign.image} alt={campaign.name} className="w-full h-20 object-cover mb-2 rounded-lg" />
//               <h3 className="text-xl font-semibold mb-1">{campaign.name}</h3>
//               <p className="text-gray-600 mb-1">{campaign.location}</p>
//               <p className="text-gray-600 mb-1">Date: {campaign.date}</p>
//               <p className="text-gray-600 mb-2">Donations: {campaign.donations}</p>
//               <p className="text-sm text-gray-500">{campaign.status}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FilterableCampaigns;
import React, { useState } from 'react';
import Campaign1 from "../assest/Climate change-bro.png";
import Campaign2 from "../assest/planting tree-bro.png";
import Campaign3 from "../assest/Seeding-bro.png";
const FilterableCampaigns = () => {
  const [filter, setFilter] = useState('all');
  const [campaigns, setCampaigns] = useState([
    { 
      id: 1, 
      name: 'Campaign 1', 
      status: 'ongoing', 
      location: 'New York', 
      date: 'April 30, 2024', 
      image: Campaign1, 
      donations: 120 
    },
    { 
      id: 2, 
      name: 'Campaign 2', 
      status: 'past', 
      location: 'Los Angeles', 
      date: 'March 15, 2024', 
      image: Campaign2, 
      donations: 75 
    },
    { 
      id: 3, 
      name: 'Campaign 3', 
      status: 'future', 
      location: 'Chicago', 
      date: 'June 10, 2024', 
      image: Campaign3, 
      donations: 200 
    },
    // Add more campaigns with different statuses
  ]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    if (filter === 'all') {
      return true;
    }
    return campaign.status === filter;
  });

  return (
    <div className="container mx-auto py-0">
      <div className="flex justify-center mb-4">
        <h5 className="text-sm font-bold py-2 px-4 ml-auto">Filter by:</h5>
        <button
          className={`mx-2 py-1 px-14 rounded-3xl ${
            filter === 'all' ? 'bg-gg text-black' : 'bg-gray-200'
          }`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button
          className={`mx-2 py-1 px-10 rounded-3xl ${
            filter === 'ongoing' ? 'bg-gg text-black' : 'bg-gray-200'
          }`}
          onClick={() => handleFilterChange('ongoing')}
        >
          Ongoing
        </button>
        <button
          className={`mx-2 py-1 px-14 rounded-3xl ${
            filter === 'past' ? 'bg-gg text-black' : 'bg-gray-200'
          }`}
          onClick={() => handleFilterChange('past')}
        >
          Past
        </button>
        <button
          className={`mx-2 py-1 px-12 rounded-3xl ${
            filter === 'future' ? 'bg-gg text-black ' : 'bg-gray-200'
          }`}
          onClick={() => handleFilterChange('future')}
        >
          Future
        </button>
      </div>
      <div className="overflow-y-auto max-h-96 pl-20">
        <ul className="w-full">
          {filteredCampaigns.map(campaign => (
            <li key={campaign.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex">
              <div className="w-1/2 pr-4">
                <img src={campaign.image} alt={campaign.name} className=" w-40 h-40 object-cover rounded-lg" />
              </div>
              <div className="w-1/2">
                <h3 className="text-xl font-semibold mb-1">{campaign.name}</h3>
                <p className="text-gray-600 mb-1">{campaign.location}</p>
                <p className="text-gray-600 mb-1">Date: {campaign.date}</p>
                <p className="text-gray-600 mb-2">Donations: {campaign.donations}</p>
                <p className="text-sm text-gray-500">{campaign.status}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterableCampaigns;

