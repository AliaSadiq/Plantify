import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchSocialGroupCount = () => {
  const [scount, setsCount] = useState(null);
  const [sloading, setsLoading] = useState(true);
  const [serror, setsError] = useState(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        setsLoading(true);
        const response = await axios.get('BACKEND_URL/api/socialgroup/count');
        setsCount(response.data.count);
        setsLoading(false);
      } catch (err) {
        setsError(err.message);
        setsLoading(false);
      }
    };

    fetchCount();
  }, []);

  return { scount, sloading, serror };
};

export default useFetchSocialGroupCount;
