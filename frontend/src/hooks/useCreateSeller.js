import { useState } from "react";
import axios from "axios";

export default function useCreateSeller () {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createSeller = async (sellerData) => {
        setLoading(true);
        try {
        const response = await axios.post("http://localhost:5000/api/sellers/", sellerData);
        setLoading(false);
        return response.data;
        } catch (err) {
            console.log("name: " + sellerData.sellerName);
            setError(err.response?.data?.message || err.message);
            setLoading(false);
        }
    };

    return { createSeller, loading, error };
}