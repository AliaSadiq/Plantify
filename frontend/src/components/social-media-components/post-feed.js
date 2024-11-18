import React, { useState } from 'react';
import PostCard from './post-card';

const posts = [
  { image: "https://via.placeholder.com/400", likes: 632, comments: 64, author: { name: "Dean Winchester", avatar: "https://via.placeholder.com/150" } },
  { image: "https://via.placeholder.com/400", likes: 72, comments: 24, author: { name: "Jesse Pinkman", avatar: "https://via.placeholder.com/150" } },
  // More posts...
];

const PostFeed = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="w-10/12 max-w-lg  mx-auto">
      <div className="flex justify-center space-x-8 bg-transparent p-4">
        {['Following', 'Adoption', 'Social'].map((option) => (
          <button
            key={option}
            className={`px-4 py-2 text-sm font-semibold ${filter === option.toLowerCase() 
              ? 'border-b-4 border-green-600 text-green-600' 
              : 'text-gray-600 hover:text-green-600'}`}
            onClick={() => setFilter(option.toLowerCase())}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 mt-6">
        {posts.map((post, idx) => (
          <PostCard
            key={idx}
            image={post.image}
            likes={post.likes}
            comments={post.comments}
            author={post.author}
          />
        ))}
      </div>
    </div>
  );
};

export default PostFeed;
