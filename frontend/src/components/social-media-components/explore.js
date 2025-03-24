import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './explore-card';
import PostModal from './post-modal';

const ExplorePage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Fetch posts from the backend API using axios
    axios.get('https://plantify-backend.vercel.app/api/post/getAll') // Replace with your actual endpoint
      .then((response) => {
        setPosts(response.data); 
        console.log(response.data);// Assuming response.data contains the posts array
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <div className="p-4 w-full ">
      <div className="grid-container h-[80vh] overflow-y-scroll no-scrollbar mb-0">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-1 gap-y-1">
          {posts.map(post => (
        <PostCard
        key={post._id}
        video={post.video} 
        images={post.images} // Pass the full array of images
        type={post.postType}
        isAdoption={post.postType === 'adoption'}
        onClick={() => setSelectedPost(post)}
      />
      
          ))}
        </div>
      </div>
      
      {selectedPost && <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </div>
  );
};

export default ExplorePage;
