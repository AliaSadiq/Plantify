import React, { useState, useEffect } from 'react';
import axios from 'axios';
import avatar from '../images/testimonial-2.jpeg';
import { useParams } from 'react-router-dom';

const MainPage = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    location: '',
    image: '',
    initiative: '',
    facebook: '',
    twitter: '',
    instagram: ''
  });
  const { id } = useParams();
  
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user ? user._id : null;

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`https://plantify-backend.vercel.app/api/socialgroup/${id}`);
        const data = response.data;

        setProfileData({
          name: data.name || '',
          location: data.location || '',
          image: data.image || '',
          initiative: data.initiative || '',
          facebook: data.facebook || '',
          twitter: data.twitter || '',
          instagram: data.instagram || '',
          followers: data.followers || [],
        });

        if (userId && data.followers.includes(userId)) {
          setIsFollowing(true);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [id, userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`https://plantify-backend.vercel.app/api/socialgroup/${id}/edit`, profileData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex flex-wrap md:flex-nowrap mt-[80px] ml-11">
        {/* Profile Section - Larger Width */}
        <div className="w-full md:w-2/3 p-2">
          <div className="flex-grow bg-white shadow-lg rounded-tl-11xl rounded-tr-11xl relative">
            <div className="relative bg-gray-200 rounded-tl-11xl rounded-tr-11xl overflow-hidden">
              <input
                type="text"
                name="image"
                value={profileData.image}
                onChange={handleInputChange}
                placeholder="Profile Image URL"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="p-6">
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleInputChange}
                placeholder="Group Name"
                className="text-lg font-bold"
              />
              <textarea
                name="initiative"
                value={profileData.initiative}
                onChange={handleInputChange}
                placeholder="Initiative"
                className="mt-2 w-full text-sm"
              />
              <div className="mt-6 flex items-center">
                <input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleInputChange}
                  placeholder="Location"
                  className="text-sm text-gray-800"
                />
              </div>

              {/* Social Links Section */}
              <div className="mt-4">
                <h3 className="text-md font-bold text-gray-800">Social Links</h3>
                <div className="mt-2 space-y-2">
                  <input
                    type="text"
                    name="facebook"
                    value={profileData.facebook}
                    onChange={handleInputChange}
                    placeholder="Facebook URL"
                    className="text-blue-600"
                  />
                  <input
                    type="text"
                    name="twitter"
                    value={profileData.twitter}
                    onChange={handleInputChange}
                    placeholder="Twitter URL"
                    className="text-blue-400"
                  />
                  <input
                    type="text"
                    name="instagram"
                    value={profileData.instagram}
                    onChange={handleInputChange}
                    placeholder="Instagram URL"
                    className="text-pink-600"
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="mt-6">
                <button
                  className="px-4 py-2 bg-green-900 text-white rounded-lg"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
