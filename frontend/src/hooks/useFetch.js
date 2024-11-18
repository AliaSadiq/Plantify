import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(0); // Used to trigger refetches

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios(url);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, [url]);

  // Refetch function to trigger data fetch manually
  const refetch = () => setTrigger((prev) => prev + 1);

  useEffect(() => {
    fetchData();
  }, [fetchData, trigger]); // trigger dependency to call fetchData on refetch

  return { data, loading, error, refetch };
};

export default useFetch;
