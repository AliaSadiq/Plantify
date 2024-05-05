import React, { useState, useEffect } from 'react';
import logo from '../assets/leaf.png';
import { Link } from "react-router-dom";
import SignUpModal from './popups/sign-up-modal';
import avatar from '../assets/testimonial-3.jpeg';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    // const [user, setUser] = useState(null);
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user){
        user = "no users";
    }
    console.log(user);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Retrieve user information from local storage
        // const storedUser = localStorage.getItem('user');
        // if (storedUser) {
        //     const parsedUser = JSON.parse(storedUser);
        //     setUser(parsedUser);
        // }


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const listItemStyle = {
        transition: 'color 1s ease-in-out',
        color: isScrolled ? '#ffffff' : '#222'
    };

    //for the popup
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return(
        <nav className={`fixed w-full z-30 top-0 start-0  ${isScrolled ? 'bg-gray-100' : 'bg-transparent'} transition-colors duration-1000 ease-in-out`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Plantify Logo"></img> <span className='font-josefin-sans text-lg font-semibold text-navygreen-300 '>Plantify</span>
                </Link>
                <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" onClick={openModal} className={`font-josefin-sans text-sm font-semibold text-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100 ${isScrolled ? 'border-white text-white' : 'border-gray-100 text-gray-100'} transition-colors duration-1000 ease-in-out`}>Start Donating</button>
                    <p className='self-center'>{user && user.email}</p>
                    <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span class="sr-only">Open user menu</span>
                            <img class="w-10 h-10 rounded-full" src={avatar} alt="user photo"/>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                            <div class="px-4 py-3">
                            <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>
                            <ul class="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className={`flex flex-col p-4 md:p-0 mt-4 font-josefin-sans text-sm md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 ${isScrolled ? 'text-white' : 'text-gray-100'} transition-colors duration-1000 ease-in-out`}>
                        <li>
                            <Link to="/home"  className="navbar-link py-2 px-3 hover:font-semibold" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="navbar-link py-2 px-3 hover:font-semibold">Shop</Link>
                        </li>
                        <li>
                            <Link to="/campaign" className="navbar-link py-2 px-3 hover:font-semibold">Campaigns</Link>
                        </li>
                        <li>
                            <Link to="../App.js" className="navbar-link py-2 px-3 hover:font-semibold">Plantify Network</Link>
                        </li>
                        <li>
                            <Link to="../App.js" className="navbar-link py-2 px-3 hover:font-semibold">Personal Growth</Link>
                        </li>
                        <li>
                            <Link to="../App.js" className="navbar-link py-2 px-3 hover:font-semibold">About us</Link>
                        </li>
                        <li>
                            <Link to="../App.js" className="navbar-link py-2 px-3 hover:font-semibold">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <SignUpModal showModal={showModal} closeModal={closeModal} />
        </nav>
    );
}

export default NavBar;
