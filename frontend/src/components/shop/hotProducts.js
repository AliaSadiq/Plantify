
import React, { useState, useEffect } from "react";

const HotProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  const products = [
    { name: "Evergreen Candytuft", price: "$50.00", image: "/assets/products/plant-1.jpeg" },
    { name: "Flowers Bouquet Pink", price: "$100.00", image: "/assets/products/plant-2.jpeg" },
    { name: "Pearly Everlasting", price: "$100.00", image: "/assets/products/plant-3.jpeg" },
    { name: "Flowers Bouquet Pink", price: "$150.00", image: "/assets/products/plant-4.jpeg" },
    { name: "Evergreen Candytuft", price: "$50.00", image: "/assets/products/plant-1.jpeg" },
    { name: "Flowers Bouquet Pink", price: "$100.00", image: "/assets/products/plant-2.jpeg" },
    { name: "Pearly Everlasting", price: "$100.00", oldPrice: "$120.00", image: "/assets/products/plant-3.jpeg" },
    { name: "Flowers Bouquet Pink", price: "$150.00", image: "/assets/products/plant-4.jpeg" },
  ];

  // Set cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth >= 1024 ? 4 : 1); // 4 cards on lg screens, 1 on smaller screens
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(products.length / cardsPerView) - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(products.length / cardsPerView) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
        }}
      >
       
        {products.map((product, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full h-full p-4 ${cardsPerView === 4 ? "lg:w-1/4" : "w-full"}`}
          >
            <div className="bg-white  h-full rounded-lg  text-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-md mb-4" />
              <h2 className="text-md font-josefin-sans font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 font-josefin-sans">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-lg p-2 hover:bg-gray-600"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-lg p-2 hover:bg-gray-600"
      >
        &#10095;
      </button>
    </div>
  );
};

export default HotProducts;
