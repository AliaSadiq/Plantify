import React, { useState, useEffect } from "react";
import Calendar from "../components/calendar";
import UserProfile from "../components/user-profile";
import AddGoalModal from "../popups/add-goal-modal";
import DonationsChart from "../components/donations-chart";
import useFetchUserLocalStorage from "../hooks/useFetchUserLocalStorage";
import useFetch from "../hooks/useFetch";
import MyPlantsList from "../components/my-plants-list";
import GoalsList from "../components/goals-list";

export default function PersonalGrowth() {
    
    const user = useFetchUserLocalStorage();
    const userId = user?._id;
    const url = `https://plantify-backend.vercel.app/api/my-plants/user/${user?._id}`;
    const {data: plants, loading, error, refetch} = useFetch(url);
    const {data: goals} = useFetch(`https://plantify-backend.vercel.app/api/goals/user/${userId}`);

    return (
        <div className="min-h-screen bg-neutral pt-20 px-4 md:px-40">
            <div className="place-self-start w-full md:w-1/2 rounded-pl text-center mb-8 md:mb-0">            
                <UserProfile plantCount={plants.length}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4">
                {/* Event Calendar */}
                <div className="col-span-1 md:col-span-6 border-2 border-navygreen-100 p-6 rounded-pl mb-4 md:mb-0">
                    <p className="mb-2 font-bold text-md">Event Calendar</p>
                    <Calendar/>
                </div>

                {/* My Plants List */}
                <MyPlantsList plants={plants} fetchPlants={refetch}/>

                {/* Line Chart */}
                <div className="col-span-1 md:col-span-6 rounded-pl p-8 border-2 border-navygreen-100 w-full text-center place-self-center mb-4 md:mb-0">            
                    <DonationsChart userId={user?._id}/>{/* <Line data={data} options={options}/> */}
                </div>
                
                {/* Goals List */}
                <GoalsList userId={userId} />
            </div>
        </div>
    );
}
