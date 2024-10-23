import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import Button from '../components/button';

export default function AddGoalModal({ showModal, closeModal }) {
    function handleSubmit () {
    }

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-30">
                    <div className="absolute inset-0 flex items-center bg-navygreen-100 justify-center bg-opacity-40">
                        <div className="relative w-full max-w-md mx-4 sm:mx-6 lg:mx-8 bg-navygreen-100 rounded-pl p-8 z-10">
                            <button className="absolute top-2 right-2 p-2 hover:bg-navygreen-200 rounded-pl text-gray-100" onClick={closeModal}>
                                <XMarkIcon className="h-6 w-6"/>
                            </button>
                            <h2 className="text-lg font-bold mb-4">Add a new Goal</h2>
                            <form>
                                <div className='mb-4'>
                                    <label htmlFor="title" className="block text-sm font-medium">Title</label>
                                    <input
                                        name="title"
                                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                        placeholder="Plant Name"
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="title" className="block text-sm font-medium">Priority</label>
                                    <div className='flex gap-8 p-4 bg-white w-full p-2 border border-lightgray rounded-lg'>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-sm'>High</p>
                                            <button className='rounded-full bg-red-800 p-[8px]'>

                                            </button>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-sm'>Medium</p>
                                            <button className='rounded-full bg-orange-700 p-[8px]'>

                                            </button>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-sm'>Low</p>
                                            <button className='rounded-full bg-yellow-700 p-[8px]'>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    text="Add"
                                    type="submit"
                                    className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md"
                                    onClick={handleSubmit}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
