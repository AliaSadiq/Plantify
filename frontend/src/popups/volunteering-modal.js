// import React, { useState,useEffect } from 'react';
// import { XMarkIcon } from '@heroicons/react/24/solid';
// import axios from 'axios';
// import Button from '../components/button';

  
// export default function VolunteeringModal({ showModal, closeModal, campaign }) {

//     return (
//         <>
//             {showModal && (
//                 <div className="fixed inset-0 flex items-center justify-center z-30">
//                     <div className="absolute inset-0 flex items-center bg-navygreen-100 justify-center bg-opacity-40">
//                         <div className="relative w-full max-w-md mx-4 sm:mx-6 lg:mx-8 bg-navygreen-100 rounded-pl p-8 z-10">
//                             <button className="absolute top-2 right-2 p-2 hover:bg-navygreen-200 rounded-pl text-gray-100" onClick={closeModal}>
//                                 <XMarkIcon className="h-6 w-6"/>
//                             </button>
//                             <h2 className="font-josefin-sans text-center text-xl font-bold mb-4">Volunteer for the cause</h2>
//                             <p className="font-josefin-sans text-center text-sm mb-4">Join hands with us! Become a volunteer in this campaign and help make a lasting impact by planting alongside fellow nature enthusiasts. Let's create a greener tomorrow, one plant at a time.</p>
//                             <form className="flex flex-col space-y-4 text-gray-100">
//                                 <div className='w-full'>
//                                     <label htmlFor="contact" className="block text-sm font-medium font-semibold">Contact Number (optional)</label>
//                                     <input
//                                         type="text"
//                                         name="contact"
//                                         className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//                                         placeholder="Contact Number"
//                                         required
//                                     />
//                                 </div>
//                                 <Button type="submit" text="Send Request" className="py-2 shadow-lg bg-gray-100 text-white"/>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// import React, { useState } from 'react';
// import { XMarkIcon } from '@heroicons/react/24/solid';
// import axios from 'axios';
// import Button from '../components/button';

// export default function VolunteeringModal({ showModal, closeModal, campaignId, userId}) {
//     // const [contact, setContact] = useState('');
//     // const [errorMessage, setErrorMessage] = useState('');
//     // const [successMessage, setSuccessMessage] = useState('');

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         const response = await axios.post(`http://localhost:5000/api/campaigns/${campaignId}/volunteers`, {
//     //             user: userId,  // Replace this with the actual logged-in user's ID
//     //             contact
//     //         });
//     //         setSuccessMessage(response.data.message);
//     //         setErrorMessage('');
//     //         closeModal();  // Close the modal on success
//     //     } catch (error) {
//     //         setErrorMessage(error.response?.data?.message || 'Failed to add volunteer');
//     //         setSuccessMessage('');
//     //     }
//     // };

//     return (
//         <>
//             {showModal && (
//                 <div className="fixed inset-0 flex items-center justify-center z-30">
//                     <div className="absolute inset-0 flex items-center bg-navygreen-100 justify-center bg-opacity-40">
//                         <div className="relative w-full max-w-md mx-4 sm:mx-6 lg:mx-8 bg-navygreen-100 rounded-pl p-8 z-10">
//                             <button className="absolute top-2 right-2 p-2 hover:bg-navygreen-200 rounded-pl text-gray-100" onClick={closeModal}>
//                                 <XMarkIcon className="h-6 w-6"/>
//                             </button>
//                             <h2 className="font-josefin-sans text-center text-xl font-bold mb-4">Volunteer for the cause</h2>
//                             <p className="font-josefin-sans text-center text-sm mb-4">Join hands with us! Become a volunteer in this campaign and help make a lasting impact by planting alongside fellow nature enthusiasts. Let's create a greener tomorrow, one plant at a time.</p>
//                             <form className="flex flex-col space-y-4 text-gray-100">
//                                 <div className='w-full'>
//                                     <label htmlFor="contact" className="block text-sm font-medium font-semibold">Contact Number (optional)</label>
//                                     <input
//                                         type="text"
//                                         name="contact"
//                                         // value={contact}
//                                         // onChange={(e) => setContact(e.target.value)}
//                                         className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//                                         placeholder="Contact Number"
//                                         required
//                                     />
//                                 </div>
//                                 {/* {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
//                                 {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>} */}
//                                 <Button type="submit" text="Send Request" className="py-2 shadow-lg bg-gray-100 text-white"/>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }
import React, { useState } from 'react'; 
import { XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import Button from '../components/button';

export default function VolunteeringModal({ showModal, closeModal, campaignId, userId }) {
    const [contact, setContact] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5000/api/campaigns/${campaignId}/volunteers`, {
                user: userId, 
                contact
            });
            setSuccessMessage(response.data.message);
            setErrorMessage('');
            closeModal(); 
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Failed to add volunteer');
            setSuccessMessage('');
        }
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-30">
                    <div className="absolute inset-0 flex items-center bg-navygreen-100 justify-center bg-opacity-40">
                        <div className="relative w-full max-w-md mx-4 sm:mx-6 lg:mx-8 bg-navygreen-100 rounded-pl p-8 z-10">
                            <button className="absolute top-2 right-2 p-2 hover:bg-navygreen-200 rounded-pl text-gray-100" onClick={closeModal}>
                                <XMarkIcon className="h-6 w-6"/>
                            </button>
                            <h2 className="font-josefin-sans text-center text-xl font-bold mb-4">Volunteer for the cause</h2>
                            <p className="font-josefin-sans text-center text-sm mb-4">Join hands with us! Become a volunteer in this campaign and help make a lasting impact by planting alongside fellow nature enthusiasts. Let's create a greener tomorrow, one plant at a time.</p>
                            <form className="flex flex-col space-y-4 text-gray-100" onSubmit={handleSubmit}>
                                <div className='w-full'>
                                    <label htmlFor="contact" className="block text-sm font-medium font-semibold">Contact Number (optional)</label>
                                    <input
                                        type="text"
                                        name="contact"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                        placeholder="Contact Number"
                                    />
                                </div>
                                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                                {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
                                <Button type="submit" text="Send Request" className="py-2 shadow-lg bg-gray-100 text-white"/>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
