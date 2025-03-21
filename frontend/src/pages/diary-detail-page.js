// import React, {useState} from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import Button from '../components/button';
// import useFetch from '../hooks/useFetch';
// import formatDate from '../functions/format-date';
// import PlantDiaryCarousel from '../carousels/plant-diary-carousel';
// import useDelete from '../hooks/useDelete';
// import UpdateDiaryModal from '../popups/update-diary-modal';

// const PlantDiaryDetailPage = () => {
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const url = `BACKEND_URL/api/plant-diaries/${id}`;
//     const { data: diary, loading, error } = useFetch(url);
//     const { deleteItem, isLoading, error: deleteError } = useDelete('BACKEND_URL/api/plant-diaries');
//     const [showModal, setShowModal] = useState(false); // Track modal visibility

//     const handleDelete = (diaryId) => {
//         deleteItem(diaryId);
//         navigate(-1);
//     };

//     const handleEdit = () => {
//         setShowModal(true); // Open the modal
//     };

//     const closeModal = () => {
//         setShowModal(false); // Close the modal
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error loading diary details</div>;

//     return (
//         <div className="container mx-auto px-6 pb-10 pt-28">
//             <header className="text-center mb-6">
//                 <h1 className="text-lil2xl font-bold">{diary.plant ? diary.plant.name : "Unknown Plant"}</h1>
//                 <p className="text-gray-600">{formatDate(diary.diaryDate)}</p>
//             </header>
//             <div className="flex flex-col justify-between gap-4 lg:flex-row h-full p-4 rounded rounded-pl mr-4">
//                 <div className='w-full'>
//                     <div className="flex flex-col lg:flex-row gap-6 w-full">
//                         <div className="p-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
//                             <h3 className="text-mini font-bold mb-2 z-10">Plant Status:</h3>
//                             <h1 className='text-md font-semibold'>{diary.plantStatus}</h1>
//                         </div>
//                         <div className="p-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
//                             <h3 className="text-mini font-bold mb-2 z-10">Watering Status:</h3>
//                             <h1 className='text-md font-semibold'>{diary.watered}</h1>
//                         </div>
//                         <div className="p-8 py-4  w-full max-h-fit bg-navygreen-100  rounded-pl shadow-md">
//                             <h3 className="text-mini font-bold mb-2 z-10">Sunlight Provided:</h3>
//                             <h1 className='text-md font-semibold'>{diary.sunlight}</h1>
//                         </div>
//                         <div className="px-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
//                             <h3 className="text-mini font-bold mb-2 z-10">Fertilizer:</h3>
//                             <h1 className='text-md font-semibold'>{diary.fertilizer}</h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex flex-col md:flex-row gap-6">
//                 <div className="w-full md:w-1/2 rounded-pl border-2 border-navygreen-100 p-6">
//                     <h3 className="text-lg font-semibold mb-2">Plant Update:</h3>
//                     <p>{diary.plantUpdate}</p>
//                 </div>

//                 <div className="w-full md:w-1/2">
//                     <div className='place-self-center'>
//                         {diary.plantImages && diary.plantImages.length > 0 ? (
//                             <PlantDiaryCarousel images={diary.plantImages} />
//                         ) : (
//                             <p>No images available</p>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             <div className='w-full flex flex-col md:flex-row lg:flex-row gap-6'>
//                 <div className="mt-6 w-full p-6 rounded-pl border-2 border-navygreen-100">
//                     <h3 className="text-lg font-semibold mb-2">Growth & Development Observations</h3>
//                     <p>{diary.growthObservation}</p>
//                 </div>
//                 <div className="mt-6 w-full p-6 rounded-pl border-2 border-navygreen-100">
//                     <h3 className="text-lg font-semibold mb-2">Health Issues</h3>
//                     <p>{diary.healthIssues}</p>
//                 </div>
//             </div>

//             <div className="flex justify-end gap-4 mt-6">
//                 <Button 
//                     type="submit" 
//                     text="Edit Entry" 
//                     className="py-2" 
//                     onClick={() => handleEdit()}
//                 />
//                 <Button
//                     onClick={() => handleDelete(diary?._id)}
//                     type="submit"
//                     text="Delete Entry"
//                     className="py-2 border-none bg-danger"
//                 />
//             </div>
//             {/* Conditionally render the modal */}
//             {showModal && (
//                 <UpdateDiaryModal
//                     diaryId={id}
//                     plantId={diary.plantId}
//                     closeModal={closeModal} // Pass closeModal to handle modal close
//                 />
//             )}
//         </div>
//     );
// };

