import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function ReportModal ({ showModal, closeModal }) {
    return(
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-30">
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
                        <div className="backdrop-blur-sm backdrop-filter relative bg-navygreen-100 rounded-lg p-8 max-w-md z-10 bg-opacity-100">
                            <button className="absolute top-2 right-2 text-gray-100" onClick={closeModal}>
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                            <h2 className="font-josefin-sans text-center text-xl font-bold mb-4">Report Campaign</h2>
                            <p className="font-josefin-sans text-center text-sm mb-4">Want to report this camapaign? Write your reason we will consider your complain.</p>
                            <form className="flex flex-col space-y-4 text-gray-100">
                                <div className='self-center w-80'>
                                    <label htmlFor="reason" className="block text-sm font-medium">Write your reason</label>
                                    <textarea 
                                        id="reason" 
                                        name="amount" 
                                        maxLength='250'
                                        placeholder='Enter the reason'
                                        className="px-2 py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg" 
                                    />
                                </div>
                                <button type="submit" className="self-center bg-navygreen-300 w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-navygreen-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}