import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Button from '../components/button';

export default function EditMyPlantModal({ showModal, closeModal, plant }) {
    const [formData, setFormData] = useState({
        plantName: '',
        plantationDate: '',
        plantType: '',
        plantDescription: '',
    });
    const [plantImage, setPlantImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (plant) {
            setFormData({
                plantName: plant.name || '',
                plantationDate: plant.plantationDate 
                    ? new Date(plant.plantationDate).toISOString().split('T')[0] // Format to YYYY-MM-DD
                    : '',
                plantType: plant.type || '',
                plantDescription: plant.description || '',
            });
            setPlantImage(plant.image || null); // Set initial image from plant data
        }
    }, [plant]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    
            if (!validImageTypes.includes(file.type)) {
                alert('Please select a valid image file (JPEG, PNG, or GIF).');
                return;
            }
    
            setPlantImage(file); // Store the image file
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        // Prepare the data to send as JSON (no FormData)
        const dataToSubmit = {
            name: formData.plantName,
            plantationDate: formData.plantationDate,
            type: formData.plantType,
            description: formData.plantDescription,
            image: plantImage instanceof File ? plantImage.name : plantImage, // send the image filename
        };
    
        try {
            const response = await fetch(`BACKEND_URL/api/my-plants/${plant._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSubmit),
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
    
            const data = await response.json();
            console.log('Plant updated successfully:', data);
            closeModal(); // Close modal after successful submission
        } catch (error) {
            console.error('Failed to update plant:', error);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-30">
                    <div className="absolute inset-0 flex items-center bg-navygreen-100 justify-center bg-opacity-40">
                        <div className="relative w-full max-w-md mx-4 sm:mx-6 lg:mx-8 bg-navygreen-100 rounded-pl p-8 z-10">
                            <button
                                className="absolute top-2 right-2 p-2 hover:bg-navygreen-200 rounded-pl text-gray-100"
                                onClick={closeModal}
                            >
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                            <h2 className="text-lg font-bold mb-4">Edit your Plant</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="plantImage" className="block text-sm font-medium">Plant Image</label>
                                    <label
                                        htmlFor="plantImage"
                                        className="flex flex-col items-center justify-center w-[100px] h-[100px] p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-navygreen-200"
                                    >
                                        {plantImage ? (
                                            <img
                                                src={
                                                    plantImage instanceof File
                                                        ? URL.createObjectURL(plantImage)
                                                        : `/assets/products/${plantImage}`
                                                }
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
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                                />
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
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="plantName" className="block text-sm font-medium">Plant Name</label>
                                    <input
                                        type="text"
                                        name="plantName"
                                        value={formData.plantName}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                        placeholder="Plant Name"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="plantationDate" className="block text-sm font-medium">Plantation Date</label>
                                    <input
                                        type="date"
                                        name="plantationDate"
                                        value={formData.plantationDate}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                        placeholder="Plantation Date"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="plantType" className="block text-sm font-medium">Plant Type</label>
                                    <select
                                        id="plantType"
                                        name="plantType"
                                        value={formData.plantType}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                        required
                                    >
                                        <option value="" disabled>Select The Plant</option>
                                        <option value="Indoor">Indoor</option>
                                        <option value="Outdoor">Outdoor</option>
                                        <option value="Succulent">Succulent</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="plantDescription" className="block text-sm font-medium">Plant Description</label>
                                    <textarea
                                        name="plantDescription"
                                        value={formData.plantDescription}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                        placeholder="Write about your plant"
                                        required
                                    />
                                </div>
                                <Button
                                    text={isLoading ? "Updating..." : "Update"}
                                    type="submit"
                                    className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md"
                                    disabled={isLoading}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

