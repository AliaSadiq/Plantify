import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import Button from '../components/button';

const HomePage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        } else {
            // If no user is found in local storage, navigate to the login page
            navigate('/login');
        }
    }, [navigate]);

    // Sample data for the chart
    const data = [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 1 },
        { x: 5, y: 7 },
        { x: 6, y: 6 },
        { x: 7, y: 3 },
        { x: 8, y: 2 },
        { x: 9, y: 0 }
    ];

    const handleGoToCampaigns = () => {
        navigate("/campaign");
    }

    return (
        <div>
            <div className='text-center font-josefin-sans bg-navygreen-100 px-10 py-40'>
                {user ? (
                    <>
                        <p className='text-2xl font-bold'>Hello {user.username}!</p>
                        <p className='text-lg font-bold'>This is your own Personal Area on Plantify</p>
                        <p className='mt-20 mb-4 text-mini'>Check out the latest campaigns and be a part of the initiative.</p>
                        <Button text="Go to Campaigns" onClick={handleGoToCampaigns} />
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div className='flex gap-20 items-start bg-neutral text-gray-100 py-40 rounded-t-[78px] mt-[-100px]'>
                <div className='bg-neutral h-full px-10 max-w-2xl'>
                    <h1 className='font-bold font-josefin-sans text-lg mb-4'>Event Calendar</h1>
                    <div className="font-josefin-sans space-y-6 relative">
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-300"></div>
                        <div className="relative pl-12 mb-8">
                            <p className="text-gray-600 mb-2">Oct 20, 2021</p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <p className="text-black font-semibold w-20">10:00</p>
                                    <div className="h-10 w-1 bg-blue-500 ml-2"></div>
                                    <div className="ml-4">
                                        <p className="text-blue-500">Dribbble shot</p>
                                        <p className="text-gray-800">Facebook Brand</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-black font-semibold w-20">13:20</p>
                                    <div className="h-10 w-1 bg-green-500 ml-2"></div>
                                    <div className="ml-4">
                                        <p className="text-green-500">Design</p>
                                        <p className="text-gray-800">Task Management</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative pl-12 mb-8">
                            <p className="text-gray-600 mb-2">Oct 21, 2021</p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <p className="text-black font-semibold w-20">10:00</p>
                                    <div className="h-10 w-1 bg-purple-500 ml-2"></div>
                                    <div className="ml-4">
                                        <p className="text-purple-500">UX Research</p>
                                        <p className="text-gray-800">Sleep App</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-black font-semibold w-20">13:20</p>
                                    <div className="h-10 w-1 bg-green-500 ml-2"></div>
                                    <div className="ml-4">
                                        <p className="text-green-500">Design</p>
                                        <p className="text-gray-800">Task Management</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-black font-semibold w-20">10:00</p>
                                    <div className="h-10 w-1 bg-blue-500 ml-2"></div>
                                    <div className="ml-4">
                                        <p className="text-blue-500">Dribbble Shot</p>
                                        <p className="text-gray-800">Meet Up</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative pl-12 mb-8">
                            <p className="text-gray-600 mb-2">Oct 22, 2024</p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <p className="text-black font-semibold w-20">10:00</p>
                                    <div className="h-10 w-1 bg-blue-500 ml-2"></div>
                                    <div className="ml-4">
                                        <p className="text-blue-500">Islamabad Campaign</p>
                                        <p className="text-gray-800">by Riphah Green Club</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-black font-semibold w-20">11:00</p>
                                    <div className="h-10 w-1 bg-green-500 ml-2"></div>
                                    <div className="ml-4">
                                        <p className="text-green-500">Design</p>
                                        <p className="text-gray-800">Mobile App</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-20 mr-10'>
                    <div className='flex flex-row gap-10'>
                        <div className='p-8 bg-navygreen-100 rounded-lg drop-shadow-lg'>
                            <h1 className='text-md font-semibold font-josefin-sans'>Challenge 1</h1>
                            <p className='mt-4 text-sm font-josefin-sans'><b>Say No to Plastic Straws: </b>Refuse plastic straws when ordering drinks. If you prefer using a straw, consider bringing your own reusable one made of bamboo, metal, or glass.</p>
                        </div>
                        <div className='p-8 bg-navygreen-100 rounded-lg drop-shadow-lg'>
                            <h1 className='text-md font-semibold font-josefin-sans'>Challenge 2</h1>
                            <p className='mt-4 text-sm font-josefin-sans'><b>Eco-Friendly Commute: </b>Choose a sustainable mode of transportation for your commute today. Walk, bike, carpool, or use public transportation instead of driving alone in a car. Reduce emissions and traffic congestion while enjoying a greener journey.</p>
                        </div>
                        <div className='p-8 bg-navygreen-100 rounded-lg hover:flex-grow drop-shadow-lg'>
                            <h1 className='text-md font-semibold font-josefin-sans'>Challenge 3</h1>
                            <p className='mt-4 text-sm font-josefin-sans'><b>Water Conservation Challenge: </b>Use water mindfully today, fixing leaks, taking shorter showers, and collecting rainwater for plants to conserve this precious resource.</p>
                        </div>
                    </div>
                    <div className='p-8 bg-pinky rounded-xl'>
                        <XYPlot width={600} height={300}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <LineSeries data={data} />
                        </XYPlot>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
