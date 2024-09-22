import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchContactUs() {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContactUs = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/user-message");
                setMessages(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching messages');
                setLoading(false);
            }
        };

        fetchContactUs();
    }, []);

    return { messages, error, loading };
}
