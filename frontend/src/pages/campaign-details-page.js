import React from "react";
import Button from "../components/button";

export default function CampaignDetailsPage({ campaign }) {
    return(
        <div className="flex flex-col min-h-screen md:flex-row gap-6 mt-40 mb-10 items-start justify-center bg-neutral">
            {/* Wider Div */}
            <div className="relative w-full md:w-[60%] lg:w-[55%] bg-white p-4 rounded-[20px] shadow-md">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1.5} stroke="currentColor" 
                    className="absolute top-8 right-8 size-8"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <img className="w-full h-[500px] object-cover rounded-[20px]" src="assets/campaign-2.jpeg"></img>
                <div className="absolute left-8 bottom-8 w-[40%] p-4 bg-white rounded-[20px]">
                    <h1 className="font-semibold text-lg">Campaign Name</h1>
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

                            <span className="text-sm">
                                11:00 pm
                            </span>
                        </div>
                    </div>
                    <img
                        className="w-full h-[200px] mt-4 object-cover rounded-[20px]"
                        src="assets/map.jpeg"
                        alt="Map"
                    />
                </div>
            </div>

            {/* Narrower Div */}
            <div className="w-full md:w-[40%] lg:w-[35%] bg-white p-4 rounded-[20px] shadow-md">
                {/* About Div*/}
                <div className="bg-inherit w-full h-[500px] rounded-[20px] p-4 border-neutral border-2">
                    <div className="flex items-center justify-center mb-6">
                        <Button text="Donate" />
                    </div>
                    <h1 className="font-bold text-lg text-center">
                        1200 PKR raised off 2000 PKR
                    </h1>
                    <div className="bg-palegreen-200 h-4 rounded-full mt-4 mx-10">
                        <div
                            className="bg-navygreen-300 h-full rounded-full"
                            style={{
                                width: "80%",
                                }}
                        ></div>
                    </div>
                    <h1 className="font-bold text-xl text-center mt-6">
                        About the Campaign
                    </h1>
                    <p className="mx-10 text-center mt-4 text-sm">
                        Join us in our mission to make Lahore greener and healthier with our upcoming plantation campaign! Our goal is to plant thousands of trees across the city, creating more green spaces and improving the environment for future generations.
                    </p>
                    <div className="flex gap-4 items-center justify-center mt-4">
                        <Button text="Like Campaign" />
                        <Button text="Share Campaign" />
                    </div>
                </div>
                {/* Comments Div */}
                <div className="bg-inherit w-full p-2 border-neutral border-2 rounded-[20px] mt-2">
                    <h2 className="font-semibold text-md text-center">Comments</h2>
                    <ul className="flex flex-col items-start border-neutral border-2 justify-center">
                        <li className="relative w-full rounded-lg p-4">
                            <div className="w-full flex flex-row items-center">
                                <img src="assets/testimonial-2.jpeg" className="w-14 h-14 object-cover rounded-full"/>
                                <div className="ml-2 w-full flow-root">
                                    <p className="float-left font-semibold text-sm ml-2">Username</p>
                                    <p className="float-right text-gray-500 text-sm">12.06.2024</p>
                                </div>
                            </div>
                            <p className="mt-2 mr-4 text-justify">
                                achi campaign thi good work!
                            </p>
                            <p className="text-right">Reply</p>
                        </li>
                        <li className="relative w-full rounded-lg p-4">
                            <div className="w-full flex flex-row items-center">
                                <img src="assets/testimonial-2.jpeg" className="w-14 h-14 object-cover rounded-full"/>
                                <div className="ml-2 w-full flow-root">
                                    <p className="float-left font-semibold text-sm ml-2">Username</p>
                                    <p className="float-right text-gray-500 text-sm">12.06.2024</p>
                                </div>
                            </div>
                            <p className="mt-2 mr-4 text-justify">
                                achi campaign thi good work!
                            </p>
                            <p className="text-right">Reply</p>
                        </li>
                        <li className="relative w-full rounded-lg p-4">
                            <div className="w-full flex flex-row items-center">
                                <img src="assets/testimonial-2.jpeg" className="w-14 h-14 object-cover rounded-full"/>
                                <div className="ml-2 w-full flow-root">
                                    <p className="float-left font-semibold text-sm ml-2">Username</p>
                                    <p className="float-right text-gray-500 text-sm">12.06.2024</p>
                                </div>
                            </div>
                            <p className="mt-2 mr-4 text-justify">
                                achi campaign thi good work!
                            </p>
                            <p className="text-right">Reply</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}