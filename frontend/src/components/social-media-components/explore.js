import React, { useState } from 'react';
import PostCard from './explore-card';
import PostModal from './post-modal';

const ExplorePage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Sample posts array
  const posts = [
    { id: 1, src: 'path_to_image1.jpg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
    { id: 2, src: 'path_to_video1.mp4', type: 'video', caption: 'Fun times!', comments: [{ user: 'user2', text: 'Wow!' }] },
    // Add more posts as needed
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Explore</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map(post => (
          <PostCard key={post.id} src={post.src} type={post.type} onClick={() => setSelectedPost(post)} />
        ))}
      </div>
      
      {/* Modal for selected post */}
      {selectedPost && <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </div>
  );
};

export default ExplorePage;
