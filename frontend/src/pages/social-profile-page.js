import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SocialProfilePage = () => {
  const { id } = useParams();
  const [socialGroup, setSocialGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  useEffect(() => {
    const fetchSocialGroup = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/socialgroup/${id}`);
        setSocialGroup(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSocialGroup();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!socialGroup) return <div>Social group not found</div>;

  return (
    <div className="container mx-auto px-30 py-8 mt-40 mx-8" >
      {/* Profile Banner */}
      <div className="bg-blue-500 h-32 mb-8">
        {/* Banner content here */}
      </div>

      {/* Profile Info */}
      <div className="flex items-center mb-8">
        <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
          <img src={socialGroup.profileImageUrl} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-semibold">{socialGroup.name}</h1>
          <p className="text-gray-600">{socialGroup.location}</p>
        </div>
      </div>

      {/* Campaign Motive */}
      <div>
        <h2 className="text-xl font-semibold mb-4">The Campaign Motive</h2>
        <p className="text-gray-700">{socialGroup.description}</p>
      </div>
    </div>
  );
}

export default SocialProfilePage;
