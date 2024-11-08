import React, { useState } from 'react';
import PostCard from './explore-card';
import PostModal from './post-modal';

const ExplorePage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Sample posts array
  const posts = [
    { id: 1, src: '../.././images/carousel-1.jpeg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
    { id: 2, src: '../.././images/carousel-1.jpeg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
    { id: 3, src: '../.././images/carousel-1.jpeg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
    { id: 4, src: 'path_to_image1.jpg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
    { id: 5, src: 'path_to_image1.jpg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
    { id: 6, src: 'path_to_image1.jpg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
    { id: 7, src: 'path_to_image1.jpg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
    { id: 8, src: 'path_to_image1.jpg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
    { id: 9, src: '../.././images/carousel-1.jpeg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
    // Add more posts as needed
  ];

  return (
    <div className="p-4 w-full ">
    <div className="grid-container h-[80vh] overflow-y-scroll no-scrollbar mb-0">
        <div className="grid grid-cols-3 gap-1">
          {posts.map(post => (
            <PostCard key={post.id} src={post.src} type={post.type} onClick={() => setSelectedPost(post)} />
          ))}
        </div>
      </div>
      
      {/* Modal for selected post */}
      {selectedPost && <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </div>
  );
};

export default ExplorePage;

// import React, { useState, useEffect, useRef } from 'react';
// import PostCard from './explore-card';
// import PostModal from './post-modal';

// const ExplorePage = () => {
//   const [selectedPost, setSelectedPost] = useState(null);

//   // Sample posts array
//   const [posts, setPosts] = useState([
//     { id: 1, src: '../.././images/carousel-1.jpeg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
//     { id: 2, src: '../.././images/carousel-1.jpeg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
//     { id: 3, src: '../.././images/carousel-1.jpeg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
//     { id: 4, src: 'path_to_image1.jpg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
//     { id: 5, src: 'path_to_image1.jpg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
//     { id: 6, src: 'path_to_image1.jpg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
//     { id: 7, src: 'path_to_image1.jpg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
//     { id: 8, src: 'path_to_image1.jpg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
//     { id: 9, src: '../.././images/carousel-1.jpeg', type: 'image', caption: 'Nice day out!', comments: [{ user: 'user1', text: 'Love it!' }] },
//     // Add more posts as needed
//   ]);
//   const [isLoading, setIsLoading] = useState(false);
//   const loadMoreRef = useRef(null); 
//    // Load more posts when the observer triggers this function
//    const loadMorePosts = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setPosts(prevPosts => [
//         ...prevPosts,
//         { id: prevPosts.length + 1, src: '../.././images/carousel-1.jpeg', type: 'image', caption: `More posts ${prevPosts.length + 1}`, comments: [{ user: 'user1', text: 'Awesome!' }] },
//         // Add more sample posts as needed
//       ]);
//       setIsLoading(false);
//     }, 1000); // Simulate network delay
//   };

//   // Set up IntersectionObserver to load more posts when reaching the end
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           loadMorePosts();
//         }
//       },
//       { threshold: 1 }
//     );

//     if (loadMoreRef.current) observer.observe(loadMoreRef.current);

//     return () => {
//       if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
//     };
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-semibold mb-4">Explore</h1>

//       <div className="h-[80vh] overflow-y-scroll no-scrollbar">
//         {/* Post grid */}
//         <div className="grid grid-cols-3 gap-0">
//           {posts.map(post => (
//             <PostCard key={post.id} src={post.src} type={post.type} onClick={() => setSelectedPost(post)} />
//           ))}
//         </div>

//         {/* Loading indicator */}
//         {isLoading && <p className="text-center py-4">Loading more posts...</p>}

//         {/* Footer and Load more ref element */}
//         <div ref={loadMoreRef} className="footer mt-4">
//           <footer className="text-center py-4">
//             {/* Footer content */}
//             <p className="text-gray-600">End of content</p>
//           </footer>
//         </div>
//       </div>

//       {/* Modal for selected post */}
//       {selectedPost && <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
//     </div>
//   );
// };

// export default ExplorePage;