import {React, useS} from 'react';
import { Link } from 'react-router-dom';
import prod1 from '../assets/product-4.png';
import prod2 from '../assets/product-5.png';


const HomePage = () => {
    return(
        <div>
            {/* <HomePageCarousel /> */}
            {/* Other content of the homepage */}
            <div className='text-center font-josefin-sans bg-ivory px-10 py-60'>
                <p className='text-lg font-semibold'>Welcome to</p>
                <p className='text-3xl font-bold'>Personal Growth</p>
                <p className='mt-10 text-md'>Check out the latests campaigns and be a part of the intiative.</p>
                <button type="button" className="mt-4 font-josefin-sans text-sm font-semibold text-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100">Go to Campaigns</button>
            </div>
            <div className="flex h-screen">
                <div className="w-1/4 h-[calc(50vh - 2rem)] flex items-center justify-center">
                    {/* Left Div */}
                    <div className="bg-blue-200 w-full h-full">
                        <p>Plant of the season</p>
                        <img src={prod1} className='h-6 w-6'></img>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    {/* Middle Text */}
                    <div className="text-center">
                    <h1 className="text-3xl font-bold">Your Middle Content</h1>
                    <p>Your text goes here...</p>
                    </div>
                </div>
                <div className="w-1/4 h-[calc(50vh - 2rem)] flex items-center justify-center">
                    {/* Right Div */}
                    <div className="bg-green-200 w-full h-full"></div>
                </div>
            </div>


        </div>
    );
}

export default HomePage;