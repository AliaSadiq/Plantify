// CampaignItem.js

import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

const CampaignItem = ({ campaign, onEdit, onDelete }) => {
  return (
    <li key={campaign._id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex">
      <div className="w-1/2 pr-4">
        <img src={`assest/{campaign.image}`} alt={campaign.name} className="w-40 h-40 object-cover rounded-lg" />
      </div>
      <div className="w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-1">{campaign.name}</h3>
          <p className="text-gray-600 mb-1">Location: {campaign.location}</p>
          <p className="text-gray-600 mb-1">Date: {new Date(campaign.startDate).toLocaleDateString()}</p>
          <p className="text-gray-600 mb-2">Donations: {campaign.targetDonation}</p>
        </div>
        <div className="flex items-center mt-4">
          <button onClick={() => onEdit(campaign._id)} className="text-blue-500 mr-2"><FiEdit /></button>
          <button onClick={() => onDelete(campaign._id)} className="text-red-500"><FiTrash /></button>
        </div>
      </div>
    </li>
  );
};

export default CampaignItem;
