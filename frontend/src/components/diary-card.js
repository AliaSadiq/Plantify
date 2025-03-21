// import React from 'react';
// import { Link } from 'react-router-dom';
// import OptionsDropdown from '../dropdowns/options-dropdown';
// import formatDate from '../functions/format-date';
// import useDelete from '../hooks/useDelete';

// export default function DiaryCard({ diary, onDeleteSuccess }) {
//     // Initialize useDelete with the base URL for deleting a diary
//     const { deleteItem, isLoading, error } = useDelete(
//         'BACKEND_URL/api/plant-diaries', 
//         onDeleteSuccess // Callback function to handle successful deletion
//     );

//     // Handle delete action when triggered
//     const handleDelete = (diaryId) => {
//         deleteItem(diaryId); // Pass the diary ID to deleteItem
//         window.location.reload();
//     };

//     // Function to truncate message to 3-4 words
//     const truncateMessage = (messageText) => {
//         const words = messageText.split(" ");
//         return words.length <= 4 ? messageText : `${words.slice(0, 4).join(" ")}...`;
//     };

//     // Function to get the watering status SVG
//     const getWateringStatusSVG = (watered) => {
//         return watered === "Watered" ? <div>💧</div> : <div>🌵</div>;
//     };

//     // Function to get the sunlight status SVG
//     const getSunlightStatusSVG = (sunlight) => {
//         switch (sunlight) {
//             case "fullSun": return <div>☀️</div>;
//             case "halfSun": return <div>🌤️</div>;
//             case "Shade": return <div>🌑</div>;
//             case "UV": return <div>🔆</div>;
//             default: return null;
//         }
//     };

//     return (
//         <div className="relative flex items-center gap-4 bg-navygreen-50 border-2 border-navygreen-200 w-80 h-40 p-2 rounded-pl">
//             <div className='absolute top-2 right-2'>
//                 <OptionsDropdown onDelete={() => handleDelete(diary._id)} /> {/* Pass handleDelete to the delete option */}
//             </div>
//             <div className='absolute bottom-2 right-2 flex'>
//                 {getWateringStatusSVG(diary.watered)}
//                 {getSunlightStatusSVG(diary.sunlight)}
//             </div>
//             <Link to={`/plant-diary-detail/${diary._id}`} className='w-full'>
//                 <img 
//                     src={`/assets/products/${diary.plantImages[0]}`}
//                     alt="plant image"
//                     className="w-40 h-[138px] object-cover rounded-pl cursor-pointer"
//                 />
//             </Link>
//             <div className='text-sm w-full'>
//                 <p className='mb-2'><span className='font-bold'>Status:</span> {diary.plantStatus}</p>
//                 <p><span className='font-bold'>Diary:</span> {truncateMessage(diary.plantUpdate)}</p>
//                 <p className='font-semibold text-xs text-gray-600 place-self-end mt-2'>{formatDate(diary.diaryDate)}</p>
//             </div>
//             {/* Optionally, display loading or error messages */}
//             {isLoading && <p className="text-sm text-blue-500">Deleting...</p>}
//             {error && <p className="text-sm text-red-500">{error}</p>}
//         </div>
//     );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OptionsDropdown from '../dropdowns/options-dropdown';
import formatDate from '../functions/format-date';
import useDelete from '../hooks/useDelete';
import UpdateDiaryModal from '../popups/update-diary-modal';// Import the modal

export default function DiaryCard({ diary, onDeleteSuccess }) {
    // Initialize useDelete with the base URL for deleting a diary
    const { deleteItem, isLoading, error } = useDelete(
        'BACKEND_URL/api/plant-diaries',
        onDeleteSuccess // Callback function to handle successful deletion
    );

    const [showModal, setShowModal] = useState(false); // Track modal visibility
    const [selectedDiaryId, setSelectedDiaryId] = useState(null); // Track the diary being edited

    const handleDelete = (diaryId) => {
        deleteItem(diaryId); // Pass the diary ID to deleteItem
        window.location.reload();
    };

    const handleEdit = (diaryId) => {
        setSelectedDiaryId(diaryId); // Set the current diary ID
        setShowModal(true); // Open the modal
    };

    const closeModal = () => {
        setShowModal(false); // Close the modal
    };

    const truncateMessage = (messageText) => {
        const words = messageText.split(" ");
        return words.length <= 4 ? messageText : `${words.slice(0, 4).join(" ")}...`;
    };

    const getWateringStatusSVG = (watered) => {
        return watered === "Watered" ? <div>💧</div> : <div>🌵</div>;
    };

    const getSunlightStatusSVG = (sunlight) => {
        switch (sunlight) {
            case "fullSun": return <div>☀️</div>;
            case "halfSun": return <div>🌤️</div>;
            case "Shade": return <div>🌑</div>;
            case "UV": return <div>🔆</div>;
            default: return null;
        }
    };

    return (
        <>
            <div className="relative flex items-center gap-4 bg-navygreen-50 border-2 border-navygreen-200 w-80 h-40 p-2 rounded-pl">
                <div className='absolute top-2 right-2'>
                    <OptionsDropdown
                        onEdit={() => handleEdit(diary._id)} // Trigger edit modal
                        onDelete={() => handleDelete(diary._id)} // Pass handleDelete to the delete option
                    />
                </div>
                <div className='absolute bottom-2 right-2 flex'>
                    {getWateringStatusSVG(diary.watered)}
                    {getSunlightStatusSVG(diary.sunlight)}
                </div>
                <Link to={`/plant-diary-detail/${diary._id}`} className='w-full'>
                    <img 
                        src={`/assets/products/${diary.plantImages[0]}`}
                        alt="plant image"
                        className="w-40 h-[138px] object-cover rounded-pl cursor-pointer"
                    />
                </Link>
                <div className='text-sm w-full'>
                    <p className='mb-2'><span className='font-bold'>Status:</span> {diary.plantStatus}</p>
                    <p><span className='font-bold'>Diary:</span> {truncateMessage(diary.plantUpdate)}</p>
                    <p className='font-semibold text-xs text-gray-600 place-self-end mt-2'>{formatDate(diary.diaryDate)}</p>
                </div>
                {isLoading && <p className="text-sm text-blue-500">Deleting...</p>}
                {error && <p className="text-sm text-red-500">{error}</p>}
            </div>

            {/* Conditionally render the modal */}
            {showModal && (
                <UpdateDiaryModal
                    diaryId={selectedDiaryId}
                    plantId={diary.plantId}
                    closeModal={closeModal} // Pass closeModal to handle modal close
                />
            )}
        </>
    );
}
