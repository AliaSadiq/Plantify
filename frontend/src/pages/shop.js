import React from "react";
import shop from "../images/shop.jpeg";
import prod1 from "../images/product-4.png";
import ficusElastica from "../images/ficusElastica.jpeg";
import bonsai from "../images/bonsai-bg.png";
import aglaonema from "../images/aglaonema-bg.png";
import bon from "../images/bonsai.jpeg";
import agla from "../images/aglaonema.jpeg";
const Shop = () => {
  return (
    <div className="mt-0 pb-10 bg-glass">
      {/* Main Section */}
      <div className="relative mt-0 h-screen">
        {/* Background image with blurred overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 h-full"
          style={{ backgroundImage: `url(${shop})` }}
        >
          <div className="absolute inset-0 backdrop-blur-lg backdrop-filter bg-ivory bg-opacity-50"></div>
        </div>
        <main className="container mx-auto p-6 flex flex-col lg:flex-row items-center lg:items-start relative z-10">
          {/* Left Side Content */}
          <section className="lg:w-1/2 text-start z-20">
            <div className="flex items-center space-x-4 lg:space-x-4">
              <h1 className="text-xl lg:text-3xl mt-40 font-bold z-20">
                Think
              </h1>
              <img
                src={prod1}
                alt="leaf image"
                className="rounded-xl w-28 lg:w-28 mt-20 h-auto z-20 object-cover"
              />
              <h1 className="text-xl lg:text-3xl mt-40 z-20 font-bold">
                Green
              </h1>
            </div>
            <div className="relative z-20">
              <h1 className="text-xl lg:text-3xl -mt-3 font-bold">
                Plant Something
              </h1>
            </div>
            <h1 className="absolute text-7xl lg:text-full font-bold text-text opacity-80 -mt-40 -ml-12 z-10">
              &
            </h1>
            <div className="relative z-20">
              <p className="mt-4 text-gray-600">
                Shop your favorite plants in your favorable factor, veggies,
                <p>seeds, citrus, and more...</p>
              </p>
            </div>
            <div className="relative z-20">
              <button
                type="button"
                className="font-josefin-sans mt-5 text-sm font-semibold text-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100"
            >
                Explore new arrival
              </button>
            </div>
          </section>

          <div className="relative mx-10 mt-[100px] ml-64">
            <img
              src={ficusElastica}
              alt="Ficus elastica"
              className="rounded-lg shadow-lg w-[300px] h-[396px]"
            />
            <div className="absolute mx-32 top-0 left-0 py-4  rounded-lg w-[250px] h-[395px] flex flex-col justify-center">
              <p className="mt-40 ml-32 w-[70px] text-xm bg-green-600  text-white rounded-full pl-2  hover:bg-green-700">
                Indoor plant
              </p>
              <p className=" -mt-3 ml-[205px] text-xm text-black">PKR 1200</p>
              <h2 className="mt-2 ml-32  text-sm font-bold text-black">
                Ficus elastica
              </h2>
              <p className="mt-2 ml-32 text-xm  font-bold text-justify ">
                is a species of flowering plant in the family Moraceae, native
                to eastern parts of South and Southeast Asia.
              </p>
              <button className="mt-24 ml-14 text-sm w-24 h-8 bg-black text-white hover:bg-green-700">
                Add to cart
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Short Rectangles */}
      <div className="container mx-auto p-16 flex flex-col lg:flex-col items-center lg:justify-between absolute inset-0 top-[50%] z-20">
        {/* Rectangle 1 */}
        <div className="flex items-center h-20 w-72 bg-white bg-opacity-40 rounded-lg shadow-lg mb-4 lg:mb-0 lg:ml-36">
          <img
            src={bonsai}
            alt="Bonsai"
            className="h-20 w-14 object-cover rounded-lg ml-1"
          />
          <div className="flex flex-col ml-2 -mt-4">
            <h1 className="text-md font-bold mt-4 text-b  text-gray-800">
              Bonsai
            </h1>
            <text className="mt-2 w-[53px] text-xm bg-green-600 text-white rounded-full px-2  pt-0.5 hover:bg-green-700">
              {" "}
              Flowering
            </text>
          </div>
          <div className="ml-20">
            <button className="mt-1 ml-5 w-6 h-6 bg-black text-white  hover:bg-green-700">
              +
            </button>
            <p className="text-sm font-bold mt-2 text-gray-800">PKR 2000</p>
          </div>
        </div>
        {/* Rectangle 2 */}
        <div className="flex items-center h-20 w-72 bg-white bg-opacity-40 rounded-lg shadow-lg mb-4 lg:mb-0 lg:ml-36">
          <img
            src={aglaonema}
            alt="aglaonema"
            className="h-32 w-14 object-cover mb-4 rounded-lg ml-1"
          />
          <div className="flex flex-col ml-2 -mt-4">
            <h1 className="text-md font-bold mt-4 text-b  text-gray-800">
              Aglaonema
            </h1>
            <text className="mt-2 w-[70px] text-xm  bg-green-600 text-white rounded-full px-2 pt-0.5  hover:bg-green-700">
              {" "}
              Indoor Plant
            </text>
          </div>
          <div className="ml-9">
            <button className="mt-1 ml-5 w-6 h-6 bg-black text-white  hover:bg-green-700">
              +
            </button>
            <p className="text-sm font-bold mt-2 text-gray-800">PKR 2000</p>
          </div>
        </div>
      </div>
      <div className="flex  flex-col lg:flex-row lg:justify-center mt-12">
        {/* New Image Section */}
        <section className="mt-12 ml-10 w-[800px] bg-glass grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={bon}
              alt="Bonsai"
              className="h-56 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-800">
              Accessories
            </h3>
            <a
              href="/accessories"
              className="text-green-600 font-semibold mt-2 inline-block"
            >
              →
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={agla}
              alt="aglaonema"
              className="h-56 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-800">
              Potted Plants
            </h3>
            <a
              href="/potted-plants"
              className="text-green-600 font-semibold mt-2 inline-block"
            >
              →
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={ficusElastica}
              alt="Pet Friendly"
              className="h-56 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-800">
              Pet Friendly
            </h3>
            <a
              href="/pet-friendly"
              className="text-green-600 font-semibold mt-2 inline-block"
            >
              →
            </a>
          </div>
        </section>
        <div className="flex flex-col items-center lg:items-start lg:w-1/3 text-center lg:text-left">
          <h1 className="mt-12 ml-10 text-3xl lg:text-2xl font-bold">
            Shop Your
          </h1>
          <h1 className="ml-10 text-3xl lg:text-2xl font-bold">
            Favorite Plant...
          </h1>
          <div className="flex mt-4 items-center">
            <div className="flex flex-col ml-10 items-center lg:items-start mr-6 lg:mr-3">
              <h2 className="text-xl font-bold">1240</h2>
              <p>Happy</p>
              <p>Customers</p>
            </div>
            <div className="relative flex items-center mx-6 lg:mx-3">
              <div className="border-l-2 border-gray-300 h-24 lg:h-32"></div>
            </div>
            <div className="flex flex-col items-center lg:items-start mr-6">
              <h2 className="text-xl font-bold">75K</h2>
              <p>Different</p>
              <p>Plants</p>
            </div>
            <div className="relative flex items-center mx-6 lg:mx-3">
              <div className="border-l-2 border-gray-300 h-24 lg:h-32"></div>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-xl font-bold">+530</h2>
              <p>Greenhouse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
