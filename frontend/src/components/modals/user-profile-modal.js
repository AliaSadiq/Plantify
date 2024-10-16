import React from "react";
import Button from "../button";

export default function UserProfileModal({ user, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-josefin-sans">
            <div className="relative rounded-pl bg-neutral p-8 rounded shadow-lg w-[500px] max-h-[700px] overflow-y-auto">
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
                <div className="p-8 border-2 border-gray-500 rounded-pl">
                    <div className="w-full flex flex-col gap-y-2 items-center justify-center">
                        <img src={`/assets/avatars/${user.avatar}`} className="rounded-full w-24"/>
                        <h1 className="font-bold text-pl">{user.username}</h1>
                        <div className="w-full flex gap-4 justify-center">
                            <p>Followers 13</p>
                            <div>|</div>
                            <p>Following 14</p>
                        </div>
                        <div className="mt-4 w-full flex flex-col items-center justify-center">
                            <h2 className="font-semibold text-pl">About me</h2>
                            <p className="text-center text-sm ">Bio blah blah lahbsdjhg igdiz shgdjz zkxjhfj dkxfhzjd zdkfhjhd kdzhcjh kdzjf</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
