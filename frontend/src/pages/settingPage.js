import React from 'react';

const SettingPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>

      {/* Profile Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Profile</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>
      </section>

      {/* Password Section */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Password</h2>
        <div className="flex flex-col space-y-4">
          <div className="w-full">
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              id="currentPassword"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="w-full">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="w-full">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SettingPage;
