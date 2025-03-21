import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCampaignCount = () => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        setLoading(true);
        const response = await axios.get('BACKEND_URL/api/campaigns/count');
        setCount(response.data.count);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  return { count, loading, error };
};

export default useFetchCampaignCount;
