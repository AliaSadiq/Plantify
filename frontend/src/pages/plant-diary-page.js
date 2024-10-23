import React from "react";
import Button from "../components/button";
import DiaryCard from "../components/diary-card";

export default function PlantDiaryPage () {
    return(
        <div className="bg-neutral pt-40 pb-10 px-20">
            {/* Plant Details Section */}
            <div className="flex flex-col lg:flex-row lg:space-x-8 mb-8">
                {/* Plant Card */}
                <div className="bg-lightgreen p-6 rounded-xl flex flex-col items-center w-full lg:w-1/3">
                    <img src="/assets/products/plant-3.jpeg" alt="Plant Image" className="w-32 h-32 rounded-pl mb-4 object-cover" />
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-2">Plant Name</h2>
                        <p className="text-sm text-gray-600 mb-2">Plant Type</p>
                        {/* Optional Rating/Icons */}
                        <div className="flex justify-center mb-4">
                            <span className="text-xl">💧 💧 💧 💧 💧 💧 💧</span>
                        </div>
                        <p className="text-sm text-gray-700">This is a placeholder description about the plant. More details about the plant will go here once the backend is ready.</p>
                    </div>
                </div>

                {/* Diary Entry Form */}
                <div className="w-full lg:w-2/3 bg-white p-6 rounded-pl border-2 border-gray-300">
                    <h3 className="text-xl font-bold mb-4">Diary Entry</h3>
                    {/* <form className="space-y-4">
                        <div>
                            <label htmlFor="image" className="block mb-2 text-sm font-medium">Upload Image</label>
                            <input type="file" id="image" name="image" className="w-full border rounded-lg p-2" />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Plant Status (e.g., Thriving)" 
                                name="plantStatus" 
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300" 
                            />
                        </div>
                        <div>
                            <textarea 
                                placeholder="How is the plant doing today?" 
                                name="plantCondition" 
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300" 
                            />
                        </div>
                        <Button text="Add Entry" type="submit" className="py-2 px-4 bg-black text-white rounded-md" />
                    </form> */}
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="image" className="block mb-2 text-sm font-medium">Upload Image</label>
                            <input type="file" id="image" name="image" className="w-full border rounded-lg p-2" />
                        </div>
                        <div className="flex gap-3 mb-4 w-full">
                            <div className='w-full'>
                                <label htmlFor="businessEmail" className="block text-sm font-medium font-semibold">Business Email</label>
                                <input
                                    type="email"
                                    name="businessEmail"
                                    className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                    placeholder="Enter your business email"
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="businessContact" className="block text-sm font-medium font-semibold">Business Contact</label>
                                <input
                                    type="text"
                                    name="businessContact"
                                    className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                    placeholder="Enter your store contact"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Plant Status (e.g., Thriving)" 
                                name="plantStatus" 
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300" 
                            />
                        </div>
                        <div>
                            <textarea 
                                placeholder="How is the plant doing today?" 
                                name="plantCondition" 
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300" 
                            ></textarea>
                        </div>
                        <div>
                            <input 
                                type="date" 
                                name="wateringSchedule" 
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300" 
                                placeholder="Next Watering Date" 
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                name="sunlight" 
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300" 
                                placeholder="Sunlight Needed (e.g., Full Sun)" 
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                name="fertilizer" 
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300" 
                                placeholder="Fertilizer Used" 
                            />
                        </div>
                        <div>
                            <textarea 
                                name="growthObservation" 
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300" 
                                placeholder="Growth and Development Observations"
                            ></textarea>
                        </div>
                        <div>
                            <textarea 
                                name="healthIssues" 
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300" 
                                placeholder="Any Pests or Diseases Noted"
                            ></textarea>
                        </div>
                        <Button text="Add Entry" type="submit" className="py-2 px-4 bg-black text-white rounded-md" />
                    </form>
                </div>
            </div>

            {/* Diaries Section */}
            <h3 className="text-2xl font-bold mb-4">Diaries</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Placeholder diary posts */}
                {/* <DiaryCard/>
                <DiaryCard/>
                <DiaryCard/>
                <DiaryCard/> */}
                {/* <div className="border rounded-lg p-4 bg-white shadow-md mb-4">
                    <div className="flex items-center mb-2">
                        <img src="/assets/products/plant-1.jpeg" alt="plant img" className="w-20 h-20 object-cover rounded-lg mr-4"/>
                        <div>
                            <h1 className="text-lg font-bold">20-12-24</h1>
                            <p className="text-sm">Plant Status: Thriving</p>
                        </div>
                    </div>
                    <p className="text-gray-700 mb-2">asdjald alsjkdla dklajsdjklas jdkla klsjdkla dl akls dkajskdjkasld aklsjd skdj</p>
                    <a href="#" className="text-blue-500 hover:underline">Read more...</a>
                </div> */}
                {/* Add more placeholders if needed */}
                <div className="w-full max-w-sm bg-[#f3f7e6] p-4 rounded-2xl shadow-md">
                    <div className="overflow-hidden rounded-2xl">
                        <img
                        className="w-full h-60 object-cover"
                        src='/assets/products/plant-1.jpeg'
                        alt="Diary Plant"
                        />
                    </div>
                    <div className="py-4">
                        <p className="text-xs font-medium text-gray-500">20-3-24</p>
                        <p className="text-sm text-gray-700 mt-2">
                        description
                        <span className="text-blue-500 cursor-pointer">Read more...</span>
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-sm bg-[#f3f7e6] p-4 rounded-2xl shadow-md">
                    <div className="overflow-hidden rounded-2xl">
                        <img
                        className="w-full h-60 object-cover"
                        src='/assets/products/plant-1.jpeg'
                        alt="Diary Plant"
                        />
                    </div>
                    <div className="py-4">
                        <p className="text-xs font-medium text-gray-500">20-3-24</p>
                        <p className="text-sm text-gray-700 mt-2">
                        description
                        <span className="text-blue-500 cursor-pointer">Read more...</span>
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-sm bg-[#f3f7e6] p-4 rounded-2xl shadow-md">
                    <div className="overflow-hidden rounded-2xl">
                        <img
                        className="w-full h-60 object-cover"
                        src='/assets/products/plant-1.jpeg'
                        alt="Diary Plant"
                        />
                    </div>
                    <div className="py-4">
                        <p className="text-xs font-medium text-gray-500">20-3-24</p>
                        <p className="text-sm text-gray-700 mt-2">
                        description
                        <span className="text-blue-500 cursor-pointer">Read more...</span>
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-sm bg-[#f3f7e6] p-4 rounded-2xl shadow-md">
                    <div className="overflow-hidden rounded-2xl">
                        <img
                        className="w-full h-60 object-cover"
                        src='/assets/products/plant-1.jpeg'
                        alt="Diary Plant"
                        />
                    </div>
                    <div className="py-4">
                        <p className="text-xs font-medium text-gray-500">20-3-24</p>
                        <p className="text-sm text-gray-700 mt-2">
                        description
                        <span className="text-blue-500 cursor-pointer">Read more...</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}