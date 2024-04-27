import React from 'react';
import { Link } from 'react-router-dom';
import camp from '../../assets/campaign-card.jpeg';

const CampaignDetailsPopup = ({ campaign, closePopup }) => {
  if (!campaign) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
  <div className="backdrop-blur-sm backdrop-filter relative bg-navygreen-200 rounded-lg p-8 max-w-md z-10 bg-opacity-60 flex flex-col md:flex-row">
    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
      <img src={camp} alt="Campaign Image" className="w-40 h-40 object-cover rounded-lg" />
    </div>
    <div className="flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-4">{campaign.name}</h2>
        <div className="flex items-center mb-4">
          <button className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 mr-2">
            Donate
          </button>
          <div className="bg-gray-200 h-6 w-40 rounded-lg overflow-hidden">
            <div className="bg-blue-500 h-full w-1/2"></div>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Location:</span> {campaign.location}</p>
        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Start Date:</span> {campaign.start_date}</p>
        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">End Date:</span> {campaign.end_date}</p>
        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Description:</span> {campaign.description}</p>
      </div>
      <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Organized by:</span> {campaign.socialGroup.name}</p>
      <div className="flex justify-end">
        <button 
          className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>

  );
}

export default CampaignDetailsPopup;