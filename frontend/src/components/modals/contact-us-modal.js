import React from "react";
import Button from "../button";

export default function ContactModal({ message, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-josefin-sans">
            <div className="relative rounded-pl bg-neutral p-8 shadow-lg w-full max-w-[600px] max-h-[700px] overflow-y-auto md:p-4">
                <button 
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 rounded-md hover:bg-navygreen-100"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="size-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="text-pl">
                    <h2 className="text-lg font-bold mb-4">Message from {message.name}</h2>
                    <p><strong>Email:</strong> {message.email}</p>
                    <p className="mt-2 font-bold">Message:</p>
                    <p className="">{message.message}</p>
                </div>
                <div className='relative mt-4 text-pl w-full'>
                    <label htmlFor="businessEmail" className="block font-semibold">Business Email</label>
                    <textarea
                        name="businessEmail"
                        className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                        placeholder="Enter a reply"
                        required
                    />
                    <Button text="Reply" className="absolute bottom-4 right-2 py-2"/>
                </div>
            </div>
        </div>
    );
}
