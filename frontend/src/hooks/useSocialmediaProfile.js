import { useState, useEffect } from "react";
import axios from "axios";

const useSocialmediaProfile = (userId) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Prevent fetching if userId is undefined
    if (!userId) {
      setLoading(false); // Ensure loading ends if no user ID is present
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`BACKEND_URL/api/social-media/profile/${userId}`);
        console.log("Fetched profile data:", response.data);
        setProfile(response.data);
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError(err);
      } finally {
        setLoading(false); // Ensure loading state updates after request
      }
    };

    fetchProfile();
  }, [userId]);

  return { profile, loading, error };
};

export default useSocialmediaProfile;
