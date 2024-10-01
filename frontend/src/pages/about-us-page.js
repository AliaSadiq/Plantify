import React from 'react';
// import backgroundImage from '../images/about-us-bg.jpeg'; // Add a background image for the hero section

const AboutUsPage = () => {
  return (
    <div className="font-josefin-sans text-gray-700">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-screen flex justify-center items-center relative"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/contact-us.jpeg'})` }}
      >
        <div className="absolute inset-0 backdrop-blur-lg bg-opacity-60 bg-navygreen-100"></div>
        <div className="relative z-10 text-center p-8">
          <h1 className="text-4xl font-bold mb-4">About Plantify</h1>
          <p className="text-md max-w-2xl mx-auto">
            Bringing people together to create a greener, healthier planet through community-driven campaigns and sustainable practices.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-neutral py-16">
        <div className="container mx-auto text-center px-8 lg:px-20">
          <h2 className="text-xl font-bold mb-6">Our Mission</h2>
          <p className="text-md mb-4">
            At Plantify, we believe in the power of collective action to make our world a better place. By empowering individuals and communities to lead eco-friendly initiatives, we aim to promote sustainability and foster a deep connection with nature.
          </p>
          <p className="text-md">
            Together, we plant the seeds of change and grow a brighter future for generations to come.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-navygreen-100 py-16">
        <div className="container mx-auto text-center px-8 lg:px-20">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-md text-gray-200 mb-8">
            Our team is passionate about sustainability, innovation, and community-driven change.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-pl p-6 shadow-lg">
              <img src="/assets/testimonial-1.jpeg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-bold">John Doe</h3>
              <p className="text-gray-500">Founder & CEO</p>
              <p className="mt-4 text-sm text-gray-700">John is the visionary behind Plantify, leading our mission with passion and dedication.</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-pl p-6 shadow-lg">
              <img src="/assets/testimonial-1.jpeg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-bold">Jane Smith</h3>
              <p className="text-gray-500">Chief Operations Officer</p>
              <p className="mt-4 text-sm text-gray-700">Jane ensures that all Plantify operations run smoothly, supporting campaigns and initiatives.</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-pl p-6 shadow-lg">
              <img src="/assets/testimonial-1.jpeg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-bold">Jane Smith</h3>
              <p className="text-gray-500">Chief Operations Officer</p>
              <p className="mt-4 text-sm text-gray-700">Jane ensures that all Plantify operations run smoothly, supporting campaigns and initiatives.</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-pl p-6 shadow-lg">
              <img src="/assets/testimonial-1.jpeg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-bold">Jane Smith</h3>
              <p className="text-gray-500">Chief Operations Officer</p>
              <p className="mt-4 text-sm text-gray-700">Jane ensures that all Plantify operations run smoothly, supporting campaigns and initiatives.</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="container mx-auto text-center px-8 lg:px-20">
          <h2 className="text-3xl font-bold mb-6">Join Us on Our Journey</h2>
          <p className="text-lg mb-8">
            Whether you're an individual, organization, or business, there's a place for you in the Plantify community. Together, we can make a lasting impact.
          </p>
          <a
            href="/login"
            className="bg-navygreen-200 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-navygreen-300 transition duration-300"
          >
            Get Involved
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
