import React from "react";
import logo from '../assets/logo-1.png';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav class="bg-palegreen-200 fixed w-full z-20 top-0 start-0">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="../App.js" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} class="h-8" alt="Flowbite Logo"></img>
                </a>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" class="font-josefin-sans bg-navygreen-300 text-sm font-semibold text-gray-100 p-4 rounded-full">Start Donating</button>
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
                            <Link to="/" class="block py-2 px-3 text-light-black hover:text-white" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" class="block py-2 px-3 text-light-black hover:text-white">Shop</Link>
                        </li>
                        <li>
                            <Link to="/campaign" class="block py-2 px-3 text-light-black hover:text-white">Campaigns</Link>
                        </li>
                        <li>
                            <Link to="../App.js" class="block py-2 px-3 text-light-black hover:text-white">Plantify Network</Link>
                        </li>
                        <li>
                            <Link to="../App.js" class="block py-2 px-3 text-light-black hover:text-white">Personal Growth</Link>
                        </li>
                        <li>
                            <Link to="../App.js" class="block py-2 px-3 text-light-black hover:text-white">About us</Link>
                        </li>
                        <li>
                            <Link to="../App.js" class="block py-2 px-3 text-light-black hover:text-white">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;
