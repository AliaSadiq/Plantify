import React, {useState} from "react";
import ContactModal from "../modals/contact-us-modal";

export default function ContactUsTable({ messages }) {

    const [selectedMessage, setSelectedMessage] = useState(null); // To store the message that was clicked
    const [isModalOpen, setIsModalOpen] = useState(false); // To track if the modal is open or closed

    // Function to open the modal and set the selected message
    const handleOpenModal = (message) => {
        setSelectedMessage(message);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedMessage(null);
    };

    // Function to truncate message to 3-4 words
    const truncateMessage = (messageText) => {
        const words = messageText.split(" ");
        if (words.length <= 4) {
            return messageText;
        }
        return words.slice(0, 3).join(" ") + "...";
    };

    // Function to format date as dd-mm-yyyy
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <div className="rounded-pl bg-navygreen-100 overflow-x-auto shadow-md">
            <table className="w-full text-gray-100 dark:text-gray-400 text-sm bg-navygreen-100 dark:bg-forest-100 p-4 text-left rounded-pl">
                <thead className="bg-navygreen-200 dark:bg-forest-200">
                    <tr>
                        <th className="p-4 rounded-tl-pl">Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Date</th>
                        <th>Reply</th>
                        <th className="rounded-tr-pl">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((message) => (
                        // <tr key={message.id} className="border-b-[0.5px] dark:border-gray-400 border-gray-100 hover:bg-navygreen-100 hover:bg-opacity-50 hover:text-gray-100">
                        <tr
                            key={message.id}
                            className="border-b-[0.5px] dark:border-gray-400 border-gray-100 hover:bg-navygreen-100 hover:bg-opacity-50 hover:text-gray-100"
                            onClick={() => handleOpenModal(message)} // Open the modal when clicked
                        >
                            <td className="px-4 py-2">
                                {message.name}
                            </td>
                            <td>
                                {message.email}
                            </td>
                            <td>
                                {truncateMessage(message.message)}
                            </td>
                            <td>
                                {formatDate(message.createdAt)}
                            </td>
                            <td>
                                <button 
                                    // onClick={() => handleEdit(socialGroup._id)} 
                                    className="text-gray-100 dark:text-navygreen-100 hover:text-navygreen-300"
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className="size-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                </button>
                            </td>
                            <td>
                                <button 
                                    // onClick={() => handleDelete(socialGroup._id)} 
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
            {isModalOpen && selectedMessage && (
                <ContactModal message={selectedMessage} onClose={handleCloseModal} />
            )}
        </div>
    );
}
