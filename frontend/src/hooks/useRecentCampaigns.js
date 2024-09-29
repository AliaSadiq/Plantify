import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const useRecentCampaigns = () => {
  const [recentCampaigns, setRecentCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentCampaigns = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get(`${apiUrl}/api/campaigns`);
        const sortedCampaigns = response.data.sort((a, b) => moment(b.createdAt) - moment(a.createdAt));
        const topRecentCampaigns = sortedCampaigns.slice(0, 3);
        setRecentCampaigns(topRecentCampaigns);
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
