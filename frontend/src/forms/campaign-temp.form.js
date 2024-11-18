import React, { useState } from 'react';
import CampaignMap from '../components/location-picker';

function CampaignCreationForm() {
    const [campaignData, setCampaignData] = useState({
        name: '',
        lat: null,
        lng: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCampaignData({ ...campaignData, [name]: value });
    };

    const handleLocationSelect = (lat, lng) => {
        setCampaignData({ ...campaignData, lat, lng });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Campaign Data:', campaignData);
        // Send campaignData to your backend API
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4">
            <div>
                <label htmlFor="name" className="block font-medium">Campaign Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={campaignData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div>
                <label className="block font-medium">Select Location:</label>
                <CampaignMap onLocationSelect={handleLocationSelect} />
            </div>
            <div>
                <p className="text-sm text-gray-600">
                    Selected Location: 
                    {campaignData.lat && campaignData.lng
                        ? ` Latitude: ${campaignData.lat}, Longitude: ${campaignData.lng}`
                        : ' None'}
                </p>
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Create Campaign
            </button>
        </form>
    );
}

export default CampaignCreationForm;
