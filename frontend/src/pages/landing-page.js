
import React from 'react';
import vectorImage from '../assets/vector.png'; // Import the vector image
import { SunIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const LandingPage = () => {
    return (
        <div mt-0>
            <div className="flex flex-row gap-[50px] justify-between items-center mt-40 mb-10 mx-[100px] py-0">
                <div className="w-1/2 font-josefin-sans text-gary-100 mt-10">
                    <h1 className="text-2xl font-bold">Let's reforest the world and create a habitat where nature thrives.</h1>
                    <p className="mt-8 text-lg">the simplest way for citizens and companies to plant trees around the world and offset their CO2 emissions</p>
                    <div className="flex justify-left mt-10">
                        <button type="button" class="font-josefin-sans bg-navygreen-300 text-sm font-semibold text-gray-100 p-4 rounded-full mr-4">Start Donating</button>
                        <button type="button" class="font-josefin-sans bg-navygreen-300 text-sm font-semibold text-gray-100 p-4 rounded-full">Initiate Campaign</button>
                    </div>
                    <p className="font-josefin-sans mt-20 text-2xl text-bold">50,000,867</p>
                    <p className="mt-2 text-mini text-semibold">trees planted and counting...</p>
                </div>
                <div className="w-1/2 relative">
                    <img src={vectorImage} alt="Vector" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
            <div className="bg-palegreen-100 py-8 text-center font-josefin-sans">
                <h2 className="text-2xl font-bold ">Missions and Goals</h2>
                <div className="flex justify-center mt-10 mb-10">
                    {/* Mission 1 */}
                    <div className="flex flex-col items-center mx-20 mt-20">
                        <SunIcon className="w-16 h-16" />
                        <p className="mt-2 text-lg font-semibold">Mission 1</p>
                        <p className="text-sm">Description of Mission 1</p>
                    </div>

                    {/* Mission 2 */}
                    <div className="flex flex-col items-center mx-20 mt-20">
                        <UserGroupIcon className="w-16 h-16" />
                        <p className="mt-2 text-lg font-semibold">Mission 2</p>
                        <p className="text-sm">Description of Mission 2</p>
                    </div>

                    {/* Mission 3 */}
                    <div className="flex flex-col items-center mx-20 mt-20">
                        <SunIcon className="w-16 h-16" />
                        <p className="mt-2 text-lg font-semibold">Mission 3</p>
                        <p className="text-sm">Description of Mission 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
