
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi'; // Import pencil icon

const MainPage = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    location: '',
    image: '',
    banner: '',
    initiative: '',
    facebook: '',
    twitter: '',
    instagram: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bannerFileName, setBannerFileName] = useState(''); // State for banner file name
  const [profileFileName, setProfileFileName] = useState(''); // State for profile file name
  const { id } = useParams();
  
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user ? user._id : null;

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/socialgroup/${id}`);
        const data = response.data;

        setProfileData({
          name: data.name || '',
          location: data.location || '',
          image: data.image || '',
          banner: data.banner || '',
          initiative: data.initiative || '',
          facebook: data.facebook || '',
          twitter: data.twitter || '',
          instagram: data.instagram || '',
          followers: data.followers || [],
        });

        if (userId && data.followers.includes(userId)) {
          setIsFollowing(true);
        }
        setLoading(false);
      } catch (error) {
        setError('Error fetching profile data');
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [id, userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle Banner Image Upload
  const handleBannerFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setBannerFileName(file.name);
      setProfileData(prevData => ({
        ...prevData,
        banner: file.name // Set only the file name
      }));
    } else {
      alert("Please select a valid image file.");
      // Clear the file input field
      event.target.value = ""; // Reset the input value
    }
  };

  // Handle Profile Image Upload
  const handleProfileFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfileFileName(file.name);
      setProfileData(prevData => ({
        ...prevData,
        image: file.name // Set only the file name
      }));
    } else {
      alert("Please select a valid image file.");
      // Clear the file input field
      event.target.value = ""; // Reset the input value
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/socialgroup/${id}/edit`, profileData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-wrap md:flex-nowrap mt-2 ml-64">
      {/* Profile Section - Larger Width */}
      <div className="w-full md:w-2/3 p-2">
        <div className="flex-grow bg-white shadow-lg rounded-tl-11xl rounded-tr-11xl relative">
          {/* Banner Image */}
          <div className="relative bg-gray-200 rounded-tl-11xl rounded-tr-11xl overflow-hidden">
            <img
              src={profileData.banner ? `/assets/${profileData.banner}` : 'default-banner.jpg'}
              alt="Banner"
              className="w-full h-56 object-cover"
            />
            <input
              type="file"
              onChange={handleBannerFileChange}
              id="bannerUpload"
              className="hidden"
            />
            {/* Pencil icon for banner image upload */}
            <button
              className="absolute top-4 right-4 bg-gray-900 text-white p-2 rounded-full"
              onClick={() => document.getElementById('bannerUpload').click()}
            >
              <FiEdit2 size={20} />
            </button>
          </div>

          {/* Profile Image */}
          <div className="absolute top-40 left-6 w-[120px] h-[120px] bg-white rounded-full overflow-hidden border-4 border-white">
            <img
              src={profileData.image ? `/assets/${profileData.image}` : 'default-profile.jpg'}
              alt="Profile"
              className="w-full h-full object-cover cursor-pointer"
            />
            <input
              type="file"
              onChange={handleProfileFileChange}
              id="profileUpload"
              className="hidden"
            />
            {/* Pencil icon for profile image upload */}
            <button
              className="absolute bottom-2 right-2 bg-gray-900 text-white p-2 rounded-full"
              onClick={() => document.getElementById('profileUpload').click()}
            >
              <FiEdit2 size={16} />
            </button>
          </div>

          <div className="p-6 mt-12">
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
              placeholder="Group Name"
              className="text-lg font-bold w-full"
            />
            <textarea
              name="initiative"
              value={profileData.initiative}
              onChange={handleInputChange}
              placeholder="Initiative"
              className="mt-2 w-full text-sm p-2"
            />
            <div className="mt-6 flex items-center">
              <input
                type="text"
                name="location"
                value={profileData.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="text-sm text-gray-800 w-full p-2"
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
                  className="text-blue-600 w-full p-2"
                />
                <input
                  type="text"
                  name="twitter"
                  value={profileData.twitter}
                  onChange={handleInputChange}
                  placeholder="Twitter URL"
                  className="text-blue-400 w-full p-2"
                />
                <input
                  type="text"
                  name="instagram"
                  value={profileData.instagram}
                  onChange={handleInputChange}
                  placeholder="Instagram URL"
                  className="text-pink-600 w-full p-2"
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
  );
};

export default MainPage;
