// import React from "react";
// import Button from "../../components/button";

// export default function Signup () {
//     return(
//         <div className="min-h-screen bg-navygreen-100 dark:bg-forest-200 flex items-center dark:text-white dark:text-opacity-60 justify-center">
//             <div className="ml-[245px] dark:bg-forest-100 rounded-pl p-8 max-h-fit w-[450px]">
//                 <h1 className="text-center text-md">Admin Signup</h1>
//                 <form className="mt-4">
//                     <div className='mb-4'>
//                         <label htmlFor="fullname" className="block text-sm font-medium font-semibold">Full Name</label>
//                         <input
//                             type="text"
//                             name="fullname"
//                             className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//                             placeholder="Enter your full name"
//                             required
//                         />
//                     </div>
//                     <div className='mb-4'>
//                         <label htmlFor="email" className="block text-sm font-medium font-semibold">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//                             placeholder="Enter your email"
//                             required
//                         />
//                     </div>
//                     <div className='mb-4'>
//                         <label htmlFor="password" className="block text-sm font-medium font-semibold">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//                             placeholder="Enter your password"
//                             required
//                         />
//                     </div>
                    
//                     <Button 
//                         text="Add new Admin" 
//                         type="button" 
//                         className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md"
//                     />
//                 </form>
//             </div>
//         </div>
//     );
// }

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/button";
import axios from "axios";

const Signup = () => {
    // Define the initial values and validation schema for Formik
    const initialValues = {
        fullname: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        fullname: Yup.string().required("Full Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    // Define the onSubmit function to handle form submission
    const onSubmit = async (values, { setSubmitting, setStatus }) => {
        try {
            // Make a POST request to create a new admin
            const response = await axios.post("http://localhost:5000/api/admin/", values);
            setStatus({ success: "Admin created successfully!" });
        } catch (error) {
            setStatus({ error: error.response?.data?.message || "Failed to create admin" });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-navygreen-100 dark:bg-forest-200 flex items-center dark:text-white dark:text-opacity-60 justify-center">
            <div className="lg:ml-[245px] dark:bg-forest-100 rounded-pl p-8 max-h-fit w-[450px]">
                <h1 className="text-center text-md">Admin Signup</h1>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting, status }) => (
                        <Form className="mt-4">
                            <div className='mb-4'>
                                <label htmlFor="fullname" className="block text-sm font-medium font-semibold">Full Name</label>
                                <Field
                                    type="text"
                                    name="fullname"
                                    className="w-full p-2 border text-gray-100 border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                    placeholder="Enter your full name"
                                />
                                <ErrorMessage name="fullname" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="email" className="block text-sm font-medium font-semibold">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="w-full p-2 border text-gray-100 border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                    placeholder="Enter your email"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="password" className="block text-sm font-medium font-semibold">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="w-full p-2 border text-gray-100 border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                    placeholder="Enter your password"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            
                            <Button 
                                text={isSubmitting ? "Creating..." : "Add new Admin"} 
                                type="submit" 
                                className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md"
                                disabled={isSubmitting}
                            />

                            {/* Display success or error messages */}
                            {status && status.success && (
                                <div className="text-green-500 text-sm mt-2">{status.success}</div>
                            )}
                            {status && status.error && (
                                <div className="text-red-500 text-sm mt-2">{status.error}</div>
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Signup;
