import { useState, useEffect } from 'react';
import axios from 'axios';

const useAllCampaigns = () => {
  const [allCampaigns, setAllCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('https://plantify-backend.vercel.app/api/campaigns/all');
        setAllCampaigns(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load campaigns.');
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return { allCampaigns, loading, error };
};

export default useAllCampaigns;