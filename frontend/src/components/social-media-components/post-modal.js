// import React, { useState } from 'react';
// import Slider from 'react-slick';

// const PostModal = ({ post, onClose }) => {
//   // Keep hooks at the top level
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Return null if no post is provided
//   if (!post) return null;

//   // Slick carousel settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     beforeChange: (current, next) => setCurrentImageIndex(next),
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
//       <div className="bg-white w-full max-w-2xl p-6 rounded-lg overflow-hidden">
//         <button onClick={onClose} className="text-gray-500 text-lg mb-4">Close</button>
        
//         <div className="flex">
//           {/* Media Section with Carousel */}
//           <div className="w-2/3 h-full">
//             {post.images?.length > 0 ? (
//               <Slider {...settings}>
//                 {post.images.map((img, index) => (
//                   <img key={index} src={`/assets/${img}`} className="object-cover w-full h-full" />
//                 ))}
//               </Slider>
//             ) : (
//               <img src={`/assets/${post.images?.[0]}`} alt="Post" className="object-cover w-full h-full" />
//             )}
//           </div>

//           {/* Details Section */}
//           <div className="w-1/3 p-4 flex flex-col">
//             <h2 className="text-lg font-semibold mb-2">Caption: {post.caption}</h2>
//             <div className="overflow-y-auto max-h-64">
//               {post.comments?.map((comment, index) => (
//                 <p key={index} className="text-sm text-gray-700 mb-1">
//                   <strong>{comment.user}:</strong> {comment.text}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostModal;
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Slick theme CSS
import { useNavigate } from 'react-router-dom';

const PostModal = ({ post, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();
  if (!post) return null; // Avoid rendering if no post data is passed

  // Slider settings
  const settings = {
    dots: true,
    infinite: post.images?.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentImageIndex(next),
  };

  // Check if there are adoption fields
  const isAdoptionPost = post.postType === 'adoption';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      {/* Modal container */}
      <div
        className={`bg-white p-6 rounded-lg overflow-hidden ${
          isAdoptionPost? 'w-full max-w-4xl' : 'w-full max-w-2xl'
        }`}
      >
        <button
          onClick={onClose}
          className="text-gray-500 text-lg mb-4 focus:outline-none hover:text-gray-700"
        >
          Close
        </button>

        <div className="flex">
          {/* Left Section: Image Carousel */}
          <div className="w-2/3 h-full flex-shrink-0">
            {post.images?.length > 0 ? (
              <Slider {...settings}>
                {post.images.map((img, index) => (
                  <div key={index} className="w-full">
                    <img
                      src={`/assets/${img}`} // Ensure the path matches your backend setup
                      alt={`Slide ${index + 1}`}
                      className="object-cover w-full h-[400px] rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <img
                src="/assets/placeholder.jpg" // Fallback image if no images are provided
                alt="No images available"
                className="object-cover w-full h-[400px] rounded-lg"
              />
            )}
          </div>

          {/* Right Section: Caption and Comments */}
          <div className="w-1/3 p-4 flex flex-col">
            {/* Right Section: Profile Information */}
            <div className="flex items-center mb-4">
            <img
              src={`/assets/avatars/${post.author.avatar || 'placeholder-profile.png'}`}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div>
              <h3
                className="font-medium text-sm text-blue-600 cursor-pointer hover:underline"
                onClick={() => {
                  navigate('/plantify-network/profile-socialmedia', { state: { profileData: post.author } });
                }}
                
         
                 // Redirect to profile
              >
                {post.author.username || 'Unknown User'}
              </h3>
              {/* <p className="text-gray-500 text-xs">{post.author.bio || 'No bio available'}</p> */}
            </div>
          </div>

            <h2 className="text-sm mb-4">{post.caption || 'No Caption'}</h2>
            {/* Extra Fields for Adoption */}
            {isAdoptionPost && (
              <div className="mb-4">
                <h3 className="text-md font-bold mb-2">Adoption Details:</h3>
                {post.species && (
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>Species:</strong> {post.species}
                  </p>
                )}
                {post.size && (
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>Size:</strong> {post.size}
                  </p>
                )}
                {post.fertilizerUsed && (
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>Fertilizer Used:</strong> {post.fertilizerUsed}
                  </p>
                )}
                {post.isAdopted !== undefined && (
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>Adopted:</strong> {post.isAdopted ? 'Yes' : 'No'}
                  </p>
                )}
              </div>
            )}

            {/* Comments Section */}
            <div className="mt-auto overflow-y-auto max-h-64">
              <h3 className="font-medium mb-2">Comments:</h3>
              {post.comments?.length > 0 ? (
                post.comments.map((comment, index) => (
                  <p key={index} className="text-sm text-gray-700 mb-1">
                    <strong>{comment.user}:</strong> {comment.text}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-500">No comments available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
