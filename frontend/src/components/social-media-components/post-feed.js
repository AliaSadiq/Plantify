// components/PostFeed.js
import React from 'react';
import PostCard from './post-card';

const posts = [
  { image: "https://via.placeholder.com/400", likes: 632, comments: 64, author: { name: "Dean Winchester", avatar: "https://via.placeholder.com/150" } },
  { image: "https://via.placeholder.com/400", likes: 72, comments: 24, author: { name: "Jesse Pinkman", avatar: "https://via.placeholder.com/150" } },
  // Add more posts here
];

const PostFeed = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {posts.map((post, idx) => (
        <PostCard key={idx} image={post.image} likes={post.likes} comments={post.comments} author={post.author} />
      ))}
    </div>
  );
};

export default PostFeed;
