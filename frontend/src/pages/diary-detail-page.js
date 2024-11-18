// import React from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import Button from '../components/button';
// import useFetch from '../hooks/useFetch';
// import formatDate from '../functions/format-date';
// import PlantDiaryCarousel from '../carousels/plant-diary-carousel';
// import useDelete from '../hooks/useDelete';

// const PlantDiaryDetailPage = () => {
//     const navigate = useNavigate();
//     const {id} = useParams();
//     const url = `http://localhost:5000/api/plant-diaries/${id}`;
//     const {data: diary, loading, error} = useFetch(url);
//     // Initialize useDelete with the base URL for deleting a diary
//     const { deleteItem, isLoading, error:deleteError } = useDelete(
//         'http://localhost:5000/api/plant-diaries'
//     );

//     // Handle delete action when triggered
//     const handleDelete = (diaryId) => {
//         deleteItem(diaryId); // Pass the diary ID to deleteItem
//         navigate(-1);
//     };

//     return (
//         <div className="container mx-auto px-6 pb-10 pt-28">
//             {/* Header */}
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
//                 {/* Left Column - Plant Info */}
//                 <div className="w-full md:w-1/2 rounded-pl border-2 border-navygreen-100 p-6">
//                     <h3 className="text-lg font-semibold mb-2">Plant Update:</h3>
//                     <p>
//                         {diary.plantUpdate}
//                     </p>
//                 </div>

//                 {/* Right Column - Plant Image and Gallery */}
//                 <div className="w-full md:w-1/2">
//                     <div className='place-self-center'>
//                         <PlantDiaryCarousel images={diary.plantImages || []} />
//                     </div>
//                 </div>
//             </div>

//             {/* Notes & Observations */}
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

//             {/* Action Buttons */}
//             <div className="flex justify-end gap-4 mt-6">
//                 <Button
//                     type="submit"
//                     text="Edit Entry"
//                     className="py-2"
//                 />
//                 <Button
//                     onClick={() => handleDelete(diary?._id)}
//                     type="submit"
//                     text="Delete Entry"
//                     className="py-2 border-none bg-danger"
//                 />
//             </div>
//         </div>
//     );
// };

// export default PlantDiaryDetailPage;

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/button';
import useFetch from '../hooks/useFetch';
import formatDate from '../functions/format-date';
import PlantDiaryCarousel from '../carousels/plant-diary-carousel';
import useDelete from '../hooks/useDelete';

const PlantDiaryDetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const url = `http://localhost:5000/api/plant-diaries/${id}`;
    const { data: diary, loading, error } = useFetch(url);
    const { deleteItem, isLoading, error: deleteError } = useDelete('http://localhost:5000/api/plant-diaries');

    const handleDelete = (diaryId) => {
        deleteItem(diaryId);
        navigate(-1);
    };

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
                <Button type="submit" text="Edit Entry" className="py-2" />
                <Button
                    onClick={() => handleDelete(diary?._id)}
                    type="submit"
                    text="Delete Entry"
                    className="py-2 border-none bg-danger"
                />
            </div>
        </div>
    );
};

export default PlantDiaryDetailPage;

