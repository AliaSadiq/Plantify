// import React from 'react';
// import useProductData from '../hooks/useProductData'; // Import the custom hook

// // Main Product Page Component
// const ProductDetailsPage = () => {
//   // Use the custom hook to get the product data, reviews, and related products
//   const { product, reviews, relatedProducts } = useProductData();

//   return (
//     <div className="product-page container mx-auto p-4">
    
//       {/* Breadcrumb Navigation */}
//       <div className="breadcrumb mb-4">
//         <a href="#">Shop</a> &gt; <a href="#">Product</a> &gt; I Love My Pet Charm Bracelet
//       </div>

//       {/* Main Product Section */}
//       <div className="grid grid-cols-2 gap-8">
//         {/* Product Images */}
//         <ProductImages />

//         {/* Product Information */}
//         <ProductInfo product={product} />
//       </div>

//       {/* Description */}
//       <ProductDescription product={product} />

//       {/* Reviews */}
//       <Reviews reviews={reviews} />

//       {/* Related Products */}
//       <RelatedProducts products={relatedProducts} />


//     </div>
//   );
// };

// // Product Images Component
// const ProductImages = () => (
//   <div className="product-images">
//     <div className="main-image bg-gray-200 h-64"></div>
//     <div className="thumbnails grid grid-cols-4 gap-2 mt-4">
//       <div className="thumbnail bg-gray-200 h-16"></div>
//       <div className="thumbnail bg-gray-200 h-16"></div>
//       <div className="thumbnail bg-gray-200 h-16"></div>
//       <div className="thumbnail bg-gray-200 h-16"></div>
//     </div>
//   </div>
// );

// // Product Information Component
// const ProductInfo = ({ product }) => (
//   <div className="product-info">
//     <h2 className="text-3xl font-bold">{product.title}</h2>
//     <p className="text-xl my-2">${product.price}</p>
//     <div className="reviews">
//       <p>★★★★★ {product.reviewsCount} reviews</p>
//     </div>

//     <div className="details mt-4">
//       <p>Bracelet animal: <span>{product.animal}</span></p>
//       <p>Color: <span>{product.color}</span></p>
//       <p>Availability: <span>{product.availability} in stock</span></p>
//       <p>SKU: <span>{product.sku}</span></p>
//     </div>

//     <div className="quantity-selector mt-4">
//       <button className="bg-gray-300 px-2">-</button>
//       <input type="text" className="w-12 text-center" value="1" readOnly />
//       <button className="bg-gray-300 px-2">+</button>
//     </div>

//     <div className="add-to-cart mt-4">
//       <button className="bg-blue-500 text-white px-4 py-2">Add to Cart</button>
//     </div>
//   </div>
// );

// // Product Description Component
// const ProductDescription = ({ product }) => (
//   <section className="product-description mt-8">
//     <h3 className="text-xl font-bold">Description</h3>
//     <p>{product.description}</p>
//     <ul className="list-disc ml-4 mt-4">
//       {product.details && product.details.map((detail, index) => (
//         <li key={index}>{detail}</li>
//       ))}
//     </ul>
//   </section>
// );

// // Reviews Component
// const Reviews = ({ reviews }) => (
//   <section className="reviews mt-8">
//     <h3 className="text-xl font-bold">Reviews ({reviews.length})</h3>
//     {reviews.map((review) => (
//       <div key={review.id} className="review mt-4">
//         <p>★★★★★ by {review.reviewer}</p>
//         <p>"{review.comment}"</p>
//       </div>
//     ))}
//   </section>
// );

// // Related Products Component
// const RelatedProducts = ({ products }) => (
//   <section className="related-products mt-8">
//     <h3 className="text-2xl font-bold mb-4">You may also like</h3>
//     <div className="grid grid-cols-3 gap-4">
//       {products.map((product) => (
//         <div key={product.id} className="product bg-gray-200 h-40">
//           <p>{product.title}</p>
//           <p>${product.price}</p>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default ProductDetailsPage;





// // ProductDetailsPage.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import useProductData from '../hooks/useProductData';

// const ProductDetailsPage = () => {
//   const { productId } = useParams(); // Get product ID from URL
//   const { product, reviews, relatedProducts } = useProductData(productId); // Fetch product data

//   return (
//     <div className="product-page container mx-auto p-4 mt-28 ">
     

//       <div className="grid grid-cols-2 gap-8">
//         {/* Product Images */}
//         <ProductImages />

//         {/* Product Information */}
//         <ProductInfo product={product} />
//       </div>

//       {/* Description */}
//       <ProductDescription product={product} />

