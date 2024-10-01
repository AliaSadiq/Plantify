import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Array of predefined avatar images
const avatars = [
    "avatar-1.png",
    "avatar-2.png",
    "avatar-3.png",
    "avatar-4.png",
    "avatar-5.png",
    "avatar-6.png",
    "avatar-7.png",
    "avatar-8.png",
];

const SignUpModal = ({ showModal, closeModal }) => {
    const navigate = useNavigate();
    const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]); // Default selected avatar

    // Define validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        username: Yup.string()
            .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
            .required('Username is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    // Use Formik to manage the form
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const { confirmPassword, ...requestData } = values;
                // Add the selected avatar to the request data
                requestData.avatar = selectedAvatar;
                const apiUrl = process.env.REACT_APP_API_BASE_URL;
                const response = await axios.post(`${apiUrl}/api/user`, requestData);
                console.log(response.data); // Handle success or error
                alert('Account created!');
                // Navigate to login page on successful signup
                navigate('/login');
                alert('Log in with your new Account');
                closeModal();
            } catch (error) {
                console.error('Error:', error);
            }
        }
    });

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-10">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative bg-navygreen-100 rounded-pl p-8 max-w-md z-10">
                            <button className="absolute top-2 right-2 text-gray-100" onClick={closeModal}>
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                            <p className="text-sm mb-4">Sign up to become part of the Plantify community!</p>
                            <form onSubmit={formik.handleSubmit} className="space-y-4 text-gray-100">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Username Input */}
                                    <div>
                                        <label htmlFor="username" className="block text-sm font-medium font-semibold">Username</label>
                                        <input 
                                            type="text" 
                                            id="username" 
                                            name="username" 
                                            value={formik.values.username} 
                                            onChange={formik.handleChange} 
                                            onBlur={formik.handleBlur}
                                            className={`w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300 ${
                                                formik.touched.username && formik.errors.username ? 'border-red-500' : ''
                                            }`}
                                        />
                                        {formik.touched.username && formik.errors.username ? (
                                            <div className="text-red-500 text-sm mt-1">{formik.errors.username}</div>
                                        ) : null}
                                    </div>
                                    {/* Email Input */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium font-semibold">Email</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            value={formik.values.email} 
                                            onChange={formik.handleChange} 
                                            onBlur={formik.handleBlur}
                                            className={`w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300 ${
                                                formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                                            }`}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Password Input */}
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium font-semibold">Password</label>
                                        <input 
                                            type="password" 
                                            id="password" 
                                            name="password" 
                                            value={formik.values.password} 
                                            onChange={formik.handleChange} 
                                            onBlur={formik.handleBlur}
                                            className={`w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300 ${
                                                formik.touched.password && formik.errors.password ? 'border-red-500' : ''
                                            }`}
                                        />
                                        {formik.touched.password && formik.errors.password ? (
                                            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                                        ) : null}
                                    </div>
                                    {/* Confirm Password Input */}
                                    <div>
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium font-semibold">Confirm Password</label>
                                        <input 
                                            type="password" 
                                            id="confirmPassword" 
                                            name="confirmPassword" 
                                            value={formik.values.confirmPassword} 
                                            onChange={formik.handleChange} 
                                            onBlur={formik.handleBlur}
                                            className={`w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300 ${
                                                formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : ''
                                            }`}
                                        />
                                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                            <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
                                        ) : null}
                                    </div>
                                </div>
                                {/* Avatar Selection */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium font-semibold">Choose Avatar</label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {avatars.map((avatar, index) => (
                                            <img
                                                key={index}
                                                src={`/assets/avatars/${avatar}`} // Assuming avatars are stored in the public/avatars directory
                                                alt={`Avatar ${index + 1}`}
                                                className={`cursor-pointer rounded-full w-16 h-16 border-4 ${
                                                    selectedAvatar === avatar ? 'border-navygreen-300' : 'border-transparent'
                                                }`}
                                                onClick={() => setSelectedAvatar(avatar)}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className='text-sm font-semibold'>Already a member? <span><Link to="/login"><u className='hover:text-navygreen-400' onClick={closeModal}>sign in</u></Link></span></p>
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

