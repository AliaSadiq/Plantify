import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterableCampaigns = () => {
  const [filter, setFilter] = useState('all');
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/campaigns'); // Replace '/api/campaigns' with your actual backend API endpoint
        setCampaigns(response.data.campaigns);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns();
  }, []); // Empty dependency array ensures this effect runs only once, equivalent to componentDidMount

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    if (filter === 'all') {
      return true;
    }
    return campaign.Status === filter;
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
      <img src={campaign.image} alt={campaign.name} className="w-40 h-40 object-cover rounded-lg" />
    </div>
    <div className="w-1/2 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-1">{campaign.name}</h3>
        <p className="text-gray-600 mb-1">{campaign.location}</p>
        <p className="text-gray-600 mb-1">Date: {new Date(campaign.Date).toLocaleDateString()}</p>
        <p className="text-gray-600 mb-2">Donations: {campaign.donations}</p>
        <p className="text-sm text-gray-500">{campaign.status}</p>
       
      </div>
      
      <div className="flex justify-end">
      <Link to={`/editCampaign`}>
  <button className="flex items-center text-gray-500 mr-2">
    <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM19 21a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h4l2-2h3a2 2 0 012 2v2l2 2v3a2 2 0 01-2 2h-1"></path>
    </svg>
    Edit
  </button>
</Link>

        {/* Delete button */}
        <button className="flex items-center text-red-500 mr-2">
          <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          Delete
        </button>
        {/* View button */}
        <Link className="nav-link" to={"/viewCampaign.js"}>
        <button className="flex items-center text-gray-500">
          <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
          View
        </button>
        </Link>
      </div>
    </div>
  </li>
))}

        </ul>
      </div>
    </div>
  );
};

export default FilterableCampaigns;
