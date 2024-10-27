import React, {useState} from "react";
import Button from "../components/button";
import DiaryCard from "../components/diary-card";

export default function PlantDiaryPage () {
    // Track water drops' state - true if watered, false if not
    const [wateredDays, setWateredDays] = useState(Array(7).fill(false));

    // Toggle watered state for the clicked day
    const toggleWatered = (index) => {
        const updatedDays = [...wateredDays];
        updatedDays[index] = !updatedDays[index];
        setWateredDays(updatedDays);
    };
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
                        {/* Watering mechanism :) */}
                        <div className="flex justify-center mb-4 space-x-2">
                            {wateredDays.map((watered, index) => (
                                <svg
                                key={index}
                                onClick={() => toggleWatered(index)}
                                className="w-6 h-6 cursor-pointer transition-colors"
                                viewBox="0 0 24 24"
                                fill={watered ? "#00BFFF" : "none"}
                                stroke="#00BFFF"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                onMouseEnter={(e) => !watered && (e.currentTarget.style.fill = "#b3e5fc")}
                                onMouseLeave={(e) => !watered && (e.currentTarget.style.fill = "none")}
                                >
                                <path d="M12 21c-4.97 0-9-4.03-9-9 0-4 9-11 9-11s9 7 9 11c0 4.97-4.03 9-9 9z" />
                                </svg>
                            ))}
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
                        <div className="flex gap-3 items-center mb-4 w-full">
                            <div className="mb-4">
                                <label htmlFor="plantImage" className="block text-sm font-medium">Plant Image</label>
                                {/* Custom file input */}
                                <label
                                    htmlFor="plantImage"
                                    className="flex flex-col items-center justify-center w-[100px] h-[100px] p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-navygreen-200"
                                >
                                    {/* SVG Icon */}
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className="w-6 h-6 text-gray-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                </label>
                                {/* Hidden file input */}
                                <input
                                    type="file"
                                    id="plantImage"
                                    name="plantImage"
                                    className="hidden"
                                    accept="image/*"
                                    required
                                />
                            </div>
                            <div className="ml-20 mb-4">
                                <label htmlFor="watered" className="block font-mini font-josefin-sans mb-1">Watering</label>
                                <select 
                                    id="watered" 
                                    name="watered" 
                                    className="bg-neutral font-josefin-sans block w-full text-mini shadow-sm sm:text-sm rounded-2xl py-4 px-4"
                                >
                                    <option value="" disabled>Was the plant watered?</option>
                                    <option value="Watered">Watered</option>
                                    <option value="Not Watered">Not Watered</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="sunlight" className="block font-mini font-josefin-sans mb-1">Sunlight</label>
                                <select 
                                    id="sunlight" 
                                    name="sunlight" 
                                    className="bg-neutral font-josefin-sans block w-full text-mini shadow-sm sm:text-sm rounded-2xl py-4 px-4"
                                >
                                    <option value="" disabled>Sunlight</option>
                                    <option value="fullSun">Full Day Sunlight</option>
                                    <option value="halfSun">Half Day Sunlight</option>
                                    <option value="Shade">No Sunlight</option>
                                    <option value="UV">UV Light</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="plantStatus" className="block font-mini font-josefin-sans mb-1">Plant Status</label>
                                <select 
                                    id="plantStatus" 
                                    name="plantStatus" 
                                    className="bg-neutral font-josefin-sans block w-full text-mini shadow-sm sm:text-sm rounded-2xl py-4 px-4"
                                >
                                    <option value="thriving">Thriving</option>
                                    <option value="blooming">Blooming</option>
                                    <option value="healthy">Healthy</option>
                                    <option value="struggling">Struggling</option>
                                    <option value="wilting">Wilting</option>
                                    <option value="dormant">Dormant</option>
                                    <option value="newly_planted">Newly Planted</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-3 mb-4 w-full">
                            <div className='w-full'>
                                <label htmlFor="diaryDate" className="block text-sm font-medium font-semibold">Dated</label>
                                <input
                                    type="date"
                                    name="diaryDate"
                                    className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                    placeholder="Diary dated at?"
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="fertilizer" className="block text-sm font-medium font-semibold">Ferilizer</label>
                                <input
                                    type="text"
                                    name="fertilizer"
                                    className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                    placeholder="Fertilizer used"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 mb-4 w-full">
                            <div className='w-full'>
                                <label htmlFor="plantUpdate" className="block text-sm font-medium font-semibold">Plant Diary</label>
                                <textarea
                                    name="plantUpdate"
                                    className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                    placeholder="How's your plant doing today?"
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="growthObservation" className="block text-sm font-medium font-semibold">Growth Observation</label>
                                <textarea
                                    name="growthObservation"
                                    className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                    placeholder="Growth and Development Observations"
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="healthIssues" className="block text-sm font-medium font-semibold">Health Issues</label>
                                <textarea
                                    name="healthIssues"
                                    className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                    placeholder="Any Pests or Diseases Noted"
                                    required
                                />
                            </div>
                        </div>
                        <Button text="Add Entry" type="submit" className="py-2 px-4 bg-black text-white rounded-md" />
                    </form>
                </div>
            </div>

            {/* Diaries Section */}
            <h3 className="text-2xl font-bold mb-4">Diaries</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Placeholder diary posts */}
                <DiaryCard/>
                <DiaryCard/>
                <DiaryCard/>
                <DiaryCard/>
                {/* <div className="w-full max-w-sm bg-[#f3f7e6] p-4 rounded-2xl shadow-md">
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
                </div> */}
            </div>
        </div>
    );
}