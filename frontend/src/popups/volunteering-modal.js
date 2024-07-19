import React, { useState,useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

  
export default function VolunteeringModal({ showModal, closeModal, campaign }) {

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-30">
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
                        <div className="backdrop-blur-sm backdrop-filter relative bg-navygreen-100 rounded-lg p-8 max-w-md z-10 bg-opacity-100">
                            <button className="absolute top-2 right-2 text-gray-100" onClick={closeModal}>
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                            <h2 className="font-josefin-sans text-center text-xl font-bold mb-4">Volunteer for the cause</h2>
                            <p className="font-josefin-sans text-center text-sm mb-4">u can volunteer blah blah. cs man u should</p>
                            <form className="flex flex-col space-y-4 text-gray-100">
                                <div className='self-center mb-10 w-40'>
                                    <label htmlFor="amount" className="text-center block text-sm font-medium">Contact Number</label>
                                    <input 
                                        type="text" 
                                        id="amount" 
                                        name="amount" 
                                        maxLength='5'
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="bg-navygreen-300 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-navygreen-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Send Request
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}