import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto pt-8">
      <div className="flex justify-between items-center">
        {/* Profile Picture */}
        <div className="flex items-center">
          <img
            src="https://picsum.photos/id/237/100"
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          {/* Username, Edit Profile Button */}
          <div>
            <h1 className="font-bold text-xl">Alia Sadiq</h1>
            <button className="border border-gray-400 rounded-md py-1 px-3 mt-2">
              Edit Profile
            </button>
          </div>
        </div>
        {/* Posts, Followers, Following Counts */}
        <div className="flex">
          <div className="mr-6">
            <span className="font-semibold">Posts:</span> 100
          </div>
          <div className="mr-6">
            <span className="font-semibold">Followers:</span> 1000
          </div>
          <div className="mr-6">
            <span className="font-semibold">Following:</span> 500
          </div>
        </div>
      </div>

      {/* Name, Bio */}
      <div className="mt-4">
        <h2 className="font-semibold text-lg">Full Name</h2>
        <p className="text-sm text-gray-600 mt-2">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      {/* Highlight Stories
      <div className="mt-4">
        <h2 className="font-semibold text-lg">Highlights</h2>
        <div className="flex mt-2">
          {/* Highlight story items 
          <div className="mr-4">
            <img
               className="w-16 h-16 rounded-full"
               src="https://picsum.photos/id/237/100"
               alt="Profile Picture"
            />
            <p className="text-sm text-center mt-1">Highlight 1</p>
          </div>
          <div className="mr-4">
            <img
                className="w-16 h-16 rounded-full"
                 src="https://picsum.photos/id/237/100"
                 alt="Profile Picture"
            />
            <p className="text-sm text-center mt-1">Highlight 2</p>
          </div>
          {/* Add more highlight stories here 
        </div>
      </div> */}

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-4 mt-8">
      
        {/* Post items */}
        <div>
          <img
            className="w-80 h-80 "
            src="https://fastly.picsum.photos/id/134/200/200.jpg?hmac=a3L-JjVSGeG8w3SdNpzxdh8WSC0xHJXgeD6QryCK7pU"
            alt="post picture"
          />
        </div>
        <div>
          <img
            className="w-80 h-80"
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Profile Picture"
          />
        </div>
        {/* Add more posts here */}
      </div>
      </div>

  );
};

export default Profile;
