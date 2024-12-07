import React, { useState } from 'react';
import Modal from 'react-modal';
import { XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import Button from '../components/button';
import { Link } from 'react-router-dom';

const DonationModal = ({ showModal, closeModal, campaignId, userId }) => {
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        try { 
            const response = await axios.post('http://localhost:5000/api/donations', { amount: parseInt(amount), user: userId, campaign: campaignId }); 
            if (response.status === 201) { 
                alert('Thank you for your donation!'); 
                closeModal(); 
                window.location.reload();
            } 
        } catch (error) { 
            console.error('Error creating donation:', error); 
            alert('There was an error processing your donation. Please try again.'); 
        } 
    };

    return (
        <Modal
            isOpen={showModal}
            onRequestClose={closeModal}
            contentLabel="Donate for the Cause"
            className="bg-white border-2 border-navygreen-200 p-8 rounded-pl shadow-lg max-w-md mx-auto mt-10"
            overlayClassName="fixed inset-0 bg-navygreen-100 bg-opacity-40 flex justify-center items-center"
        >
            <button className="absolute top-2 right-2 text-gray-600" onClick={closeModal}>
                <XMarkIcon className="h-6 w-6" />
            </button>
            <h2 className="font-josefin-sans text-center text-xl font-bold mb-4">Donate for the cause</h2>
            {userId ? (
                <>
                    <p className="font-josefin-sans text-center text-sm mb-4">Enter the amount you want to donate in rupees.</p>
                    <form className="flex flex-col space-y-4 text-gray-600" onSubmit={handleSubmit}>
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
                                    const keyCode = e.keyCode || e.which;
                                    const keyValue = String.fromCharCode(keyCode);
                                    const regex = /[0-9]/;
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
                </>
            ) : (
                <div className='flex flex-col justify-center w-full'>
                    <p className='mb-2 text-center'>Login to Donate</p>
                    <Link to="/login" className='place-self-center'>
                        <Button
                            text="Login"
                            className="py-2 bg-gray-100 text-white"
                        />
                    </Link>
                </div>
            )}
        </Modal>
    );
};

export default DonationModal;
