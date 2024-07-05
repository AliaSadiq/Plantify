// import { React, useState} from 'react';
// import { Link, useNavigate} from 'react-router-dom';
// import axios from 'axios';
// import {XMarkIcon} from "@heroicons/react/24/solid";
// import {useFormik} from 'formik';

// const SignUpModal = ({ showModal, closeModal }) => {
//     const [user, setUser] = useState({
//         email: '',
//         username: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const navigate = useNavigate();

//     const handleInput = (event) => {
//         setUser({ ...user, [event.target.name]: event.target.value });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (user.password != user.confirmPassword) {
//             alert('Passwords do not match');
//             return;
//         }
//         try {
//             // Remove confirmPassword field before sending the request
//             const { confirmPassword, ...requestData } = user;
//             const response = await axios.post('http://localhost:5000/api/user', requestData);
//             console.log(response.data); // Handle success or error
//             alert('Account created!');
//             //storing the user in local storage.
//             navigate('/login'); // Navigate to homepage on successful login
//             alert('Log in with your new Account')
//             closeModal();
//             setUser({ // Reset the user state
//                 email: '',
//                 username: '',
//                 password: '',
//                 confirmPassword: ''
//             });
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <>
//             {showModal && (
//                 <div className="fixed inset-0 flex items-center justify-center">
//                     <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
//                         <div className="backdrop-blur-sm backdrop-filter relative bg-navygreen-100 rounded-lg p-8 max-w-md z-10 bg-opacity-60">
//                             <button className="absolute top-2 right-2 text-gray-100" onClick={closeModal}>
//                                 <XMarkIcon className="h-6 w-6" />
//                             </button>
//                             <h2 className="text-xl font-bold mb-4">Sign Up</h2>
//                             <p className="text-sm mb-4">Sign up to become part of the Plantify community!</p>
//                             <form onSubmit={handleSubmit} className="space-y-4 text-gray-100">
//                                 <div>
//                                     <label htmlFor="username" className="block text-sm font-medium">Username</label>
//                                     <input 
//                                         type="text" 
//                                         id="username" 
//                                         name="username" 
//                                         required
//                                         value={user.username} 
//                                         onChange={handleInput} 
//                                         className="px-2 py-[2px] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full" />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="email" className="block text-sm font-medium ">Email</label>
//                                     <input 
//                                     type="email" 
//                                     id="email" 
//                                     name="email" 
//                                     required
//                                     value={user.email} 
//                                     onChange={handleInput} 
//                                     className="px-2 py-[2px] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full" />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="password" className="block text-sm font-medium">Password</label>
//                                     <input 
//                                     type="password" 
//                                     id="password" 
//                                     name="password" 
//                                     required
//                                     value={user.password} 
//                                     onChange={handleInput} 
//                                     className="px-2 py-[2px] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full" />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
//                                     <input 
//                                     type="password" 
//                                     id="confirmPassword" 
//                                     name="confirmPassword" 
//                                     required
//                                     value={user.confirmPassword} 
//                                     onChange={handleInput} 
//                                     className="px-2 py-[2px] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full" />
//                                 </div>
//                                 <p>Already a member? <span><Link to="/login"><u className='hover:text-navygreen-400' onClick={closeModal}>sign in</u></Link></span></p>
//                                 <button type="submit" className="bg-navygreen-300 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-navygreen-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default SignUpModal;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation schema

const SignUpModal = ({ showModal, closeModal }) => {
    const navigate = useNavigate();

    // Define validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        username: Yup.string()
            .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
            .required('Username is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });

    // Use Formik to manage the form
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                // Remove confirmPassword field before sending the request
                const { confirmPassword, ...requestData } = values;
                const response = await axios.post('http://localhost:5000/api/user', requestData);
                console.log(response.data); // Handle success or error
                alert('Account created!');
                // Navigate to login page on successful signup
                navigate('/login');
                alert('Log in with your new Account')
                closeModal();
            } catch (error) {
                console.error('Error:', error);
            }
        }
    });

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
                            <form onSubmit={formik.handleSubmit} className="space-y-4 text-gray-100">
                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium">Username</label>
                                    <input 
                                        type="text" 
                                        id="username" 
                                        name="username" 
                                        value={formik.values.username} 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        className={`px-2 py-[2px] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full ${
                                            formik.touched.username && formik.errors.username ? 'border-red-500' : ''
                                        }`}
                                    />
                                    {formik.touched.username && formik.errors.username ? (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.username}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={formik.values.email} 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        className={`px-2 py-[2px] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full ${
                                            formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                                        }`}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium">Password</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        name="password" 
                                        value={formik.values.password} 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        className={`px-2 py-[2px] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full ${
                                            formik.touched.password && formik.errors.password ? 'border-red-500' : ''
                                        }`}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
                                    <input 
                                        type="password" 
                                        id="confirmPassword" 
                                        name="confirmPassword" 
                                        value={formik.values.confirmPassword} 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        className={`px-2 py-[2px] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full ${
                                            formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : ''
                                        }`}
                                    />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
                                    ) : null}
                                </div>
                                <p>Already a member? <span><Link to="/login"><u className='hover:text-navygreen-400' onClick={closeModal}>sign in</u></Link></span></p>
                                <button type="submit" className="bg-navygreen-300 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-navygreen-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SignUpModal;

