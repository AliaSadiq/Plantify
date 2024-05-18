import React from "react";
import axios from "axios";

export default function AdminTable({ socialGroups }) {
    const handleAccept = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/socialgroup/${id}`, { status: "accepted" });
            // Assuming your backend returns the updated social group after the status is updated
            const updatedSocialGroup = response.data;
            // Update the state of social groups with the updated social group
            // You need to implement a function to update the state here
            // For simplicity, you can re-fetch the social groups from the server after the update
        } catch (error) {
            console.error("Error accepting social group:", error);
        }
    };

    const handleReject = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/socialgroup/${id}`, { status: "rejected" });
            // Assuming your backend returns the updated social group after the status is updated
            const updatedSocialGroup = response.data;
            // Update the state of social groups with the updated social group
            // You need to implement a function to update the state here
            // For simplicity, you can re-fetch the social groups from the server after the update
        } catch (error) {
            console.error("Error rejecting social group:", error);
        }
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Group image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Group name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            CNIC
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Face image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">accept</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">reject</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {socialGroups.map((socialGroup) => (
                        <tr key={socialGroup.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src={`${process.env.PUBLIC_URL}/assets/testimonial-1.jpeg`} alt="group image" className="w-14 h-14 object-cover rounded-full" />
                            </td>
                            <td className="px-6 py-4">
                                {socialGroup.name}
                            </td>
                            <td className="px-6 py-4">
                                {socialGroup.cnic}
                            </td>
                            <td className="px-6 py-4">
                                <img src={`${process.env.PUBLIC_URL}/assets/testimonial-1.jpeg`} alt="group image" className="w-14 h-14 object-cover rounded-full" />
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button onClick={() => handleAccept(socialGroup._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Accept</button>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button onClick={() => handleReject(socialGroup._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
