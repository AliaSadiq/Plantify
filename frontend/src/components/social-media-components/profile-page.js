import React, { useEffect, useState } from 'react';
import useProfile from '../../hooks/useSocialmediaProfile';
import useFollowUser from '../../hooks/useMediaFollow';
import { useLocation } from 'react-router-dom';
import useFetchUserLocalStorage from '../../hooks/useFetchUserLocalStorage';
import Button from '../button';
import PostModal from './post-modal';
import PostCard from './explore-card';

const ProfilePage = ({ onClose }) => {
  const location = useLocation();
  const myProfile = location.state?.myProfile || false;

  const userId = useFetchUserLocalStorage();
  const profileFromModal = location.state?.profileData;
  const currentUserId = userId?._id; // Logged-in user ID
  const currentId = profileFromModal ? profileFromModal._id : currentUserId;

  const { profile, loading: profileLoading, error: profileError } = useProfile(currentId);
  const { toggleFollow, loading: followLoading } = useFollowUser();
  const [isFollowing, setIsFollowing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null); // Track selected post for modal

  useEffect(() => {
    if (profile && currentUserId) {
      setIsFollowing(profile.socialMedia.followers.includes(currentUserId));
      setUpdatedProfile(profile);
    }
  }, [profile, currentUserId]);

  const handleFollow = async () => {
    const result = await toggleFollow(currentId, currentUserId);
    if (result && result.following !== undefined) {
      setIsFollowing(result.following);

      setUpdatedProfile((prevProfile) => {
        const updatedFollowersCount = result.following
          ? prevProfile.socialMedia.followersCount + 1
          : prevProfile.socialMedia.followersCount - 1;

        const updatedFollowers = result.following
          ? [...prevProfile.socialMedia.followers, currentUserId]
          : prevProfile.socialMedia.followers.filter((id) => id !== currentUserId);

        return {
          ...prevProfile,
          socialMedia: {
            ...prevProfile.socialMedia,
            followers: updatedFollowers,
            followersCount: updatedFollowersCount,
          },
        };
      });
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/post/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setUpdatedProfile((prevProfile) => ({
          ...prevProfile,
          posts: prevProfile.posts.filter((post) => post._id !== postId),
        }));
        alert('Post deleted successfully!');
      } else {
        alert('Failed to delete the post. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('An error occurred while deleting the post.');
    }
  };

  if (profileLoading) {
    return <p>Loading...</p>;
  }

  if (profileError) {
    return <p>Error loading profile. Please try again.</p>;
  }

  if (!updatedProfile) {
    return <p>No profile found.</p>;
  }

  const { user, socialMedia, posts } = updatedProfile;
  const avatar = user.avatar || 'path_to_default_avatar.jpg';
  const name = user.username || 'Unknown User';

  return (
    <div className="w-full flex flex-col items-start">
      {/* Profile Header */}
      <div className="flex mb-6 mx-4 gap-6 items-center">
        <div className="h-40 items-center justify-center">
          <div className="w-36 h-36 rounded-full overflow-hidden border-2">
            <img src={`/assets/avatars/${avatar}`} alt={name} className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="w-2/3">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span>{name}</span>
            {currentId !== currentUserId && (
              <Button
                text={followLoading ? 'Loading...' : isFollowing ? 'Unfollow' : 'Follow'}
                className="py-2"
                onClick={handleFollow}
                disabled={followLoading}
              />
            )}
          </h2>
          <p className="text-gray-500">{user.email}</p>
          <div className="flex space-x-6 text-sm mt-2">
            <span><strong>{posts.length}</strong> posts</span>
            <span><strong>{socialMedia.followersCount}</strong> followers</span>
            <span><strong>{socialMedia.followingCount}</strong> following</span>
          </div>
          <p className="text-gray-700 mt-2">{user.bio || 'No bio available'}</p>
        </div>
      </div>

      {/* Render Posts */}
      {/* <div className='p-2 w-[600px] mx-8 border-b-[1px] border-gray-600'></div> */}
      <div className="place-self-center grid-container mt-6 lg:ml-0 mx-5 h-[80vh] overflow-y-scroll no-scrollbar">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {posts.map((post) => (
            <div key={post._id} className="relative group">
              <PostCard
                video={post.video}
                images={post.images}
                isAdoption={post.postType === 'adoption'}
                onClick={() => setSelectedPost(post)} // Open post modal
              />
              {/* Show delete button only if `myProfile` is true */}
              {myProfile && (
                <button
                  onClick={() => handleDeletePost(post._id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Post Modal */}
      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)} // Close modal
        />
      )}

      <button onClick={onClose} className="mt-4 text-blue-500">Close</button>
    </div>
  );
};

export default ProfilePage;

// import React, { useEffect, useState } from 'react';
// import useProfile from '../../hooks/useSocialmediaProfile';
// import useFollowUser from '../../hooks/useMediaFollow';
// import { useLocation } from 'react-router-dom';
// import useFetchUserLocalStorage from '../../hooks/useFetchUserLocalStorage';
// import Button from '../button';
// import PostCard from './explore-card';
// import PostModal from './post-modal';

// const ProfilePage = ({ onClose }) => {
//   const location = useLocation();
//   const userId = useFetchUserLocalStorage();
//   const profileFromModal = location.state?.profileData;
//   const currentUserId = userId?._id; // Logged-in user ID
//   const currentId = profileFromModal ? profileFromModal._id : currentUserId;

//   const { profile, loading: profileLoading, error: profileError } = useProfile(currentId);
//   const { toggleFollow, loading: followLoading } = useFollowUser();
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [updatedProfile, setUpdatedProfile] = useState(null);
//   const [selectedPost, setSelectedPost] = useState(null); // Track selected post for modal

//   useEffect(() => {
//     if (profile && currentUserId) {
//       setIsFollowing(profile.socialMedia.followers.includes(currentUserId));
//       setUpdatedProfile(profile);
//     }
//   }, [profile, currentUserId]);

//   const handleFollow = async () => {
//     const result = await toggleFollow(currentId, currentUserId);
//     if (result && result.following !== undefined) {
//       setIsFollowing(result.following);

//       setUpdatedProfile((prevProfile) => {
//         const updatedFollowersCount = result.following
//           ? prevProfile.socialMedia.followersCount + 1
//           : prevProfile.socialMedia.followersCount - 1;

//         const updatedFollowers = result.following
//           ? [...prevProfile.socialMedia.followers, currentUserId]
//           : prevProfile.socialMedia.followers.filter((id) => id !== currentUserId);

//         return {
//           ...prevProfile,
//           socialMedia: {
//             ...prevProfile.socialMedia,
//             followers: updatedFollowers,
//             followersCount: updatedFollowersCount,
//           },
//         };
//       });
//     }
//   };

//   const handleDeletePost = async (postId) => {
//     try {
//       const response = await fetch(`/api/posts/${postId}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         setUpdatedProfile((prevProfile) => ({
//           ...prevProfile,
//           posts: prevProfile.posts.filter((post) => post._id !== postId),
//         }));
//         alert('Post deleted successfully!');
//       } else {
//         alert('Failed to delete the post. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error deleting post:', error);
//       alert('An error occurred while deleting the post.');
//     }
//   };

//   if (profileLoading) {
//     return <p>Loading...</p>;
//   }

//   if (profileError) {
//     return <p>Error loading profile. Please try again.</p>;
//   }

//   if (!updatedProfile) {
//     return <p>No profile found.</p>;
//   }

//   const { user, socialMedia, posts } = updatedProfile;
//   const avatar = user.avatar || 'path_to_default_avatar.jpg';
//   const name = user.username || 'Unknown User';

//   return (
//     <div className="w-full p-4 flex flex-col items-start">
//       <div className="flex mb-6 w-full items-center">
//         <div className="w-1/3 h-40 flex-shrink-0 flex items-center justify-center mr-6">
//           <div className="w-36 h-36 bg-gray-200 rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-400 to-red-500">
//             <img src={`/assets/avatars/${avatar}`} alt={name} className="object-cover w-full h-full" />
//           </div>
//         </div>
//         <div className="w-2/3">
//           <h2 className="text-xl font-semibold flex items-center gap-2">
//             <span>{name}</span>
//             {currentId !== currentUserId && (
//               <Button
//                 text={followLoading ? 'Loading...' : isFollowing ? 'Unfollow' : 'Follow'}
//                 className="py-2"
//                 onClick={handleFollow}
//                 disabled={followLoading}
//               />
//             )}
//           </h2>
//           <p className="text-gray-500">{user.email}</p>
//           <div className="flex space-x-6 text-sm mt-2">
//             <span><strong>{posts.length}</strong> posts</span>
//             <span><strong>{socialMedia.followersCount}</strong> followers</span>
//             <span><strong>{socialMedia.followingCount}</strong> following</span>
//           </div>
//           <p className="text-gray-700 mt-2">{user.bio || 'No bio available'}</p>
//         </div>
//       </div>

//       {/* Render Posts */}
//       <div className="grid-container mt-6 ml-7 h-[80vh] overflow-y-scroll no-scrollbar">
//         <div className="grid grid-cols-3 gap-4">
//           {posts.map((post) => (
//             <PostCard
//               key={post._id}
//               video={post.video}
//               images={post.images}
//               isAdoption={post.postType === 'adoption'}
//               onClick={() => setSelectedPost(post)} // Open post modal
//               onDelete={() => handleDeletePost(post._id)} // Delete post
//             />
//           ))}
//         </div>
//       </div>

//       {/* Post Modal */}
//       {selectedPost && (
//         <PostModal
//           post={selectedPost}
//           onClose={() => setSelectedPost(null)} // Close modal
//         />
//       )}

//       <button onClick={onClose} className="mt-4 text-blue-500">Close</button>
//     </div>
//   );
// };

// export default ProfilePage;
