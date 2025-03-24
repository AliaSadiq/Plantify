import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function useCreateSeller () {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createSeller = async (sellerData) => {
        setLoading(true);
        try {
            const response = await axios.post("https://plantify-backend.vercel.app/api/sellers/", sellerData);
            setLoading(false);
            navigate('/');
            alert('Please wait until your social group has been verified, It can take a few days.')
            return response.data;
        } catch (err) {
            console.log("name: " + sellerData.sellerName);
            setError(err.response?.data?.message || err.message);
            setLoading(false);
        }
    };

    return { createSeller, loading, error };
}