// export default PlantDiaryDetailPage;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/button';
import useFetch from '../hooks/useFetch';
import formatDate from '../functions/format-date';
import PlantDiaryCarousel from '../carousels/plant-diary-carousel';
import useDelete from '../hooks/useDelete';
import UpdateDiaryModal from '../popups/update-diary-modal';

const PlantDiaryDetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [diaryUpdated, setDiaryUpdated] = useState(false); // Track if the diary has been updated

    const url = `BACKEND_URL/api/plant-diaries/${id}`;
    const { data: diary, loading, error, refetch } = useFetch(url); // Destructure refetch from useFetch
    const { deleteItem, isLoading, error: deleteError } = useDelete('BACKEND_URL/api/plant-diaries');

    const handleDelete = (diaryId) => {
        deleteItem(diaryId);
        navigate(-1);
    };

    const handleEdit = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setDiaryUpdated(true); // Set to true to trigger refetch
    };

    useEffect(() => {
        if (diaryUpdated) {
            refetch(); // Refetch diary data
            setDiaryUpdated(false); // Reset update state
        }
    }, [diaryUpdated, refetch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading diary details</div>;

    return (
        <div className="container mx-auto px-6 pb-10 pt-28">
            <header className="text-center mb-6">
                <h1 className="text-lil2xl font-bold">{diary.plant ? diary.plant.name : "Unknown Plant"}</h1>
                <p className="text-gray-600">{formatDate(diary.diaryDate)}</p>
            </header>
            <div className="flex flex-col justify-between gap-4 lg:flex-row h-full p-4 rounded rounded-pl mr-4">
                <div className='w-full'>
                    <div className="flex flex-col lg:flex-row gap-6 w-full">
                        <div className="p-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
                            <h3 className="text-mini font-bold mb-2 z-10">Plant Status:</h3>
                            <h1 className='text-md font-semibold'>{diary.plantStatus}</h1>
                        </div>
                        <div className="p-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
                            <h3 className="text-mini font-bold mb-2 z-10">Watering Status:</h3>
                            <h1 className='text-md font-semibold'>{diary.watered}</h1>
                        </div>
                        <div className="p-8 py-4  w-full max-h-fit bg-navygreen-100  rounded-pl shadow-md">
                            <h3 className="text-mini font-bold mb-2 z-10">Sunlight Provided:</h3>
                            <h1 className='text-md font-semibold'>{diary.sunlight}</h1>
                        </div>
                        <div className="px-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
                            <h3 className="text-mini font-bold mb-2 z-10">Fertilizer:</h3>
                            <h1 className='text-md font-semibold'>{diary.fertilizer}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 rounded-pl border-2 border-navygreen-100 p-6">
                    <h3 className="text-lg font-semibold mb-2">Plant Update:</h3>
                    <p>{diary.plantUpdate}</p>
                </div>

                <div className="w-full md:w-1/2">
                    <div className='place-self-center'>
                        {diary.plantImages && diary.plantImages.length > 0 ? (
                            <PlantDiaryCarousel images={diary.plantImages} />
                        ) : (
                            <p>No images available</p>
                        )}
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row lg:flex-row gap-6'>
                <div className="mt-6 w-full p-6 rounded-pl border-2 border-navygreen-100">
                    <h3 className="text-lg font-semibold mb-2">Growth & Development Observations</h3>
                    <p>{diary.growthObservation}</p>
                </div>
                <div className="mt-6 w-full p-6 rounded-pl border-2 border-navygreen-100">
                    <h3 className="text-lg font-semibold mb-2">Health Issues</h3>
                    <p>{diary.healthIssues}</p>
                </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
                <Button 
                    type="submit" 
                    text="Edit Entry" 
                    className="py-2" 
                    onClick={handleEdit}
                />
                <Button
                    onClick={() => handleDelete(diary?._id)}
                    type="submit"
                    text="Delete Entry"
                    className="py-2 border-none bg-danger"
                />
            </div>
            {/* Conditionally render the modal */}
            {showModal && (
                <UpdateDiaryModal
                    diaryId={id}
                    plantId={diary.plantId}
                    closeModal={closeModal} // Pass closeModal to handle modal close
                />
            )}
        </div>
    );
};

export default PlantDiaryDetailPage;
