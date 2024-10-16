import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import UserProfile from "../components/user-profile";

export default function VerificationDetailPage () {
    const { id } = useParams();
    const url = `http://localhost:5000/api/socialgroup/${id}`;
    
    const { data: socialGroup, loading, error } = useFetch(url);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        socialGroup && (
            <div className='min-h-screen ml-[245px] p-4'> 
                <div className='min-h-screen p-8 rounded-pl bg-neutral'>
                    <div className='mb-6 flex items-center justify-between'>
                        <div className='text-lg font-bold'>Requested Social Group</div>
                        <button 
                            className='flex gap-2 dark:bg-forest-200 dark:text-gray-400 bg-navygreen-100 dark:hover:bg-forest-100 text-gray-100 p-4 rounded-pl'
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="size-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Verify Social Group
                        </button>
                    </div>
                    {/* <div className="w-full">
                        <img
                            src={`/assets/${socialGroup.banner}`}
                            alt="banner"
                            className="object-cover w-full h-48 rounded-pl"
                        />
                        <img
                            src={`/assets/${socialGroup.image}`}
                            alt="banner"
                            className="object-cover w-40 h-40 -mt-16 ml-16 rounded-full"
                        />
                    </div> */}
                    {/* <div className="flex">
                        <div>
                            <UserProfile user={socialGroup.user}/>
                        </div> */}
                        <div className="rounded-pl border-2 border-gray-300 p-4 my-4">
                            <h1 className="font-bold text-md mb-2">Personal Information</h1>
                            <div className="flex gap-4 items-center justify-between">
                                <div>
                                    <p><span className="font-bold">CNIC: </span>{socialGroup.cnic}</p>
                                    <p><span className="font-bold">Address: </span>{socialGroup.address}</p>
                                    <p><span className="font-bold">Contact: </span>{socialGroup.contact}</p>
                                </div>
                                <button className="rounded-full">
                                    <img 
                                        src={`/assets/${socialGroup.faceImage}`} 
                                        alt="face image" 
                                        className="h-28 w-28 object-cover rounded-full"
                                    />
                                </button>
                            </div>                        
                        </div>
                    {/* </div> */}
                    
                    <div className="rounded-pl border-2 border-gray-300 p-4 my-4">
                        <h1 className="font-bold text-md mb-2">Social Group Information</h1>
                        <div className="flex gap-4 items-center justify-between">
                            <div>
                                <p><span className="font-bold">Title: </span>{socialGroup.name}</p>
                                <p><span className="font-bold">Location: </span>{socialGroup.location}</p>
                                <p><span className="font-bold">Initiative: </span>{socialGroup.initiative}</p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        )
    );
}
