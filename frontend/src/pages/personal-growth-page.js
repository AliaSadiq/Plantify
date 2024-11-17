import React, { useState, useEffect } from "react";
import Calendar from "../components/calendar";
import UserProfile from "../components/user-profile";
import MyPlantModal from "../popups/add-myplant-modal";
import AddGoalModal from "../popups/add-goal-modal";
import DonationsChart from "../components/donations-chart";
import useFetchUserLocalStorage from "../hooks/useFetchUserLocalStorage";
import useFetch from "../hooks/useFetch";

export default function PersonalGrowth() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
    const user = useFetchUserLocalStorage();
    const url = `http://localhost:5000/api/my-plants/user/${user?._id}`;
    const {data: plants, loading, error} = useFetch(url);

    //add myplant popup
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    //add goal popup
    const handleGoalOpenModal = () => {
        setIsGoalModalOpen(true);
    };

    const handleGoalCloseModal = () => {
        setIsGoalModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-neutral pt-20 px-4 md:px-40">
            <div className="place-self-start w-full md:w-1/2 rounded-pl text-center mb-8 md:mb-0">            
                <UserProfile/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4">
                {/* Event Calendar */}
                <div className="col-span-1 md:col-span-6 border-2 border-navygreen-100 p-6 rounded-pl mb-4 md:mb-0">
                    <p className="mb-2 font-bold text-md">Event Calendar</p>
                    <Calendar/>
                </div>

                {/* My Plants List */}
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
                    <ul className="flex flex-col gap-4 overflow-y-auto max-h-[500px]">
                        {plants.length > 0 ? (
                            plants.map((plant, index) => (
                                <li key={index} className="flex gap-2 items-center p-2 rounded-pl border border-navygreen-100 shadow-sm bg-navygreen-50 transition-colors duration-200">
                                    <img src="/assets/products/plant-3.jpeg" alt="plant img" className="w-20 h-20 object-cover rounded-pl"/> 
                                    <div className="max-w-fit flex flex-col p-2">
                                        <h1 className="font-semibold text-xmini">{plant.name}</h1>
                                        <p className="text-sm">Type: {plant.type}</p>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p className="text-center">No plants yet. Click on the plus icon to add some.</p>
                        )}
                    </ul>
                </div>

                {/* Line Chart */}
                <div className="col-span-1 md:col-span-6 rounded-pl p-8 border-2 border-navygreen-100 w-full text-center place-self-center mb-4 md:mb-0">            
                    <DonationsChart userId={user?._id}/>{/* <Line data={data} options={options}/> */}
                </div>
                
                {/* Goals List */}
                <div className="col-span-1 md:col-span-6 border-2 border-navygreen-100 bg-navygreen-100 p-6 rounded-pl">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="font-bold text-md">Goals List</div>
                        <button className="p-2 rounded-full bg-gray-100" onClick={handleGoalOpenModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Single Goal Item */}
                    <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px] py-2">
                        <div className="flex items-center bg-neutral justify-between px-4 py-2 rounded-pl border border-navygreen-100 shadow-sm hover:bg-navygreen-50 transition-colors duration-200">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="goal"
                                    className="mr-4 h-5 w-5 text-navygreen-500 border-gray-300 rounded focus:ring-navygreen-300"
                                />
                                <label className="text-xsm font-medium text-gray-800">goal xyz</label>
                            </div>
                            <div className="bg-yolk rounded-full p-[6px]">
                            </div>   
                        </div>
                    </ul>
                    {/* More goal items */}
                </div>
            </div>
            <MyPlantModal showModal={isModalOpen} closeModal={handleCloseModal}/>
            <AddGoalModal showModal={isGoalModalOpen} closeModal={handleGoalCloseModal}/>
        </div>
    );
}
