// import React from 'react';

// const ProfilePage = ({ profile, onClose }) => {
//   // Add default values for profile data if undefined
//   const avatar = profile?.avatar || 'path_to_default_avatar.jpg';
//   const name = profile?.name || 'Unknown User';
//   const type = profile?.type || 'User';

//   return (
//     <div className="w-full p-4 flex flex-col items-start">
//       <div className="flex mb-11 w-full">
//         <div className="w-1/3 h-40 flex-shrink-0 flex items-center justify-center mr-6">
//           <div className="w-36 h-36 bg-gray-200 rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-400 to-red-500 flex items-center justify-center">
//             <img
//               src={avatar}
//               alt={name}
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </div>

//         <div className="w-2/3 flex-grow flex flex-col justify-between">
//           <div>
//             <h2 className="text-xl font-semibold">{name}</h2>
//             <p className="text-gray-500">{type}</p>
//             <div className="flex space-x-6 text-sm mt-2">
//               <span><strong>100</strong> posts</span>
//               <span><strong>300</strong> followers</span>
//               <span><strong>250</strong> following</span>
//             </div>
//             <p className="text-gray-700 mt-2">Bio about the user goes here...</p>
//             <p className="text-gray-700 mt-2">Justice - Humanity - Self Esteem</p>
//           </div>
//           <p className="text-gray-700 mt-2">Official Instagram account of {name}</p>
//         </div>
//       </div>

//       <div className="flex space-x-4 justify-center border-t border-gray-300 pt-4 w-full mt-4">
//         <button className="text-black font-medium">Posts</button>
//         <button className="text-gray-400">Video</button>
//         <button className="text-gray-400">Adoption</button>
//       </div>

//       <div className="grid grid-cols-3 gap-4 mt-4 w-full">
//         <div className="h-60 bg-gray-300 rounded-lg"></div>
//         <div className="h-60 bg-gray-300 rounded-lg"></div>
//         <div className="h-60 bg-gray-300 rounded-lg"></div>
//       </div>

//       <button onClick={onClose} className="mt-4 text-blue-500">Close Profile</button>
//     </div>
//   );
// };

// export default ProfilePage;
// ProfilePage.js
import React, { useEffect, useState } from 'react';
import useProfile from '../../hooks/useSocialmediaProfile';
import useFollowUser from '../../hooks/useMediaFollow';
import { useLocation } from 'react-router-dom';
import useFetchUserLocalStorage from '../../hooks/useFetchUserLocalStorage';
import Button from '../button';
import PostCard from './explore-card';
import PostModal from './post-modal'; // Import PostModal (assumed)

const ProfilePage = ({ onClose }) => {
  const location = useLocation();
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

      // Update followers count dynamically
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
    <div className="w-full p-4 flex flex-col items-start">
      <div className="flex flex-col lg:flex-row mb-6 w-full items-center">
        <div className="w-1/3 h-40 flex-shrink-0 flex items-center justify-center mr-6">
          <div className="w-36 bg-gray-200 rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-400 to-red-500">
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
      <div className="grid-container mt-6 ml-7 h-[80vh] overflow-y-scroll no-scrollbar ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            video={post.video}
            images={post.images}
            isAdoption={post.postType === 'adoption'}
            onClick={() => setSelectedPost(post)} // Open post modal
          />
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

      <button onClick={onClose} className="mt-1 text-blue-500">Close</button>
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

//       // Update followers count dynamically
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
//             <h2 className="text-xl font-semibold flex items-center gap-2">
//       <span>{name}</span>
//       {currentId !== currentUserId && (
//         <Button
//           text={followLoading ? 'Loading...' : isFollowing ? 'Unfollow' : 'Follow'}
//           className="py-2"
//           onClick={handleFollow}
//           disabled={followLoading}
//         />
//       )}
//     </h2>

//           <p className="text-gray-500">{user.email}</p>
//           <div className="flex space-x-6 text-sm mt-2">
//             <span><strong>{posts.length}</strong> posts</span>
//             <span><strong>{socialMedia.followersCount}</strong> followers</span>
//             <span><strong>{socialMedia.followingCount}</strong> following</span>
//           </div>
//           <p className="text-gray-700 mt-2">{user.bio || 'No bio available'}</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-3 gap-4 mt-4 w-full">
//         {posts.map((post, index) => (
//           <div key={index} className="h-60 bg-gray-300 rounded-lg">
//             <p>{post.caption}</p>
//           </div>
//         ))}
//       </div>

//       <button onClick={onClose} className="mt-4 text-blue-500">Close Profile</button>
//     </div>
//   );
// };

// export default ProfilePage;
