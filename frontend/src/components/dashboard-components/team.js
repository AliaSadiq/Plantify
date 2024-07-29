
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPlusCircle } from 'react-icons/fa';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import AddTeamForm from './AddTeamForm';
import axios from 'axios';

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [showOptions, setShowOptions] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/teams');
      setTeamData(response.data);
    } catch (error) {
      console.error('Error fetching team data:', error);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setIsModalVisible(true);
  };

  const handleDelete = async (index) => {
    try {
      const memberToDelete = teamData[index];
      await axios.delete(`http://localhost:5000/api/teams/${memberToDelete._id}`);
      setTeamData(teamData.filter((_, i) => i !== index));
      console.log('Deleted member at index:', index);
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  };

  const handleAdd = () => {
    setEditIndex(null);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleFormSubmit = (newData, index) => {
    if (index !== null) {
      const updatedData = [...teamData];
      updatedData[index] = newData;
      setTeamData(updatedData);
    } else {
      setTeamData([...teamData, newData]);
    }
  };

  const toggleOptions = (index) => {
    if (showOptions === index) {
      setShowOptions(null);
    } else {
      setShowOptions(index);
    }
  };

  return (
    <div className="p-2 bg-white rounded-md max-h-fit w-56 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-bold text-black">Team</h2>
        <div className="relative group">
          <button onClick={handleAdd} className="text-xs">
            <FaPlusCircle className="h-4 w-4 text-black hover:text-palegreen-300" />
          </button>
          <span className="absolute right-10 bottom-1 w-24 p-1 text-xs text-black  bg-palegreen-200 rounded hidden group-hover:block">
            Add member
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        {teamData.map((member, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {member.profilePic && (
              <img className="w-12 h-12 rounded-full object-cover" src={`/assest/${member.profilePic}`} alt="Profile Picture" />
            )}
            <span className="text-sm font-medium mt-2">{member.name}</span>
            <div className="absolute top-0 right-0 mt-1 mr-1">
              <button onClick={() => toggleOptions(index)} className="text-xs">
                <FontAwesomeIcon icon={faEllipsisV} className="text-black" />
              </button>
              {showOptions === index && (
                <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-md">
                  <button onClick={() => handleEdit(index)} className="block w-full px-2 py-1 text-left text-sm hover:bg-palegreen-200">Edit</button>
                  <button onClick={() => handleDelete(index)} className="block w-full px-2 py-1 text-left text-sm hover:bg-palegreen-200">Delete</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {isModalVisible && (
        <AddTeamForm
          onClose={handleModalClose}
          onSubmit={handleFormSubmit}
          teamData={teamData}
          editIndex={editIndex}
        />
      )}
    </div>
  );
};

export default Team;
