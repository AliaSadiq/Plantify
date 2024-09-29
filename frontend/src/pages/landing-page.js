import {React, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import TestimonialCarousel from '../carousels/testimonial-carousel';
import ProductCarousel from '../carousels/product-carousel';
import {GlobeAsiaAustraliaIcon, SunIcon, UserGroupIcon} from '@heroicons/react/24/solid';

import CampaignCarousel from '../components/campaign-carousel';
import Button from '../components/button';
import SignUpModal from '../popups/signup-modal';

const LandingPage = () => {

    const navigate = useNavigate();

    //initiate campaign button code
    const handleInitiateCampaign = () => {
        const userLoggedIn = localStorage.getItem('user') !== null;

        if (userLoggedIn) {
            const user = JSON.parse(localStorage.getItem('user'));
            
            if (user.isSocial) {
                navigate('/verification-check');
            } else {
                navigate('/social-signup');
            }
        } else {
            navigate('/auth-check');
        }
    };
    //for the popup
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            navigate('/campaign');
        } else {
            setShowModal(true);
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }
    return (
        <div mt-0 >
            <div className="relative">
                {/* Background image with blurred overlay */}
                <div className="absolute inset-0 bg-cover bg-center z-0 pb-40"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/landing.jpeg'})` }}>
                    <div className="absolute inset-0 backdrop-blur-lg backdrop-filter bg-ivory bg-opacity-50"></div>
                </div>
                {/* Content */}
                <div className="flex flex-row lg:gap-[50px] items:center justify-center lg:justify-between lg:items-start pt-40 pb-20 px-[30px] lg:px-[100px] py-0 relative">
                    <div className="text-center lg:text-left w-1/2 font-josefin-sans text-gray-100 mt-10">
                        <p className="text-lg font-semibold">Welcome to</p>
                        <h1 className="text-lilxl lg:text-4xl font-bold">Plantify,</h1>
                        <p className="mt-8 text-md">Where green dreams take root and flourish. Discover a world of sustainable solutions and join us in nurturing a greener tomorrow.</p>
                        <div className="flex justify-center lg:justify-start mt-10">
                            <button onClick={openModal} type="button" className="font-josefin-sans text-sm font-semibold text-white bg-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100 mr-4">Start Donating</button>
                            <button onClick={handleInitiateCampaign} type="button" className="font-josefin-sans text-sm font-semibold text-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100">Initiate Campaign</button>
                        </div>
                        <p className="font-josefin-sans mt-20 text-2xl font-bold">50,000,867</p>
                        <p className="mt-2 text-mini font-semibold">trees planted and counting...</p>
                    </div>
                </div>
            </div>
            
            <div className='text-center font-josefin-sans px-10 bg-navygreen-100 py-20'>
                <h1 className='text-xl lg:text-2xl font-bold'>Growing Green for a Sustainable Future.</h1>
            </div>
            <div className='flex flex-col lg:flex lg:flex-row items-center justify-center gap-[10px] mt-20 mb-20 font-josefin-sans text-center text-gray-100'>
                <div className='bg-navygreen-100 p-6 rounded-lg flex flex-col items-center justify-center w-[300px] drop-shadow-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                    <p className="mt-4 text-sm">Empowering communities to embrace sustainable living through education, innovation, and action</p>
                </div>
                <div className='bg-navygreen-100 p-6 rounded-lg flex flex-col items-center justify-center w-[300px] drop-shadow-lg'>
                    <SunIcon className='w-16 h-16'/>
                    <p className="mt-4 text-sm">Protecting biodiversity and preserving ecosystems for a greener, healthier planet.</p>
                </div>
                <div className='bg-navygreen-100 p-6 rounded-lg flex flex-col items-center justify-center w-[300px] drop-shadow-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                    <p className="mt-4 text-sm">Leading the charge in environmental conservation through collaboration and eco-conscious initiatives.</p>
                </div>
            </div>
            {/* About div */}
            <div className='bg-neutral'>
                <div className='font-noto-sans-display text-xl lg:text-lilxl font-semibold text-center lg:text-left lg:px-[100px] pt-[20px]'>
                    <span className='text-navygreen-300'>Together</span><span className=''>, we <span className='text-navygreen-300'>can</span> make </span><h1 >a difference.</h1>
                    {/* <p className='mt-4 font-light'>Join us in our mission to create a sustainable future for our planet. Together, we can make a positive impact on the environment by promoting eco-friendly practices, conserving natural resources, and advocating for environmental conservation. Let's work hand in hand towards building a greener and healthier world for generations to come.</p> */}
                </div>
                <div className='flex flex-col lg:flex-row gap-4'>
                    {/* <div className='max-w-96'> */}
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/goal.jpeg` } alt='leaf image' className='self-center rounded-xl w-40 lg:w-96 h-auto mx-10 object-cover'/>
                    {/* </div> */}
                    <div className='grid lg:grid-rows-2 lg:grid-cols-2 grid-cols-1 grid-row-4 gap-x-4 gap-y-0 mt-10 lg:mt-40 mr-10'>
                        <div className='p-8'>
                            <SunIcon className='w-10 bg-navygreen-200 bg-opacity-40 rounded-sm p-2'/>
                            <h1 className='mt-2 text-lg font-josefin-sans font-semibold'>Environmental Advocacy</h1>
                            <p className='text-sm'>Join us in advocating for a greener planet. Raise awareness, inspire action, and make a difference in the fight against climate change and environmental degradation.</p>
                        </div>
                        <div className='p-8'>
                            <UserGroupIcon className='w-10 bg-navygreen-200 bg-opacity-40 rounded-sm p-2'/>
                            <h1 className='mt-2 text-lg font-josefin-sans font-semibold'>Community Engagement</h1>
                            <p className='text-sm'>Connect with like-minded individuals and organizations dedicated to sustainability. Engage in discussions, share ideas, and collaborate on projects that promote eco-friendly living and environmental conservation.</p>
                        </div>
                        <div className='p-8'>
                            <GlobeAsiaAustraliaIcon className='w-10 bg-navygreen-200 bg-opacity-40 rounded-sm p-2'/>
                            <h1 className='mt-2 text-lg font-josefin-sans font-semibold'>Sustainable Practices</h1>
                            <p className='text-sm'>Discover practical tips and resources for living a more sustainable lifestyle. From reducing waste to supporting green businesses, learn how small changes can have a big impact on the health of our planet.</p>
                        </div>
                        <div className='p-8'>
                            <SunIcon className='w-10 bg-navygreen-200 bg-opacity-40 rounded-sm p-2'/>
                            <h1 className='mt-2 text-lg font-josefin-sans font-semibold'>Collective Impact</h1>
                            <p className='text-sm'>Together, we can create positive change. By working collaboratively, we amplify our voices and efforts to protect the environment and build a more sustainable future for generations to come.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonials */}
            <div className="relative flex flex-col gap-[40px] lg:flex-row items-center justify-center lg:justify-between py-16 lg:py-24 bg-no-repeat bg-cover" style={{ backgroundImage: `url(/assets/landing.jpeg)` }}>
                <div className="absolute inset-0 backdrop-blur-lg backdrop-filter bg-ivory bg-opacity-50"></div>
                <div className="lg:w-1/3 text-center lg:text-left mb-16 lg:mb-0 py-10 lg:py-20 lg:p-20">
                    <h2 className="relative text-center text-lilxl lg:text-3xl lg:text-4xl font-semibold mb-4 font-josefin-sans">
                        Testimonials
                    </h2>
                    <p className="absolute hidden lg:visible text-gray-100 mb-6">
                        Here's what our happy customers have to say about our product.
                    </p>
                </div>
                <div className='w-full w-1/2 lg:w-1/2 max-w-xl mx-auto'>
                    <TestimonialCarousel />
                </div>
            </div>
            {/* Shop showcase */}
            <div className="flex flex-col lg:flex-row gap-20 justify-center bg-neutral to-white items-center pt-20 pb-10 lg:pl-40">
                <div className='self-center w-60 lg:w-96'>
                    <ProductCarousel className='w-20 lg:w-80'/>
                </div>
                <div className="mx-10 lg:mr-40 text-center lg:text-left font-josefin-sans">
                    <h1 className="text-2xl lg:text-3xl font-bold">Get your Plant today</h1>
                    <p className="mt-2 text-mini text-center lg:text-justify">Enhance your space with our diverse selection of plants. Choose your favorite from our wide variety and bring nature into your home today.</p>
                    <div className='mt-10 text-mini'><Link to='/shop'><Button text="Shop now!" className="py-2 shadow-md"/></Link></div>
                </div>
            </div>
            {/* Different signups div */}
            <div className='flex flex-col lg:flex-row items-center justify-center gap-[20px] mt-20 mb-20 font-josefin-sans text-center text-gray-100'>
                {/* Seller Signup Option */}
                <div className='group bg-navygreen-100 p-6 rounded-lg flex flex-col items-center justify-center w-[300px] h-[200px] lg:w-[350px] lg:h-[250px] drop-shadow-lg hover:h-[320px] transition-all duration-300 ease-in-out relative overflow-hidden'>
                    <h1 className='font-bold text-lg mb-2'>Open your plant store!</h1>
                    {/* Hidden description and button initially */}
                    <p className='text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Start your own plant store, reach new customers, and sell your unique plants!
                    </p>
                    <Link to="/seller-signup"> 
                        <button className='mt-4 opacity-0 group-hover:opacity-100 text-sm bg-gray-100 text-white px-4 py-2 rounded-full transition-opacity duration-300'>
                        Sign Up as Seller
                        </button>
                    </Link>
                </div>

                {/* Member Signup Option */}
                <div className='group bg-navygreen-100 p-6 rounded-lg flex flex-col items-center justify-center w-[300px] h-[200px] lg:w-[350px] lg:h-[250px] drop-shadow-lg hover:h-[320px] transition-all duration-300 ease-in-out relative overflow-hidden'>
                    <h1 className='font-bold text-lg mb-2'>Become a member!</h1>
                    {/* Hidden description and button initially */}
                    <p className='text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Join our community to support green campaigns and access exclusive content.
                    </p>
                    <Link to="/seller-sign-up"> 
                        <button className='mt-4 opacity-0 group-hover:opacity-100 text-sm bg-gray-100 text-white px-4 py-2 rounded-full transition-opacity duration-300'>
                            Sign Up as Member
                        </button>
                    </Link>
                </div>

                {/* Social Group Signup Option */}
                <div className='group bg-navygreen-100 p-6 rounded-lg flex flex-col items-center justify-center w-[300px] h-[200px] lg:w-[350px] lg:h-[250px] drop-shadow-lg hover:h-[320px] transition-all duration-300 ease-in-out relative overflow-hidden'>
                    <h1 className='font-bold text-lg mb-2'>Initiate Campaigns!</h1>
                    {/* Hidden description and button initially */}
                    <p className='text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Become a social group leader and initiate impactful plant campaigns in your community.
                    </p>
                    <Link to="/social-signup"> 
                        <button className='mt-4 opacity-0 group-hover:opacity-100 text-sm bg-gray-100 text-white px-4 py-2 rounded-full transition-opacity duration-300'>
                            Sign Up as Social Group
                        </button>
                    </Link>
                </div>
            </div>



            {/* Campaigns showcase */}
            <div className="flex flex-col lg:flex-row gap-10 justify-center lg:justify-between bg-neutral to-white items-center pt-20 pb-10 px-40">
                <div className="mx-4 lg:mr-40 font-josefin-sans">
                    <h1 className="text-2xl text-center lg:text-left lg:text-3xl font-bold">Become part of the Initiatives</h1>
                    <p className="mt-2 text-mini text-center lg:text-justify">Join the initiatives and play your part in preserving the greenery.</p>
                    <div className='mt-10 text-mini'><Link to='/campaign'><Button text="See all Campaigns" className="py-2 shadow-md"/></Link></div>
                </div>
                <div className='w-96'>
                    <CampaignCarousel className='w-80'/>
                </div>
            </div>
            {/* Newsletter */}
            <div className='relative flex flex-col items-center justify-center bg-ivory px-8 pt-40 pb-10 bg-cover bg-no-repeat' style={{ backgroundImage: `url(/assets/newsletter.jpeg)` }}>
            <div className="absolute inset-0 backdrop-blur-sm backdrop-filter bg-navygreen-200 bg-opacity-50"></div>
                <div className='relative text-lg text-gray-100 lg:text-2xl font-josefin-sans font-bold mx-10 lg:mx-80 text-center '>
                    <p>Join the plantify community to get offers and more!</p>
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
            <SignUpModal className='z-30' showModal={showModal} closeModal={closeModal} />
        </div>
    );
}

export default LandingPage;
