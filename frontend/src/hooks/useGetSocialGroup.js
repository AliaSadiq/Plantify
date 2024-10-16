import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetSocialGroup = ({ id }) => {
  const [socialGroup, setSocialGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSocialGroup = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/socialgroup/${id}`);
        setSocialGroup(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSocialGroup();
  }, []);

  return { socialGroup, loading, error };
};

export default useGetSocialGroup;