//       {/* Reviews */}
//       <Reviews reviews={reviews} />

//       {/* Related Products */}
//       <RelatedProducts products={relatedProducts} />
//     </div>
//   );
// };

// // Product Images Component
// const ProductImages = () => (
//   <div className="product-images">
//     <div className="main-image bg-gray-200 h-64"></div>
//     <div className="thumbnails grid grid-cols-4 gap-2 mt-4">
//       <div className="thumbnail bg-gray-200 h-16"></div>
//       <div className="thumbnail bg-gray-200 h-16"></div>
//       <div className="thumbnail bg-gray-200 h-16"></div>
//       <div className="thumbnail bg-gray-200 h-16"></div>
//     </div>
//   </div>
// );

// // Product Information Component
// const ProductInfo = ({ product }) => (
//   <div className="product-info">
//     <h2 className="text-3xl font-bold">{product.title}</h2>
//     <p className="text-xl my-2">${product.price}</p>
//     <div className="reviews">
//       <p>★★★★★ {product.reviewsCount} reviews</p>
//     </div>
//     <div className="details mt-4">
//       <p>Animal: <span>{product.animal}</span></p>
//       <p>Color: <span>{product.color}</span></p>
//       <p>Availability: <span>{product.availability} in stock</span></p>
//       <p>SKU: <span>{product.sku}</span></p>
//     </div>

//     <div className="quantity-selector mt-4">
//       <button className="bg-gray-300 px-2">-</button>
//       <input type="text" className="w-12 text-center" value="1" readOnly />
//       <button className="bg-gray-300 px-2">+</button>
//     </div>

//     <div className="add-to-cart mt-4">
//       <button className="bg-blue-500 text-white px-4 py-2">Add to Cart</button>
//     </div>
//   </div>
// );

// // Product Description Component
// const ProductDescription = ({ product }) => (
//   <section className="product-description mt-8">
//     <h3 className="text-xl font-bold">Description</h3>
//     <p>{product.description}</p>
//     <ul className="list-disc ml-4 mt-4">
//       {product.details && product.details.map((detail, index) => (
//         <li key={index}>{detail}</li>
//       ))}
//     </ul>
//   </section>
// );

// // Reviews Component
// const Reviews = ({ reviews }) => (
//   <section className="reviews mt-8">
//     <h3 className="text-xl font-bold">Reviews ({reviews.length})</h3>
//     {reviews.map((review) => (
//       <div key={review.id} className="review p-4 bg-gray-100 rounded-lg mt-4">
//         <p>Rating: {review.rating} ★</p>
//         <p>Reviewer: {review.reviewer}</p>
//         <p>Comment: {review.comment}</p>
//       </div>
//     ))}
//   </section>
// );

// // Related Products Component
// const RelatedProducts = ({ products }) => (
//   <section className="related-products mt-8">
//     <h3 className="text-xl font-bold">Related Products</h3>
//     <div className="grid grid-cols-3 gap-4">
//       {products.map((relatedProduct) => (
//         <div key={relatedProduct.id} className="related-product p-4 bg-gray-100 rounded-lg">
//           <h4>{relatedProduct.title}</h4>
//           <p>${relatedProduct.price}</p>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default ProductDetailsPage;



// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const ProductDetailsPage = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // Get the product id from the URL parameters

//   // Sample product data (could be fetched from an API)
//   const product = {
//     id: 1,
//     image: '/assets/products/plant-1.jpeg',
//     title: 'Green & Purple Cactus',
//     price: 40,
//     description:
//       'This Green & Purple Cactus is the perfect addition to your indoor garden. It thrives in moderate sunlight and requires minimal watering. A beautiful blend of green and purple hues makes this a unique and stunning plant.',
//     specifications: {
//       size: 'Medium',
//       sunlight: 'Moderate sunlight',
//       watering: 'Once a week',
//       soil: 'Well-drained soil',
//     },
//     reviews: [
//       { username: 'John', rating: 5, comment: 'Beautiful plant! Very healthy.' },
//       { username: 'Jane', rating: 4, comment: 'Arrived in perfect condition.' },
//     ],
//   };

//   // State for managing active tab
//   const [activeTab, setActiveTab] = useState('description');

//   // Function to handle adding to cart (You can replace this with your cart logic)
//   const addToCart = () => {
//     navigate('/cart');
//     alert('Added to cart!');
//   };

