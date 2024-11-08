// import { useState, useEffect } from 'react';

// // Custom hook to fetch product data
// const useProductData = () => {
//   const [product, setProduct] = useState({});
//   const [reviews, setReviews] = useState([]);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     // Simulating fetching product data
//     const productData = {
//       title: "I Love My Pet Charm Bracelet",
//       price: 25,
//       reviewsCount: 5,
//       animal: "Dog",
//       color: "Turquoise",
//       availability: 10,
//       sku: "ILMPT-C",
//       description: "Support AMA Animal Rescue by showing how much you love your pet...",
//       details: [
//         "Exclusively handmade",
//         "Antique gold charms",
//         "Semi-precious round gemstone",
//         "8mm beads"
//       ]
//     };
//     setProduct(productData);

//     // Simulating fetching reviews
//     const reviewsData = [
//       { id: 1, rating: 5, reviewer: "John Doe", comment: "Amazing bracelet!" },
//       { id: 2, rating: 4, reviewer: "Jane Smith", comment: "Very well-made, love it!" }
//     ];
//     setReviews(reviewsData);

//     // Simulating fetching related products
//     const relatedProductsData = [
//       { id: 1, title: "Best Friend Bracelet", price: 25 },
//       { id: 2, title: "Heart Shaped Pendant Necklace", price: 95 },
//       { id: 3, title: "Bangles", price: 79 }
//     ];
//     setRelatedProducts(relatedProductsData);
//   }, []);

//   return { product, reviews, relatedProducts };
// };

// export default useProductData;


// useProductData.js
import { useState, useEffect } from 'react';

// Custom hook to fetch product data
const useProductData = (productId) => {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching product data by ID
    const productData = {
      id: productId,
      title: "I Love My Pet Charm Bracelet",
      price: 25,
      reviewsCount: 5,
      animal: "Dog",
      color: "Turquoise",
      availability: 10,
      sku: "ILMPT-C",
      description: "Support AMA Animal Rescue by showing how much you love your pet...",
      details: [
        "Exclusively handmade",
        "Antique gold charms",
        "Semi-precious round gemstone",
        "8mm beads"
      ]
    };
    setProduct(productData);

    // Simulate fetching reviews
    const reviewsData = [
      { id: 1, rating: 5, reviewer: "John Doe", comment: "Amazing bracelet!" },
      { id: 2, rating: 4, reviewer: "Jane Smith", comment: "Very well-made, love it!" }
    ];
    setReviews(reviewsData);

    // Simulate fetching related products
    const relatedProductsData = [
      { id: 1, title: "Best Friend Bracelet", price: 25 },
      { id: 2, title: "Heart Shaped Pendant Necklace", price: 95 },
      { id: 3, title: "Bangles", price: 79 }
    ];
    setRelatedProducts(relatedProductsData);
  }, [productId]);

  return { product, reviews, relatedProducts };
};

export default useProductData;
