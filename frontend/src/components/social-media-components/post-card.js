// components/PostCard.js
import React from 'react';

const PostCard = ({ image, likes, comments, author }) => {
  return (
    <div className="bg-white w-full h-64 rounded-lg shadow-md overflow-hidden">
      <img src={image} alt="Post" className="w-full h-full object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="w-8 h-8 rounded-full" src={author.avatar} alt={author.name} />
            <p className="ml-2">{author.name}</p>
          </div>
          <div className="flex space-x-4">
            <span>{likes} ❤️</span>
            <span>{comments} 💬</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
