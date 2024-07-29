// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const RequestCampaignForm = ({ onClose, socialGroupId }) => {
//   const [email, setEmail] = useState('');
//   const [location, setLocation] = useState('');
//   const [contactNumber, setContactNumber] = useState('');
//   const [issue, setIssue] = useState('');
//   const [attachedImageName, setAttachedImageName] = useState('');

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user && user._id) {
//       setEmail(user.email); // Set default value to user's email
//       console.log("Fetched userId from localStorage:", user._id);
//     }
//   }, []);

//   const handleFileInputChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setAttachedImageName(file.name);
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     // Validation: Check if any field is empty
//     if (!location || !contactNumber || !issue) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     // Format contact number to Pakistan number format
//     const formattedPhoneNumber = `+92${contactNumber.substring(1)}`;

//     const formData = {
//       socialGroupId,
//       email,
//       location,
//       contactNumber: formattedPhoneNumber,
//       issue,
//       attachedImage: attachedImageName
//     };

//     try {
//       await axios.post('http://localhost:5000/api/request-campaign', formData);
//       onClose();
//     } catch (error) {
//       console.error('Error submitting campaign request:', error);
//     }
//   };

//   const handleContactNumberChange = (e) => {
//     const { value } = e.target;
//     const regex = /^[0-9]*$/;
//     if (regex.test(value) && value.length <= 11) {
//       setContactNumber(value);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-40" onClick={onClose}>
//       <div className="relative bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-6 w-full max-w-md shadow-lg" onClick={(e) => e.stopPropagation()}>
//         <button className="self-end bg-red-500 text-white rounded p-1" onClick={onClose}>X</button>
//         <h2 className="text-lg font-semibold text-gray-800 mb-3">Request Campaign in Your Area</h2>
//         <form onSubmit={handleFormSubmit} className="flex flex-col gap-2 w-full">
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700">Email</label>
//             <input
//               type="email"
//               className="border rounded px-2 py-1 text-sm text-gray-800"
//               placeholder="Your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700">Location</label>
//             <input
//               type="text"
//               className="border rounded px-2 py-1 text-sm text-gray-800"
//               placeholder="Your location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700">Contact Number</label>
//             <input
//               type="tel"
//               className="border rounded px-2 py-1 text-sm text-gray-800"
//               placeholder="Contact number"
//               value={contactNumber}
//               onKeyPress={(e) => {
//                 const keyCode = e.keyCode || e.which;
//                 const keyValue = String.fromCharCode(keyCode);
//                 const regex = /[0-9]/;
//                 if (!regex.test(keyValue)) {
//                   e.preventDefault();
//                 }
//               }}
//               onChange={handleContactNumberChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700">Issue</label>
//             <textarea
//               className="border rounded px-2 py-1 text-sm text-gray-800"
//               placeholder="Describe your issue"
//               rows="2"
//               value={issue}
//               onChange={(e) => setIssue(e.target.value)}
//             ></textarea>
//           </div>
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700">Attach Image</label>
//             <input
//               type="file"
//               className="border rounded px-2 py-1 text-sm text-gray-800"
//               accept="image/*"
//               onChange={handleFileInputChange}
//             />
//           </div>
//           <button className="mt-3 py-2 px-8 w-full bg-green-700 text-white rounded hover:bg-green-600 text-sm">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
// const Profile = () => {
//   const { id } = useParams();
//   const [isRequestFormVisible, setRequestFormVisible] = useState(false);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/socialgroup/${id}`);
//         setUserData(response.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, [id]);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   const hardcodedReviews = [
//     { review: "This campaign made a huge difference in our community. Highly recommend supporting them!", rating: 5 },
//     { review: "The initiative taken by this group is commendable. They truly care about making a positive impact.", rating: 4.5 }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-white overflow-hidden rounded-lg relative">
//       <div className="relative">
//         <img
//           className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-t-lg"
//           src={`/assets/${userData.banner}`}
//           alt="Header"
//         />
//         <div className="absolute inset-0 flex justify-center items-center">
//           <div className="relative mt-24 sm:mt-32 md:mt-40 lg:mt-48">
//             <div className="relative">
//               <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden rounded-full">
//                 <img
//                   className="w-full h-full object-cover rounded-full border-4 border-white"
//                   src={`/assets/${userData.image}`}
//                   alt="Profile"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="text-center  mt-20 sm:mt-24 md:mt-28 lg:mt-32 font-josefin-sans">
//         <div className="flex justify-center items-center space-x-2">
//           <h2 className="lg:text-lg sm:text-2xl md:text-3xl font-semibold">{userData.name}</h2>
//         </div>

//         <div className="mt-5 flex justify-center space-x-4">
//           <div className="text-center">
//             <span className="block text-lg font-bold">5</span>
//             <span className="text-gray-500">Campaigns</span>
//           </div>
//           <button
//             type="button"
//             className="font-josefin-sans text-sm sm:text-base font-semibold text-white bg-gray-700 p-2 sm:p-3 md:p-4 rounded hover:rounded-full border-2 border-gray-700"
//             onClick={() => setRequestFormVisible(true)}
//           >
//             Request
//           </button>
//         </div>
//       </div>

//       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg">
//         <div className="bg-navygreen-25 p-4 rounded-lg shadow-md overflow-auto max-h-80">
//           <h3 className="text-lg font-josefin-sans font-semibold mb-2 text-gray-900">Initiative</h3>
//           <p className="text-gray-700">
//             {userData.initiative}
//           </p>
//         </div>
//         <div className="bg-navygreen-25 p-4 rounded-lg shadow-md overflow-auto max-h-80">
//           <h3 className="text-lg font-josefin-sans font-semibold mb-2 text-black">Ratings & Trust</h3>
//           <div className="mt-4">
//             <h4 className="text-md font-josefin-sans font-semibold text-black">User Reviews:</h4>
//             <ul className="list-inside list-none font-josefin-sans text-black">
//               {hardcodedReviews.map((review, index) => (
//                 <li key={index} className="mt-2">
//                   <p className="mb-1">&#8220;{review.review}&#8221;</p>
//                   <div className="flex items-center">
//                     {[...Array(5)].map((star, index) => (
//                       <svg key={index} className={`w-5 h-5 ${index < review.rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
//                       </svg>
//                     ))}
//                     <span className="ml-2 text-gray-600">({review.rating})</span>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {isRequestFormVisible && (
//         <RequestCampaignForm onClose={() => setRequestFormVisible(false)} socialGroupId={id} />
//       )}
//     </div>
//   );
// };

// export default Profile;
import React, { useState } from 'react';
import RatingBg from '../images/rating-tree.jpg';

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([
    { type: 'expert', text: 'Great project!', rating: 5 },
    { type: 'expert', text: 'Highly recommend.', rating: 5 },
    { type: 'citizen', text: 'Loved it!', rating: 5 },
  ]);
  const [newReview, setNewReview] = useState({ text: '', rating: 5 });
  const [showForm, setShowForm] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ text: '', rating: 5 });
    setShowForm(false);
  };

  const handleRatingClick = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleRatingHover = (rating) => {
    setHoverRating(rating);
  };

  const handleRatingHoverLeave = () => {
    setHoverRating(0);
  };

  return (
    <div id="reviews" className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      {!showForm ? (
        <>
          <div className="flex justify-between items-center mb-4 p-4 border rounded-lg shadow-md">
            <div className="flex items-center">
              <img src={RatingBg} alt="Rating Tree" className="w-12 h-12" />
              <div className="ml-4">
                <div className="flex space-x-2">
                  <span className="text-gray-500">3 Total Reviews</span>
                  <span className="text-gray-500">2 Expert's Reviews</span>
                  <span className="text-gray-500">1 Citizen's Reviews</span>
                </div>
              </div>
            </div>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-full"
              onClick={() => setShowForm(true)}
            >
              Write a review
            </button>
          </div>

          {reviews.map((review, index) => (
            <div key={index} className="mb-4 p-4 border rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="text-green-500 text-base">
                  {'🌱'.repeat(review.rating)}
                </div>
              </div>
              <p className="mt-2">{review.text}</p>
            </div>
          ))}
        </>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mb-4 p-4 border rounded-lg shadow-md bg-cover bg-center"
          style={{ backgroundImage: `url(${RatingBg})` }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Rating:</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className={`text-xl cursor-pointer border-2 p-1 rounded-full 
                    ${hoverRating >= star || newReview.rating >= star ? 'text-green-500 border-green-500' : 'text-gray-300 border-transparent'}
                  `}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => handleRatingHover(star)}
                  onMouseLeave={handleRatingHoverLeave}
                >
                  🌱
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Review:</label>
            <textarea
              name="text"
              value={newReview.text}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              placeholder="Tell others what you think about this project. Would you recommend it and why?"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-500 text-white py-2 px-4 rounded-full"
              onClick={() => setShowForm(false)}
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-full"
            >
              Submit Review
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReviewComponent;
