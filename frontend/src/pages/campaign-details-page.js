import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Button from '../components/button';
import { Link } from "react-router-dom";
import VolunteeringModal from "../popups/volunteering-modal";

export default function CampaignDetailsPage() {
    const { id } = useParams();
    const [campaign, setCampaign] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    //volunteers popup
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchCampaignDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/campaigns/${id}`);
                setCampaign(response.data);
            } catch (error) {
                console.error("Error fetching campaign details:", error);
            }
        };

        fetchCampaignDetails();
    }, [id]);

    if (!campaign) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mt-0 bg-neutral"> 
            <div className="flex flex-col items-center justify-center mt-40">
                <h1 className="font-bold text-2xl">{campaign.name}</h1>
                <p className="font-semibold text-mini mb-10 flex items-center justify-center gap-2">
                    a campaign by
                    <div className="flex items-center bg-navygreen-100 hover:bg-navygreen-200 p-2 rounded-[20px] gap-2">
                        <img src={`/assets/${campaign.socialGroup.image}`} className="w-8 h-8 rounded-full" alt="Social Group Logo" />
                        <Link to={`/campaign/social-group/${campaign.socialGroup._id}`} className="">
                            {campaign.socialGroup.name}
                        </Link>
                    </div>
                </p>
            </div>
            <div className="flex flex-col min-h-screen md:flex-row gap-6 mb-10 items-start justify-center">
                {/* Wider Div */}
                <div className="w-full md:w-[60%] lg:w-[55%] bg-white p-4 rounded-[20px] shadow-md">
                    <div className="relative">
                        <div className="absolute flex flex-row gap-2 items-center justify-center top-4 right-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="size-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>
                        </div>

                        <img className="w-full h-[500px] object-cover rounded-[20px]" src={`/assets/${campaign.image}`}></img>
                        <div className="absolute left-4 bottom-4 w-[40%] p-4 bg-white rounded-[20px]">
                            <h1 className="font-semibold text-md">Campaign Details</h1>
                            <div className="flex gap-2 mt-2">
                                <div className="flex items-center mb-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-1"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                    <span className="text-sm">12.06.2024</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-1"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span className="text-sm">11:00 pm</span>
                                </div>
                            </div>
                            <div className="flex items-center mb-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4 mr-1"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <span className="text-sm">Location</span>
                            </div>
                            <img
                                className="w-full h-[200px] object-cover rounded-[20px]"
                                src="/assets/map.jpeg"
                                alt="Map"
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="relative bg-pinky p-4 mt-4 rounded-[20px] w-full">
                            <h2 className="text-center">Campaign Progress</h2>
                        </div>
                    </div>
                    {/* <div class="flex items-center justify-center" x-data="{ circumference: 2 * 22 / 7 * 120 }">
                        <svg class="transform -rotate-90 w-72 h-72">
                            <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent"
                                class="text-gray-700" />

                            <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent"
                                strokeDasharray="50"
                                strokeDashoffset="50 - 75 / 100 * 50"
                                class="text-blue-500 " />
                        </svg>
                        <span class="absolute text-5xl" x-text="75">75</span>
                    </div> */}
                </div>
        
                {/* Narrower Div */}
                <div className="w-full md:w-[40%] lg:w-[35%] bg-white p-4 rounded-[20px] shadow-md">
                    {/* Donation Bar Div */}
                    <div className="bg-inherit w-full h-auto rounded-[20px] p-4 border-neutral border-2">
                        <h1 className="font-bold text-lg text-center">{campaign.collected_donation} PKR raised off {campaign.target_donation} PKR</h1>
                        <div className="bg-palegreen-200 h-4 rounded-full mt-4 mx-10">
                            <div
                                className="bg-navygreen-300 h-full rounded-full"
                                style={{ width: `${(campaign.collected_donation / campaign.target_donation) * 100}%` }}
                            ></div>
                        </div>
                        <div className="flex items-center justify-center mt-8">
                            <Button text="Donate" />
                        </div>
                    </div>
                    {/* About Div */}
                    <div className="bg-inherit w-full h-auto rounded-[20px] p-4 mt-4 border-neutral border-2">
                        <h1 className="font-bold text-xl text-center mt-6">About the Campaign</h1>
                        <p className="mx-10 text-center mt-4 text-sm">
                            Join us in our mission to make Lahore greener and healthier with our upcoming plantation campaign! Our goal is to plant thousands of trees across the city, creating more green spaces and improving the environment for future generations.
                        </p>
                        <div className="flex gap-4 items-center justify-center mt-4">
                            <Button text="Follow Campaign" />
                            <Button text="Volunteer in Campaign" onClick={handleOpenModal}/>
                        </div>
                    </div>
                    {/* Comments Div */}
                    <div className="bg-inherit w-full p-2 border-neutral border-2 rounded-[20px] mt-4">
                        <h2 className="font-semibold text-md text-center py-2">Comments</h2>
                        <ul className="flex flex-col items-start overflow-y-auto max-h-96">
                            <li className="relative w-full p-4 border-b-2 border-neutral">
                                <div className="w-full flex flex-row items-center">
                                    <img src="/assets/testimonial-2.jpeg" className="w-14 h-14 object-cover rounded-full" />
                                    <div className="ml-2 w-full flow-root">
                                        <p className="float-left font-semibold ml-2">Username</p>
                                        <p className="float-right text-gray-500 text-sm">12.06.2024</p>
                                    </div>
                                </div>
                                <p className="mt-2 mr-4 text-justify text-sm">achi campaign thi good work!</p>
                                <p className="text-right">Reply</p>
                            </li>
                            <li className="relative w-full p-4 border-b-2 border-neutral">
                                <div className="w-full flex flex-row items-center">
                                    <img src="/assets/testimonial-2.jpeg" className="w-14 h-14 object-cover rounded-full" />
                                    <div className="ml-2 w-full flow-root">
                                        <p className="float-left font-semibold ml-2">Username</p>
                                        <p className="float-right text-gray-500 text-sm">12.06.2024</p>
                                    </div>
                                </div>
                                <p className="mt-2 mr-4 text-justify text-sm">achi campaign thi good work!</p>
                                <p className="text-right">Reply</p>
                            </li>
                            <li className="relative w-full p-4 border-b-2 border-neutral">
                                <div className="w-full flex flex-row items-center">
                                    <img src="/assets/testimonial-2.jpeg" className="w-14 h-14 object-cover rounded-full" />
                                    <div className="ml-2 w-full flow-root">
                                        <p className="float-left font-semibold ml-2">Username</p>
                                        <p className="float-right text-gray-500 text-sm">12.06.2024</p>
                                    </div>
                                </div>
                                <p className="mt-2 mr-4 text-justify text-sm">achi campaign thi good work!</p>
                                <p className="text-right">Reply</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <VolunteeringModal showModal={isModalOpen} closeModal={handleCloseModal} campaign={campaign} />
        </div>
    );        
}