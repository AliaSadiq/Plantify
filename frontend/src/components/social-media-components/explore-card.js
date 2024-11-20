import React from 'react';

const PostCard = ({ images, video, isAdoption, onClick }) => {
  const isVideo = (fileName) => {
    return fileName && (fileName.endsWith('.mp4') || fileName.endsWith('.mov'));
  };

  return (
    <div className="w-88 h-60 overflow-hidden bg-gray-100 cursor-pointer rounded-pl shadow-sm" onClick={onClick}>
      {/* Check if the post has a video based on file extension */}
      {video && isVideo(video) ? (
        <video
          src={`/assets/${video}`}
          className="object-cover w-full h-full"
          muted
          onMouseOver={(e) => e.target.play()}
          onMouseOut={(e) => e.target.pause()}
          loop
     
        />
      ) : (
        // If it's not a video, render multiple images
        images && images.length > 0 ? (
          images.map((img, index) => (
            <img key={index} src={`/assets/${img}`} alt={`Post image ${index}`} className="object-cover w-full h-full" />
          ))
        ) : (
          <div>No images available</div> // Optional fallback
        )
      )}

      {/* If post type is 'adoption', show adoption info */}
      {isAdoption && <div className="text-sm text-gray-700">Adoption Available</div>}
    </div>
  );
};

export default PostCard;
