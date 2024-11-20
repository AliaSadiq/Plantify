import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './explore-card';
import PostModal from './profile-post-modal';
// import useFetchUserLocalStorage from '../../hooks/useFetchUserLocalStorage';

const ExplorePage = ({profileId}) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  // const userData = useFetchUserLocalStorage();
  const userId=profileId;
  useEffect(() => {
    if (!userId) {
      console.error("User ID is required to fetch posts.");
      return;
    }

    // Fetch posts from the backend API using axios
    axios
      .get('http://localhost:5000/api/post/social-group', {
        headers: { 'x-user-id': userId }, // Include userId in custom headers
      })
      .then((response) => {
        setPosts(response.data); // Assuming response.data contains the posts array
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, [userId]);// Empty dependency array ensures this runs only once on component mount

  return (
    <div className="p-4 w-full">
      <div className="grid-container h-[80vh] overflow-y-scroll no-scrollbar mb-0">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2">
          {posts.map(post => (
        <PostCard
        key={post._id}
        video={post.video} 
        images={post.images} // Pass the full array of images
        type={post.postType}
  
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
