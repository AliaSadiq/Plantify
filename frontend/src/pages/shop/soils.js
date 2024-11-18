
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/search-bar";

// Placeholder for API URL, you should replace this with your actual API endpoint
const API_URL = "http://localhost:5000/api/products"; // Example API endpoint for fetching soil data

function Soil() {
  const [soils, setSoils] = useState([]); // State to store fetched soil data
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]); // Dual range: [min, max]
  const [cardsPerView, setCardsPerView] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Categories, Sizes, and Availabilities definitions
  const categories = ["Loamy", "Sandy", "Peaty", "Silty", "Chalky", "Clay"];
  const sizes = ["small", "medium", "large"];
  const availabilities = ["in-stock", "out-of-stock"];

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
    const fetchSoils = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Check and transform the fetched data as per your logic
        const transformedData = data
          .filter((soil) => soil.type === "Soils") // Only fetch data with type "soil"
          .map((soil) => ({
            ...soil,
            availability: soil.quantity === 0 ? "out of stock" : "in stock",
          }));

        setSoils(transformedData);
      } catch (error) {
        console.error("Error fetching soil data:", error);
      }
    };

    fetchSoils();
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

  const filteredSoils = soils
    .filter((soil) =>
      selectedCategories.length > 0
        ? selectedCategories.includes(soil.category)
        : true
    )
    .filter((soil) => (selectedSize ? soil.size === selectedSize : true))
    .filter((soil) =>
      selectedAvailability ? soil.availability === selectedAvailability : true
    )
    // Apply price filter only if the range is not the default [0, 100]
    .filter((soil) =>
      priceRange[0] === 0 && priceRange[1] === 100
        ? true
        : soil.price >= priceRange[0] && soil.price <= priceRange[1]
    )
    .filter((soil) =>
      soil.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="max-w-screen mx-auto mb-20">
      {/* Header Section */}
      <div
        className="relative h-48 sm:h-64 md:h-80 bg-cover bg-black opacity-80 bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(/assets/soil.jpg)` }}
      >
        <h2 className="text-3xl md:text-5xl font-bold font-josefin-sans text-white px-4 py-2 rounded">
          SOILS
        </h2>
      </div>

      {/* Search Bar */}
      <div className="w-full mt-10 items-center text-gray-100 mb-4">
        <SearchBar onSearch={handleSearch} placeholder="Search soils" />
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
          <div className="bg-white rounded-lg p-4 mt-4 shadow-md">
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
          </div>

          {/* Availability Filter */}
          {/* <div className="bg-white rounded-lg p-4 mt-4 shadow-md">
            <h3 className="font-bold text-lg mt-4 mb-4">Availability</h3>
            <ul className="flex flex-col text-sm text-gray-600 space-y-2">
              {availabilities.map((availability) => (
                <li key={availability} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedAvailability === availability}
                    onChange={() =>
                      setSelectedAvailability(
                        selectedAvailability === availability
                          ? ""
                          : availability
                      )
                    }
                    className="mr-2"
                  />
                  <label className="cursor-pointer">
                    {availability === "in-stock" ? "In Stock" : "Out of Stock"}
                  </label>
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
                max="2000"
                color="#99BC85"
                value={priceRange[0]}
                onChange={(e) => handlePriceRangeChange(e, 0)}
                className="w-full"
              />
              <input
                type="range"
                min="100"
                max="2000"
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

        {/* Plant Grid */}
        <div className="w-full mr-20 mb-20 mt-10 lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSoils.map((soil) => (
              <Link
                to={`/products/${soil._id}`} // Dynamically linking to the product details page using the product ID
                key={soil.id || `${soil.name}-${soil.price}`}
                className="shadow-none text-center p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={`/assets/${soil.images[0]}`}
                  alt={soil.name}
                  className="w-full h-96 object-cover mb-4 rounded-md"
                />
                <h3 className="text-md font-semibold font-josefin-sans mb-2">{soil.name}</h3>
                <p className="font-semibold text-lg text-green-500 mt-2">Rs.{soil.price}</p>
              </Link>
))}


          </div>
        </div>
      </div>
    </div>
  );
}

export default Soil;
