import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SignUpModal from '../popups/signup-modal';
import * as Yup from 'yup';
import Button from '../components/button';

const LoginPage = () => {
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
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
            const response = await axios.post(`${apiUrl}/api/user/login`, values);
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

    //for the popup
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral dark:bg-forest-200">
            <div className="flex bg-white rounded-[20px] p-2 shadow-xl overflow-hidden min-w-[1200px] min-h-[650px] mx-auto">
                {/* Left Section */}
                <div className="p-8 bg-inherit font-josefin-sans rounded-[20px]">
                    <div className="flex flex-col justify-center h-full">
                        {/* Logo */}
                        <div className="mb-4 flex items-center">
                            <p className="text-lg font-bold">Pl</p>
                            <span><img src='assets/leaf.png' alt="Leaf Logo" /></span>
                            <p className='text-lg font-bold'>ntify</p>
                        </div>
                        
                        {/* Heading */}
                        <h2 className="text-2xl font-bold mb-2 mt-20">Get started</h2>
                        <p className="text-gray-100 mb-6">
                            Don't have an account? 
                            <button onClick={openModal} className="text-palegreen-400 hover:underline ml-1">Sign up</button>
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
                                    <Button
                                        text="Login"
                                        type="submit"
                                        className="shadow-md w-full bg-gray-100 text-white"
                                    />
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>

                {/* Right Section */}
                <div className="hidden md:block flex-grow rounded-[20px] font-josefin-sans bg-cover bg-center" style={{ backgroundImage: `url('/assets/login.jpeg')` }}>
                    {/* <div className="flex flex-col justify-center h-full text-white p-8">
                        <div className="text-center">
                            <div className="flex justify-center mb-10">
                                <img src="assets/ecology.png" alt="Illustration" className="h-40" />
                            </div>
                            <p className="text-md mb-4">Make this world a better greener place</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <SignUpModal showModal={showModal} closeModal={closeModal} />
        </div>
    );
}

export default LoginPage;