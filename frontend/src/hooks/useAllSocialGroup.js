import { useState, useEffect } from 'react';
import axios from 'axios';

const useAllSocialGroups = () => {
  const [allSocialGroups, setAllSocialGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSocialGroups = async () => {
      try {
        const response = await axios.get('BACKEND_URL/api/socialgroup/');
        setAllSocialGroups(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load social groups.');
        setLoading(false);
      }
    };

    fetchSocialGroups();
  }, []);

  return { allSocialGroups, loading, error };
};

export default useAllSocialGroups;
