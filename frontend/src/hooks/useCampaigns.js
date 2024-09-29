import { useState, useEffect } from 'react';
import axios from 'axios';

const useCampaigns = (page, limit) => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
       
        const response = await axios.get(`${apiUrl}/api/campaigns?page=${page}&limit=${limit}`);
        setCampaigns(response.data.campaigns);  // Assuming API returns campaigns and total pages
        setTotalPages(response.data.totalPages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
  }, [page, limit,apiUrl]);

  return { campaigns, loading, error, totalPages };
};

export default useCampaigns;
