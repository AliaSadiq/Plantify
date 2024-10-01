// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from '../components/button';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
// import { Label } from 'recharts';
// import CustomCalendar from '../components/custom-calendar';

// ChartJS.register(
//     LineElement,
//     CategoryScale,
//     LinearScale,
//     PointElement
// )

// const HomePage = () => {
    // const [user, setUser] = useState(null);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const storedUser = JSON.parse(localStorage.getItem('user'));
    //     if (storedUser) {
    //         setUser(storedUser);
    //     } else {
    //         // If no user is found in local storage, navigate to the login page
    //         navigate('/login');
    //     }
    // }, [navigate]);

//     const handleGoToCampaigns = () => {
//         navigate("/campaign");
//     }

//     const data = {
//         labels: ["May 12", "", "May 13", "", "May 14", "", "May 15", "", "May 16", ""],
//         datasets: [{
//             data: [8, 9, 7.8, 7.9, 6, 7, 8, 6, 5, 7.8, 5, 8, 6]
//         }],
//         backgroundColor: 'transparent',
//         borderColor: '#f26c6d',
//         pointBorderColor: 'transparent',
//         pointBorderWidth: 4,
//         tension: 0.4
//     };

//     const options = {
//         plugins: {
//             legend: false
//         },
//         scales: {
//             x:{
//                 grid:{
//                     display: false
//                 }
//             },
//             y:{
//                 min: 2,
//                 max: 10,
//                 ticks: {
//                     stepSize: 2,
//                     callback: (value) => value + 'K'
//                 },
//                 grid: {
//                     borderDash: [10]
//                 }
//             }
//         }
//     };

