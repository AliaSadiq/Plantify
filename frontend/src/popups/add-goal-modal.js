import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import Button from '../components/button';

export default function AddGoalModal({ showModal, closeModal, userId }) {
    // Define the initial values and validation schema for Formik
    const initialValues = {
        title: '',
        priority: 'Medium',
        completed: false,
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        priority: Yup.string().oneOf(['High', 'Medium', 'Low']).required('Priority is required'),
        completed: Yup.boolean(),
    });

    // Define the onSubmit function to handle form submission
    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            // Make a POST request to add a new goal
            const response = await axios.post('https://plantify-backend.vercel.app/api/goals', {
                ...values,
                user: userId,
            });
            console.log('Goal added:', response.data);
            alert('Goal Added Successfully!');
            resetForm();
            closeModal();
            window.location.reload();
        } catch (error) {
            console.error('Error adding goal:', error.response?.data?.message || error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-30">
                    <div className="absolute inset-0 flex items-center bg-navygreen-100 justify-center bg-opacity-40">
                        <div className="relative w-full max-w-md mx-4 sm:mx-6 lg:mx-8 bg-navygreen-100 rounded-pl p-8 z-10">
                            <button className="absolute top-2 right-2 p-2 hover:bg-navygreen-200 rounded-pl text-gray-100" onClick={closeModal}>
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                            <h2 className="text-lg font-bold mb-4">Add a new Goal</h2>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <div className='mb-4'>
                                            <label htmlFor="title" className="block text-sm font-medium">Title</label>
                                            <Field
                                                name="title"
                                                className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                                                placeholder="Goal Title"
                                            />
                                            <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor="priority" className="block text-sm font-medium">Priority</label>
                                            <Field as="select" name="priority" className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300">
                                                <option value="High">High</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Low">Low</option>
                                            </Field>
                                            <ErrorMessage name="priority" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor="completed" className="block text-sm font-medium">Completed</label>
                                            <Field type="checkbox" name="completed" className="w-4 h-4" />
                                        </div>
                                        <Button
                                            text={isSubmitting ? 'Adding...' : 'Add Goal'}
                                            type="submit"
                                            className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md"
                                            disabled={isSubmitting}
                                        />
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
