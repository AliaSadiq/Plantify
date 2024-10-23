import React from 'react';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'; // Import icons from a popular icons library

const PostCard = ({ image, likes, comments, author }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative max-w-lg mx-auto"> {/* Increased max width */}
      {/* Instagram-style square image */}
      <img src={image} alt="Post" className="w-full h-96 object-cover" /> {/* Increased height to h-96 */}
      
      {/* Post details: Author, Likes, and Comments */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="w-14 h-14 rounded-full" src={author.avatar} alt={author.name} /> {/* Increased avatar size */}
            <p className="ml-2 text-gray-700 font-semibold text-base">{author.name}</p> {/* Slightly larger font */}
          </div>
          <div className="flex space-x-4">
            {/* Added Like and Comment icons */}
            <span className="flex items-center text-gray-600 text-sm">
              <AiOutlineHeart className="mr-1 text-lg" /> {/* Like icon */}
              {likes}
            </span>
            <span className="flex items-center text-gray-600 text-sm">
              <AiOutlineComment className="mr-1 text-lg" /> {/* Comment icon */}
              {comments}
            </span>
          </div>
        </div>
      </div>

      {/* Instagram-style tag or label */}
      <div className="absolute top-0 right-0 m-2 p-1 bg-green-200 rounded-full text-xs">Plantify 🌱</div>
    </div>
  );
};

export default PostCard;