//   return (
//     <div className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col lg:flex-row lg:gap-10 bg-white rounded-lg shadow-lg p-8">
//         {/* Product Image */}
//         <div className="lg:w-1/2">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="w-full h-full object-cover rounded-lg shadow-md"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="lg:w-1/2 mt-6 lg:mt-0">
//           <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
//           <p className="text-xl font-semibold text-green-600 mt-2">${product.price}</p>
//           <p className="text-gray-700 mt-4">{product.description}</p>

//           {/* Add to Cart */}
//           <div className="flex items-center mt-6">
//             <button
//               onClick={addToCart}
//               className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
//             >
//               Add to Cart
//             </button>
//             <span className="ml-6 text-gray-500">In Stock</span>
//           </div>

//           {/* Tabs for additional product details */}
//           <div className="mt-8">
//             <div className="border-b border-gray-200">
//               <nav className="-mb-px flex space-x-8">
//                 <button
//                   onClick={() => setActiveTab('description')}
//                   className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//                     activeTab === 'description' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   Description
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('specifications')}
//                   className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//                     activeTab === 'specifications' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   Specifications
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('reviews')}
//                   className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//                     activeTab === 'reviews' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   Reviews
//                 </button>
//               </nav>
//             </div>

//             {/* Tab Content */}
//             <div className="mt-4">
//               {activeTab === 'description' && (
//                 <div>
//                   <p className="text-gray-700">{product.description}</p>
//                 </div>
//               )}

//               {activeTab === 'specifications' && (
//                 <div>
//                   <ul className="list-disc list-inside text-gray-700">
//                     <li>Size: {product.specifications.size}</li>
//                     <li>Sunlight: {product.specifications.sunlight}</li>
//                     <li>Watering: {product.specifications.watering}</li>
//                     <li>Soil: {product.specifications.soil}</li>
//                   </ul>
//                 </div>
//               )}

//               {activeTab === 'reviews' && (
//                 <div>
//                   {product.reviews.map((review, index) => (
//                     <div key={index} className="mb-4">
//                       <p className="font-semibold">{review.username}</p>
//                       <p className="text-yellow-500">
//                         {'★'.repeat(review.rating)}{' '}
//                         {'☆'.repeat(5 - review.rating)}
//                       </p>
//                       <p className="text-gray-700">{review.comment}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;



// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const ProductDetailsPage = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // Get the product id from the URL parameters

//   // Sample product data (could be fetched from an API)
//   const product = {
//     id: 1,
//     image: '/assets/products/plant-1.jpeg',
//     title: 'Green & Purple Cactus',
//     price: 40,
//     description:
//       'This Green & Purple Cactus is the perfect addition to your indoor garden. It thrives in moderate sunlight and requires minimal watering. A beautiful blend of green and purple hues makes this a unique and stunning plant.',
//     specifications: {
//       size: 'Medium',
//       sunlight: 'Moderate sunlight',
//       watering: 'Once a week',
//       soil: 'Well-drained soil',
//     },
//     reviews: [
//       { username: 'John', rating: 5, comment: 'Beautiful plant! Very healthy.' },
//       { username: 'Jane', rating: 4, comment: 'Arrived in perfect condition.' },
//     ],
//   };

//   // Sample related products (could be fetched from an API)
//   const relatedProducts = [
//     {
//       id: 2,
//       image: '/assets/products/plant-2.jpeg',
//       title: 'Aloe Vera',
//       price: 25,
//     },
//     {
//       id: 3,
//       image: '/assets/products/plant-3.jpeg',
//       title: 'Snake Plant',
//       price: 35,
//     },
//     {
//       id: 4,
//       image: '/assets/products/plant-4.jpeg',
//       title: 'Spider Plant',
//       price: 30,
//     },
//   ];

//   // State for managing active tab
//   const [activeTab, setActiveTab] = useState('description');

//   // Function to handle adding to cart (You can replace this with your cart logic)
//   const addToCart = () => {
//     navigate('/cart');
//     alert('Added to cart!');
//   };

//   // Function to navigate to product details for related products
//   const viewProduct = (productId) => {
//     navigate(`/products/${productId}`);
//   };

//   return (
//     <div className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col lg:flex-row lg:gap-10 bg-white rounded-lg shadow-lg p-8">
//         {/* Product Image */}
//         <div className="lg:w-1/2">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="w-full h-full object-cover rounded-lg shadow-md"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="lg:w-1/2 mt-6 lg:mt-0">
//           <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
//           <p className="text-xl font-semibold text-green-600 mt-2">${product.price}</p>
//           <p className="text-gray-700 mt-4">{product.description}</p>

//           {/* Add to Cart */}
//           <div className="flex items-center mt-6">
//             <button
//               onClick={addToCart}
//               className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
//             >
//               Add to Cart
//             </button>
//             <span className="ml-6 text-gray-500">In Stock</span>
//           </div>

