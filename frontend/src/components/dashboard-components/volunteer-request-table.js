
import React, { useState } from "react";
import axios from "axios";
import UserProfileModal from "../../popups/user-profile-modal";
import Modal from "react-modal";
import Button from "../button";

export default function VolunteerRequestTable({ volunteers, campaignId }) {
    const [selectedUser, setSelectedUser] = useState(null); // To store the user that was clicked
    const [isModalOpen, setIsModalOpen] = useState(false); // To track if the modal is open or closed
    const [successMessage, setSuccessMessage] = useState(""); // To store success messages
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // To track success message modal

    // Function to open the profile modal
    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    // Function to close the profile modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
        window.location.reload();
    };

    // Function to close the success modal
    const handleCloseSuccessModal = () => {
        setIsSuccessModalOpen(false);
        setSuccessMessage("");
    };

    // Function to reject a volunteer
    const handleReject = async (volunteerId) => {
        try {
            await axios.delete(`https://plantify-backend.vercel.app/api/campaigns/${campaignId}/volunteers/${volunteerId}`);
            setSuccessMessage("Volunteer has been successfully rejected.");
            setIsSuccessModalOpen(true);
        } catch (error) {
            console.error("Error rejecting volunteer:", error);
        }
    };

    // Function to accept a volunteer
    const handleAccept = async (volunteerId) => {
        try {
            await axios.put(`https://plantify-backend.vercel.app/api/campaigns/${campaignId}/volunteers/${volunteerId}`, { status: "accepted" });
            setSuccessMessage("Volunteer has been successfully accepted.");
            setIsSuccessModalOpen(true);
        } catch (error) {
            console.error("Error accepting volunteer:", error);
        }
    };

    return (
        <div className="rounded-pl bg-navygreen-100 overflow-x-auto shadow-md">
            {volunteers.filter((volunteer) => volunteer.status === "pending").length === 0 ? (
                <p className="text-center text-gray-500 py-4">No volunteering requests yet.</p>
            ) : (
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
                        {volunteers.filter((volunteer) => volunteer.status === "pending")
                        .map((volunteer) => (
                            <tr
                                key={volunteer._id}
                                className="border-b-[0.5px] dark:border-gray-400 border-gray-100 hover:bg-navygreen-100 hover:bg-opacity-50 hover:text-gray-100"
                            >
                                <td
                                    onClick={() => handleOpenModal(volunteer.user)}
                                    className="px-4 py-2 cursor-pointer"
                                >
                                    <img
                                        src={`/assets/avatars/${volunteer.user?.avatar || "user.jpeg"}`}
                                        alt="group image"
                                        className="w-14 h-14 object-cover rounded-full"
                                    />
                                </td>
                                <td
                                    className="cursor-pointer"
                                    onClick={() => handleOpenModal(volunteer.user)}
                                >
                                    {volunteer.user?.username || "deleted_user"}
                                </td>
                                <td
                                    className="cursor-pointer"
                                    onClick={() => handleOpenModal(volunteer.user)}
                                >
                                    {volunteer.user?.email || "deleted_user"}
                                </td>
                                <td
                                    className="cursor-pointer"
                                    onClick={() => handleOpenModal(volunteer.user)}
                                >
                                    {volunteer.contact}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleAccept(volunteer.user._id)}
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
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                                            />
                                        </svg>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleReject(volunteer.user._id)}
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
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Profile Modal */}
            {isModalOpen && selectedUser && <UserProfileModal user={selectedUser} onClose={handleCloseModal} />}

            {/* Success Modal */}
            <Modal
                isOpen={isSuccessModalOpen}
                onRequestClose={handleCloseSuccessModal}
                contentLabel="Success Message"
                className="bg-navygreen-50 border-2 border-navygreen-100 p-6 rounded-md shadow-lg max-w-md mx-auto"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
                <div>
                    <h2 className="text-md text-center font-semibold text-green-600 mb-2">{successMessage}</h2>
                    <div className="place-self-center">
                        <Button
                            text="Close"
                            onClick={handleCloseSuccessModal}
                            className="py-2 bg-gray-100 text-white"
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
}
