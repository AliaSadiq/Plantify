import React from "react";
import Button from "../../components/button";

export default function Signup () {
    return(
        <div className="min-h-screen bg-navygreen-100 dark:bg-forest-200 flex items-center dark:text-white dark:text-opacity-60 justify-center">
            <div className="ml-[245px] dark:bg-forest-100 rounded-pl p-8 max-h-fit w-[450px]">
                <h1 className="text-center text-md">Admin Signup</h1>
                <form className="mt-4">
                    <div className='mb-4'>
                        <label htmlFor="fullname" className="block text-sm font-medium font-semibold">Full Name</label>
                        <input
                            type="text"
                            name="fullname"
                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className="block text-sm font-medium font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className="block text-sm font-medium font-semibold">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    
                    <Button 
                        text="Add new Admin" 
                        type="button" 
                        className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md"
                    />
                </form>
            </div>
        </div>
    );
}