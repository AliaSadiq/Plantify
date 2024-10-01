
import React, { useState, useEffect } from 'react';
import { Input, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import axios from 'axios';

const TeamMember = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [showOptions, setShowOptions] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [newMember, setNewMember] = useState({ name: '', role: '', profilePic: '' });
  const [imageFile, setImageFile] = useState(null);
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  // Fetch team data on component mount
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/teams`);
        setTeamMembers(response.data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, [apiUrl]);

  // Search handler
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredMembers = teamMembers.filter((member) =>
      member.name.toLowerCase().includes(value)
    );
    setTeamMembers(filteredMembers);
  };

  // Toggles the display of options for a team member
  const toggleOptions = (index) => {
    setShowOptions(showOptions === index ? null : index);
  };

  // Deletes a member from the list
  const deleteMember = async (index) => {
    try {
      const memberToDelete = teamMembers[index];
      await axios.delete(`${apiUrl}/api/teams/${memberToDelete._id}`);
      const updatedMembers = teamMembers.filter((_, i) => i !== index);
      setTeamMembers(updatedMembers);
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  };

  // Opens the dialog to add a new member
  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  // Closes the dialog and resets the form
  const handleCloseDialog = () => {
    setShowDialog(false);
    setNewMember({ name: '', role: '', profilePic: '' });
    setImageFile(null);
  };

  // Updates input fields for the new member
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  // Handles image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewMember({ ...newMember, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Adds a new team member
  const handleAddMember = async () => {
    try {
      let profilePic = newMember.profilePic;

      // If there's an image file to upload
      if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);
        // Upload the image to the server
        const response = await axios.post(`${apiUrl}/api/teams`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        profilePic = response.data.profilePic; // Ensure the backend returns the correct image URL
      }

      // Creating the new team member data
      const teamMemberData = {
        name: newMember.name,
        role: newMember.role,
        profilePic: newMember.profilePic // Use the uploaded image URL or base64 string
      };
      // Post the new team member to the backend API
      await axios.post(`${apiUrl}/api/teams`, teamMemberData);

      // Add the new member to the state and reset the form
      setTeamMembers([...teamMembers, { ...teamMemberData }]);
      handleCloseDialog();
    } catch (error) {
      console.error("Error adding team member:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-transparent p-6">
      <div className="flex flex-row justify-between items-center mb-4">
        <div>
          <p className="text-md font-semibold">Group's Team</p>
        </div>
        <button
          className="font-josefin-sans w-24 text-sm font-semibold text-white bg-gray-100 p-1 rounded hover:rounded-full border-2 border-gray-100"
          onClick={handleOpenDialog}
        >
          Add Team
        </button>
      </div>

      <div className="flex w-full gap-2">
        <div className="w-full rounded-md bg-navygreen-100">
          <Input
            label="Search"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <ul className="space-y-2 mt-4 overflow-y-auto w-full h-52">
        {teamMembers.map((member, index) => (
          <li key={index} className="flex items-center justify-between h-14 pl-4 pr-4 border bg-white rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <img
                src={member?.profilePic || 'https://via.placeholder.com/150'}
                alt={member?.name || 'Member'}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{member?.name || 'No Name Provided'}</p>
                <p className="text-sm text-orange-500">{member?.role || 'Role Unknown'}</p>
              </div>
            </div>
            <div className="relative">
              <button className="text-gray-500" onClick={() => toggleOptions(index)}>
                <EllipsisVerticalIcon className="w-6 h-6" />
              </button>
              {showOptions === index && (
                <div className="absolute -left-9 -mt-8 rounded-lg shadow-lg">
                  <button
                    className="font-josefin-sans text-xm font-semibold text-gray-100 h-6 w-10 rounded hover:rounded-full hover:text-red-600 border-2 border-gray-100"
                    onClick={() => deleteMember(index)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Add Team Dialog */}
      <Dialog open={showDialog} handler={handleCloseDialog} className="max-w-sm h-auto">
        <DialogHeader>Add Team Member</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <Input
              label="Name"
              name="name"
              value={newMember.name}
              onChange={handleInputChange}
            />
            <Input
              label="Role"
              name="role"
              value={newMember.role}
              onChange={handleInputChange}
            />
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Profile Image</label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {newMember.profilePic && (
                <img
                  src={newMember.profilePic}
                  alt="Preview"
                  className="mt-2 w-24 h-24 object-cover rounded-full"
                />
              )}
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleCloseDialog}
            className="font-josefin-sans text-sm font-semibold"
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleAddMember}
            className="font-josefin-sans text-sm font-semibold"
          >
            Add
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default TeamMember;
