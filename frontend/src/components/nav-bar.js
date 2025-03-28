import useFetchUserLocalStorage from '../hooks/useFetchUserLocalStorage';
import React, { useState, useEffect } from 'react';
import logo from '../images/leaf.png';
import { Link } from "react-router-dom";
import SignUpModal from '../popups/signup-modal';
import ProfileDropdown from '../dropdowns/profile-dropdown';
import axios from 'axios';
import NavbarDropdown from '../dropdowns/navbar-dropdown';
import useFetch from '../hooks/useFetch';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    // const [user, setUser] = useState(null);
    const user = useFetchUserLocalStorage();
    // const [isSocialAccepted, setIsSocialAccepted] = useState(false);
    const {data: socialGroup} = useFetch(`https://plantify-backend.vercel.app/api/socialgroup/user/${user?._id}`);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // useEffect(() => {
    //     const checkSocialGroupStatus = async (userId) => {
    //         try {
    //             const response = await axios.get(`https://plantify-backend.vercel.app/api/socialgroup/${userId}`);
    //             console.log('Social group response:', response.data); // Debugging log
    //             const socialGroup = response.data;
    //             if (socialGroup && socialGroup.status === 'accepted') {
    //                 setIsSocialAccepted(true);
    //             } else {
    //                 setIsSocialAccepted(false); // Ensure false if not accepted
    //             }
    //         } catch (error) {
    //             console.error('Error fetching social group:', error);
    //             setIsSocialAccepted(false); // Prevent issues on API failure
    //         }
    //     };
    
    //     if (user && user.isSocial) {
    //         console.log('User isSocial:', user.isSocial); // Debugging log
    //         checkSocialGroupStatus(user?._id);
    //     } else {
    //         setIsSocialAccepted(false); // Ensure no lingering "true" state
    //     }
    // }, [user]); // Ensure useEffect runs when user changes
    

    //for the popup
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return(
        <nav className={`fixed w-full z-30 top-0 start-0 ${isScrolled ? 'bg-gray-100' : 'bg-transparent'} transition-colors duration-1000 ease-in-out`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-6 lg:h-8" alt="Plantify Logo"></img> <span className='font-josefin-sans text-lg font-semibold text-navygreen-300 '>Plantify</span>
                </Link>
                <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {user ? (
                        <>
                            <p className={`self-center font-josefin-sans ${isScrolled ? 'text-white' : 'text-gray-100'} transition-colors duration-1000 ease-in-out`}>{user.username}</p>
                            <ProfileDropdown avatar={user.avatar}/>
                            {/* <Avatar src="assets/avatars/avatar-1.png" alt="avatar" /> */}
                        </>
                    ) : (
                        <button type="button" onClick={openModal} className={`font-josefin-sans text-sm font-semibold text-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100 ${isScrolled ? 'border-white text-white' : 'border-gray-100 text-gray-100'} transition-colors duration-1000 ease-in-out`}>Become a member</button>
                    )}
                    <NavbarDropdown/>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className={`flex flex-col p-4 md:p-0 mt-4 font-josefin-sans text-sm md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 ${isScrolled ? 'text-white' : 'text-gray-100'} transition-colors duration-1000 ease-in-out`}>
                        {user && (
                            <li>
                                <Link to="/personal-growth" className="navbar-link py-2 px-3 hover:font-semibold">Personal Growth</Link>
                            </li>
                        )}
                        <li>
                            <Link to="/shop" className="navbar-link py-2 px-3 hover:font-semibold">Shop</Link>
                        </li>
                        <li>
                            <Link to="/campaign" className="navbar-link py-2 px-3 hover:font-semibold">Campaigns</Link>
                        </li>
                        <li>
                            <Link to="/plantify-network" className="navbar-link py-2 px-3 hover:font-semibold">Plantify Network</Link>
                        </li>
                        {user?.isSocial && socialGroup.status == "accepted" ? (
                            <li>
                                <Link to={`/social-dashboard/${socialGroup?._id}`} className="navbar-link py-2 px-3 hover:font-semibold">Dashboard</Link>
                            </li>
                        ) : (
                            <li className='hidden'>no social group</li>
                        )}
                        <li>
                            <Link to="/about-us" className="navbar-link py-2 px-3 hover:font-semibold">About us</Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="navbar-link py-2 px-3 hover:font-semibold">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <SignUpModal showModal={showModal} closeModal={closeModal} />
        </nav>
    );
}

export default NavBar;
