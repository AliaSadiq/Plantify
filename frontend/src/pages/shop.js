import React from 'react';
import ProductCard from '../components/product-card';
import CategoryCard from '../components/category-card';

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
    <div className="max-w-7xl mx-auto pt-40 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row py-10">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
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
          <div className="bg-white rounded-lg p-4 shadow-md mt-6">
            <h3 className="font-bold text-lg mb-4">Price Range</h3>
            <input type="range" min="0" max="100" className="w-full mb-2" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>$100</span>
            </div>
          </div>

          {/* Size Filter */}
          <div className="bg-white rounded-lg p-4 shadow-md mt-6">
            <h3 className="font-bold text-lg mb-4">Size</h3>
            <ul className="text-sm text-gray-600">
              <li className="mb-2 cursor-pointer hover:text-green-500">Small (142)</li>
              <li className="mb-2 cursor-pointer hover:text-green-500">Medium (95)</li>
              <li className="mb-2 cursor-pointer hover:text-green-500">Large (72)</li>
            </ul>
          </div>
        </div>

        {/* Products Section */}
        <div className="w-full lg:w-3/4 lg:pl-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">All Plants</h2>
            <div>
              <label className="text-sm font-medium text-gray-600">Sort by: </label>
              <select className="border border-gray-300 rounded-md p-1">
                <option value="default">Default Sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
      </div>
    </div>
  );
};

export default Shop;
