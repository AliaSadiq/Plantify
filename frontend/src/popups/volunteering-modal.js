// import React, { useState } from 'react';
// import { XMarkIcon } from '@heroicons/react/24/solid';
// import axios from 'axios';
// import Modal from 'react-modal';
// import Button from '../components/button';

// export default function VolunteeringModal({ showModal, closeModal, campaignId, userId }) {
//     const [contact, setContact] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

//     // Restrict input to digits and max 11 digits
//     const handleContactChange = (e) => {
//         const value = e.target.value;
//         if (/^\d{0,11}$/.test(value)) {
//             setContact(value);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post(`BACKEND_URL/api/campaigns/${campaignId}/volunteers`, {
//                 user: userId,
//                 contact,
//             });
//             setErrorMessage('');
//             setIsSuccessModalOpen(true); // Open success modal
//         } catch (error) {
//             setErrorMessage(error.response?.data?.message || 'Failed to add volunteer');
//         }
//     };

//     const closeSuccessModal = () => {
//         setIsSuccessModalOpen(false);
//         closeModal(); // Close the main volunteering modal
//     };

//     return (
//         <>
//             {showModal && (
//                 <div className="fixed inset-0 flex items-center justify-center z-30">
//                     <div className="absolute inset-0 flex items-center bg-navygreen-100 justify-center bg-opacity-40">
//                         <div className="relative w-full max-w-md mx-4 sm:mx-6 lg:mx-8 bg-navygreen-100 rounded-pl p-8 z-10">
//                             <button className="absolute top-2 right-2 p-2 hover:bg-navygreen-200 rounded-pl text-gray-100" onClick={closeModal}>
//                                 <XMarkIcon className="h-6 w-6" />
//                             </button>
//                             <h2 className="font-josefin-sans text-center text-xl font-bold mb-4">Volunteer for the cause</h2>
//                             <p className="font-josefin-sans text-center text-sm mb-4">
//                                 Join hands with us! Become a volunteer in this campaign and help make a lasting impact by planting alongside
//                                 fellow nature enthusiasts. Let's create a greener tomorrow, one plant at a time.
//                             </p>
//                             <form className="flex flex-col space-y-4 text-gray-100" onSubmit={handleSubmit}>
//                                 <div className="w-full">
//                                     <label htmlFor="contact" className="block text-sm font-medium font-semibold">
//                                         Contact Number (optional)
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="contact"
//                                         value={contact}
//                                         onChange={handleContactChange}
//                                         className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//                                         placeholder="Contact Number"
//                                     />
//                                 </div>
//                                 {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
//                                 <Button type="submit" text="Send Request" className="py-2 shadow-lg bg-gray-100 text-white" />
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Success Modal */}
//             <Modal
//                 isOpen={isSuccessModalOpen}
//                 onRequestClose={closeSuccessModal}
//                 className="fixed inset-0 flex items-center justify-center z-40 outline-none"
//                 overlayClassName="fixed inset-0 bg-black bg-opacity-50"
//                 ariaHideApp={false}
//             >
//                 <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
//                     <h2 className="text-xl font-semibold text-green-600 text-center mb-4">Volunteer request sent!</h2>
//                     <p className="text-gray-700 text-center mb-6">Thank you for joining this campaign!</p>
//                     <div className="flex justify-center">
//                         <button
//                             className="bg-palegreen-500 text-white py-2 px-4 rounded-lg hover:bg-palegreen-600 focus:outline-none"
//                             onClick={closeSuccessModal}
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             </Modal>
//         </>
//     );
// }

import React, { useState } from 'react';
import Modal from 'react-modal';
import { XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import Button from '../components/button';
import MessageModal from './message-modal';

const VolunteeringModal = ({ showModal, closeModal, campaignId, userId }) => {
    const [contact, setContact] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    // Restrict input to digits and max 11 digits
    const handleContactChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,11}$/.test(value)) {
            setContact(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`BACKEND_URL/api/campaigns/${campaignId}/volunteers`, {
                user: userId,
                contact,
            });
            setErrorMessage('');
            setIsSuccessModalOpen(true); // Open success modal
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Failed to add volunteer');
        }
    };

    const closeSuccessModal = () => {
        setIsSuccessModalOpen(false);
        closeModal(); // Close the main volunteering modal
    };

    return (
        <>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                contentLabel="Volunteer for the Cause"
                className="bg-white border-2 border-gray-300 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10"
                overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
                ariaHideApp={false}
            >
                <button className="absolute top-2 right-2 p-2 hover:bg-navygreen-200 rounded-full text-gray-100" onClick={closeModal}>
                    <XMarkIcon className="h-6 w-6" />
                </button>
                <h2 className="font-josefin-sans text-center text-xl font-bold mb-4">Volunteer for the cause</h2>
                <p className="font-josefin-sans text-center text-sm mb-4">
                    Join hands with us! Become a volunteer in this campaign and help make a lasting impact by planting alongside
                    fellow nature enthusiasts. Let's create a greener tomorrow, one plant at a time.
                </p>
                <form className="flex flex-col space-y-4 text-gray-100" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <label htmlFor="contact" className="block text-sm font-medium font-semibold">
                            Contact Number (optional)
                        </label>
                        <input
                            type="text"
                            name="contact"
                            value={contact}
                            onChange={handleContactChange}
                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                            placeholder="Contact Number"
                        />
                    </div>
                    {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                    <Button type="submit" text="Send Request" className="py-2 shadow-lg bg-gray-100 text-white" />
                </form>
            </Modal>

            {/* Success Modal */}
            <MessageModal
                isOpen={isSuccessModalOpen}
                onClose={closeSuccessModal}
                message="Volunteer request sent! Thank you for joining this campaign!"
            />
        </>
    );
};

export default VolunteeringModal;
