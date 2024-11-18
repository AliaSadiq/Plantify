import { useState, useEffect } from 'react';
import axios from 'axios';

const useCount = (url) => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get(url);
        setCount(response.data.count); // Assumes count is in `response.data.count`
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, [url]);

  return { count, loading, error };
};

export default useCount;
