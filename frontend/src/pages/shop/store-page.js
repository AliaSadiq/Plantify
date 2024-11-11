import React from 'react';

const StorePage = () => {
  // Store and product data
  const store = {
    backgroundImage: '/path/to/background-image.jpg',
    profileImage: '/path/to/profile-image.jpg',
    name: "Ali's Initiative",
    followers: 2,
    description:
      "Ali's Initiative is a dedicated social group committed to promoting environmental sustainability and green practices. Through community-driven projects and educational campaigns, we aim to create a greener, cleaner world for future generations.",
    rating: 4.4,
    location: 'Islamabad',
  };

  const products = [
    { id: 1, image: '/path/to/product-image1.jpg', name: 'Product 1', price: '$20' },
    { id: 2, image: '/path/to/product-image2.jpg', name: 'Product 2', price: '$25' },
    { id: 3, image: '/path/to/product-image3.jpg', name: 'Product 3', price: '$15' },
    { id: 4, image: '/path/to/product-image4.jpg', name: 'Product 4', price: '$30' },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center rounded-lg h-64"
        style={{ backgroundImage: `url(${store.backgroundImage})` }}
      >
        <div className="flex flex-col items-center p-8">
          <div className="absolute top-4 left-4">
            <img
              src={store.profileImage}
              alt={`${store.name} profile`}
              className="w-24 h-24 rounded-full border-4 border-white"
            />
          </div>
          <div className="mt-20 text-center">
            <p className="text-sm text-gray-500">{store.followers} Followers</p>
            <h1 className="text-3xl font-semibold text-gray-800 mt-2">{store.name}</h1>
            <p className="text-gray-600 mt-2">{store.description}</p>
            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg">Follow</button>
          </div>
          <div className="flex items-center mt-4 space-x-2">
            <span className="text-gray-700 font-medium">{store.rating} out of 5</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">{store.location}</span>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-2 font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;
