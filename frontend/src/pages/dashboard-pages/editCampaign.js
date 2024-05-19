import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditCampaign = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/campaigns/${id}`);
        setCampaign(response.data);
      } catch (error) {
        console.error('Error fetching campaign:', error);
      }
    };

    fetchCampaign();
  }, [id]);

  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Campaign</h1>
      <form>
        {/* Form fields with campaign data */}
        {/* Example: */}
        <input type="text" value={campaign.name} onChange={(e) => setCampaign({ ...campaign, name: e.target.value })} />
        {/* Other form fields */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditCampaign;
