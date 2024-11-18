import { useState } from 'react';
import axios from 'axios';

const useDelete = (url, onSuccess) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteItem = async (id, requireConfirmation = true) => {
    // Show confirmation prompt if required
    if (requireConfirmation && !window.confirm("Are you sure you want to delete this item?")) {
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      await axios.delete(`${url}/${id}`);
      if (onSuccess) {
        onSuccess(); // Refresh the list or perform any additional actions
      }
    } catch (err) {
      setError("Failed to delete the item.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteItem, isLoading, error };
};

export default useDelete;
