// src/pages/Shop.js
import React from 'react';
import ProductCard from '../../components/shop/product-card';
import CategoryCard from '../../components/category-card';
import ShopHeaderCarousel from '../../components/shop/headerCarousel';
import HotProducts from '../../components/shop/hotProducts';
import Plants from '../../components/shop/plants';
import FeaturedProducts from '../../components/shop/featuredProducts';


const Shop = () => {
  // Example product data (you can replace this with dynamic data from an API)
  const products = [
    { id: 1, image: '/assets/products/plant-1.jpeg', title: 'Green & Purple Cactus', price: 40 },
    { id: 2, image: '/assets/products/plant-2.jpeg', title: 'Snake Plant', price: 76 },
    { id: 3, image: '/assets/products/plant-3.jpeg', title: 'Green & Red Cactus', price: 58 },
    { id: 4, image: '/assets/products/plant-4.jpeg', title: 'Monstera', price: 32 },
    { id: 5, image: '/assets/products/plant-5.jpeg', title: 'Golden Barrel Cactus', price: 50 },
  ];

  return (
    <div className="max-w-full w-full md:mb-20 mx-auto">
      <div>
        <ShopHeaderCarousel />
      </div>

      {/* Products Section */}
      {/* <div className="w-full pt-52 md:pt-60 mt-[300px] lg:mt-44 px-6 sm:px-10 lg:px-48 xl:px-32 mx-auto">
  <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">All Plants</h2>
    <div className="flex items-center space-x-2">
      <label className="text-sm font-medium text-gray-600">Sort by:</label>
      <select className="border border-gray-300 rounded-md p-1 text-sm">
        <option value="default">Default Sorting</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
      />
    ))}
  </div>
</div>  */}
{/* <div className="w-full pt-52 md:pt-60 sm:!mt-[300px] md:top-96 mt-[300px] lg:mt-44 px-6 sm:px-10 lg:px-48 xl:px-32 mx-auto">

  <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">All Plants</h2>
    <div className="flex items-center space-x-2">
      <label className="text-sm font-medium text-gray-600">Sort by:</label>
      <select className="border border-gray-300 rounded-md p-1 text-sm">
        <option value="default">Default Sorting</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
      />
    ))}
  </div>
</div> */}
 <div className="flex items-center sm:mt-[610px] lg:mt-[150px] mx-32 justify-between ">
        <h2 className="text-sm lg:text-lg sm:ml-6 md:text-center md:justify-center sm:text-center sm:justify-center font-josefin-sans sm:text-xl md:text-xl font-bold mb-0">
            Featured Products 
          </h2>
          {/* <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              <span className="text-red-500 font-semibold cursor-pointer">Winter</span>
              <span className="text-gray-500 cursor-pointer">Various</span>
              <span className="text-gray-500 cursor-pointer">Greens</span>
            </div>
            </div> */}
             </div>
<div className='mt-2  md:mt-20 max-h-full mb-10 ml-24 mr-24 '>
<FeaturedProducts />
</div>
{/* <div className="flex items-start bg-navygreen-200 px-4 " style={{ backgroundImage: "url('/assets/csprod.png')" }}>
    {/* Overlay for background image */}
    {/* <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-md text-white font-josefin-sans italic text-lg mx-auto">
        <p className="mb-4">
            "When a beautiful design is combined with powerful technology, it truly is an artwork.
            I love how my website operates and looks with this theme. Thank you for the awesome product."
        </p>
        <p className="text-right font-semibold">- Customer Name</p>
    </div>
</div> */}
<div className="flex flex-row items-center bg-navygreen-200 px-4 text-center">
            {/* Image */}
            <img 
                src="/assets/csprod.png" // Replace with actual image URL
                alt="Customer"
                className="w-[500px] h-[600px]  object-cover"
            />
            
            {/* Testimonial Text */}
            <p className="text-black font-josefin-sans italic text-lg max-w-md mx-auto mb-4">
                "When a beautiful design is combined with powerful technology, it truly is an artwork. 
                I love how my website operates and looks with this theme. Thank you for the awesome product."
            </p>
            
            {/* Customer Name */}
        </div>
<div className="flex items-center sm:mt-10 lg:mt-[50px] mx-32 justify-between ">
<h2 className="text-sm lg:text-lg sm:ml-14  md:text-center md:justify-center sm:text-center sm:justify-center font-bold font-josefin-sans sm:text-xl md:text-xl  mb-0">
Hot Products
          </h2>
          </div>
<div className='mt-10 max-h-full  ml-24 mr-24 '>
<HotProducts />
</div>
    </div>
  );
};

export default Shop;

 {/* <div className="flex flex-col lg:flex-row py-10"> */}
        {/* Sidebar */}
        {/* <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="text-sm text-gray-600">
              <li className="mb-2 cursor-pointer hover:text-green-500">Home Plants (56)</li>
              <li className="mb-2 cursor-pointer hover:text-green-500">Potter Plants (19)</li>
              <li className="mb-2 cursor-pointer hover:text-green-500">Small Plants (32)</li>
              <li className="mb-2 cursor-pointer hover:text-green-500">Big Plants (42)</li>
              <li className="mb-2 cursor-pointer hover:text-green-500">Seeds (73)</li>
              <li className="mb-2 cursor-pointer hover:text-green-500">Succulents (29)</li>
              <li className="mb-2 cursor-pointer hover:text-green-500">Gardening (45)</li>
              <li className="mb-2 cursor-pointer hover:text-green-500">Accessories (16)</li>
              <li className="mb-2 cursor-pointer hover:text-green-500">Terrariums (21)</li>
            </ul>
          </div>

          {/* Price Range Filter */}
          {/* <div className="bg-white rounded-lg p-4 shadow-md mt-6">
            <h3 className="font-bold text-lg mb-4">Price Range</h3>
            <input type="range" min="0" max="100" className="w-full mb-2" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>$100</span>
            </div>
          </div> */}

          {/* Size Filter */}
          {/* <div className="bg-white rounded-lg p-4 shadow-md mt-6">
            <h3 className="font-bold text-lg mb-4">Size</h3>
            <ul className="text-sm text-gray-600">
              <li className="mb-2 cursor-pointer hover:text-green-500">Small (142)</li>
              <li className="mb-2 cursor-pointer hover:text-green-500">Medium (95)</li>
              <li className="mb-2 cursor-pointer hover:text-green-500">Large (72)</li>
            </ul>
          </div>
        </div> */}