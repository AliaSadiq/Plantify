import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/search-bar";

// Placeholder for API URL, you should replace this with your actual API endpoint
const API_URL = "https://plantify-backend.vercel.app/api/products"; // Example API endpoint for fetching tools data

function Tools() {
  const [tools, setTools] = useState([]); // State to store fetched tool data
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]); // Dual range: [min, max]
  const [cardsPerView, setCardsPerView] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Categories, Sizes, and Availabilities definitions
  const categories = ['Pruners', 'HandFork', 'Lawnmowers', 'HedgeCutters', 'LeafBlowers', 'PressureWashers'];
  const sizes = ['small', 'medium', 'large'];
  const availabilities = ['in-stock', 'out-of-stock'];

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
      );
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Check and transform the fetched data as per your logic
        const transformedData = data
          .filter((tool) => tool.type === "Tools") // Only fetch data with type "tool"
          .map((tool) => ({
            ...tool,
            availability: tool.quantity === 0 ? "out of stock" : "in stock",
          }));

        setTools(transformedData);
      } catch (error) {
        console.error("Error fetching tool data:", error);
      }
    };

    fetchTools();
  }, []);

  const handleSearch = (term) => setSearchTerm(term);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const handlePriceRangeChange = (event, index) => {
    const value = parseInt(event.target.value);
    setPriceRange((prevRange) => {
      const newRange = [...prevRange];
      newRange[index] = value;
      return newRange;
    });
  };

  const filteredTools = tools
    .filter((tool) =>
      selectedCategories.length > 0
        ? selectedCategories.includes(tool.category)
        : true
    )
    .filter((tool) => (selectedSize ? tool.size === selectedSize : true))
    .filter((tool) =>
      selectedAvailability ? tool.availability === selectedAvailability : true
    )
    // Apply price filter only if the range is not the default [0, 100]
    .filter((tool) =>
      priceRange[0] === 0 && priceRange[1] === 100
        ? true
        : tool.price >= priceRange[0] && tool.price <= priceRange[1]
    )
    .filter((tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="max-w-screen mx-auto mb-20">
      {/* Header Section */}
      <div
        className="relative h-48 sm:h-64 md:h-80 bg-cover bg-black opacity-60 bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(/assets/tt.jpg)` }}
      >
        <h2 className="text-3xl md:text-5xl font-bold font-josefin-sans text-black px-4 py-2 rounded">
          TOOLS
        </h2>
      </div>

      {/* Search Bar */}
      <div className="w-full mt-10 items-center text-gray-100 mb-4">
        <SearchBar onSearch={handleSearch} placeholder="Search tools" />
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-1/5 lg:ml-5 mb-6 mr-10 mt-10 lg:mb-0">
          {/* Category Filter */}
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="flex flex-col text-sm text-gray-600 space-y-2">
              {categories.map((category) => (
                <li key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="cursor-pointer"
                  />
                  <label
                    onClick={() => handleCategoryChange(category)}
                    className={`cursor-pointer ${
                      selectedCategories.includes(category)
                        ? "text-green-500 font-semibold"
                        : ""
                    }`}
                  >
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Size Filter */}
          {/* <div className="bg-white rounded-lg p-4 mt-4 shadow-md">
            <h3 className="font-bold text-lg mt-4 mb-4">Sizes</h3>
            <ul className="flex flex-col text-sm text-gray-600 space-y-2">
              {sizes.map((size) => (
                <li key={size} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedSize === size}
                    onChange={() =>
                      setSelectedSize(selectedSize === size ? "" : size)
                    }
                    className="mr-2"
                  />
                  <label className="cursor-pointer">{size}</label>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Price Range Filter */}
          <div className="bg-white rounded-lg p-4 mt-4 shadow-md">
            <h3 className="font-bold text-lg mt-4 mb-4">Price Range</h3>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="100"
                max="5000"
                color="#99BC85"
                value={priceRange[0]}
                onChange={(e) => handlePriceRangeChange(e, 0)}
                className="w-full"
              />
              <input
                type="range"
                min="100"
                max="5000"
                color="#99BC85"
                value={priceRange[1]}
                onChange={(e) => handlePriceRangeChange(e, 1)}
                className="w-full"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              PKR {priceRange[0]} - PKR {priceRange[1]}
            </p>
          </div>
        </div>

        {/* Tools Grid */}
        {/* <div className="w-full mr-20 mb-20 mt-10 lg:w-3/4">
          <div className="grid grid-cols-1 h-80 h-full md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTools.map((tool) => (
              <Link
                to={`/products/${tool._id}`} // Dynamically linking to the product details page using the product ID
                key={tool.id || `${tool.name}-${tool.price}`}
                className="shadow-none text-center p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={`/assets/${tool.images[0]}`}
                  alt={tool.name}
                  className="w-full h-80 object-cover mb-4 rounded-md"
                />
                <h3 className="text-md text-balance font-semibold font-josefin-sans mb-2">{tool.name}</h3>
              </Link>
            ))}
          </div>
        </div> */}
        <div className="w-full mr-20 mb-20 mt-10 lg:w-3/4">
          <div className="grid grid-cols-1 h-80 w-full h-full  md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTools.map((tool) => (
              <Link
                to={`/products/${tool._id}`} // Dynamically linking to the product details page using the product ID
                key={tool.id || `${tool.name}-${tool.price}`}
                className=" text-center   transition-shadow duration-300"
              >
                <img
                  src={`/assets/${tool.images[0]}`}
                  alt={tool.name}
                  className="w-full h-80 object-cover mb-4 rounded-md"
                />
                <h3 className="text-lg font-semibold font-josefin-sans mb-2">{tool.name}</h3>
                

                {/* <p className="font-semibold text-start text-sm text-black mt-2">Rs.{soil.price}</p> */}
              </Link>
              
))}


          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
