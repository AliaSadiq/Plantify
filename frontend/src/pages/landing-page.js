
import React from 'react';
import vectorImage from '../assets/heart-tree.png'; // Import the vector image
import goal1 from '../assets/goal-1.png';
import goal2 from '../assets/goal-2.png';
import goal3 from '../assets/goal-3.png';
//import { SunIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const LandingPage = () => {
    return (
        <div mt-0 >
            <div className="flex flex-row gap-[50px] justify-between bg-ivory items-center pt-20 pb-10 px-[100px] py-0">
                <div className="w-1/2 font-josefin-sans text-gray-100 mt-10">
                    <p className="text-lg font-semibold ">Welcome to</p>
                    <h1 className="text-4xl font-bold">Plantify,</h1>
                    <p className="mt-8 text-md ">where green dreams take root and flourish. Discover a world of sustainable solutions and join us in nurturing a greener tomorrow.</p>
                    <div className="flex justify-left mt-10">
                        <button type="button" class="font-josefin-sans text-sm font-semibold text-white bg-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100 mr-4">Start Donating</button>
                        <button type="button" class="font-josefin-sans text-sm font-semibold text-hray-100 p-4 rounded hover:rounded-full border-2 border-gray-100">Initiate Campaign</button>
                    </div>
                    <p className="font-josefin-sans mt-20 text-2xl text-bold">50,000,867</p>
                    <p className="mt-2 text-mini text-semibold">trees planted and counting...</p>
                </div>
                <div className="w-1/2 relative mt-10">
                    <img src={vectorImage} alt="Vector" className="w-full h-[600px] object-cover rounded-lg" />
                </div>
            </div>
            {/* <div className="bg-palegreen-100 py-8 text-center font-josefin-sans">
                <h2 className="text-2xl font-bold ">Missions and Goals</h2>
                <div className="flex justify-center mt-10 mb-10">
                    <div className="flex flex-col items-center mx-20 mt-20">
                        <SunIcon className="w-16 h-16" />
                        <p className="mt-2 text-lg font-semibold">Mission 1</p>
                        <p className="text-sm">Description of Mission 1</p>
                    </div>
                    <div className="flex flex-col items-center mx-20 mt-20">
                        <UserGroupIcon className="w-16 h-16" />
                        <p className="mt-2 text-lg font-semibold">Mission 2</p>
                        <p className="text-sm">Description of Mission 2</p>
                    </div>
                    <div className="flex flex-col items-center mx-20 mt-20">
                        <SunIcon className="w-16 h-16" />
                        <p className="mt-2 text-lg font-semibold">Mission 3</p>
                        <p className="text-sm">Description of Mission 3</p>
                    </div>
                </div>
            </div> */}
            <div className="flex flex-col justify-between mt-0">

                {/* First Div */}
                <div className="flex gap-[100px] justify-center items-center mb-8 rounded-lg overflow-hidden px-80 py-20">
                    <img src={goal1} alt="Illustration" className="w-[350px] h-auto"/>
                    <div className="p-6 text-gray-100">
                        <h2 className="text-3xl font-semibold font-josefin-sans">Reforestation Initiative</h2>
                        <p className="mt-4 text-mini">Our primary mission is to combat deforestation by launching large-scale reforestation initiatives. Through strategic partnerships and community engagement, we aim to plant millions of trees each year, revitalizing ecosystems and mitigating the effects of climate change.</p>
                    </div>
                </div>

                {/* Second Div */}
                <div className="flex gap-[100px] justify-center items-center mb-8 bg-ivory rounded-lg overflow-hidden py-20 px-80">
                    <div className="p-6 text-gray-100">
                        <h2 className="text-3xl font-semibold font-josefin-sans">Sustainable Communities</h2>
                        <p className="mt-4 text-mini">We are committed to fostering sustainable communities where people and nature thrive together. By promoting environmentally friendly practices, empowering local residents, and providing access to clean energy and resources, we strive to create a more equitable and resilient world.</p>
                    </div>
                    <img src={goal2} alt="Illustration" className="w-[350px] h-auto"/>
                </div>

                {/* Third Div */}
                <div className="flex gap-[100px] justify-center items-center mb-8 rounded-lg overflow-hidden py-20 px-80">
                    <img src={goal3} alt="Illustration" className="w-[350px] h-auto" />
                    <div className="p-6 text-gray-100">
                        <h2 className="text-3xl font-semibold font-josefin-sans">Environmental Education</h2>
                        <p className="mt-4 text-mini">Education is key to building a sustainable future. Our mission includes promoting environmental literacy and awareness through educational programs, workshops, and outreach initiatives. By empowering individuals with the knowledge and skills to protect our planet, we inspire positive change and create a legacy of environmental stewardship.</p>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default LandingPage;
