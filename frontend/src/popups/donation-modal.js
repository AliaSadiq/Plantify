
import React, { useState,useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

  
export default function DonationModal({ showModal, closeModal, campaignId, userId }) {
    console.log(userId)
    console.log(campaignId)
    const [amount, setAmount] = useState('');
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    console.log(userId)
    const handleSubmit = async () => {
     

        // Validate amount
   
        try {

            const response = await axios.post(`${apiUrl}/api/donations`, {
                amount: parseInt(amount),
                user: userId,
                campaign: campaignId
        
            });

            if (response.status === 201) {
                alert('Thank you for your donation!');
                closeModal();
            }
        } catch (error) {
            console.error('Error creating donation:', error);
            alert('There was an error processing your donation. Please try again.');
        }
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-30">
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
                        <div className="backdrop-blur-sm backdrop-filter relative bg-navygreen-100 rounded-lg p-8 max-w-md z-10 bg-opacity-100">
                            <button className="absolute top-2 right-2 text-gray-100" onClick={closeModal}>
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                            <h2 className="font-josefin-sans text-center text-xl font-bold mb-4">Donate for the cause</h2>
                            <p className="font-josefin-sans text-center text-sm mb-4">Enter the amount you want to donate in rupees.</p>
                            <form className="flex flex-col space-y-4 text-gray-100" onSubmit={handleSubmit}>
                                <div className='self-center mb-10 w-40'>
                                    <label htmlFor="amount" className="text-center block text-sm font-medium">Amount</label>
                                    <input 
                                        type="text" 
                                        id="amount" 
                                        name="amount" 
                                        maxLength='5'
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder='Enter the amount'
                                        className="px-2 py-2 text-center mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full" 
                                        onKeyPress={(e) => {
                                            // Allow only numbers
                                            const keyCode = e.keyCode || e.which;
                                            const keyValue = String.fromCharCode(keyCode);
                                            const regex = /[0-9]/; // Only allow numbers
                                            if (!regex.test(keyValue)) {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                </div>
                                <p className='mt-6 text-center text-mini font-josefin-sans font-semibold'>How would you like to make your donation?</p>
                                <p className='mt-6 text-center text-mini font-josefin-sans font-semibold'>This feature is under development</p>
                                <div>
                                    {/* Add payment method options here if needed */}
                                </div>
                                <button type="submit" className="bg-navygreen-300 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-navygreen-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Donate</button>

                                <button type="submit" className="bg-navygreen-300 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-navygreen-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Pay</button>

                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
