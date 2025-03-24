import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import HotProducts from "../../components/shop/hotProducts";
Modal.setAppElement("#root");

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();  // Get the product ID from the URL
  const [product, setProduct] = useState(null);  // State to store the product details
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Fetch product details from API
  useEffect(() => {
    if (id) {
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(`https://plantify-backend.vercel.app/api/products/${id}`);
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };
      fetchProductDetails();
    } else {
      console.error("Product ID is missing.");
    }
  }, [id]);

  // If the product is not found or is still loading, show a loading message
  if (!product) {
    return <p>Loading product details...</p>;
  }

  // Add product to cart (localStorage)
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = { ...product, quantity: 1 };

    // Check if the item is already in the cart
    const itemIndex = existingCart.findIndex(item => item._id === newItem._id);
    if (itemIndex >= 0) {
      existingCart[itemIndex].quantity += 1; // Increase quantity if item already in cart
    } else {
      existingCart.push(newItem); // Add new item to cart
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    setIsSuccessModalOpen(true);
  };

  // Directly navigate to checkout and add the product
  const buyNow = () => {
    const cart = [{ ...product, quantity: 1 }]; // Create a cart with a single item (the product)
    localStorage.setItem('cart', JSON.stringify(cart)); // Save the cart to localStorage

    navigate("/checkout"); // Navigate to the checkout page directly
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    navigate("/cart"); // Optional: Redirect to cart if desired
  };

  return (
    <div className="max-w-7xl mx-auto pt-20 mb-20 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row lg:gap-10 rounded-lg p-8">
        <div className="lg:w-1/3 md:place-items-center">
          <div className="w-[400px] h-[500px]">
            <img
              src={product.images && product.images[0] ? `/assets/${product.images[0]}` : "/assets/default-image.jpg"}
              alt={product.name}
              className="w-full h-full rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="lg:w-2/3 mt-6 lg:mt-0">
          <h1 className="text-2xl font-josefin-sans font-bold  text-gray-800">
            {product.name}
          </h1>
          <p className="text-gray-700 font-josefin-sans mt-4">{product.description}</p>

          {/* Specifications List */}
          <ul className="text-sm font-josefin-sans text-gray-600 mt-4 text-left">
            {(product.specifications?.split(',') || []).map((spec, index) => (
              <li key={index} className="list-disc ml-6">{spec.trim()}</li>
            ))}
          </ul>
          <p className="text-lg font-semibold font-josefin-sans text-black mt-2">
            Rs.{product.price}
          </p>
          <span className="text-gray-500 font-josefin-sans">In stock ({product.quantity})</span>
          <div className="flex items-center mt-4 space-x-2">
            <button onClick={addToCart}   className="font-josefin-sans w-32 text-xs sm:text-sm font-semibold text-black p-3 sm:p-4 rounded hover:rounded-full border-2 border-black mr-2 sm:mr-4">
          
              Add to Cart
            </button>
            <button onClick={buyNow}    className="font-josefin-sans w-32 text-xs sm:text-sm font-semibold text-white bg-black p-3 sm:p-4 rounded hover:rounded-full border-2 border-black mr-2 sm:mr-4">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Hot Products section */}
      <div className="flex items-center sm:mt-10 lg:mt-[50px] justify-between">
        <h2 className="text-sm lg:text-lg sm:ml-14 md:text-center sm:text-center font-bold font-josefin-sans sm:text-xl mb-0">
          You may also like
        </h2>
      </div>
      <div className="mt-10 max-h-full ml-10 mr-10">
        <HotProducts />
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeSuccessModal}
        className="modal p-8 w-80  bg-white rounded-lg shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="  mb-4">
          <CheckCircleIcon className="text-green-500 ml-28 place-items-center " width={50} height={50} />
          <h2 className="text-sm ml-10 font-semibold mt-2">Added to cart Successfully!</h2>
        </div>
        <button
          className="font-josefin-sans text-xs sm:text-sm font-semibold text-white bg-green-500 p-3 sm:p-4 rounded hover:rounded-full border-2 border-green-500"
          onClick={closeSuccessModal}
        >
          OK
        </button>
      </Modal>
    </div>
  );
};

export default ProductDetailsPage;

// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Modal from "react-modal";
// import { CheckCircleIcon } from "@heroicons/react/24/outline";
// import HotProducts from "../../components/shop/hotProducts";
// Modal.setAppElement("#root");

// const ProductDetailsPage = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();  // Get the product ID from the URL
//   const [product, setProduct] = useState(null);  // State to store the product details
//   const [activeTab, setActiveTab] = useState("description");
//   const [reviews, setReviews] = useState([]);
//   const [reviewText, setReviewText] = useState("");
//   const [rating, setRating] = useState(0);
//   const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

//  // Fetch product details from API
//  useEffect(() => {
//   if (id) {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await fetch(`https://plantify-backend.vercel.app/api/products/${id}`);
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };
//     fetchProductDetails();
//   } else {
//     console.error("Product ID is missing.");
//   }
// }, [id]);

//   // If the product is not found or is still loading, show a loading message
//   if (!product) {
//     return <p>Loading product details...</p>;
//   }

//   const addToCart = () => {
//     const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
//     const newItem = { ...product, quantity: 1 };

