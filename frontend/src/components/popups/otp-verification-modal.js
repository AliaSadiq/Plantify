import React, { useState } from 'react';
import { XMarkIcon } from "@heroicons/react/24/solid";
import axios from 'axios';

const OtpVerificationModal = ({ showModal, closeModal }) => {
    const [otp, setOtp] = useState('');

    const handleInput = (event) => {
        setOtp(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Send OTP to the backend for verification
            const response = await axios.post('http://localhost:5000/api/verify-otp', { otp });
            console.log(response.data); // Handle success or error
            // If OTP is verified successfully, close the modal
            closeModal();
            // Redirect to home page or perform any other action
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
                        <div className="backdrop-blur-sm backdrop-filter relative bg-navygreen-100 rounded-lg p-8 max-w-md z-10 bg-opacity-60">
                            <button className="absolute top-2 right-2 text-gray-100" onClick={closeModal}>
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                            <h2 className="text-xl font-bold mb-4">OTP Verification</h2>
                            <p className="text-sm mb-4">Enter the OTP sent to your email</p>
                            <form onSubmit={handleSubmit} className="space-y-4 text-gray-100">
                                <div>
                                    <label htmlFor="otp" className="block text-sm font-medium">OTP</label>
                                    <input type="text" id="otp" name="otp" value={otp} onChange={handleInput} className="px-2 py-[2px] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full" />
                                </div>
                                <button type="submit" className="bg-navygreen-300 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-navygreen-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Verify OTP</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default OtpVerificationModal;
