import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import backgroundImage from '../images/contact-us.jpeg';
import Button from '../components/button';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user-message', formData); // Use Axios for POST request
      console.log('Message sent successfully');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send message', error);
    }
  };

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
              <label htmlFor="name" className="block font-mini font-josefin-sans mb-1">Name</label>
              <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                <input
                  id="name"
                  className="bg-inherit pl-2 w-full outline-none border-none"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="email" className="block font-mini font-josefin-sans mb-1">Email</label>
              <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                <input
                  id="email"
                  className="bg-inherit pl-2 w-full outline-none border-none"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <label htmlFor="message" className="block font-mini font-josefin-sans mb-1">Message</label>
              <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                <textarea
                  id="message"
                  className="bg-inherit pl-2 w-full outline-none border-none"
                  name="message"
                  placeholder="Enter detail about your message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength="250"
                  required
                />
              </div>
              <Button text="Send Message" onClick={handleSubmit} color="fill" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
