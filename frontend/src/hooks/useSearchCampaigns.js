import { useState, useEffect } from 'react';
import axios from 'axios';

const useSearchCampaigns = (keyword) => {
  const [searchResults, setSearchResults] = useState([]); // Renamed to clarify purpose
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/campaigns/search?keyword=${keyword}`);
        setSearchResults(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (keyword) { // Only fetch if there's a keyword
      fetchSearchResults();
    }
  }, [keyword]); // Add keyword as dependency to re-fetch on search

  return { searchResults, loading, error };
};

export default useSearchCampaigns;
