import React, {useState, useEffect} from "react";
import useFetchUserLocalStorage from "../hooks/useFetchUserLocalStorage";
import Calendar from "../components/calendar";
import Button from "../components/button";
import Wave from "react-wavify";
import { StarIcon } from "@heroicons/react/24/solid";
import UserProfile from "../components/user-profile";

export default function PersonalGrowth() {
    const user = useFetchUserLocalStorage();

    return (
        // <div className="bg-neutral grid grid-cols-12 gap-4 py-4 px-48">
        //     {/* Greeting Text */}
        //     <div className="col-span-7 mt-20 rounded-pl border-2 border-navygreen-100 w-full text-center place-self-center">            
        //         <UserProfile/>
        //         {/* {user ? (
        //             <div className="z-40">
        //                 <p className="font-bold text-xl">Hello {user.username}! Welcome to</p>
        //                 <p className="font-bold text-xl">Plantify</p>
        //                 <p className="mt-6 font-semibold text-md z-30">Be a part of green initiatives by joining our latest campaigns</p>
        //                 <Button text="Join Campaigns" className="py-2 mt-4 z-40"/>
        //             </div>
        //         ): (
        //             <p>Loading...</p>
        //         )} */}
        //         {/* <div className="absolute top-10 left-10">
        //             <img src="/assets/flowers.png" alt="flowers" className="w-80"/>
        //         </div> */}
        //         {/* Rotating Blob */}
        //         {/* <div className="w-full bg-tranparent-300">
        //             <div className="flex justify-center items-center w-full h-full">
        //                 <div className="w-full h-[300px] animate-spin-slow">
        //                     <Wave
        //                         fill="#DDE6D6"
        //                         paused={false}
        //                         options={{
        //                             height: 40,
        //                             amplitude: 60,
        //                             speed: 0.15,
        //                             points: 3,
        //                         }}
        //                         className="w-full h-full -z-10 rounded-b-pl"
        //                     />
        //                 </div>
        //             </div>
        //         </div> */}
        //     </div>
            
        //     {/* Goals List */}
        //     <div className="col-span-5 border-2 border-navygreen-100 bg-navygreen-100 mt-20 p-6 rounded-pl">
        //         <div className="mb-4 flex items-center justify-between">
        //             <div className="font-bold text-md">Goals List</div>
        //             <button className="p-2 rounded-full bg-gray-100">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="size-4">
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        //                 </svg>
        //             </button>
        //         </div>
                
        //         {/* Single Goal Item */}
        //         <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px] py-2">
        //             <div className="flex items-center bg-neutral justify-between px-4 py-2 rounded-pl border border-navygreen-100 shadow-sm hover:bg-navygreen-50 transition-colors duration-200">
        //                 <div className="flex items-center">
        //                     <input
        //                         type="checkbox"
        //                         name="goal"
        //                         className="mr-4 h-5 w-5 text-navygreen-500 border-gray-300 rounded focus:ring-navygreen-300"
        //                     />
        //                     <label className="text-xsm font-medium text-gray-800">hemlo</label>
        //                 </div>
        //                 <div className="bg-yolk rounded-full p-[6px]">
        //                 </div>   
        //             </div>
        //         </ul>
        //         <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px] py-2">
        //             <div className="flex items-center bg-neutral justify-between gap-4 px-4 py-2 rounded-pl border border-navygreen-100 shadow-sm hover:bg-navygreen-50 transition-colors duration-200">
        //                 <div className="flex items-center">
        //                     <input
        //                         type="checkbox"
        //                         name="goal"
        //                         className="mr-4 h-5 w-5 text-navygreen-500 border-gray-300 rounded focus:ring-navygreen-300"
        //                     />
        //                     <label className="text-xsm font-medium text-gray-800">mauj msti halla gulla</label>
        //                 </div>
        //                 <div className="bg-yolk rounded-full p-[6px]">
        //                 </div>   
        //             </div>
        //         </ul>
        //         <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px] py-2">
        //             <div className="flex items-center bg-neutral justify-between px-4 py-2 rounded-pl border border-navygreen-100 shadow-sm hover:bg-navygreen-50 transition-colors duration-200">
        //                 <div className="flex items-center">
        //                     <input
        //                         type="checkbox"
        //                         name="goal"
        //                         className="mr-4 h-5 w-5 text-navygreen-500 border-gray-300 rounded focus:ring-navygreen-300"
        //                     />
        //                     <label className="text-xsm font-medium text-gray-800">dopamine detox</label>
        //                 </div>
        //                 <div className="bg-yolk rounded-full p-[6px]">
        //                 </div>   
        //             </div>
        //         </ul>
        //         <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px] py-2">
        //             <div className="flex items-center bg-neutral justify-between px-4 py-2 rounded-pl border border-navygreen-100 shadow-sm hover:bg-navygreen-50 transition-colors duration-200">
        //                 <div className="flex items-center">
        //                     <input
        //                         type="checkbox"
        //                         name="goal"
        //                         className="mr-4 h-5 w-5 text-navygreen-500 border-gray-300 rounded focus:ring-navygreen-300"
        //                     />
        //                     <label className="text-xsm font-medium text-gray-800">hemlo</label>
        //                 </div>
        //                 <div className="bg-yolk rounded-full p-[6px]">
        //                 </div>   
        //             </div>
        //         </ul>
        //     </div>

        //     {/* Event Calendar */}
        //     <div className="col-span-6 border-2 border-navygreen-100 p-6 rounded-pl">
        //         <p className="mb-2 font-bold text-md">Event Calendar</p>
        //         <Calendar/>
        //     </div>

        //     {/* Personal Plants List */}
        //     <div className="col-span-6 border-2 border-navygreen-100 p-6 rounded-pl">
        //         <div className="mb-4 flex items-center justify-between">
        //             <div className="font-bold text-md">My Plants</div>
        //             <button className="p-2 rounded-full bg-gray-100">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="size-4">
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        //                 </svg>
        //             </button>
        //         </div>
        //         <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px]">
        //             <div className="flex gap-2 items-center p-2 rounded-pl border border-navygreen-100 shadow-sm bg-navygreen-50 transition-colors duration-200">
        //                 <img src="/assets/products/plant-3.jpeg" alt="plant img" className="w-20 h-20 object-cover rounded-pl"/> 
        //                 <div className="max-w-fit flex flex-col p-2">
        //                     <h1 className="font-semibold text-xmini">String of Pearls</h1>
        //                     <p className="text-sm">Type: Succulent</p>
        //                 </div>
        //                 <div className="max-w-fit flex">
        //                     <StarIcon className="w-4 hover:text-blue-300"/>
        //                     <StarIcon className="w-4 hover:text-blue-300"/>
        //                     <StarIcon className="w-4 hover:text-blue-300"/>
        //                     <StarIcon className="w-4 hover:text-blue-300"/>
        //                     <StarIcon className="w-4 hover:text-blue-300"/>
        //                     <StarIcon className="w-4 hover:text-blue-300"/>
        //                     <StarIcon className="w-4 hover:text-blue-300"/>
        //                 </div>
        //             </div>
        //         </ul>
        //     </div>

        //     {/* Daily Challenges */}
        //     <div className="col-span-4 bg-yellow-200 p-6 rounded-md">
        //         Daily Challenges
        //     </div>

        //     {/* Plants of the Season Carousel */}
        //     <div className="col-span-8 bg-purple-200 p-6 rounded-md">
        //         Plants of the Season Carousel
        //     </div>

        //     {/* Daily Challenges */}
        //     <div className="col-span-12 bg-pink-200 p-6 rounded-md">
        //         Daily Challenges
        //     </div>
        // </div>

        <div className="container mx-auto py-10">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-3 bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <img
              src="your-profile-img.png"
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="text-lg font-bold mt-4">Farwa Tariq</h2>
            <p>Software Engineering Student | MERN Stack | Web Developer</p>
          </div>
          <div className="mt-6">
            <p className="font-semibold">
              Profile viewers: <span className="text-blue-500">12</span>
            </p>
            <p className="font-semibold">
              Post impressions: <span className="text-blue-500">19</span>
            </p>
          </div>
          <button className="mt-4 bg-blue-500 text-white rounded-full px-4 py-2 w-full">
            Try for PKR0
          </button>
          <div className="mt-6">
            <a href="#" className="text-blue-500 block">
              Groups
            </a>
            <a href="#" className="text-blue-500 block">
              Events
            </a>
            <a href="#" className="text-blue-500 block">
              Followed Hashtags
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-6 bg-white rounded-lg shadow p-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Start a post, try writing with AI"
              className="border border-gray-300 w-full p-3 rounded-lg"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center mb-4">
              <img
                src="tazzaina-profile-img.png"
                alt="Tazzaina"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-3">
                <h3 className="font-bold">Tazzaina Malik</h3>
                <p className="text-sm">
                  Senior Lecturer at Riphah International University, Islamabad
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-2">
              For all my teachers around the globe ❤️
            </p>
            <p className="text-gray-500 text-sm">
              میرے تمام اساتذہ کے نام، دنیا کے کسی بھی کونے میں ہوں...
            </p>
            <img
              src="happy-world-image.png"
              alt="Happy World"
              className="w-full h-auto rounded-lg mt-4"
            />
          </div>
        </div>

        {/* Right Sidebar (Recommendations) */}
        <div className="col-span-3 bg-white rounded-lg shadow p-4">
          <h2 className="font-bold text-lg mb-4">Add to your feed</h2>
          <div className="flex items-center mb-4">
            <img
              src="contour-logo.png"
              alt="Contour Software"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <h3 className="font-bold">Contour Software</h3>
              <p className="text-sm">Company · IT Services and IT Consulting</p>
              <button className="mt-2 bg-blue-500 text-white rounded-full px-3 py-1 text-sm">
                + Follow
              </button>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <img
              src="zeeshan-profile-img.png"
              alt="Zeeshan Usmani"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <h3 className="font-bold">Zeeshan Usmani, Ph.D</h3>
              <p className="text-sm">Co-Founder @ SkilledScore</p>
              <button className="mt-2 bg-blue-500 text-white rounded-full px-3 py-1 text-sm">
                + Follow
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="ropstam-logo.png"
              alt="Ropstam Solutions"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <h3 className="font-bold">Ropstam Solutions Inc.</h3>
              <p className="text-sm">
                Company · IT Services and IT Consulting
              </p>
              <button className="mt-2 bg-blue-500 text-white rounded-full px-3 py-1 text-sm">
                + Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}