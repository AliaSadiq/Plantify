import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Button from "../components/button";

export default function SellerVerificationDetailPage() {
    const { id } = useParams();
    const url = `http://localhost:5000/api/sellers/${id}`;
    
    const { data: seller, loading, error } = useFetch(url);

    const navigate = useNavigate();

    const handleAccept = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/sellers/${id}`, { status: "accepted" });
            const updatedSeller = response.data;
            alert('Seller has been verified');
            navigate("/verify-seller");
        } catch (error) {
            console.error("Error accepting seller:", error);
        }
    };

    const handleReject = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/sellers/${id}`, { status: "rejected" });
            const updatedSeller = response.data;
            alert('Seller has been rejected');
            navigate("/verify-seller");
        } catch (error) {
            console.error("Error rejecting seller:", error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        seller && (
            <div className='min-h-screen lg:ml-[245px] p-4 md:ml-0 md:p-2'>
                <div className='min-h-screen p-8 rounded-pl bg-neutral md:p-4'>
                    <div className='mb-6 flex items-center justify-between flex-wrap'>
                        <div className='text-lg font-bold mb-2 md:mb-0'>Requested Store</div>
                        <div className="flex flex-col lg:flex-row gap-2 items-center">
                            <Button
                                type="button"
                                text="Accept Store"
                                className="py-2 bg-gray-100 text-white"
                                onClick={() => handleAccept(seller._id)}
                            />
                            <Button
                                type="button"
                                text="Reject Store"
                                className="py-2"
                                onClick={() => handleReject(seller._id)}
                            />
                        </div>
                    </div>
                    <div className="rounded-pl border-2 border-gray-300 p-4 my-4">
                        <h1 className="font-bold text-md mb-2">Seller Information</h1>
                        <div className="flex gap-4 items-center justify-between flex-wrap">
                            <div className="w-full lg:w-1/2">
                                <p><span className="font-bold">Full Name: </span>{seller.sellerName}</p>
                                <p><span className="font-bold">Email: </span>{seller.email}</p>
                                <p><span className="font-bold">CNIC: </span>{seller.cnic}</p>
                                <p><span className="font-bold">Contact: </span>{seller.contact}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rounded-pl border-2 border-gray-300 p-4 my-4">
                        <h1 className="font-bold text-md mb-2">Plant Store Information</h1>
                        <div className="flex gap-4 items-center justify-between flex-wrap">
                            <div className="w-full lg:w-1/2">
                                <p><span className="font-bold">Store Name: </span>{seller.storeName}</p>
                                <p><span className="font-bold">Store Email: </span>{seller.businessEmail}</p>
                                <p><span className="font-bold">Store Contact: </span>{seller.businessContact}</p>
                                <p><span className="font-bold">Store Location: </span>{seller.businessAddress}</p>
                                <p><span className="font-bold">Tax ID: </span>{seller.taxID}</p>
                                <p><span className="font-bold">Store Description: </span>{seller.storeDescription}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">Business Certificate</h2>
                        <img src={`/assets/${seller.businessCertificate}`} alt="certificate image" className="w-60 object-cover"/>
                    </div>
                </div>
            </div>
        )
    );
}
