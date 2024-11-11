
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
        <div className="max-w-screen mx-auto mt-10 p-6">
            <h2 className="text-3xl font-bold font-josefin-sans text-center mb-6">Our Plants</h2>
            
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-44 gap-x-10">
                {filteredPlants.map((plant) => (
                    <div key={plant.id} className="bg-white rounded-lg shadow text-center">
                        <img src={plant.imageUrl} alt={plant.name} className="w-full h-full object-cover mb-4 rounded-md" />
                        <h3 className="text-lg font-semibold">{plant.name}</h3>
                        <p className="text-gray-600">${plant.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Plants;