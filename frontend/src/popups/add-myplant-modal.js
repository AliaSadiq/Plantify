// import React, { useState } from 'react';
// import { XMarkIcon } from '@heroicons/react/24/solid';
// import Button from '../components/button';
// import useFetchUserLocalStorage from '../hooks/useFetchUserLocalStorage';


// export default function MyPlantModal({ showModal, closeModal }) {
//     const user = useFetchUserLocalStorage();
//     const  userId = user?._id;
//     const [plantImage, setPlantImage] = useState('');
//     const [plantName, setPlantName] = useState('');
//     const [plantType, setPlantType] = useState('');
//     const [plantDescription, setPlantDescription] = useState('');

//     const handleSubmit = async () => {
//     };

//     return (
//         <>
//             {showModal && (
//                 <div className="fixed inset-0 flex items-center justify-center z-30">
//                     <div className="absolute inset-0 flex items-center bg-navygreen-100 justify-center bg-opacity-40">
//                         <div className="relative w-full max-w-md mx-4 sm:mx-6 lg:mx-8 bg-navygreen-100 rounded-pl p-8 z-10">
//                             <button className="absolute top-2 right-2 p-2 hover:bg-navygreen-200 rounded-pl text-gray-100" onClick={closeModal}>
//                                 <XMarkIcon className="h-6 w-6"/>
//                             </button>
//                             <h2 className="text-lg font-bold mb-4">Add a new Plant</h2>
//                             <form>
//                                 <div className="mb-4">
//                                     <label htmlFor="plantImage" className="block text-sm font-medium">Plant Image</label>
//                                     {/* Custom file input */}
//                                     <label
//                                         htmlFor="plantImage"
//                                         className="flex flex-col items-center justify-center w-[100px] h-[100px] p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-navygreen-200"
//                                     >
//                                         {/* SVG Icon */}
//                                         <svg 
//                                             xmlns="http://www.w3.org/2000/svg" 
//                                             fill="none" 
//                                             viewBox="0 0 24 24" 
//                                             strokeWidth={1.5} 
//                                             stroke="currentColor" 
//                                             className="w-6 h-6 text-gray-500"
//                                         >
//                                             <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
//                                         </svg>
//                                     </label>
//                                     {/* Hidden file input */}
//                                     <input
//                                         type="file"
//                                         id="plantImage"
//                                         name="plantImage"
//                                         className="hidden"
//                                         accept="image/*"
//                                         required
//                                     />
//                                 </div>
//                                 <div className='mb-4'>
//                                     <label htmlFor="plantName" className="block text-sm font-medium">Plant Name</label>
//                                     <input
//                                         type='text'
//                                         name="plantName"
//                                         className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//                                         placeholder="Plant Name"
//                                     />
//                                 </div>
//                                 <div className='mb-4'>
//                                     <label htmlFor="plantationDate" className="block text-sm font-medium">Plantation Date</label>
//                                     <input
//                                         type='date'
//                                         name="plantationDate"
//                                         className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//                                         placeholder="Plantation Date"
//                                     />
//                                 </div>
//                                 <div className='mb-4'>
//                                     <label htmlFor="plantType" className="block text-sm font-medium">Plant Type</label>
//                                     <select
//                                         id="plantType"
//                                         name="plantType"
//                                         className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//                                     >
//                                         <option value="" disabled>Select The Plant</option>
//                                         <option value="Indoor">Indoor</option>
//                                         <option value="Outdoor">Outdoor</option>
//                                         <option value="Succulent">Succulent</option>
//                                         <option value="Water">Water</option>
//                                         <option value="Air">Air</option>
//                                         <option value="Climbing">Climbing</option>
//                                         <option value="Flowering">Flowering</option>
//                                         <option value="Edible">Edible</option>
//                                         <option value="Ornamental">Ornamental</option>
//                                         <option value="Cacti">Cacti</option>
//                                     </select>
//                                 </div>
//                                 <div className='mb-4'>
//                                     <label htmlFor="plantDescription" className="block text-sm font-medium">Plant Description</label>
//                                     <textarea
//                                         name="plantDescription"
//                                         className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//                                         placeholder="Write about your plant"
//                                         resize="none"
//                                         required
//                                     />
//                                 </div>
//                                 <Button
//                                     text="Add"
//                                     type="submit"
//                                     className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md"
//                                     onClick={handleSubmit}
//                                 />
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
import Button from '../components/button';
import useFetchUserLocalStorage from '../hooks/useFetchUserLocalStorage';

