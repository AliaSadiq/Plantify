import { useState, useEffect } from 'react';
import axios from 'axios';

const useRecentCampaigns = () => {
  const [recentCampaigns, setRecentCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/campaigns/recent');
        setRecentCampaigns(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecentCampaigns();
  }, []);

  return { recentCampaigns, loading, error };
};

export default useRecentCampaigns;
