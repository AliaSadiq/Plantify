// Assuming you're using React for your frontend application
import React, { useState, useEffect } from 'react';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    fetch('/api/campaigns')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCampaigns(data); // Set the fetched campaigns in state
      })
      .catch(error => {
        console.error('There was a problem fetching the campaign data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once, on component mount

  return (
    <div>
      {/* Render your campaign data here */}
      {campaigns.map(campaign => (
        <div key={campaign._id}>
          <h3>{campaign.name}</h3>
          {/* Render other campaign details */}
        </div>
      ))}
    </div>
  );
};

export default CampaignList;