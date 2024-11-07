import React from 'react';
import Button from '../components/button';

const PlantDiaryDetailPage = () => {

    // Sample plant object to avoid undefined errors
    const plant = {
        name: "Fiddle Leaf Fig",
        type: "Ficus lyrata",
        location: "Living Room",
        dateAdded: "2024-10-28",
        lastWatered: "2024-10-25",
        growthStage: "Mature",
        mainImage: "https://via.placeholder.com/600x400", // Placeholder image
        additionalImages: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150"
        ],
        notes: "This plant has been growing well with bright, indirect sunlight. Water every 10 days.",
        careLog: [
            { date: "2024-10-20", action: "Watered" },
            { date: "2024-10-15", action: "Fertilized" },
            { date: "2024-10-10", action: "Pruned" }
        ]
    };
    return (
        <div className="container mx-auto px-6 pb-10 pt-28">
            {/* Header */}
            <header className="text-center mb-6">
                <h1 className="text-lil2xl font-bold">{plant.name} ({plant.dateAdded})</h1>
                <p className="text-gray-600">Plant Status: Thriving</p>
            </header>

            <div className='flex flex-col lg:flex-row md:flex-row items-center gap-8 w-full px-4 py-8 border-y-2 border-gray-600 mb-4'>
                <div className='flex gap-1 items-center'>
                    <p className='font-semibold'>Watered</p>
                    <svg
                        className="w-4 h-4 cursor-pointer transition-colors"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00BFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                    <path d="M12 21c-4.97 0-9-4.03-9-9 0-4 9-11 9-11s9 7 9 11c0 4.97-4.03 9-9 9z" />
                    </svg>
                </div>
                <div className='flex gap-1 items-center'>
                    <p className='font-semibold'>UV Light</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#9575CD" viewBox="0 0 24 24" width="30" height="30">
                        <circle cx="12" cy="12" r="5"/>
                        <path d="M12 1v3M12 20v3M4.222 4.222l2.121 2.121M16.95 16.95l2.121 2.121M1 12h3M20 12h3M4.222 19.778l2.121-2.121M16.95 7.05l2.121-2.121"/>
                        <text x="8" y="16" font-size="8" fill="#222222">UV</text>
                    </svg>
                </div>
                <p>Last Watered: 20.6.5</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Column - Plant Info */}
                <div className="w-full md:w-1/2 bg-white p-6">
                    <h3 className="text-lg font-semibold mb-2">Diary</h3>
                    <p>asjkhdkh asjkhdjka hskdhkajshd jka d gsd sjkd hjkah sjdkhak
                        ahsd askdh kasdjhksj hdjkah skdhaskh djahshdh ahda khdjk ahdjk hsd
                        shd ksjdh kajshd kajshd kasjhd kahkas djkhajksdh kashdjk djkash 
                        ajkh
                    </p>
                </div>

                {/* Right Column - Plant Image and Gallery */}
                <div className="w-full md:w-1/2">
                <img src={plant.mainImage} alt={plant.name} className="w-full h-72 object-cover rounded-lg mb-4" />
                {/* Optional additional images */}
                <div className="grid grid-cols-3 gap-2">
                    {plant.additionalImages.map((image, index) => (
                    <img key={index} src={image} alt={`Plant ${index + 1}`} className="object-cover rounded-lg h-24 w-full" />
                    ))}
                </div>
                </div>
            </div>

            {/* Notes & Observations */}
            <div className='w-full flex flex-col md:flex-row lg:flex-row gap-8'>
                <div className="mt-6 bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Growth & Development Observations</h3>
                    <p>{plant.notes}</p>
                </div>
                <div className="mt-6 bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Health Issues</h3>
                    <p>{plant.notes}</p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-6">
                <Button
                    type="submit"
                    text="Go Back"
                    className="py-2"
                />
                <Button
                    type="submit"
                    text="Edit Entry"
                    className="py-2"
                />
                <Button
                    type="submit"
                    text="Delete Entry"
                    className="py-2 bg-danger"
                />
            </div>
        </div>
    );
};

export default PlantDiaryDetailPage;