//     return (
//         <div>
//             <div className='flex flex-col w-full items-center justify-between text-center font-josefin-sans bg-pale-200 px-4 py-40 lg:px-16 lg:py-56'>
//                 {user ? (
//                     <>
//                         <p className='text-xl sm:text-2xl lg:text-3xl font-bold'>Hello {user.username}!</p>
//                         <p className='text-base lg:text-xl font-bold'>This is your own Personal Area on Plantify</p>
//                         <p className='mb-4 mt-10 text-sm lg:text-mini'>Check out the latest campaigns and be a part of the initiative.</p>
//                         <Button text="Go to Campaigns" onClick={handleGoToCampaigns} className="py-4" />
//                     </>
//                 ) : (
//                     <p>Loading...</p>
//                 )}
//             </div>
//             <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 items-start bg-neutral text-gray-100 py-20 lg:py-20 rounded-t-[78px] mt-[-50px] lg:mt-[-100px]'>
//                 <div className='bg-neutral w-full lg:w-auto px-4 md:px-6 lg:px-10 py-8 lg:py-0 max-w-2xl'>
//                     <h1 className='font-bold font-josefin-sans text-lg mb-4'>Event Calendar</h1>
//                     <div className="font-josefin-sans space-y-6 relative">
//                         <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-1 bg-gray-300"></div>
//                         <div className="relative pl-8 sm:pl-10 md:pl-12 mb-8">
//                             <p className="text-gray-600 mb-2">Oct 20, 2021</p>
//                             <div className="space-y-4">
//                                 <div className="flex items-center">
//                                     <p className="text-black font-semibold w-20">10:00</p>
//                                     <div className="h-10 w-1 bg-blue-500 ml-2"></div>
//                                     <div className="ml-4">
//                                         <p className="text-blue-500">Karachi Campaign</p>
//                                         <p className="text-gray-800">by Green Pk</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <p className="text-black font-semibold w-20">13:20</p>
//                                     <div className="h-10 w-1 bg-green-500 ml-2"></div>
//                                     <div className="ml-4">
//                                         <p className="text-green-500">Design</p>
//                                         <p className="text-gray-800">Task Management</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="relative pl-8 sm:pl-10 md:pl-12 mb-8">
//                             <p className="text-gray-600 mb-2">Oct 21, 2021</p>
//                             <div className="space-y-4">
//                                 <div className="flex items-center">
//                                     <p className="text-black font-semibold w-20">10:00</p>
//                                     <div className="h-10 w-1 bg-purple-500 ml-2"></div>
//                                     <div className="ml-4">
//                                         <p className="text-purple-500">UX Research</p>
//                                         <p className="text-gray-800">Sleep App</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <p className="text-black font-semibold w-20">13:20</p>
//                                     <div className="h-10 w-1 bg-green-500 ml-2"></div>
//                                     <div className="ml-4">
//                                         <p className="text-green-500">Khanpur</p>
//                                         <p className="text-gray-800">by RGC</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <p className="text-black font-semibold w-20">10:00</p>
//                                     <div className="h-10 w-1 bg-blue-500 ml-2"></div>
//                                     <div className="ml-4">
//                                         <p className="text-blue-500">Gulberg Campaign</p>
//                                         <p className="text-gray-800">by Riphah Green Club</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="relative pl-8 sm:pl-10 md:pl-12 mb-8">
//                             <p className="text-gray-600 mb-2">Oct 22, 2024</p>
//                             <div className="space-y-4">
//                                 <div className="flex items-center">
//                                     <p className="text-black font-semibold w-20">10:00</p>
//                                     <div className="h-10 w-1 bg-blue-500 ml-2"></div>
//                                     <div className="ml-4">
//                                         <p className="text-blue-500">Islamabad Campaign</p>
//                                         <p className="text-gray-800">by Riphah Green Club</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <p className="text-black font-semibold w-20">11:00</p>
//                                     <div className="h-10 w-1 bg-green-500 ml-2"></div>
//                                     <div className="ml-4">
//                                         <p className="text-green-500">Multan Campaign</p>
//                                         <p className="text-gray-800">by Green Pakistan</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex flex-col gap-y-10 lg:gap-y-20 w-full lg:w-auto px-4 md:px-6 lg:px-0 py-8 lg:py-0 mr-0 lg:mr-10'>
//                     <div className='flex flex-col lg:flex-row gap-4 lg:gap-10'>
//                         <div className='p-8 bg-navygreen-100 rounded-lg drop-shadow-lg'>
//                             <h1 className='text-md font-semibold font-josefin-sans'>Challenge 1</h1>
//                             <p className='mt-4 text-sm font-josefin-sans'><b>Say No to Plastic Straws: </b>Refuse plastic straws when ordering drinks. If you prefer using a straw, consider bringing your own reusable one made of bamboo, metal, or glass.</p>
//                         </div>
//                         <div className='p-8 bg-navygreen-100 rounded-lg drop-shadow-lg'>
//                             <h1 className='text-md font-semibold font-josefin-sans'>Challenge 2</h1>
//                             <p className='mt-4 text-sm font-josefin-sans'><b>Eco-Friendly Commute: </b>Choose a sustainable mode of transportation for your commute today. Walk, bike, carpool, or use public transportation instead of driving alone in a car. Reduce emissions and traffic congestion while enjoying a greener journey.</p>
//                         </div>
//                         <div className='p-8 bg-navygreen-100 rounded-lg drop-shadow-lg'>
//                             <h1 className='text-md font-semibold font-josefin-sans'>Challenge 3</h1>
//                             <p className='mt-4 text-sm font-josefin-sans'><b>Water Conservation Challenge: </b>Use water mindfully today, fixing leaks, taking shorter showers, and collecting rainwater for plants to conserve this precious resource.</p>
//                         </div>
//                     </div>
//                     <div className='p-8 bg-navygreen-100 drop-shadow-xl rounded-xl font-josefin-sans'>
//                         <h1 className='mb-6 font-semibold text-lg text-gray-100'>Donation Status</h1>
//                         <Line data={data} options={options}/>
//                     </div>
//                 </div>
//                 <div className='ml-20 w-[55%]'>
//                     {/* <h1 className='float-left font-bold text-md'>
//                         Event Calendar
//                     </h1> */}
//                     {/* <div className='float-right'>
//                         <button className='rounded-full bg-yolk p-8'></button>
//                         <button className='rounded-full bg-yolk p-8'></button>
//                     </div> */}
//                     <CustomCalendar/>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HomePage;


import React, {useState, useEffect} from "react";
import useFetchUserLocalStorage from "../hooks/useFetchUserLocalStorage";
import Calendar from "../components/calendar";
import Button from "../components/button";
import Wave from "react-wavify";
import { StarIcon } from "@heroicons/react/24/solid";

