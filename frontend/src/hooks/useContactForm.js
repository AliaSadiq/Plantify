import { useState } from 'react';
import axios from 'axios';

const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (formData) => {
    setLoading(true);
    try {
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.post(`${apiUrl}/api/user-message`, formData);
      console.log('Message sent successfully');
      return response.data; // Return the response data for further use
    } catch (err) {
      setError(err.message);
      console.error('Failed to send message', err);
      throw err; // Re-throw the error for handling in the component
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error };
};

export default useContactForm;
