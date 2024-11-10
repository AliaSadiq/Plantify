// src/pages/Products.js
import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: "Fiddle Leaf Fig", price: "$25", stock: 20 },
    { id: 2, name: "Monstera Deliciosa", price: "$30", stock: 15 },
    // ...additional products
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="text-left text-gray-700 uppercase border-b">
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{product.name}</td>
              <td className="px-4 py-2 border-b">{product.price}</td>
              <td className="px-4 py-2 border-b">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
