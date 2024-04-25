import React from 'react';

const CampaignDetailsPopup = ({ campaign, closePopup }) => {
  if (!campaign) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none" 
          onClick={closePopup}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold mb-4">{campaign.name}</h2>
        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Location:</span> {campaign.location}</p>
        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Start Date:</span> {campaign.start_date}</p>
        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">End Date:</span> {campaign.end_date}</p>
        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Description:</span> {campaign.description}</p>
        <div className="flex justify-end mt-4">
          <button 
            className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampaignDetailsPopup;