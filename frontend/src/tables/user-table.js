import React from "react";
import axios from "axios";

export default function UserTable({ users }) {
    // const handleDelete = async (id) => {
    //     const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    //     if (!confirmDelete) {
    //         return;
    //     }
        
    //     try {
    //         const response = await axios.delete(`http://localhost:5000/api/user/${id}`, { status: "accepted" });
    //         alert("User deleted");
    //         window.location.reload();
    //     } catch (error) {
    //         console.error("Error deleting user:", error);
    //     }
    // };
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User email
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
                            Has a Social Group
                        </th> */}
                        {/* <th scope="col" className="px-6 py-3">
                            <span className="sr-only">delete</span>
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4">
                                {user.username}
                            </td>
                            <td className="px-6 py-4">
                                {user.email}
                            </td>
                            {/* <td className="px-6 py-4">
                                {user.isSocial}
                            </td> */}
                            {/* <td className="px-6 py-4 text-right">
                                <button onClick={() => handleDelete(user._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
