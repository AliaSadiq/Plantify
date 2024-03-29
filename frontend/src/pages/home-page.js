import React from "react";
import vectorimg from "../assets/home-vector.png";

const HomePage = () => {
  return (
    <div>
      <div className="relative">
        {/* Wave image */}
        <img src={vectorimg} alt="Wave" className="absolute inset-x-0 top-0 w-full" style={{ zIndex: -0 }} />
        {/* Text content */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-light-black mt-60 bg-white bg-opacity-60 p-2 rounded-lg">
            <h1 className="text-4xl font-bold mb-4">JOIN US TO MAKE THE WORLD A BETTER GREENER PLACE!</h1>
            {/* Add more content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;