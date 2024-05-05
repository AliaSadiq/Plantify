import React from 'react';
import { Link } from 'react-router-dom';

import landing from '../assets/landing.jpeg';
import TestimonialCarousel from '../components/carousels/testimonial-carousel';
import ProductCarousel from '../components/carousels/product-carousel';
import { SunIcon} from '@heroicons/react/24/solid';
import goal from '../assets/goal.jpeg';
import CampaignCarousel from '../components/campaign-carousel';

const LandingPage = () => {
    return (
        <div mt-0 >
            <div className="relative">
                {/* Background image with blurred overlay */}
                <div className="absolute inset-0 bg-cover bg-center z-0 pb-40" style={{ backgroundImage: `url(${landing})` }}>
                    <div className="absolute inset-0 backdrop-blur-lg backdrop-filter bg-ivory bg-opacity-50"></div>
                </div>
                {/* Content */}
                <div className="flex flex-row gap-[50px] justify-between items-center pt-40 pb-20 px-[100px] py-0 relative z-20">
                    <div className="w-1/2 font-josefin-sans text-gray-100 mt-10">
                        <p className="text-lg font-semibold">Welcome to</p>
                        <h1 className="text-4xl font-bold">Plantify,</h1>
                        <p className="mt-8 text-md">where green dreams take root and flourish. Discover a world of sustainable solutions and join us in nurturing a greener tomorrow.</p>
                        <div className="flex justify-left mt-10">
                            <button type="button" className="font-josefin-sans text-sm font-semibold text-white bg-darkbrown p-4 rounded hover:rounded-full border-2 border-darkbrown mr-4">Start Donating</button>
                            <button type="button" className="font-josefin-sans text-sm font-semibold text-darkbrown p-4 rounded hover:rounded-full border-2 border-darkbrown">Initiate Campaign</button>
                        </div>
                        <p className="font-josefin-sans mt-20 text-2xl font-bold">50,000,867</p>
                        <p className="mt-2 text-mini font-semibold">trees planted and counting...</p>
                    </div>
                </div>
            </div>
            {/* <div className='bg-pale py-20 mx-[400px] mt-20'></div> */}
            
            <div className='text-center font-noto-sans-display px-10 bg-navygreen-100 py-20'>
                <h1 className='text-2xl font-bold'>Together, we can make a difference.</h1>
                {/* <p className='mt-4 font-light'>Join us in our mission to create a sustainable future for our planet. Together, we can make a positive impact on the environment by promoting eco-friendly practices, conserving natural resources, and advocating for environmental conservation. Let's work hand in hand towards building a greener and healthier world for generations to come.</p> */}
            </div>
            <div className='flex flex-row justify-center gap-[10px] mt-20 mb-20 text-center'>
                <div className='bg-navygreen-100 p-6 rounded-lg flex flex-col items-center justify-center w-[300px]'>
                    <SunIcon className="w-16 h-16" />
                    <p className="text-sm">Empowering communities to embrace sustainable living through education, innovation, and action</p>
                </div>
                <div className='bg-navygreen-100 p-6 rounded-lg flex flex-col items-center justify-center w-[300px]'>
                    <SunIcon className="w-16 h-16" />
                    <p className="text-sm">Protecting biodiversity and preserving ecosystems for a greener, healthier planet.</p>
                </div>
                <div className='bg-navygreen-100 p-6 rounded-lg flex flex-col items-center justify-center w-[300px]'>
                    <SunIcon className="w-16 h-16" />
                    <p className="text-sm">Leading the charge in environmental conservation through advocacy, collaboration, and eco-conscious initiatives.</p>
                </div>
            </div>
            {/* About div */}
            <div className='bg-neutral'>
                <div className='font-noto-sans-display text-lilxl font-semibold px-10'>
                    <span className='text-navygreen-200'>Together</span><span className=''>, we <span className='text-navygreen-200'>can</span> make </span><h1 >a difference.</h1>
                    {/* <p className='mt-4 font-light'>Join us in our mission to create a sustainable future for our planet. Together, we can make a positive impact on the environment by promoting eco-friendly practices, conserving natural resources, and advocating for environmental conservation. Let's work hand in hand towards building a greener and healthier world for generations to come.</p> */}
                </div>
                <div className='flex flex-row gap-4'>
                    <img src={goal} className='rounded-xl w-96 h-auto mx-10'/>
                    <div className='grid grid-rows-2 grid-cols-2 gap-x-4 gap-y-0 mt-40 mr-10'>
                    <div className=' p-8'>
                        <SunIcon className='w-10 bg-navygreen-200 bg-opacity-40 rounded-sm p-2'/>
                        <h1 className='mt-2 text-lg font-josefin-sans font-semibold'>Environmental Advocacy</h1>
                        <p className='text-sm'>Join us in advocating for a greener planet. Raise awareness, inspire action, and make a difference in the fight against climate change and environmental degradation.</p>
                    </div>
                    <div className=' p-8'>
                        <SunIcon className='w-10 bg-navygreen-200 bg-opacity-40 rounded-sm p-2'/>
                        <h1 className='mt-2 text-lg font-josefin-sans font-semibold'>Community Engagement</h1>
                        <p className='text-sm'>Connect with like-minded individuals and organizations dedicated to sustainability. Engage in discussions, share ideas, and collaborate on projects that promote eco-friendly living and environmental conservation.</p>
                    </div>
                    <div className=' p-8'>
                        <SunIcon className='w-10 bg-navygreen-200 bg-opacity-40 rounded-sm p-2'/>
                        <h1 className='mt-2 text-lg font-josefin-sans font-semibold'>Sustainable Practices</h1>
                        <p className='text-sm'>Discover practical tips and resources for living a more sustainable lifestyle. From reducing waste to supporting green businesses, learn how small changes can have a big impact on the health of our planet.</p>
                    </div>
                    <div className=' p-8'>
                        <SunIcon className='w-10 bg-navygreen-200 bg-opacity-40 rounded-sm p-2'/>
                        <h1 className='mt-2 text-lg font-josefin-sans font-semibold'>Collective Impact</h1>
                        <p className='text-sm'>Together, we can create positive change. By working collaboratively, we amplify our voices and efforts to protect the environment and build a more sustainable future for generations to come.</p>
                    </div>
                    </div>
                </div>
            </div>
            {/* Testimonials */}
            <div className="relative flex flex-col gap-[40px] lg:flex-row items-center justify-between py-16 lg:py-24 bg-testimonial-texture bg-no-repeat bg-cover">
                <div className="absolute inset-0 backdrop-blur-lg backdrop-filter bg-ivory bg-opacity-50"></div>
                <div className="w-[40px] lg:w-1/3 text-center lg:text-left mb-16 lg:mb-0 p-20">
                    <h2 className=" absolute text-3xl lg:text-4xl font-heading font-semibold mb-4 font-josefin-sans">
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
            {/* Shop showcase */}
            <div className="flex flex-row gap-10 justify-between bg-neutral to-white items-center pt-20 pb-10 px-40">
                <div className='w-96'>
                    <ProductCarousel className='w-80'/>
                </div>
                <div className="mr-40">
                    <h1 className="text-3xl font-bold">Get your Plant today</h1>
                    <p className="mt-8 text-md ">Enhance your space with our diverse selection of plants. Choose your favorite from our wide variety and bring nature into your home today.</p>
                    <button type="button" className='mt-8 font-josefin-sans text-sm font-semibold text-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100'>Shop Now</button>
                    {/* <div className="flex flex-col items-center justify-center mt-20 mb-10">
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
                    </div> */}
                </div>
            </div>
            {/* Campaigns showcase */}
            <div className="flex flex-row gap-10 justify-between bg-neutral to-white items-center pt-20 pb-10 px-40">
                <div className="mr-40">
                    <h1 className="text-3xl font-bold">Become part of the Initiatives</h1>
                    <p className="mt-8 text-md ">Enhance your space with our diverse selection of plants. Choose your favorite from our wide variety and bring nature into your home today.</p>
                    <button type="button" className='mt-8 font-josefin-sans text-sm font-semibold text-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100'>Shop Now</button>
                    {/* <div className="flex flex-col items-center justify-center mt-20 mb-10">
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
                    </div> */}
                </div>
                <div className='w-96'>
                    <CampaignCarousel className='w-80'/>
                </div>
            </div>
            {/* Newsletter */}
            <div className='relative flex flex-col items-center justify-center bg-ivory px-8 pt-40 pb-10 bg-newsletter bg-cover bg-no-repeat'>
            <div className="absolute inset-0 backdrop-blur-sm backdrop-filter bg-ivory bg-opacity-50"></div>
                <div className='relative text-2xl font-josefin-sans font-bold mx-80 text-center '>
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
                            className="bg-navygreen-200 bg-opacity-50=z text-mini font-josefin-sans text-gray-100 font-semibold rounded-r py-2 px-4 absolute top-0 right-0 h-full"
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
