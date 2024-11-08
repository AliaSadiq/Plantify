import React, { useState,useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import Button from '../components/button';

  
export default function DonationModal({ showModal, closeModal, campaignId, userId, updateCampaign }) {
    console.log(userId)
    console.log(campaignId)
    const [amount, setAmount] = useState('');
    console.log(userId)
    // const handleSubmit = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:5000/api/donations', {
    //             amount: parseInt(amount),
    //             user: userId,
    //             campaign: campaignId
        
    //         });

    //         if (response.status === 201) {
    //             alert('Thank you for your donation!');
    //             closeModal();
    //         }
    //     } catch (error) {
    //         console.error('Error creating donation:', error);
    //         alert('There was an error processing your donation. Please try again.');
    //     }
    // };
    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        try { 
            const response = await axios.post('http://localhost:5000/api/donations', { amount: parseInt(amount), user: userId, campaign: campaignId }); 
            if (response.status === 201) { 
                alert('Thank you for your donation!'); 
                updateCampaign(response.data.updatedCampaign); 
                // Update the parent component with the new campaign data 
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
                    <div className="absolute inset-0 flex items-center bg-navygreen-100 justify-center bg-opacity-40">
                        <div className="backdrop-blur-sm backdrop-filter relative bg-white border-2 border-navygreen-200 rounded-pl p-8 max-w-md z-10">
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
                                        className="px-2 py-2 text-center mt-1 focus:ring-neon focus:border-neon block w-full shadow-sm sm:text-sm border-neon rounded-full" 
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
                                <div className='flex flex-col lg:flex-row gap-4 justify-center'>
                                    <Button
                                        text="Pay"
                                        type="submit"
                                        className="bg-neon border-none rounded-full py-2"
                                    />
                                    <Button
                                        text="Cancel"
                                        type="button"
                                        onClick={closeModal}
                                        className="bg-surmai border-none rounded-full py-2"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
