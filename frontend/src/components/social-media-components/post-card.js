// PostCard.js
import React from 'react';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';

const PostCard = ({ image, likes, comments, author, onProfileClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative max-w-lg mx-auto">
      <img src={image} alt="Post" className="w-full h-96 object-cover" />
      
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="w-14 h-14 rounded-full" src={author.avatar} alt={author.name} />
            {/* Author's name triggers profile view */}
            <p onClick={onProfileClick} className="ml-2 text-gray-700 font-semibold text-base cursor-pointer">{author.name}</p>
          </div>
          <div className="flex space-x-4">
            <span className="flex items-center text-gray-600 text-sm">
              <AiOutlineHeart className="mr-1 text-lg" /> {likes}
            </span>
            <span className="flex items-center text-gray-600 text-sm">
              <AiOutlineComment className="mr-1 text-lg" /> {comments}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 m-2 p-1 bg-green-200 rounded-full text-xs">Plantify 🌱</div>
    </div>
  );
};

export default PostCard;
