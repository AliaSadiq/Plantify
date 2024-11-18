import React, { useState } from "react";
import UserProfileModal from "../../popups/user-profile-modal";

export default function VolunteerRequestTable({ volunteers }) {
    const [selectedUser, setSelectedUser] = useState(null); // To store the user that was clicked
    const [isModalOpen, setIsModalOpen] = useState(false); // To track if the modal is open or closed

    // Function to open the modal and set the selected message
    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    return (
        <div className="rounded-pl bg-navygreen-100 overflow-x-auto shadow-md">
            <table className="w-full text-gray-100 dark:text-gray-400 text-sm bg-navygreen-100 dark:bg-forest-100 p-4 text-left rounded-pl">
                <thead className="bg-navygreen-200 dark:bg-forest-200">
                    <tr>
                        <th className="p-4 rounded-tl-pl">Avatar</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Accept</th>
                        <th className="rounded-tr-pl">Reject</th>
                    </tr>
                </thead>
                <tbody>
                    {volunteers.map((volunteer) => (
                        <tr 
                            key={volunteer._id} 
                            className="border-b-[0.5px] dark:border-gray-400 border-gray-100 hover:bg-navygreen-100 hover:bg-opacity-50 hover:text-gray-100"
                        >
                            <td 
                                onClick={() => handleOpenModal(volunteer.user)}
                                className="px-4 py-2 cursor-pointer"
                            >
                                <img src={`/assets/avatars/${volunteer.user.avatar}`} alt="group image" className="w-14 h-14 object-cover rounded-full" />
                            </td>
                            <td 
                                className="cursor-pointer"
                                onClick={() => handleOpenModal(volunteer.user)}
                            >
                                {volunteer.user.username}
                            </td>
                            <td 
                                className="cursor-pointer"
                                onClick={() => handleOpenModal(volunteer.user)}
                            >
                                {volunteer.user.email}
                            </td>
                            <td 
                                className="cursor-pointer"
                                onClick={() => handleOpenModal(volunteer.user)}
                            >
                                {volunteer.contact}
                            </td>
                            <td>
                                <button 
                                    // onClick={() => handleDelete(user._id)} 
                                    className="text-gray-100 dark:text-navygreen-100 hover:text-green-400"
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className="size-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                    </svg>
                                </button>
                            </td>
                            <td>
                                <button 
                                    // onClick={() => handleDelete(user._id)} 
                                    className="text-gray-100 dark:text-navygreen-100 hover:text-red-500"
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className="size-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Modal component */}
            {isModalOpen && selectedUser && (
                <UserProfileModal user={selectedUser} onClose={handleCloseModal}/>
            )}
        </div>
    );
}
