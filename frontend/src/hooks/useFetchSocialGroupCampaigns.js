import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchSocialGroupCampaigns = (id) => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get(`${apiUrl}/api/campaigns/socialgroup/${id}`);
        console.log("Campaigns fetched for socialId:", id);
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCampaigns();
    }
  }, [id]);

  return { campaigns, loading, error };
};

export default useFetchSocialGroupCampaigns;
