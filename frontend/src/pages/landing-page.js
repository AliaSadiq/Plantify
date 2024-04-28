import React from 'react';
import Slider from 'react-slick';

import vectorImage from '../assets/frog.png'; // Import the vector image
import about1 from '../assets/about-1.jpeg';
import about2 from '../assets/about-2.jpeg';
import product1 from '../assets/group.png';
import TestimonialCarousel from '../components/carousels/testimonial-carousel';
import { SunIcon} from '@heroicons/react/24/solid';
import ProductCarousel from '../components/carousels/product-carousel';

const LandingPage = () => {
    return (
        <div mt-0 >
            <div className="flex flex-row gap-[50px] justify-between bg-gradient-to-b from-ivory to-white items-center pt-20 pb-10 px-[100px] py-0">
                <div className="w-1/2 font-josefin-sans text-gray-100 mt-10">
                    <p className="text-lg font-semibold ">Welcome to</p>
                    <h1 className="text-4xl font-bold">Plantify,</h1>
                    <p className="mt-8 text-md ">where green dreams take root and flourish. Discover a world of sustainable solutions and join us in nurturing a greener tomorrow.</p>
                    <div className="flex justify-left mt-10">
                        <button type="button" class="font-josefin-sans text-sm font-semibold text-white bg-darkbrown p-4 rounded hover:rounded-full border-2 border-darkbrown mr-4">Start Donating</button>
                        <button type="button" class="font-josefin-sans text-sm font-semibold text-darkbrown p-4 rounded hover:rounded-full border-2 border-darkbrown">Initiate Campaign</button>
                    </div>
                    <p className="font-josefin-sans mt-20 text-2xl text-bold">50,000,867</p>
                    <p className="mt-2 text-mini text-semibold">trees planted and counting...</p>
                </div>
                <div className="w-1/2 relative mt-10 p-6">
                    <img src={vectorImage} alt="Vector" className="w-full h-[600px] object-cover rounded-lg" />
                </div>
            </div>
            {/* <div className='bg-pale py-20 mx-[400px] mt-20'></div> */}
            <div className='flex flex-row justify-center gap-[10px] mt-[40px] mb-20 text-center'>
                <div className='bg-pale-300 p-6 rounded-lg flex flex-col items-center justify-center w-[300px]'>
                    <SunIcon className="w-16 h-16" />
                    <p className="text-sm">Empowering communities to embrace sustainable living through education, innovation, and action</p>
                </div>
                <div className='bg-pale-200 p-6 rounded-lg flex flex-col items-center justify-center w-[300px]'>
                    <SunIcon className="w-16 h-16" />
                    <p className="text-sm">Protecting biodiversity and preserving ecosystems for a greener, healthier planet.</p>
                </div>
                <div className='bg-pale-100 p-6 rounded-lg flex flex-col items-center justify-center w-[300px]'>
                    <SunIcon className="w-16 h-16" />
                    <p className="text-sm">Leading the charge in environmental conservation through advocacy, collaboration, and eco-conscious initiatives.</p>
                </div>
            </div>
            <div className='mt-10 text-center font-josefin-sans px-60'>
                <h1 className='text-2xl font-bold'>Support us reach our Goal</h1>
                <p className='mt-4 font-light'>Join us in our mission to create a sustainable future for our planet. Together, we can make a positive impact on the environment by promoting eco-friendly practices, conserving natural resources, and advocating for environmental conservation. Let's work hand in hand towards building a greener and healthier world for generations to come.</p>
            </div>
            <div className="flex gap-[18px] justify-center my-20">
                <img src={about1} alt="Image 1" className="w-1/4 rounded-md" />
                <img src={about2} alt="Image 2" className="w-1/4 rounded-md" />
            </div>
            <div className="flex flex-col gap-[40px] lg:flex-row items-center justify-between py-16 lg:py-24 bg-transparent">
                <div className="w-[40px] lg:w-1/3 text-center lg:text-left mb-16 lg:mb-0 bg-ivory p-20">
                    <h2 className="text-3xl lg:text-4xl font-heading font-semibold mb-4 font-josefin-sans">
                    Testimonials
                    </h2>
                    <p className="text-gray-100 mb-6">
                    Here's what our happy customers have to say about our product.
                    </p>
                </div>
                <div className='w-full lg:w-1/2 max-w-xl mx-auto'>
                    <TestimonialCarousel />
                </div>
            </div>
            {/* Product card carousel */}
            <div className="flex flex-row gap-[50px] justify-between bg-gradient-to-t from-ivory to-white items-center pt-20 pb-10 px-[100px]">
                <img src={product1} alt="Image 1" className="w-[550px] rounded-md ml-40" />
                <div className="mr-40">
                    <h1 className="text-3xl font-bold">Get your Plant today</h1>
                    <p className="mt-8 text-md ">Enhance your space with our diverse selection of plants. Choose your favorite from our wide variety and bring nature into your home today.</p>
                    <button type="button" className='mt-8 font-josefin-sans text-sm font-semibold text-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100'>Shop Now</button>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center bg-ivory px-8 pt-40 pb-10'>
                <div className='text-2xl font-josefin-sans font-bold mx-80 text-center '>
                    Join the plantify community to get offers and more!
                </div>
                <div className=" pt-10 flex items-center">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Write your email"
                            className="border border-gray-300 rounded-l py-2 pl-2 pr-40 outline-none w-full"
                        />
                        <button
                            type="button"
                            className="bg-yolk text-mini font-josefin-sans text-gray-100 font-semibold rounded-r py-2 px-4 absolute top-0 right-0 h-full"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
