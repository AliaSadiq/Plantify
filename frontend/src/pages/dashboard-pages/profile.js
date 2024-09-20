import React, { useState } from 'react';
import { CameraIcon, PencilIcon } from "@heroicons/react/24/solid";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'Alia sadiq',
    description: 'Experienced in developing comprehensive campaign strategies tailored to specific causes and target audiences. Proficient in setting clear objectives, defining key performance indicators (KPIs), and creating actionable plans to achieve campaign goals.',
    profileImage: 'https://via.placeholder.com/150',
    headerImage: 'https://via.placeholder.com/800x200'
  });

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [tempName, setTempName] = useState(userData.name);
  const [tempDescription, setTempDescription] = useState(userData.description);

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleEditDescription = () => {
    setIsEditingDescription(true);
  };

  const handleSaveName = () => {
    setUserData(prevState => ({
      ...prevState,
      name: tempName
    }));
    setIsEditingName(false);
  };

  const handleSaveDescription = () => {
    setUserData(prevState => ({
      ...prevState,
      description: tempDescription
    }));
    setIsEditingDescription(false);
  };

  const handleDropProfileImage = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserData(prevState => ({
          ...prevState,
          profileImage: reader.result
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDropHeaderImage = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserData(prevState => ({
          ...prevState,
          headerImage: reader.result
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleProfileImageClick = () => {
    document.getElementById('profileImageInput').click();
  };

  const handleHeaderImageClick = () => {
    document.getElementById('headerImageInput').click();
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserData(prevState => ({
          ...prevState,
          profileImage: reader.result
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleHeaderImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserData(prevState => ({
          ...prevState,
          headerImage: reader.result
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-[1100px] h-[550px] mx-auto bg-white overflow-hidden rounded-tl-lg rounded-tr-lg relative">
      <div 
        className="relative" 
        onDrop={handleDropHeaderImage} 
        onDragOver={(event) => event.preventDefault()}
        onClick={handleHeaderImageClick}
      >
        <img
          className="w-full h-[200px] object-cover"
          src={userData.headerImage}
          alt="Header"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative mt-[200px]">
            <div 
              className="relative" 
              onDrop={handleDropProfileImage} 
              onDragOver={(event) => event.preventDefault()}
              onClick={handleProfileImageClick}
            >
              <div className="w-40 h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                  src={userData.profileImage}
                  alt="Profile"
                />
                <button className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-full cursor-pointer">
                  <CameraIcon className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        type="file"
        id="profileImageInput"
        style={{ display: 'none' }}
        onChange={handleProfileImageChange}
      />
      <input
        type="file"
        id="headerImageInput"
        style={{ display: 'none' }}
        onChange={handleHeaderImageChange}
      />

      <div className="text-center mt-[100px]">
        <div className="flex justify-center items-center space-x-2">
          {isEditingName ? (
            <>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="text-lg font-semibold border p-1"
              />
              <button onClick={handleSaveName} className="text-gray-500 cursor-pointer">
                Save
              </button>
              <button onClick={() => setIsEditingName(false)} className="text-gray-500 cursor-pointer">
                Cancel
              </button>
            </>
          ) : (
            <>
              <h2 className="text-lg font-semibold">{userData.name}</h2>
              <button onClick={handleEditName} className="text-gray-500 cursor-pointer">
                <PencilIcon className="h-4 w-4" />
              </button>
            </>
          )}
        </div>

        <div className="mt-6 w-[750px] mx-auto text-black-700 text-sm relative text-center">
          {isEditingDescription ? (
            <>
              <textarea
                value={tempDescription}
                onChange={(e) => setTempDescription(e.target.value)}
                className="w-full border p-1"
              />
              <button onClick={handleSaveDescription} className="text-gray-500 cursor-pointer">
                Save
              </button>
              <button onClick={() => setIsEditingDescription(false)} className="text-gray-500 cursor-pointer">
                Cancel
              </button>
            </>
          ) : (
            <>
              <p>{userData.description}</p>
              <button
                onClick={handleEditDescription}
                className="text-gray-500 absolute top-0 right-0 cursor-pointer mt-1 mr-1"
              >
                <PencilIcon className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
