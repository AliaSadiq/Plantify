import { React, useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {XMarkIcon} from "@heroicons/react/24/solid";

const SignUpModal = ({ showModal, closeModal }) => {
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleInput = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (user.password != user.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            // Remove confirmPassword field before sending the request
            const { confirmPassword, ...requestData } = user;
            const response = await axios.post('http://localhost:5000/api/user', requestData);
            console.log(response.data); // Handle success or error
            alert('Acoount created!');
            navigate("/home");
            closeModal();
            setUser({ // Reset the user state
                email: '',
                username: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
                        <div className="backdrop-blur-sm backdrop-filter relative bg-navygreen-100 rounded-lg p-8 max-w-md z-10 bg-opacity-60">
                            <button className="absolute top-2 right-2 text-gray-100" onClick={closeModal}>
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                            <p className="text-sm mb-4">Sign up to become part of the Plantify community!</p>
                            <form onSubmit={handleSubmit} className="space-y-4 text-gray-100">
                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium">Username</label>
                                    <input type="text" id="username" name="username" value={user.username} onChange={handleInput} className="px-2 py-[2px] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium ">Email</label>
                                    <input type="email" id="email" name="email" value={user.email} onChange={handleInput} className="px-2 py-[2px] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium">Password</label>
                                    <input type="password" id="password" name="password" value={user.password} onChange={handleInput} className="px-2 py-[2px] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full" />
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
                                    <input type="password" id="confirmPassword" name="confirmPassword" value={user.confirmPassword} onChange={handleInput} className="px-2 py-[2px] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full" />
                                </div>
                                <p>Already a member? <span><Link to="/login"><u className='hover:text-navygreen-400'>sign in</u></Link></span></p>
                                <button type="submit" className="bg-navygreen-300 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-navygreen-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SignUpModal;
