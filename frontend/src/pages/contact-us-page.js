import React from 'react';
import backgroundImage from '../assets/contact-us.jpeg';
import Button from '../components/button';

const ContactUsPage = () => {
  return (
    <div className="bg-cover bg-center h-screen pt-10" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 backdrop-blur-lg backdrop-filter bg-ivory bg-opacity-50"></div>
        <div className="absolute container mx-auto flex justify-center items-center h-full">
            <div className="w-1/2">
                <div className="ml-40 mr-20 font-josefin-sans text-gray-100">
                    <h1 className="text-2xl font-bold mb-4">Connect with Us!</h1>
                    <p className="text-mini mb-8">
                        We're eager to hear from you, whether it's questions, feedback, or just a friendly chat. Let's start a conversation!
                    </p>
                </div>
            </div>
            <div className="w-1/2">
                <div className="bg-navygreen-200 mr-40 font-josefin-sans backdrop-blur-sm backdrop-filter bg-opacity-60 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="mb-2 block text-sm font-medium">
                            Name
                            </label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border rounded-md p-2"
                            placeholder="Your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            Email
                            </label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border rounded-md p-2"
                            placeholder="Your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                            htmlFor="message"
                            className="mb-2 block text-sm font-medium"
                            >
                            Message
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full border rounded-md p-2"
                            placeholder="Your message"
                            ></textarea>
                        </div>
                        <Button text="Send Message" color="fill"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactUsPage;
