

// import React from 'react';
// import Slider from 'react-slick';
// import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const PostCard = ({
//   image,
//   likes = 0,
//   comments = 0,
//   author,
//   isVideo,
//   images = [],
//   caption,
//   postType,
//   species,
//   size,
// }) => {
//   // Slider settings for the carousel
//   const sliderSettings = {
//     dots: true,
//     infinite: images?.length > 1,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden relative max-w-lg mb-11 mx-auto">
//       {/* Media Content */}
//       <div className="w-full h-96">
//         {isVideo ? (
//           <video
//             src={`/assets/${image}`} // Adjust path based on your backend setup
//             className="object-cover w-full h-full rounded-lg"
//             controls
//           />
//         ) : images.length > 0 ? (
//           <Slider {...sliderSettings}>
//             {images.map((img, index) => (
//               <div key={index} className="w-full">
//                 <img
//                   src={`/assets/${img}`} // Ensure this matches your image storage path
//                   alt={`Post image ${index + 1}`}
//                   className="object-cover w-full h-96 rounded-lg"
//                 />
//               </div>
//             ))}
//           </Slider>
//         ) : (
//           <img
//             src={`/assets/${image || 'placeholder.jpg'}`} // Fallback image
//             alt="Post"
//             className="object-cover w-full h-96 rounded-lg"
//           />
//         )}
//       </div>

//       {/* Post Details */}
//       <div className="p-4">
//         <div className="flex justify-between items-center">
//           {/* Author Info */}
//           <div className="flex items-center">
//             <img
//               className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
//               src={`/assets/avatars/${author?.avatar || 'default-avatar.jpg'}`} // Fallback avatar
//               alt={author?.username || 'Anonymous'}
//             />
//             <Link
//               to={`/profile/${author?._id || '#'}`}
//               className="ml-2 text-gray-700 font-semibold text-sm sm:text-base"
//             >
//               {author?.username || 'Anonymous'}
//             </Link>
//           </div>

//           {/* Likes and Comments */}
//           <div className="flex space-x-4">
//             <span className="flex items-center text-gray-600 text-xs sm:text-sm">
//               <AiOutlineHeart className="mr-1 text-base sm:text-lg" /> {likes}
//             </span>
//             <span className="flex items-center text-gray-600 text-xs sm:text-sm">
//               <AiOutlineComment className="mr-1 text-base sm:text-lg" /> {comments}
//             </span>
//           </div>
//         </div>

//         {/* Caption */}
//         <p className="text-gray-600 mt-2">{caption}</p>

//         {/* Additional Details for Adoption Posts */}
//         {postType === 'adoption' && (
//           <div className="mt-2">
//             <span className="text-green-600">Species: {species || 'N/A'}</span>
//             <span className="ml-4 text-green-600">Size: {size || 'N/A'}</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PostCard;


