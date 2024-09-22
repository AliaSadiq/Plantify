import { useState } from 'react';
import axios from 'axios';

export default function useDeleteUser() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteUser = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            setLoading(true);
            await axios.delete(`http://localhost:5000/api/user/${id}`);
            setLoading(false);
            return true; // Return true if delete is successful
        } catch (err) {
            setError('Failed to delete user');
            setLoading(false);
            return false;
        }
    };

    return { deleteUser, loading, error };
}
