// import React from 'react';
// import { useParams } from 'react-router-dom';
// import soils from './soils'; // Separate your soil data into a file or import from Soil component
// import plants from './plants';
// import tools from './tools';
// function ProductDetail() {
//     const { id } = useParams();
//     const product = soils.find((soil) => soil.id === parseInt(id));

//     if (!product) {
//         return <p>Product not found</p>;
//     }

//     return (
//         <div className="max-w-screen-lg mx-auto p-4">
//             <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
//             <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
//             <p className="text-gray-600 mb-2">Price: ${product.price.toFixed(2)}</p>
//             <p className="text-gray-600">Category: {product.category}</p>
//         </div>
//     );
// }

// export default ProductDetail;
import React from 'react';
import { useParams } from 'react-router-dom';
import soils from './soils';  // Import soil data
import plants from './plants'; // Import plant data
import tools from './tools';   // Import tool data

function ProductDetail() {
    const { id } = useParams();
    const productId = parseInt(id);

    // Find product in soils, plants, or tools
    const product = 
        soils.find((item) => item.id === productId) ||
        plants.find((item) => item.id === productId) ||
        tools.find((item) => item.id === productId);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <h1>hello</h1>
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
            <p className="text-gray-600 mb-2">Price: ${product.price.toFixed(2)}</p>
            <p className="text-gray-600">Category: {product.category}</p>
        </div>
    );
}

export default ProductDetail;
