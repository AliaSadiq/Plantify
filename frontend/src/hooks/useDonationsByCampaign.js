import { useState, useEffect } from 'react';

const useDonationsByCampaign = (campaignId) => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function to fetch donations
    const fetchDonations = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await fetch(`${apiUrl}/api/donations/campaign/${campaignId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch donations.');
        }
        const data = await response.json();
        setDonations(data); // Set the fetched donations data
      } catch (err) {
        setError(err.message); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    if (campaignId) {
      fetchDonations(); // Fetch donations only if campaignId is provided
    }
  }, [campaignId]);

  return { donations, loading, error }; // Return donations, loading state, and any errors
};

export default useDonationsByCampaign;