//           {/* Tabs for additional product details */}
//           <div className="mt-8">
//             <div className="border-b border-gray-200">
//               <nav className="-mb-px flex space-x-8">
//                 <button
//                   onClick={() => setActiveTab('description')}
//                   className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//                     activeTab === 'description' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   Description
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('specifications')}
//                   className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//                     activeTab === 'specifications' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   Specifications
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('reviews')}
//                   className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//                     activeTab === 'reviews' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   Reviews
//                 </button>
//               </nav>
//             </div>

//             {/* Tab Content */}
//             <div className="mt-4">
//               {activeTab === 'description' && (
//                 <div>
//                   <p className="text-gray-700">{product.description}</p>
//                 </div>
//               )}

//               {activeTab === 'specifications' && (
//                 <div>
//                   <ul className="list-disc list-inside text-gray-700">
//                     <li>Size: {product.specifications.size}</li>
//                     <li>Sunlight: {product.specifications.sunlight}</li>
//                     <li>Watering: {product.specifications.watering}</li>
//                     <li>Soil: {product.specifications.soil}</li>
//                   </ul>
//                 </div>
//               )}

//               {activeTab === 'reviews' && (
//                 <div>
//                   {product.reviews.map((review, index) => (
//                     <div key={index} className="mb-4">
//                       <p className="font-semibold">{review.username}</p>
//                       <p className="text-yellow-500">
//                         {'★'.repeat(review.rating)}{' '}
//                         {'☆'.repeat(5 - review.rating)}
//                       </p>
//                       <p className="text-gray-700">{review.comment}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {relatedProducts.map((relatedProduct) => (
//             <div
//               key={relatedProduct.id}
//               className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
//               onClick={() => viewProduct(relatedProduct.id)}
//             >
//               <img
//                 src={relatedProduct.image}
//                 alt={relatedProduct.title}
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-xl font-semibold text-gray-800">{relatedProduct.title}</h3>
//               <p className="text-lg font-semibold text-green-600 mt-2">${relatedProduct.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default ProductDetailsPage;
// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { soils } from './shop/soils'; // Import the soils array

// const ProductDetailsPage = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
  
//   // Find the product using the ID from params
//   const product = soils.find((item) => item.id === parseInt(id));

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const [activeTab, setActiveTab] = useState('description');

//   const addToCart = () => {
//     navigate('/cart');
//     alert('Added to cart!');
//   };

//   return (
//     <div className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col lg:flex-row lg:gap-10 bg-white rounded-lg shadow-lg p-8">
//         {/* Product Image */}
//         <div className="lg:w-1/2">
//           <img
//             src={product.imageUrl}
//             alt={product.name}
//             className="w-full h-full object-cover rounded-lg shadow-md"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="lg:w-1/2 mt-6 lg:mt-0">
//           <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
//           <p className="text-xl font-semibold text-green-600 mt-2">${product.price}</p>
//           <p className="text-gray-700 mt-4">Category: {product.category}</p>

//           {/* Add to Cart */}
//           <div className="flex items-center mt-6">
//             <button
//               onClick={addToCart}
//               className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
//             >
//               Add to Cart
//             </button>
//             <span className="ml-6 text-gray-500">In Stock</span>
//           </div>

//           {/* Tabs for additional product details */}
//           <div className="mt-8">
//             <div className="border-b border-gray-200">
//               <nav className="-mb-px flex space-x-8">
//                 <button
//                   onClick={() => setActiveTab('description')}
//                   className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//                     activeTab === 'description' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   Description
//                 </button>
//                 {/* Add more tabs if needed */}
//               </nav>
//             </div>

//             {/* Tab Content */}
//             <div className="mt-4">
//               {activeTab === 'description' && (
//                 <div>
//                   <p className="text-gray-700">Details about {product.name}.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default ProductDetailsPage;
// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import {soils}  from './shop/soils';
// import HotProducts from '../components/shop/hotProducts';

// const ProductDetailsPage = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [activeTab, setActiveTab] = useState('description');

//   const product = soils.find((item) => item.id === parseInt(id));
  
//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const addToCart = () => {
//     navigate('/cart');
//     alert('Added to cart!');
//   };

//   return (
//     <div className="max-w-7xl mx-auto pt-20 mb-20 px-4 sm:px-6 ">
//       <div className="flex flex-col lg:flex-row lg:gap-10 bg-white rounded-lg shadow-lg p-8">
//         <div className="lg:w-1/2">
//           <img
//             src={product.imageUrl}
//             alt={product.name}
//             className="w-full h-full object-cover rounded-lg shadow-md"
//           />
//         </div>
        
