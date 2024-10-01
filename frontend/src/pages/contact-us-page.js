import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../components/button';

import useContactForm from '../hooks/useContactForm';

const ContactUsPage = () => {
  const { sendMessage, loading, error } = useContactForm();

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().max(250, 'Message can be at most 250 characters').required('Message is required')
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await sendMessage(values);
      resetForm(); // Reset form on successful submission
    } catch (err) {
      // Error handling (already handled in the hook)
    }
  };

  return (
    <div className="bg-cover bg-center h-screen pt-10"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/contact-us.jpeg'})` }}>
      <div className="absolute inset-0 backdrop-blur-lg backdrop-filter bg-ivory bg-opacity-50"></div>
      <div className="absolute container mx-auto lg:flex lg:flex-row md:flex-col sm:flex-col justify-center items-center h-full">
        <div className="lg:w-1/2 sm:w-1/4">
          <div className="ml-40 mr-20 font-josefin-sans text-gray-100">
            <h1 className="text-2xl font-bold mb-4">Connect with Us!</h1>
            <p className="lg:text-mini sm:hidden mb-8">
              We're eager to hear from you, whether it's questions, feedback, or just a friendly chat. Let's start a conversation!
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/4">
          <div className="bg-navygreen-200 mr-40 font-josefin-sans backdrop-blur-sm backdrop-filter bg-opacity-60 p-8 rounded-lg">
            <h2 className="lg:text-2xl md:text-xl sm:text-xl font-bold mb-4">Send us a message</h2>
            <Formik
              initialValues={{ name: '', email: '', message: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <label htmlFor="name" className="block font-mini font-josefin-sans mb-1">Name</label>
                  <div className="flex items-center bg-neutral mb-4 lg:py-2 lg:px-3 sm:py-1 sm:px-2 rounded-2xl">
                    <Field
                      id="name"
                      name="name"
                      className="bg-inherit rounded-lg pl-2 w-full outline-none border-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mb-2" />

                  <label htmlFor="email" className="block font-mini font-josefin-sans mb-1">Email</label>
                  <div className="flex items-center bg-neutral mb-4 lg:py-2 lg:px-3 sm:py-1 sm:px-2 rounded-2xl">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="bg-inherit rounded-lg pl-2 w-full outline-none border-none"
                      placeholder="Enter your email"
                    />
                  </div>
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mb-2" />

                  <label htmlFor="message" className="block font-mini font-josefin-sans mb-1">Message</label>
                  <div className="flex items-center bg-neutral mb-4 lg:py-2 lg:px-3 sm:py-1 sm:px-2 rounded-2xl">
                    <Field
                      id="message"
                      name="message"
                      as="textarea"
                      className="bg-inherit rounded-lg pl-2 w-full outline-none border-none"
                      placeholder="Enter detail about your message"
                      maxLength="250"
                    />
                  </div>
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm mb-2" />

                  <button
                    text={loading ? "Sending..." : "Send Message"} 
                    color="fill" 
                    type="submit" 
                    disabled={isSubmitting || loading} 
                    className="w-full py-2 px-4 bg-[#b7ce6e] text-white rounded-md shadow-md hover:bg-palegreen-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Send Message
                  </button>
                  {error && <div className="text-red-500 mt-2">Failed to send message: {error}</div>}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
