import { useState } from "react";
import axios from "axios";

const useEditProfile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const editProfile = async ({ userId, username, bio, avatar }) => {
    setLoading(true);
    setError(null);

    try {
      const data = {
        username,
        bio,
        avatar, // Send filename or null
      };

      console.log("Sending data:", data); // Log data before request

      const response = await axios.put(
        `https://plantify-backend.vercel.app/api/social-media/profile/${userId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API response:", response.data); // Log response

      return response.data;
    } catch (error) {
      setError(error);
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return { editProfile, loading, error };
};

export default useEditProfile;
