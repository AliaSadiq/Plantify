import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import useDelete from '../hooks/useDelete';
import MyPlantModal from '../popups/add-myplant-modal';
import OptionsDropdown from '../dropdowns/options-dropdown';
import EditMyPlantModal from '../popups/edit-myplant.modal';

export default function MyPlantsList ({ plants, fetchPlants}) {

    const { deleteItem, isLoading, error } = useDelete(
        'http://localhost:5000/api/my-plants',
        fetchPlants
    );

    const handleDelete = (plantId) => {
        deleteItem(plantId).then(() => fetchPlants()); // Call fetchPlants after deletion
    };

    //add myplant popup
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedPlant, setSelectedPlant] = useState(null);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleOpenEditModal = (plant) => {
        setSelectedPlant(plant); // Pass the selected plant
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setSelectedPlant(null);
        setIsEditModalOpen(false);
    };

    return (
        <div className="col-span-1 md:col-span-6 border-2 border-navygreen-100 p-6 rounded-pl mb-4 md:mb-0">
            <div className="mb-4 flex items-center justify-between">
                <div className="font-bold text-md">My Plants</div>
                <button 
                    className="p-2 rounded-full bg-gray-100"
                    onClick={handleOpenModal}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="#FFFFFF" 
                        className="size-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
            <ul className="flex flex-col gap-4 overflow-y-auto max-h-[400px]">
                {plants.length > 0 ? (
                    plants.map((plant, index) => (
                            <li key={index} className="flex gap-2 items-center justify-between p-2 rounded-pl border border-navygreen-100 shadow-sm bg-navygreen-50 transition-colors duration-200">
                                <Link to={`/plant-diary/${plant._id}`} className='flex items-center w-full'>
                                    <img src={`/assets/products/${plant.image}`} alt="plant img" className="w-20 h-20 object-cover rounded-pl"/> 
                                    <div className="max-w-fit flex flex-col p-2">
                                        <h1 className="font-semibold text-xmini">{plant.name}</h1>
                                        <p className="text-sm">Type: {plant.type}</p>
                                    </div>
                                </Link>
                                <div className="">
                                    <OptionsDropdown 
                                        onDelete={() => handleDelete(plant._id)}
                                        onEdit={() => handleOpenEditModal(plant)}
                                    />
                                </div>
                            </li>
                    ))
                ) : (
                    <p className="text-center">No plants yet. Click on the plus icon to add some.</p>
                )}
                {isLoading && <p>Deleting...</p>}
                {error && <p className="text-red-500">{error}</p>}
            </ul>
            <MyPlantModal showModal={isModalOpen} closeModal={handleCloseModal}/>
            <EditMyPlantModal
                showModal={isEditModalOpen}
                closeModal={handleCloseEditModal}
                plant={selectedPlant} // Pass the selected plant
            />
        </div>
    );
}