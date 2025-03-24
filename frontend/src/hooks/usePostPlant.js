import { useState } from 'react';
import axios from 'axios';

const usePostPlant = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addPlant = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post('https://plantify-backend.vercel.app/api/my-plants', formData);
      console.log('Plant added successfully');
      return response.data; // Return the response data for further use
    } catch (err) {
      setError(err.message);
      console.error('Failed to add plant', err);
      throw err; // Re-throw the error for handling in the component
    } finally {
      setLoading(false);
    }
  };

  return { addPlant, loading, error };
};

export default usePostPlant;