//         <div className="lg:w-1/2 mt-6 lg:mt-0">
//           <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
//           <p className="text-xl font-semibold text-green-600 mt-2">${product.price}</p>
//           <p className="text-gray-700 mt-4">Category: {product.category}</p>

//           <div className="flex items-center mt-6">
//             <button
//               onClick={addToCart}
//               className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
//             >
//               Add to Cart
//             </button>
//             <span className="ml-6 text-gray-500">In Stock</span>
//           </div>

//            <div className="mt-8">
//       <div className="border-b border-gray-200">
//         <nav className="-mb-px flex space-x-8">
//           <button
//             onClick={() => setActiveTab('description')}
//             className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//               activeTab === 'description' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//             }`}
//           >
//             Description
//           </button>

//           <button
//             onClick={() => setActiveTab('reviews')}
//             className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//               activeTab === 'reviews' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//             }`}
//           >
//             Reviews
//           </button>

//           <button
//             onClick={() => setActiveTab('specifications')}
//             className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//               activeTab === 'specifications' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//             }`}
//           >
//             Specifications
//           </button>
//         </nav>
//       </div>

//       <div className="mt-4">
//         {activeTab === 'description' && (
//           <div>
//             <p className="text-gray-700">Details about {product.name}.</p>
//           </div>
//         )}

//         {activeTab === 'reviews' && (
//           <div>
//             <p className="text-gray-700">User reviews for {product.name}.</p>
//             {/* Add review content here */}
//           </div>
//         )}

//         {activeTab === 'specifications' && (
//           <div>
//             <p className="text-gray-700">Specifications for {product.name}.</p>
//             {/* Add specifications content here */}
//           </div>
//         )}
//       </div>
//     </div>
//         </div>
//       </div>
//       <div className="flex items-center sm:mt-10 lg:mt-[50px]  justify-between ">
// <h2 className="text-sm lg:text-lg sm:ml-14  md:text-center md:justify-center sm:text-center sm:justify-center font-bold font-josefin-sans sm:text-xl md:text-xl  mb-0">
// Hot Products
//           </h2>
//           </div>
// <div className='mt-10 max-h-full  ml-10 mr-10 '>
// <HotProducts />
// </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { soils } from './shop/soils';
import HotProducts from '../components/shop/hotProducts';

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');

  const product = soils.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const addToCart = () => {
    navigate('/cart');
    alert('Added to cart!');
  };

  const navigateToStore = () => {
    navigate(`/store/${product.storeId}`); // Assuming you have a route set up for the store
  };

  return (
    <div className="max-w-7xl mx-auto pt-20 mb-20 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row lg:gap-10 bg-white rounded-lg shadow-lg p-8">
        <div className="lg:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <div
  className="flex items-center mt-2 w-40 cursor-pointer bg-green-100 rounded-full px-3 py-1"
  onClick={navigateToStore}
>
  <img
    // src={product.storeProfilePic} // Add this field in your soils data
    src={'/assets/tools.jpg'}
    alt={`${product.storeName}'s profile`}d
    className="w-6 h-6 rounded-full mr-2"
  />
  {/* <span className="text-sm font-medium text-gray-700">{product.storeName}</span> Add store name */}
  <span className="text-sm font-medium text-black">bhopendar jogi</span> {/* Add store name */}

</div>

          <p className="text-xl font-semibold text-green-600 mt-2">${product.price}</p>
          <p className="text-gray-700 mt-4">Category: {product.category}</p>

          <div className="flex items-center mt-6">
            <button
              onClick={addToCart}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              Add to Cart
            </button>
            <span className="ml-6 text-gray-500">In Stock</span>
          </div>

          <div className="mt-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'description' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Description
                </button>

                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'reviews' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Reviews
                </button>

                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'specifications' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Specifications
                </button>
              </nav>
            </div>

            <div className="mt-4">
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-700">Details about {product.name}.</p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <p className="text-gray-700">User reviews for {product.name}.</p>
                  {/* Add review content here */}
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <p className="text-gray-700">Specifications for {product.name}.</p>
                  {/* Add specifications content here */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center sm:mt-10 lg:mt-[50px] justify-between">
        <h2 className="text-sm lg:text-lg sm:ml-14 md:text-center md:justify-center sm:text-center sm:justify-center font-bold font-josefin-sans sm:text-xl md:text-xl mb-0">
          Hot Products
        </h2>
      </div>
      <div className='mt-10 max-h-full ml-10 mr-10'>
        <HotProducts />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
