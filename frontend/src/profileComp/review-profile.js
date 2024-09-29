import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ReviewComponent = ({ groupId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ text: '', rating: 5 });
  const [showForm, setShowForm] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
   const [userId, setUserId] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user._id) {
      setUserId(user._id);
      console.log("Fetched userId from localStorage:", user._id);
    }
  }, []);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    axios.get(`${apiUrl}/api/socialgroup-review/${groupId}`)
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, [groupId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const user = JSON.parse(localStorage.getItem('user'));
    const reviewData = {
      ...newReview,
      user: user._id,
    };
  
    console.log('Review Data:', reviewData);
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    axios.post(`${apiUrl}/api/socialgroup-review/${groupId}/review`, reviewData)
      .then(response => {
        setReviews([...reviews, response.data]);
        setNewReview({ message: '', rating: 5 });
        setShowForm(false);
        alert('Review submitted successfully!');
      })
      .catch(error => {
        console.error('Error adding review:', error);
      });
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
              <img src={`${process.env.PUBLIC_URL}/assets/images//rating-tree.jpg`} alt="Rating Tree" className="w-12 h-12" />
              <div className="ml-4">
                <div className="flex space-x-2">
                  <span className="text-gray-500">{reviews.length} Total Reviews</span>
                  {/* <span className="text-gray-500">{reviews.filter(review => review.type === 'expert').length} Expert's Reviews</span>
                  <span className="text-gray-500">{reviews.filter(review => review.type === 'citizen').length} Citizen's Reviews</span> */}
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
              <p className="mt-2">{review.message}</p>
            </div>
          ))}
        </>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mb-4 p-4 border rounded-lg shadow-md bg-cover bg-center"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/rating-tree.jpg'})` }}
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
              name="message"
              value={newReview.message}
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

