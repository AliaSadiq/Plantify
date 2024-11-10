import React, { useState } from "react";
import useDeleteUser from "../../hooks/delete-user";
import UserProfileModal from "../modals/user-profile-modal";

export default function UserTable({ users }) {
    const [updatedUsers, setUpdatedUsers] = useState(users); // Keep track of the users state
    const { deleteUser, loading, error } = useDeleteUser();
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

    const handleDelete = async (id) => {
        const isDeleted = await deleteUser(id);
        if (isDeleted) {
            setUpdatedUsers(updatedUsers.filter(user => user._id !== id));
        }
    };

    return (
        <div className="rounded-pl bg-navygreen-100 overflow-x-auto shadow-md">
            {error && <p>{error}</p>}
            {loading && <p>Deleting user...</p>}
            <table className="w-full text-gray-100 dark:text-gray-400 text-sm bg-navygreen-100 dark:bg-forest-100 p-4 text-left rounded-pl">
                <thead className="bg-navygreen-200 dark:bg-forest-200">
                    <tr>
                        <th className="p-4 rounded-tl-pl">Avatar</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th className="rounded-tr-pl">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {updatedUsers.map((user) => (
                        <tr 
                            key={user._id} 
                            className="border-b-[0.5px] dark:border-gray-400 border-gray-100 hover:bg-navygreen-100 hover:bg-opacity-50 hover:text-gray-100"
                        >
                            <td 
                                onClick={() => handleOpenModal(user)}
                                className="px-4 py-2 cursor-pointer"
                            >
                                <img src={`assets/avatars/${user.avatar}`} alt="group image" className="w-14 h-14 object-cover rounded-full" />
                            </td>
                            <td 
                                className="cursor-pointer"
                                onClick={() => handleOpenModal(user)}
                            >
                                {user.username}
                            </td>
                            <td 
                                className="cursor-pointer"
                                onClick={() => handleOpenModal(user)}
                            >
                                {user.email}
                            </td>
                            <td>
                                <button 
                                    onClick={() => handleDelete(user._id)} 
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
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
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