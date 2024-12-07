import { useState } from 'react';
import axios from 'axios';

const usePostDiary = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addDiary = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/plant-diaries', formData);
      console.log('Diary added successfully');
      return response.data; // Return the response data for further use
    } catch (err) {
      setError(err.message);
      console.error('Failed to add diary', err);
      throw err; // Re-throw the error for handling in the component
    } finally {
      setLoading(false);
    }
  };

  return { addDiary, loading, error };
};

export default usePostDiary;
