
import React, { useState } from 'react';

    
    const plants = [
        { id: 1, imageUrl: '/assets/products/plant-1.jpeg', name: 'Green & Purple Cactus', price: 40 ,category: 'Ceiling'},
        { id: 2, imageUrl: '/assets/products/plant-2.jpeg', name: 'Snake Plant', price: 76 ,category: 'Wall'},
        { id: 3, imageUrl: '/assets/products/plant-3.jpeg', name: 'Green & Red Cactus', price: 58 ,category: 'Ceiling'},
        { id: 4, imageUrl: '/assets/products/plant-4.jpeg', name: 'Monstera', price: 32 ,category: 'Wall'},
        { id: 5, imageUrl: '/assets/products/plant-5.jpeg', name: 'Golden Barrel Cactus', price: 50,category: 'Vase' },
        { id: 6, imageUrl: '/assets/products/plant-1.jpeg', name: 'Green & Purple Cactus', price: 40 ,category: 'Vase'},
        { id: 7, imageUrl: '/assets/products/plant-2.jpeg', name: 'Snake Plant', price: 76 ,category: 'Pot'},
        { id: 8, imageUrl: '/assets/products/plant-3.jpeg', name: 'Green & Red Cactus', price: 58 ,category: 'Pot'},

        
        
      ];


const categories = ['All', 'Ceiling', 'Wall', 'Vase', 'Pot'];

 function Plants() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPlants = selectedCategory === 'All'
        ? plants
        : plants.filter((plant) => plant.category === selectedCategory);

    return (
        <div className="max-w-screen mx-auto   mb-20 ">
        {/* <h2 className="text-3xl font-bold font-josefin-sans text-center mb-6" style={{ backgroundImage: `url(/assets/products/plant-1.jpeg)` }}>Soils</h2> */}
      
<div 
className="relative h-48 sm:h-64 md:h-80 bg-cover bg-black opacity-80 bg-center flex items-center justify-center" 
style={{ backgroundImage: `url(/assets/plants.jpg)` }}
>
<h2 className="text-3xl md:text-5xl font-bold font-josefin-sans text-white  px-4 py-2 rounded">
PLANTS
</h2>
</div>          <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <div className="w-full lg:w-1/5 ml-10 mb-6 mr-20 mt-20 lg:mb-0">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                        <h3 className="font-bold text-lg mb-4">Categories</h3>
                        <ul className="flex flex-col text-sm text-gray-600 space-y-2">
                            <li className="cursor-pointer hover:text-green-500">Home Plants (56)</li>
                            <li className="cursor-pointer hover:text-green-500">Potter Plants (19)</li>
                            <li className="cursor-pointer hover:text-green-500">Small Plants (32)</li>
                            <li className="cursor-pointer hover:text-green-500">Big Plants (42)</li>
                            <li className="cursor-pointer hover:text-green-500">Seeds (73)</li>
                            <li className="cursor-pointer hover:text-green-500">Succulents (29)</li>
                            <li className="cursor-pointer hover:text-green-500">Gardening (45)</li>
                            <li className="cursor-pointer hover:text-green-500">Accessories (16)</li>
                            <li className="cursor-pointer hover:text-green-500">Terrariums (21)</li>
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
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li className="cursor-pointer hover:text-green-500">Small (142)</li>
                            <li className="cursor-pointer hover:text-green-500">Medium (95)</li>
                            <li className="cursor-pointer hover:text-green-500">Large (72)</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full mr-10 mb-20 mt-10 lg:w-3/4">
                    {/* Category Filters */}
                    <div className="flex justify-center space-x-4 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 font-semibold font-josefin-sans text-gray-700 hover:text-green-500 ${
                                    selectedCategory === category ? 'text-green-500 border-b-2 border-green-500' : ''
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Plant Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-44 gap-x-10">
                        {filteredPlants.map((plant) => (
                            <div key={plant.id} className="bg-white rounded-lg shadow text-center">
                                <img src={plant.imageUrl} alt={plant.name} className="w-full h-full object-cover mb-4 rounded-md" />
                                <h3 className="text-lg font-semibold">{plant.name}</h3>
                                <p className="text-gray-600">${plant.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plants;
