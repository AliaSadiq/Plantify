import React from 'react';
import camp from '../assets/campaign.jpg';
import camp1 from '../assets/campaign-card.jpeg';
import camp2 from '../assets/about-1.jpeg';
import prod1 from '../assets/product-4.png';
import prod2 from '../assets/product-5.png';
import prod3 from '../assets/product-6.png';
import prod4 from '../assets/product-7.png';
import Crousel from '../components/crousel'
import HomePageCarousel from '../components/carousels/home-page-carousel';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return(
        <div>
            {/* <HomePageCarousel /> */}
            {/* Other content of the homepage */}
            <div className='text-center font-josefin-sans bg-ivory px-10 py-60'>
                <p className='text-lg font-semibold'>Welcome to</p>
                <p className='text-3xl font-bold'>Plantify</p>
                <p className='mt-10 text-md'>Check out the latests campaigns and be a part of the intiative.</p>
                <button type="button" className="mt-4 font-josefin-sans text-sm font-semibold text-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100">Go to Campaigns</button>
            </div>
            <div>
                <Crousel/>
            </div>
            <div className="flex flex-col items-center justify-center mt-20 mb-10">
                <h1 className='text-xl font-bold font-josefin-sans'>Best of our Products for you</h1>
                <div className='flex flex-row gap-[20px] items-center justify-center mt-10'>
                    <div className='bg-ivory p-8 w-[318px] h-[394px] rounded-lg hover:shadow-lg'>
                        <img src={prod1} alt="Product 1" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className='bg-ivory p-8 w-[318px] h-[394px] rounded-lg hover:shadow-lg'>
                        <img src={prod2} alt="Product 2" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className='bg-ivory p-8 w-[318px] h-[394px] rounded-lg hover:shadow-lg'>
                        <img src={prod3} alt="Product 3" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className='bg-ivory p-8 w-[318px] h-[394px] rounded-lg hover:shadow-lg'>
                        <img src={prod4} alt="Product 4" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
                <Link to="/shop"> <p className='mt-8'>view all products</p> </Link>
            </div>
        </div>
    );
}

export default HomePage;