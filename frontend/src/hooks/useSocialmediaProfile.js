// useProfile.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useProfile = (userId) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/social-media/profile?userId=${userId}`);

        console.log('Fetched profile data:', response.data); // Add this line to inspect data
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProfile();
  }, [userId]);

  return { profile, loading, error };
};

export default useProfile;
