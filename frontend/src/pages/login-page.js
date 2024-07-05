// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LoginPage = () => {
//     const [user, setUser] = useState({
//         email: '',
//         password: '',
//     });

//     const navigate = useNavigate();

//     const handleInput = (e) => {
//         const { name, value } = e.target;
//         setUser({ ...user, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/user/login', user);
//             if (response.status === 200) {
//                 //storing the user in local storage.
//                 localStorage.setItem('user', JSON.stringify(response.data));
//                 navigate('/personal-growth'); // Navigate to homepage on successful login
//                 // Reload the window to ensure the changes take effect immediately
//                 window.location.reload()
//             } else {
//                 alert('Login failed. Please check your credentials.');
//             }
//         } catch (error) {
//             console.error('Error logging in:', error);
//             alert('Login failed. Please check your credentials.');
//         }
//     };
//     return(
//         <div className="h-screen md:flex">
//             <div
//                 className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-navygreen-300 to-ivory i justify-around items-center hidden rounded-[40px]">
//                 <div>
//                     <h1 className="text-white font-bold text-4xl font-sans">Plantify</h1>
//                     <p className="text-white mt-1">Join us to make the world a greener, better place</p>
//                     <button type="submit" className="block w-28 bg-white text-gray-100 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
//                 </div>
//             </div>
//             <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
//                 <form onSubmit={handleSubmit} className="bg-white">
//                     <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
//                     <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
//                     {/* <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
//                             viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                                 d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
//                         </svg>
//                         <input className="pl-2 outline-none border-none" type="text" name="username" id="username" placeholder="Username" value={user.username} onChange={handleInput} />
//                     </div> */}
//                     <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
//                             viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                                 d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                         </svg>
//                         <input className="pl-2 outline-none border-none" type="text" name="email" id="email" placeholder="Email Address" value={user.email} onChange={handleInput}/>
//                     </div>
//                     <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
//                             fill="currentColor">
//                             <path fill-rule="evenodd"
//                                 d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//                                 clip-rule="evenodd" />
//                         </svg>
//                         <input className="pl-2 outline-none border-none" type="password" name="password" id="password" placeholder="Password" value={user.password} onChange={handleInput}/>
//                     </div>
//                     <button type="submit" className="block w-full bg-navygreen-200 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
//                     {/* <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span> */}
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default LoginPage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LoginPage = () => {
//     const [user, setUser] = useState({
//         email: '',
//         password: '',
//     });

//     const navigate = useNavigate();

//     const handleInput = (e) => {
//         const { name, value } = e.target;
//         setUser({ ...user, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/user/login', user);
//             if (response.status === 200) {
//                 //storing the user in local storage.
//                 localStorage.setItem('user', JSON.stringify(response.data));
//                 navigate('/personal-growth'); // Navigate to homepage on successful login
//                 // Reload the window to ensure the changes take effect immediately
//                 window.location.reload()
//             } else {
//                 alert('Login failed. Please check your credentials.');
//             }
//         } catch (error) {
//             console.error('Error logging in:', error);
//             alert('Login failed. Please check your credentials.');
//         }
//     };
//     return(
//         <div className="min-h-screen flex items-center justify-center bg-pale-200">
//             <div className="flex bg-white rounded-[20px] p-2 shadow-xl overflow-hidden max-w-5xl mx-auto">
            
//             {/* Left Section */}
//             <div className="w-full md:w-1/2 p-8 bg-inherit font-josefin-sans rounded-[20px]">
//                 <div className="flex flex-col justify-center h-full">
//                     {/* Logo */}
//                     <div className="mb-4 flex items-center">
//                         <p className="text-lg font-bold">Pl</p><span><img src='assets/leaf.png'/></span><p className='text-lg font-bold'>ntify</p>
//                     </div>
                    
//                     {/* Heading */}
//                     <h2 className="text-3xl font-bold mb-2 mt-20">Get started</h2>
//                     <p className="text-gray-100 mb-6">
//                         Don't have an account? 
//                         <a href="#" className="text-palegreen-400 hover:underline ml-1">Sign up</a>
//                     </p>
                    
//                     {/* Form */}
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium font-semibold text-gray-100">Email</label>
//                             <input 
//                                 type="email" 
//                                 className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" 
//                                 placeholder="Enter your email" 
//                                 name="email" 
//                                 id="email"
//                                 value={user.email} 
//                                 onChange={handleInput}
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700">Password</label>
//                             <input 
//                                 type="password" 
//                                 className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300" 
//                                 placeholder="Enter your password" 
//                                 name="password" 
//                                 id="password"
//                                 value={user.password}
//                                 onChange={handleInput}
//                             />
//                         </div>
//                         <button 
//                             type="submit" 
//                             className="w-full py-2 px-4 bg-[#b7ce6e] text-white rounded-md shadow-md hover:bg-palegreen-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                         >
//                             Login
//                         </button>
//                     </form>
//                 </div>
//             </div>
            
//             {/* Right Section */}
//             <div className="hidden md:block md:w-1/2 bg-palegreen-400 rounded-[20px] font-josefin-sans">
//                 <div className="flex flex-col justify-center h-full text-white p-8">
//                 <div className="text-center">
//                     <div className="flex justify-center mb-10">
//                         <img src="assets/ecology.png" alt="Illustration" className="h-40" />
//                     </div>
//                     <p className="text-md mb-4">Make this world a better greener place</p>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//     );
// }

// export default LoginPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
    const navigate = useNavigate();

    // Define the validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required'),
    });

    // Define the initial values for Formik
    const initialValues = {
        email: '',
        password: '',
    };

    // Handle form submission
    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/user/login', values);
            if (response.status === 200) {
                // Store the user in local storage
                localStorage.setItem('user', JSON.stringify(response.data));
                navigate('/personal-growth'); // Navigate to the personal growth page on successful login
                // Reload the window to ensure the changes take effect immediately
                window.location.reload();
            } else {
                // If response status is not 200, show a generic error message
                setErrors({ submit: 'Login failed. Please check your credentials.' });
            }
        } catch (error) {
            console.error('Error logging in:', error);
            if (error.response && error.response.status === 401) {
                // If server returns a 401 status, show a specific error message
                setErrors({ submit: 'Incorrect email or password.' });
            } else if (error.response && error.response.status === 404) {
                // If server returns a 404 status, show a specific error message
                setErrors({ submit: 'Account does not exist.' });
            } else {
                // Generic error message for other types of errors
                setErrors({ submit: 'Login failed. Please try again later.' });
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-pale-200">
            <div className="flex bg-white rounded-[20px] p-2 shadow-xl overflow-hidden max-w-5xl mx-auto">
                {/* Left Section */}
                <div className="w-full md:w-1/2 p-8 bg-inherit font-josefin-sans rounded-[20px]">
                    <div className="flex flex-col justify-center h-full">
                        {/* Logo */}
                        <div className="mb-4 flex items-center">
                            <p className="text-lg font-bold">Pl</p>
                            <span><img src='assets/leaf.png' alt="Leaf Logo" /></span>
                            <p className='text-lg font-bold'>ntify</p>
                        </div>
                        
                        {/* Heading */}
                        <h2 className="text-3xl font-bold mb-2 mt-20">Get started</h2>
                        <p className="text-gray-100 mb-6">
                            Don't have an account? 
                            <a href="#" className="text-palegreen-400 hover:underline ml-1">Sign up</a>
                        </p>
                        
                        {/* Form */}
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, errors }) => (
                                <Form>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium font-semibold text-gray-100">Email</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                            placeholder="Enter your email"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                        <Field
                                            type="password"
                                            name="password"
                                            className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                            placeholder="Enter your password"
                                        />
                                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    {errors.submit && (
                                        <div className="text-red-500 text-sm mb-4">{errors.submit}</div>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-2 px-4 bg-[#b7ce6e] text-white rounded-md shadow-md hover:bg-palegreen-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    >
                                        {isSubmitting ? 'Logging in...' : 'Login'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>

                {/* Right Section */}
                <div className="hidden md:block md:w-1/2 bg-palegreen-400 rounded-[20px] font-josefin-sans">
                    <div className="flex flex-col justify-center h-full text-white p-8">
                        <div className="text-center">
                            <div className="flex justify-center mb-10">
                                <img src="assets/ecology.png" alt="Illustration" className="h-40" />
                            </div>
                            <p className="text-md mb-4">Make this world a better greener place</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;


