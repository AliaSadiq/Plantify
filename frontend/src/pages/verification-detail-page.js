import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import Button from "../components/button";

export default function VerificationDetailPage () {
    const { id } = useParams();
    const url = `http://localhost:5000/api/socialgroup/${id}`;
    
    const { data: socialGroup, loading, error } = useFetch(url);

    const navigate = useNavigate();

    const handleAccept = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/socialgroup/${id}`, { status: "accepted" });
            const updatedSocialGroup = response.data;
            alert('Social group has been verified');
            navigate("/verify-socialGroup");
        } catch (error) {
            console.error("Error accepting social group:", error);
        }
    };

    const handleReject = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/socialgroup/${id}`, { status: "rejected" });
            const updatedSocialGroup = response.data;
            alert('Social group has been rejected');
            navigate("/verify-socialGroup");
        } catch (error) {
            console.error("Error rejecting social group:", error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        socialGroup && (
            <div className='min-h-screen lg:ml-[245px] p-4 md:ml-0 md:p-2'> 
                <div className='min-h-screen p-8 rounded-pl bg-neutral md:p-4'>
                    <div className='mb-6 flex items-center justify-between flex-wrap'>
                        <div className='text-lg font-bold mb-2 md:mb-0'>Requested Social Group</div>
                        <div className="flex flex-col lg:flex-row gap-2 items-center">
                            <Button
                                type="button"
                                text="Accept Social Group"
                                className="py-2 bg-gray-100 text-white"
                                onClick={() => handleAccept(socialGroup._id)} 
                            />
                            <Button
                                type="button"
                                text="Reject Social Group"
                                className="py-2"
                                onClick={() => handleReject(socialGroup._id)} 
                            />
                        </div>
                    </div>
                    <div className="rounded-pl border-2 border-gray-300 p-4 my-4">
                        <h1 className="font-bold text-md mb-2">Personal Information</h1>
                        <div className="flex gap-4 items-center justify-between flex-wrap">
                            <div className="w-full lg:w-1/2">
                                <p><span className="font-bold">CNIC: </span>{socialGroup.cnic}</p>
                                <p><span className="font-bold">Address: </span>{socialGroup.address}</p>
                                <p><span className="font-bold">Contact: </span>{socialGroup.contact}</p>
                            </div>
                            <button className="rounded-full w-28 h-28">
                                <img 
                                    src={`/assets/${socialGroup.faceImage}`} 
                                    alt="face image" 
                                    className="h-28 w-28 object-cover rounded-full"
                                />
                            </button>
                        </div>                        
                    </div>
                    
                    <div className="rounded-pl border-2 border-gray-300 p-4 my-4">
                        <h1 className="font-bold text-md mb-2">Social Group Information</h1>
                        <div className="flex gap-4 items-center justify-between flex-wrap">
                            <div className="w-full lg:w-1/2">
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
