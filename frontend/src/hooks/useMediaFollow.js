import { useState } from 'react';
import axios from 'axios';

const useFollowUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleFollow = async (userIdToFollow, currentUserId) => {
    console.log(userIdToFollow);
    console.log(currentUserId);
    setLoading(true);
    try {
      const response = await axios.post('BACKEND_URL/api/social-media/follow', {
        userIdToFollow,
        currentUserId,
      });

      setLoading(false);
      return response.data; // Return the response to handle in the component
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return { toggleFollow, loading, error };
};

export default useFollowUser;
