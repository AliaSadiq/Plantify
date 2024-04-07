import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-1.png';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //for the popup
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return(
        <nav className={`fixed w-full z-20 top-0 start-0 ${isScrolled ? 'bg-palegreen-200' : 'bg-transparent'} transition-colors duration-1000 ease-in-out`}>
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="../App.js" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} class="h-8" alt="Plantify Logo"></img>
                </a>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" onClick={toggleModal} class="font-josefin-sans bg-navygreen-300 text-sm font-semibold text-gray-100 p-4 rounded-full">Start Donating</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-josefin-sans text-sm md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 ">
                        <li>
                            <Link to="/" class="navbar-link py-2 px-3 text-gray-100 hover:text-white" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" class="navbar-link py-2 px-3 text-gray-100 hover:text-white">Shop</Link>
                        </li>
                        <li>
                            <Link to="/campaign" class="navbar-link py-2 px-3 text-gray-100 hover:text-white">Campaigns</Link>
                        </li>
                        <li>
                            <Link to="../App.js" class="navbar-link py-2 px-3 text-gray-100 hover:text-white">Plantify Network</Link>
                        </li>
                        <li>
                            <Link to="../App.js" class="navbar-link py-2 px-3 text-gray-100 hover:text-white">Personal Growth</Link>
                        </li>
                        <li>
                            <Link to="../App.js" class="navbar-link py-2 px-3 text-gray-100 hover:text-white">About us</Link>
                        </li>
                        <li>
                            <Link to="../App.js" class="navbar-link py-2 px-3 text-gray-100 hover:text-white">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={toggleModal}></div>
                    <div className="relative bg-white rounded-lg p-8 max-w-md z-10">
                        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                        <p className="text-sm mb-4">Sign up to become part of the Plantify community!</p>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                <input type="text" id="username" name="username" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" id="password" name="password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
                        </form>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
