
import React, { useState, useEffect } from "react";
import useFetchUserLocalStorage from "../hooks/useFetchUserLocalStorage";
import useProfile from "../hooks/useSocialmediaProfile";
import useEditProfile from "../hooks/useEditProfile";
import { FaPencilAlt } from "react-icons/fa"; // For the pencil icon

export default function UserProfile() {
  const user = useFetchUserLocalStorage();
  const { profile, loading, error } = useProfile(user?._id);
  const { editProfile } = useEditProfile();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    bio: "",
    profileImg: null,
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        username: profile.user.username || "",
        bio: profile.user.bio || "",
        profileImg: null,
      });
    }
  }, [profile]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile</p>;

  const handleEditClick = () => setIsEditing(!isEditing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file && file.type.startsWith("image/")) {
      setFormData((prevData) => ({ ...prevData, profileImg: file.name })); // Store only the filename
    } else {
      alert("Only image files (JPEG, PNG, etc.) are allowed.");
    }
  };
  

  const handleSave = async () => {
    console.log("Form data before sending:", formData); // Log form data
  
    const response = await editProfile({
      userId: user._id,
      ...formData,
    });
  
    if (response?.message === 'Profile updated successfully') {
      console.log("Profile updated:", response);
      setIsEditing(false);
    } else {
      console.error("Profile update failed:", response?.error || "Unknown error");
    }
  };

  return (
    <div className="relative rounded-pl p-4 h-full">
      {/* Edit Icon moved to top-right corner */}
      <button
        onClick={handleEditClick}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <FaPencilAlt />
      </button>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Profile Picture */}
        <img
          src={`/assets/${profile?.socialMedia.profileImg}`}
          alt="profile picture"
          className="border-2 border-gray-100 w-28 h-28 rounded-full mx-auto md:mx-0"
        />
        
        {/* Profile Info */}
        <div className="text-start mt-4 md:mt-0">
          {isEditing ? (
            <div className="border border-green-500 rounded-lg p-3">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="text-md font-semibold border p-1 rounded-lg focus:outline-green-500 w-full"
              />
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="mt-2 text-sm border p-1 rounded-lg focus:outline-green-500 w-full"
              />
              <input
                type="file"
                onChange={handleFileChange}
                className="mt-2 block"
              />
              <button
                onClick={handleSave}
                className="text-white bg-green-500 mt-2 px-4 py-1 rounded-lg"
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-md font-semibold">{formData.username}</h3>
              <p className="mt-4 text-sm text-justify md:text-left">{formData.bio}</p>
              <div className="flex gap-8 mt-4">
                <p>{profile?.socialMedia.followersCount} followers</p>
                <p>{profile?.socialMedia.followingCount} following</p>
                <div className="flex gap-2 items-center">
                  <img src="assets/plants.png" alt="plant" className="w-6 h-6" />
                  <p>19 plants</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