export default function PersonalGrowth() {
    const user = useFetchUserLocalStorage();

    return (
        <div className="bg-neutral grid grid-cols-12 gap-4 p-4">
            {/* Greeting Text */}
            <div className="col-span-8 mt-20 pt-20 pb-20 rounded-pl place-self-auto border-2 border-navygreen-100 w-full text-center place-self-center">            
                
                {user ? (
                    <div className="z-40">
                        <p className="font-bold text-xl">Hello {user.username}! Welcome to</p>
                        <p className="font-bold text-xl">Plantify</p>
                        <p className="mt-6 font-semibold text-md z-30">Be a part of green initiatives by joining our latest campaigns</p>
                        <Button text="Join Campaigns" className="py-2 mt-4 z-40"/>
                    </div>
                ): (
                    <p>Loading...</p>
                )}
                {/* <div className="absolute top-10 left-10">
                    <img src="/assets/flowers.png" alt="flowers" className="w-80"/>
                </div> */}
                {/* Rotating Blob */}
                {/* <div className="w-full bg-tranparent-300">
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="w-full h-[300px] animate-spin-slow">
                            <Wave
                                fill="#DDE6D6"
                                paused={false}
                                options={{
                                    height: 40,
                                    amplitude: 60,
                                    speed: 0.15,
                                    points: 3,
                                }}
                                className="w-full h-full -z-10 rounded-b-pl"
                            />
                        </div>
                    </div>
                </div> */}
            </div>
            
            {/* Goals List */}
            <div className="col-span-4 border-2 border-navygreen-100 bg-navygreen-100 mt-20 p-6 rounded-pl">
                <div className="mb-4 flex items-center justify-between">
                    <div className="font-bold text-md">Goals List</div>
                    <button className="p-2 rounded-full bg-gray-100">
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
                            <label className="text-xsm font-medium text-gray-800">hemlo</label>
                        </div>
                        <div className="bg-yolk rounded-full p-[6px]">
                        </div>   
                    </div>
                </ul>
                <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px] py-2">
                    <div className="flex items-center bg-neutral justify-between gap-4 px-4 py-2 rounded-pl border border-navygreen-100 shadow-sm hover:bg-navygreen-50 transition-colors duration-200">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="goal"
                                className="mr-4 h-5 w-5 text-navygreen-500 border-gray-300 rounded focus:ring-navygreen-300"
                            />
                            <label className="text-xsm font-medium text-gray-800">mauj msti halla gulla</label>
                        </div>
                        <div className="bg-yolk rounded-full p-[6px]">
                        </div>   
                    </div>
                </ul>
                <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px] py-2">
                    <div className="flex items-center bg-neutral justify-between px-4 py-2 rounded-pl border border-navygreen-100 shadow-sm hover:bg-navygreen-50 transition-colors duration-200">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="goal"
                                className="mr-4 h-5 w-5 text-navygreen-500 border-gray-300 rounded focus:ring-navygreen-300"
                            />
                            <label className="text-xsm font-medium text-gray-800">dopamine detox</label>
                        </div>
                        <div className="bg-yolk rounded-full p-[6px]">
                        </div>   
                    </div>
                </ul>
                <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px] py-2">
                    <div className="flex items-center bg-neutral justify-between px-4 py-2 rounded-pl border border-navygreen-100 shadow-sm hover:bg-navygreen-50 transition-colors duration-200">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="goal"
                                className="mr-4 h-5 w-5 text-navygreen-500 border-gray-300 rounded focus:ring-navygreen-300"
                            />
                            <label className="text-xsm font-medium text-gray-800">hemlo</label>
                        </div>
                        <div className="bg-yolk rounded-full p-[6px]">
                        </div>   
                    </div>
                </ul>
            </div>

            {/* Event Calendar */}
            <div className="col-span-4 border-2 border-navygreen-100 p-6 rounded-pl">
                <p className="mb-2 font-bold text-md">Event Calendar</p>
                <Calendar/>
            </div>

            {/* Personal Plants List */}
            <div className="col-span-4 border-2 border-navygreen-100 p-6 rounded-pl">
                <div className="mb-4 flex items-center justify-between">
                    <div className="font-bold text-md">My Plants</div>
                    <button className="p-2 rounded-full bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px]">
                    <div className="flex gap-2 items-center p-2 rounded-pl border border-navygreen-100 shadow-sm bg-navygreen-50 transition-colors duration-200">
                        <img src="/assets/products/plant-3.jpeg" alt="plant img" className="w-20 h-20 object-cover rounded-pl"/> 
                        <div className="max-w-fit flex flex-col p-2">
                            <h1 className="font-semibold text-xmini">String of Pearls</h1>
                            <p className="text-sm">Type: Succulent</p>
                        </div>
                        <div className="max-w-fit bg-yolk flex">
                            <StarIcon className="w-4 hover:text-blue-300"/>
                            <StarIcon className="w-4 hover:text-blue-300"/>
                            <StarIcon className="w-4 hover:text-blue-300"/>
                            <StarIcon className="w-4 hover:text-blue-300"/>
                            <StarIcon className="w-4 hover:text-blue-300"/>
                            <StarIcon className="w-4 hover:text-blue-300"/>
                            <StarIcon className="w-4 hover:text-blue-300"/>
                        </div>
                    </div>
                </ul>
            </div>

            {/* Daily Challenges */}
            <div className="col-span-4 bg-yellow-200 p-6 rounded-md">
                Daily Challenges
            </div>

            {/* Plants of the Season Carousel */}
            <div className="col-span-8 bg-purple-200 p-6 rounded-md">
                Plants of the Season Carousel
            </div>

            {/* Daily Challenges */}
            <div className="col-span-12 bg-pink-200 p-6 rounded-md">
                Daily Challenges
            </div>
        </div>
    );
}