//     // Check if the item is already in the cart
//     const itemIndex = existingCart.findIndex(item => item._id === newItem._id);
//     if (itemIndex >= 0) {
//       existingCart[itemIndex].quantity += 1; // Increase quantity if item already in cart
//     } else {
//       existingCart.push(newItem); // Add new item to cart
//     }

//     localStorage.setItem('cart', JSON.stringify(existingCart));
//     setIsSuccessModalOpen(true);
//   };

//   const buyNow = () => {
//     navigate("/checkout");
//   };

//   const navigateToStore = () => {
//     navigate(`/store-page`);
//   };

//   const handleReviewSubmit = (e) => {
//     e.preventDefault();
//     if (reviewText.trim() && rating > 0) {
//       setReviews((prevReviews) => [
//         ...prevReviews,
//         { text: reviewText, rating, id: new Date().getTime() },
//       ]);
//       setReviewText("");
//       setRating(0);
//     } else {
//       alert("Please provide both a review and a rating.");
//     }
//   };

//   const closeSuccessModal = () => {
//     setIsSuccessModalOpen(false);
//     navigate("/cart");
//   };

//   return (
//     <div className="max-w-7xl mx-auto pt-20 mb-20 px-4 sm:px-6">
//       <div className="flex flex-col lg:flex-row lg:gap-10 rounded-lg p-8">
//         <div className="lg:w-1/3 md:place-items-center">
//           <div className="w-[400px] h-[500px]">
            
//             <img
//             src={product.images && product.images[0] ? `/assets/${product.images[0]}` : "/assets/default-image.jpg"}
//             alt={product.name}
//               className="w-full h-full rounded-lg shadow-md"
// />
//           </div>
//         </div>

//         <div className="lg:w-2/3 mt-6 lg:mt-0">
         
//           <h1 className="text-2xl font-josefin-sans font-bold mt-5 text-gray-800">
//             {product.name}
//           </h1>
//           <p className="text-gray-700 font-josefin-sans mt-4">{product.description}</p>
//            {/* Specifications List */}
//            <ul className="text-sm font-josefin-sans text-gray-600 mt-4 text-left">
//             {(product.specifications?.split(',') || []).map((spec, index) => (
//               <li key={index} className="list-disc ml-6">{spec.trim()}</li> 
//             ))}
//           </ul>
//           <p className="text-xl font-semibold font-josefin-sans text-green-600 mt-2">
//             Rs.{product.price}
//           </p>
//           <span className="text-gray-500 font-josefin-sans">In stock ({product.quantity})</span>
//           <div className="flex items-center mt-4 space-x-4">
//             <button onClick={addToCart} className="font-josefin-sans text-sm font-semibold text-black p-3 rounded border-2">
//               Add to Cart
//             </button>
//             <button onClick={buyNow} className="font-josefin-sans text-sm font-semibold text-white bg-gray-100 p-4 rounded border-2">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

      
//       {/* Hot Products section */}
//       <div className="flex items-center sm:mt-10 lg:mt-[50px] justify-between">
//         <h2 className="text-sm lg:text-lg sm:ml-14 md:text-center sm:text-center font-bold font-josefin-sans sm:text-xl mb-0">
//          You may also like
//         </h2>
//       </div>
//       <div className="mt-10 max-h-full ml-10 mr-10">
//         <HotProducts />
//       </div>

//       {/* Success Modal */}
//       <Modal
//         isOpen={isSuccessModalOpen}
//         onRequestClose={closeSuccessModal}
//         className="modal p-8 bg-white rounded-lg shadow-xl"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
//       >
//         <div className="text-center mb-4">
//           <CheckCircleIcon className="text-green-500" width={40} height={40} />
//           <h2 className="text-sm font-semibold mt-2">Added to cart Successfully!</h2>
//         </div>
//         <button
//           className="font-josefin-sans text-xs sm:text-sm font-semibold text-white bg-green-500 p-3 sm:p-4 rounded hover:rounded-full border-2 border-green-500"
//           onClick={closeSuccessModal}
//         >
//           OK
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default ProductDetailsPage;
{/* Reviews Tab
      <div className="mt-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("reviews")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "reviews"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Reviews
            </button>
          </nav>
        </div>

        {activeTab === "reviews" && (
          <div className="mt-6">
            <form onSubmit={handleReviewSubmit} className="mb-4">
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here..."
                className="w-full border rounded-lg p-2 mb-2"
              ></textarea>
              <select
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value))}
                className="w-full border rounded-lg p-2 mb-4"
              >
                <option value={0}>Select a rating</option>
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>{value} Star{value > 1 && "s"}</option>
                ))}
              </select>
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Submit Review
              </button>
            </form>

            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="border-b py-2">
                  <p className="text-gray-700">{review.text}</p>
                  <span className="text-sm text-gray-500">{review.rating} Star{review.rating > 1 && "s"}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-700">No reviews yet.</p>
            )}
          </div>
        )}
      </div> */}


     {/* <div
            className="flex items-center mt-2 w-40 cursor-pointer bg-green-100 rounded-full px-3 py-1"
            onClick={navigateToStore}
          >
            <img
              src={"/assets/tools.jpg"} // Assuming you have a store image
              alt="Store Profile"
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="text-sm font-medium text-black">{product.storeName}</span>
          </div> */}

          {/* <img
              src={`/assets/${product.image[0]}`} // Assuming the product has an imageUrl field
              alt={product.name}
              className="w-full h-full rounded-lg shadow-md"
            /> */}