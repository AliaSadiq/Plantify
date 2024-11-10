import { useState } from 'react';
import axios from 'axios';

const useDelete = (url) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState(null);

    const deleteItem = async (id, onSuccess) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (!confirmDelete) return;

        setIsDeleting(true);
        try {
            await axios.delete(`${url}/${id}`);
            alert("Item successfully deleted.");
            if (onSuccess) onSuccess(); // Optional callback after deletion
        } catch (err) {
            setError(err);
            console.error("Error deleting item:", err);
        } finally {
            setIsDeleting(false);
        }
    };

    return { deleteItem, isDeleting, error };
};

export default useDelete;
