import React, {useState} from "react";
import Button from "../components/button";
import axios from "axios";

export default function PlantDiaryForm ({ plantId }) {
    console.log("plant Id: " + plantId);
    const [plantImages, setPlantImages] = useState([]);
    const [watered, setWatered] = useState("");
    const [sunlight, setSunlight] = useState("");
    const [plantStatus, setPlantStatus] = useState("");
    const [diaryDate, setDiaryDate] = useState("");
    const [fertilizer, setFertilizer] = useState("");
    const [plantUpdate, setPlantUpdate] = useState("");
    const [growthObservation, setGrowthObservation] = useState("");
    const [healthIssues, setHealthIssues] = useState("");

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 4) {
            alert("You can upload a maximum of 4 images.");
            return;
        }
        const filenames = files.map((file) => file.name);
        setPlantImages(filenames);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            plant: plantId,
            plantImages,
            watered,
            sunlight,
            plantStatus,
            diaryDate,
            fertilizer,
            plantUpdate,
            growthObservation,
            healthIssues,
        };

        console.log("Form Data:", formData);

        // Submit data to the API
        axios
            .post("https://plantify-backend.vercel.app/api/plant-diaries", formData)
            .then((response) => {
                console.log("Diary entry added:", response.data);
                alert("Diary Entry Added!")
                // Clear form fields 
                setPlantImages([]); 
                setWatered(""); 
                setSunlight(""); 
                setPlantStatus(""); 
                setDiaryDate(""); 
                setFertilizer(""); 
                setPlantUpdate(""); 
                setGrowthObservation(""); 
                setHealthIssues("");

                window.location.reload();
            })
            .catch((error) => {
                console.error("Error adding diary entry:", error);
            });
    };

    return (
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-pl border-2 border-gray-300">
            <h3 className="text-xl font-bold mb-4">Diary Entry</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row gap-3 items-center mb-4 w-full">
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
                            multiple={true}
                            onChange={handleImageChange}
                            required
                        />
                        <p className="text-xs mt-2">Max 4 images allowed.</p>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        {plantImages.map((image, index) => (
                            <div key={index} className="w-20 h-20 border border-gray-300 rounded-lg overflow-hidden">
                                <img src={`/assets/products/${image}`} alt={`Plant Preview ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <div className="lg:ml-20 mb-4">
                        <label htmlFor="watered" className="block font-mini font-josefin-sans mb-1">Watering</label>
                        <select 
                            id="watered" 
                            name="watered" 
                            value={watered}
                            onChange={(e) => setWatered(e.target.value)}
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
                            value={sunlight}
                            onChange={(e) => setSunlight(e.target.value)}
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
                            value={plantStatus}
                            onChange={(e) => setPlantStatus(e.target.value)}
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
                <div className="flex flex-col lg:flex-row gap-3 mb-4 w-full">
                    <div className='w-full'>
                        <label htmlFor="diaryDate" className="block text-sm font-medium font-semibold">Dated</label>
                        <input
                            type="date"
                            name="diaryDate"
                            value={diaryDate}
                            onChange={(e) => setDiaryDate(e.target.value)}
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
                            value={fertilizer}
                            onChange={(e) => setFertilizer(e.target.value)}
                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                            placeholder="Fertilizer used"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 mb-4 w-full">
                    <div className='w-full'>
                        <label htmlFor="plantUpdate" className="block text-sm font-medium font-semibold">Plant Diary</label>
                        <textarea
                            name="plantUpdate"
                            id="plantUpdate"
                            value={plantUpdate}
                            onChange={(e) => setPlantUpdate(e.target.value)}
                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                            placeholder="How's your plant doing today?"
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="growthObservation" className="block text-sm font-medium font-semibold">Growth Observation</label>
                        <textarea
                            id="growthObservation"
                            name="growthObservation"
                            value={growthObservation}
                            onChange={(e) => setGrowthObservation(e.target.value)}
                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                            placeholder="Growth and Development Observations"
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="healthIssues" className="block text-sm font-medium font-semibold">Health Issues</label>
                        <textarea
                            name="healthIssues"
                            id="healthIssues"
                            value={healthIssues}
                            onChange={(e) => setHealthIssues(e.target.value)}
                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                            placeholder="Any Pests or Diseases Noted"
                            required
                        />
                    </div>
                </div>
                <Button 
                    text="Add Entry" 
                    type="submit" 
                    className="py-2 px-4 bg-black text-white rounded-md" 
                />
            </form>
        </div>
    );
}