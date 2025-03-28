// import React, { useState } from 'react';
// import PostCard from './post-card';

// const posts = [
//   { image: "https://via.placeholder.com/400", likes: 632, comments: 64, author: { name: "Dean Winchester", avatar: "https://via.placeholder.com/150" } },
//   { image: "https://via.placeholder.com/400", likes: 72, comments: 24, author: { name: "Jesse Pinkman", avatar: "https://via.placeholder.com/150" } },
//   // More posts...
// ];

// const PostFeed = () => {
//   const [filter, setFilter] = useState('all');

//   return (
//     <div className="w-10/12 max-w-lg  mx-auto">
//       <div className="flex justify-center space-x-8 bg-transparent p-4">
//         {['Following', 'Adoption', 'Social'].map((option) => (
//           <button
//             key={option}
//             className={`px-4 py-2 text-sm font-semibold ${filter === option.toLowerCase() 
//               ? 'border-b-4 border-green-600 text-green-600' 
//               : 'text-gray-600 hover:text-green-600'}`}
//             onClick={() => setFilter(option.toLowerCase())}
//           >
//             {option}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 gap-4 mt-6">
//         {posts.map((post, idx) => (
//           <PostCard
//             key={idx}
//             image={post.image}
//             likes={post.likes}
//             comments={post.comments}
//             author={post.author}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PostFeed;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './post-card';
import useFetchUserLocalStorage from '../../hooks/useFetchUserLocalStorage';
import PostModal from './post-modal';
const PostFeed = () => {
  const [filter, setFilter] = useState('following');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const currentUserId = useFetchUserLocalStorage();
  const userId = currentUserId?._id;
  const [selectedPost, setSelectedPost] = useState(null);


  useEffect(() => {
    const fetchPosts = async () => {
      if (!userId) return; // Wait until userId is available
  
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://plantify-backend.vercel.app/api/post/filter', {
          params: { filter, userId },
        });
        setPosts(response.data);
        console.log(response.data);
      } catch (err) {
        setError('Failed to fetch posts. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchPosts();
  }, [filter, userId]);
  

  // Function to handle like requests
  const handleLike = async (postId) => {
    if (!userId) {
      console.error('User is not logged in.');
      return;
    }
    console.log("Liking post with ID:", postId, "by user:", userId); 
    
    try {
      // Send a like request to the backend
      const response = await axios.post('https://plantify-backend.vercel.app/api/post/like', {
        postId,
        userId,
      });
  
      if (response.status === 200) {
        const updatedPost = response.data; // This will include the updated `likes` array
  
        // Optimistically update the likes in the state
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post._id === postId
              ? {
                  ...post,
                  likes: updatedPost.likes, // Update likes array with the new value
                }
              : post
          )
        );
      }
    } catch (err) {
      console.error('Failed to like the post:', err);
    }
  };
  const handlePostClick = (post) => {
    setSelectedPost(post);
  };
  
  return (
    <div className="lg:w-10/12 w-full mx-10">
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-8 bg-transparent p-4">
        {['Following', 'Adoption', 'Social'].map((option) => (
          <button
            key={option}
            className={`px-4 py-2 text-sm font-semibold ${
              filter === option.toLowerCase()
                ? 'border-b-4 border-green-600 text-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
            onClick={() => setFilter(option.toLowerCase())}
          >
            {option}
          </button>
        ))}
      </div>
  
      {/* Error and Loading State */}
      {loading && <div>Loading posts...</div>}
      {error && <div className="text-red-500">{error}</div>}
  
      {/* No Posts Message */}
      {!loading && !error && posts.length === 0 && (
        <div className="text-center text-gray-500 mt-6">
          {filter === 'following' && "You're not following anyone yet. Follow users to see their posts."}
          {filter === 'adoption' && 'No posts related to adoption at the moment.'}
          {filter === 'social' && 'No social posts available right now.'}
        </div>
      )}
  
      {/* Post Cards */}
      <div className="grid grid-cols-1 gap-4 mt-6">
        {posts.map((post) => (
          <PostCard
            key={post._id} // Use unique `_id`
            image={post.images?.[0] || post.video}
            images={post.images}
            likes={post.likes || 0} // Fallback to 0
            comments={post.comments || 0} // Fallback to 0
            author={post.author}
            caption={post.caption}
            postType={post.postType}
            species={post.species}
            size={post.size}
            isVideo={!!post.video} // Convert to boolean
            onLike={() => handleLike(post._id)}
            userId
            onClick={() => handlePostClick(post)}
          />
        ))}
      </div>
  
      {/* Post Modal */}
      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)} // Close modal
        />
      )}
    </div>
  );
  
};

export default PostFeed;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PostCard from './post-card';
// import useFetchUserLocalStorage from '../../hooks/useFetchUserLocalStorage';

// const PostFeed = () => {
//   const [filter, setFilter] = useState('following');
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//  const  currentUserId=useFetchUserLocalStorage();
//  const userId=currentUserId?._id;
//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await axios.get('https://plantify-backend.vercel.app/api/post/filter', {
//           params: { filter, userId },
//         });
//         setPosts(response.data);
//         console.log(response.data);
//       } catch (err) {
//         setError('Failed to fetch posts. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, [filter, userId]);

//   return (
//     <div className="w-10/12 max-w-lg mx-auto">
//       {/* Filter Buttons */}
//       <div className="flex justify-center space-x-8 bg-transparent p-4">
//         {['Following', 'Adoption', 'Social'].map((option) => (
//           <button
//             key={option}
//             className={`px-4 py-2 text-sm font-semibold ${
//               filter === option.toLowerCase()
//                 ? 'border-b-4 border-green-600 text-green-600'
//                 : 'text-gray-600 hover:text-green-600'
//             }`}
//             onClick={() => setFilter(option.toLowerCase())}
//           >
//             {option}
//           </button>
//         ))}
//       </div>

//       {/* Error and Loading State */}
//       {loading && <div>Loading posts...</div>}
//       {error && <div className="text-red-500">{error}</div>}

//       {/* Post Cards */}
//       <div className="grid grid-cols-1 gap-4 mt-6">
//       {posts.map(post => (
//   <PostCard
//     key={post._id} // Use unique `_id`
//     image={post.images?.[0] || post.video}
//     images={post.images}
//     likes={post.likes || 0} // Fallback to 0
//     comments={post.comments || 0} // Fallback to 0
//     author={post.author}
//     caption={post.caption}
//     postType={post.postType}
//     species={post.species}
//     size={post.size}
//     isVideo={!!post.video} // Convert to boolean
//   />
// ))}
//       </div>
//     </div>
//   );
// };

// export default PostFeed;