import React, { useState } from 'react';
import Slider from 'react-slick';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const PostCard = ({
  image,
  likes = 0,
  comments = 0,
  author,
  isVideo,
  images = [],
  caption,
  postType,
  species,
  size,
  onLike,
  userId,
  onClick// Pass a handler for the like button
}) => {
  const [showMore, setShowMore] = useState(false); // State for "Show More"
  const [likeCount, setLikeCount] = useState(likes.length); // Local like state
  const [liked, setLiked] = useState(likes.includes(userId)); // Track if the user liked the post
  const navigate = useNavigate();
  
  // Slider settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: images?.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Handle like button click
  const handleLike = async () => {
    if (!liked) {
      try {
        await onLike(); // Call the parent like handler
        setLikeCount((prev) => prev + 1); // Increment local like count
        setLiked(true); // Mark as liked
      } catch (error) {
        console.error('Error liking post:', error);
      }
    }
  };

  return (
    <div 
    className="bg-white rounded-lg shadow-md overflow-hidden relative w-full max-w-lg mb-11 mx-auto"
    onClick={onClick} // Trigger the `onClick` handler when the card is clicked
  >
      {/* Media Content */}
      <div className="w-full h-96">
        {isVideo ? (
          <video
            src={`/assets/${image}`} // Adjust path based on your backend setup
            className="object-cover w-full h-full rounded-lg"
            controls
          />
        ) : images.length > 0 ? (
          <Slider {...sliderSettings}>
            {images.map((img, index) => (
              <div key={index} className="w-full">
                <img
                  src={`/assets/${img}`} // Ensure this matches your image storage path
                  alt={`Post image ${index + 1}`}
                  className="object-cover w-full h-96 rounded-lg"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <img
            src={`/assets/${image || 'placeholder.jpg'}`} // Fallback image
            alt="Post"
            className="object-cover w-full h-96 rounded-lg"
          />
        )}
      </div>

      {/* Post Details */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          {/* Author Info */}
          <div className="flex items-center">
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              src={`/assets/avatars/${author?.avatar || 'default-avatar.jpg'}`} // Fallback avatar
              alt={author?.username || 'Anonymous'}
            />
              <h3
                  className="font-medium ml-1 text-sm text-black cursor-pointer hover:underline"
                  onClick={() =>
                    navigate("/plantify-network/profile-socialmedia", {
                      state: { profileData: author },
                    })
                  }
                >
                  {author.username || "Unknown User"}
                </h3>
          </div>

          {/* Likes and Comments */}
          <div className="flex space-x-4">
            {/* <button
              onClick={handleLike} // Trigger the like function
              className={`flex items-center text-xs sm:text-sm ${
                liked ? 'text-red-600' : 'text-gray-600'
              }`}
            >
              <AiOutlineHeart className="mr-1 text-base sm:text-lg" />
              {likeCount}
            </button> */}
              <button
              onClick={handleLike}
              className={`flex items-center text-xs sm:text-sm ${liked ? 'text-red-600' : 'text-gray-600'}`}
            >
              {liked ? (
                <AiFillHeart className="mr-1 text-base sm:text-lg" /> // Filled heart for liked state
              ) : (
                <AiOutlineHeart className="mr-1 text-base sm:text-lg" /> // Outline heart for unliked state
              )}
              {likeCount}
            </button>
            <span className="flex items-center text-gray-600 text-xs sm:text-sm">
              <AiOutlineComment className="mr-1 text-base sm:text-lg" />
              {comments}
            </span>
          </div>
        </div>

        {/* Caption with "Show More" */}
        <p className="text-gray-600 mt-2">
          {showMore ? caption : `${caption.slice(0, 100)}... `}
          {caption.length > 100 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-blue-600 font-semibold"
            >
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          )}
        </p>

        {/* Additional Details for Adoption Posts */}
        {postType === 'adoption' && (
          <div className="mt-2">
            <span className="text-green-600">Species: {species || 'N/A'}</span>
            <span className="ml-4 text-green-600">Size: {size || 'N/A'}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;


// import React from 'react';
// import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
// import { Link } from 'react-router-dom';

// const PostCard = ({ image, likes, comments, author, isVideo, images, caption, postType, species, size }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden relative max-w-lg mb-11 mx-auto">
//       {/* Media Content */}
//       {isVideo ? (
//         <video
//           src={`/assets/${image}`}
//           className="object-cover w-full h-96"
//           controls
//         />
//       ) : images?.length > 0 ? (
//         <div className="carousel">
//           {images.map((img, idx) => (
//             <img key={idx} src={`/assets/${img}`} alt={`Post image ${idx}`} className="w-full h-96 object-cover" />
//           ))}
//         </div>
//       ) : (
//         <img src={image} alt="Post" className="w-full h-96 object-cover" />
//       )
//       }

//       {/* Post Details */}
//       <div className="p-4">
//   <div className="flex justify-between items-center">
//     <div className="flex items-center">
//       <img
//         className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
//         src={`/assets/avatars/${author?.avatar}`}
//         alt={author?.username || 'Anonymous'}
//       />
//       <Link to={`/profile/${author?._id || '#'}`} className="ml-2 text-gray-700 font-semibold text-sm sm:text-base">
//         {author?.username || 'Anonymous'}
//       </Link>
//     </div>
//     <div className="flex space-x-4">
//       <span className="flex items-center text-gray-600 text-xs sm:text-sm">
//         <AiOutlineHeart className="mr-1 text-base sm:text-lg" /> {likes}
//       </span>
//       <span className="flex items-center text-gray-600 text-xs sm:text-sm">
//         <AiOutlineComment className="mr-1 text-base sm:text-lg" /> {comments}
//       </span>
//     </div>
//   </div>
//   <p className="text-gray-600 mt-2">{caption}</p>
//   {postType === 'adoption' && (
//     <div className="mt-2">
//       <span className="text-green-600">Species: {species || 'N/A'}</span>
//       <span className="ml-4 text-green-600">Size: {size || 'N/A'}</span>
//     </div>
//   )}
// </div>

//     </div>
//   );
// };

// export default PostCard;
