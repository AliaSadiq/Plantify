import React, {useState} from "react";
import { useParams } from "react-router-dom";
import DiaryCard from "../components/diary-card";
import useFetch from "../hooks/useFetch";
import PlantDiaryForm from "../forms/plant-diary-form";
import formatDate from "../functions/format-date";

export default function PlantDiaryPage () {
    const {id} = useParams();
    const url = `http://localhost:5000/api/my-plants/${id}`;
    const {data: plant, loading: plantLoading, error: plantError} = useFetch(url);
    const getDiariesUrl = `http://localhost:5000/api/plant-diaries/plant/${id}`;
    const {data: diaries, loading: diariesLoading, error: diariesError} = useFetch(getDiariesUrl);
    // Track water drops' state - true if watered, false if not
    const [wateredDays, setWateredDays] = useState(Array(7).fill(false));

    // Toggle watered state for the clicked day
    const toggleWatered = (index) => {
        const updatedDays = [...wateredDays];
        updatedDays[index] = !updatedDays[index];
        setWateredDays(updatedDays);
    };
    return(
        <div className="bg-neutral pt-40 pb-10 px-8 lg:px-20">
            {/* Plant Details Section */}
            <div className="flex flex-col lg:flex-row lg:space-x-8 mb-8">
                {/* Plant Card */}
                {plant ? (
                    <div className="bg-lightgreen p-6 rounded-xl flex flex-col items-center w-full lg:w-1/3">
                        <img src={`/assets/products/${plant.image}`} alt="Plant Image" className="w-32 h-32 rounded-pl mb-4 object-cover" />
                        <div className="text-center">
                            <p className="text-sm text-gray-600 mb-2">Planted on: {formatDate(plant.plantationDate)}</p>
                            <h2 className="text-2xl font-bold mb-2">{plant.name}</h2>
                            <p className="text-sm text-gray-600 mb-2">{plant.type}</p>
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
                            <p className="text-sm text-gray-700">{plant.description}</p>
                        </div>
                    </div>
                ) : (
                    <p>Couldn't fetch plant</p>
                )}

                {/* Diary Entry Form */}
                <PlantDiaryForm plantId={id}/>
            </div>

            {/* Diaries Section */}
            <h3 className="text-2xl font-bold mb-4">Diaries</h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {diaries.length > 0 ? (
                    diaries.map((diary, index) => (
                        <div key={index}>
                            <DiaryCard diary={diary} />
                        </div>
                    ))
                ): (
                    <p className="text-center">No Diaries Yet.</p>
                )}
            </div>
        </div>
    );
}
