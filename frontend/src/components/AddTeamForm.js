
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddTeamForm = ({ onClose, onSubmit, teamData, editIndex }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editIndex !== null) {
      const member = teamData[editIndex];
      setName(member.name);
      setRole(member.role);
      setProfilePic(member.profilePic);
    }
  }, [editIndex, teamData]);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(file.name);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!name || !role) {
      setError('All fields are required.');
      return;
    }

    const formData = {
      name,
      role,
      profilePic,
    };

    try {
      if (editIndex !== null) {
        await axios.put(`http://localhost:5000/api/teams/${teamData[editIndex]._id}`, formData);
        onSubmit({ ...formData, _id: teamData[editIndex]._id }, editIndex);
      } else {
        const response = await axios.post('http://localhost:5000/api/teams', formData);
        onSubmit(response.data);
      }
      onClose();
    } catch (error) {
      console.error('Error submitting team member:', error);
      setError('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-40"
      onClick={onClose}
    >
      <div
        className="relative bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-6 w-85 shadow-lg"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="self-end bg-red-500 text-white rounded p-1" onClick={onClose}>
          X
        </button>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">{editIndex !== null ? 'Edit Member' : 'Add New Member'}</h2>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-2 w-full">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Name</label>
            <input
              type="text"
              className="border rounded px-2 py-1 text-sm text-gray-800"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Role</label>
            <input
              type="text"
              className="border rounded px-2 py-1 text-sm text-gray-800"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Profile Picture</label>
            <input
              type="file"
              className="border rounded px-2 py-1 text-sm text-gray-800"
              accept="image/*"
              onChange={handleFileInputChange}
            />
            {profilePic && (
              <img className="mt-2 w-12 h-12 rounded-full object-cover" src={`/assest/${profilePic}`} alt="Profile" />
            )}
          </div>
          <button className="mt-3 py-2 px-8 w-40 bg-green-700 text-white rounded hover:bg-green-600 text-sm">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTeamForm;
