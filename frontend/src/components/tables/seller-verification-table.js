import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SellerVerificationTable({ sellers }) {
    const handleAccept = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/sellers/${id}`, { status: "accepted" });
            const updatedSeller = response.data;
            alert('Seller has been verfied');
            window.location.reload();
        } catch (error) {
            console.error("Error accepting seller:", error);
        }
    };

    const handleReject = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/sellers/${id}`, { status: "rejected" });
            const updatedSeller = response.data;
            alert('Seller has been rejected');
            window.location.reload();
        } catch (error) {
            console.error("Error rejecting seller:", error);
        }
    };

    return (
        <div className="rounded-pl bg-navygreen-100 overflow-x-auto shadow-md">
            <table className="w-full text-gray-100 dark:text-gray-400 text-sm bg-navygreen-100 dark:bg-forest-100 p-4 text-left rounded-pl">
                <thead className="bg-navygreen-200 dark:bg-forest-200">
                    <tr className="">
                        <th className="p-4 rounded-tl-pl">Store Name</th>
                        <th>Seller Name</th>
                        <th>CNIC</th>
                        <th>Email</th>
                        <th>Business Email</th>
                        <th>Business Contact</th>
                        <th>Accept</th>
                        <th className="rounded-tr-pl">Reject</th>
                    </tr>
                </thead>
                <tbody>
                    {sellers.length > 0 ? (
                        sellers.map((seller) => (
                            <tr key={seller.id}>
                                {/* <td className="px-4 py-2">
                                    <img src={`assets/${seller.image}`} alt="group image" className="w-14 h-14 object-cover rounded-full" />
                                </td> */}
                                <td className="pl-4">
                                    <Link to={`seller-profile/${seller._id}`}>
                                        {seller.storeName}
                                    </Link>
                                </td>
                                <td>
                                    {seller.sellerName}
                                </td>
                                <td>
                                    {seller.cnic}
                                </td>
                                <td>
                                    {seller.email}
                                </td>
                                <td>
                                    {seller.businessEmail}
                                </td>
                                <td>
                                    {seller.businessContact}
                                </td>
                                <td>
                                    <button 
                                        onClick={() => handleAccept(seller._id)} 
                                        className="text-gray-100 dark:text-navygreen-100 hover:text-navygreen-300"
                                    >
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            strokeWidth={5} 
                                            stroke="currentColor" 
                                            className="size-6"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </button>
                                </td>
                                <td>
                                    <button 
                                    onClick={() => handleReject(seller._id)} 
                                    className="text-gray-100 dark:text-navygreen-100 hover:text-red-500"
                                    >
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            fill="none"
                                            viewBox="0 0 24 24" 
                                            strokeWidth={5} 
                                            stroke="currentColor" 
                                            className="size-6"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>

                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center py-4">
                                No sellers available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
