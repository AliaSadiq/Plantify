import React from 'react';

const PostCard = ({ src, type, onClick }) => {
  return (
    <div className="w-full h-full overflow-hidden rounded-lg bg-gray-100 cursor-pointer" onClick={onClick}>
      {type === 'video' ? (
        <video
          src={src}
          className="object-cover w-full h-full"
          muted
          onMouseOver={e => e.target.play()}
          onMouseOut={e => e.target.pause()}
          loop
        />
      ) : (
        <img src={src} alt="Post" className="object-cover w-full h-full" />
      )}
    </div>
  );
};

export default PostCard;