export default function MyPlantModal({ showModal, closeModal }) {
    const user = useFetchUserLocalStorage();
    const userId = user?._id;
    const [plantImage, setPlantImage] = useState('');
    const [plantName, setPlantName] = useState('');
    const [plantType, setPlantType] = useState('');
    const [plantDescription, setPlantDescription] = useState('');
    const [plantationDate, setPlantationDate] = useState('');

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setPlantImage(e.target.files[0].name); // Save only the file name
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        if (!userId) {
            alert("User not found. Please log in again.");
            return;
        }

        const plantData = {
            user: userId,
            name: plantName,
            image: plantImage,
            type: plantType,
            description: plantDescription,
            plantationDate: plantationDate,
        };

        try {
            const response = await fetch('BACKEND_URL/api/my-plants/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(plantData),
            });

            if (response.ok) {
                alert('Plant added successfully!');
                closeModal(); // Close the modal after successful submission
                window.location.reload();
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message || 'Failed to add plant.'}`);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-30">
                    <div className="absolute inset-0 flex items-center bg-navygreen-100 justify-center bg-opacity-40">
                        <div className="relative w-full max-w-md mx-4 sm:mx-6 lg:mx-8 bg-navygreen-100 rounded-pl p-8 z-10">
                            <button className="absolute top-2 right-2 p-2 hover:bg-navygreen-200 rounded-pl text-gray-100" onClick={closeModal}>
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                            <h2 className="text-lg font-bold mb-4">Add a new Plant</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="plantImage" className="block text-sm font-medium">Plant Image</label>
                                    <label
                                        htmlFor="plantImage"
                                        className="flex flex-col items-center justify-center w-[100px] h-[100px] p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-navygreen-200"
                                    >
                                        {plantImage ? (
                                            <img
                                                src={`/assets/products/${plantImage}`}
                                                alt="Plant Preview"
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-gray-500"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                        )}
                                    </label>
                                    <input
                                        type="file"
                                        id="plantImage"
                                        name="plantImage"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="plantName" className="block text-sm font-medium">Plant Name</label>
                                    <input
                                        type="text"
                                        name="plantName"
                                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                        placeholder="Plant Name"
                                        value={plantName}
                                        onChange={(e) => setPlantName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="plantationDate" className="block text-sm font-medium">Plantation Date</label>
                                    <input
                                        type="date"
                                        name="plantationDate"
                                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                        value={plantationDate}
                                        onChange={(e) => setPlantationDate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="plantType" className="block text-sm font-medium">Plant Type</label>
                                    <select
                                        id="plantType"
                                        name="plantType"
                                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                        value={plantType}
                                        onChange={(e) => setPlantType(e.target.value)}
                                        required
                                    >
                                        <option value="" disabled>Select The Plant</option>
                                        <option value="Indoor">Indoor</option>
                                        <option value="Outdoor">Outdoor</option>
                                        <option value="Succulent">Succulent</option>
                                        <option value="Water">Water</option>
                                        <option value="Air">Air</option>
                                        <option value="Climbing">Climbing</option>
                                        <option value="Flowering">Flowering</option>
                                        <option value="Edible">Edible</option>
                                        <option value="Ornamental">Ornamental</option>
                                        <option value="Cacti">Cacti</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="plantDescription" className="block text-sm font-medium">Plant Description</label>
                                    <textarea
                                        name="plantDescription"
                                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                        placeholder="Write about your plant"
                                        value={plantDescription}
                                        onChange={(e) => setPlantDescription(e.target.value)}
                                        required
                                    />
                                </div>
                                <Button
                                    text="Add"
                                    type="submit"
                                    className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}