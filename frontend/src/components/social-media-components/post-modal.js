import React from 'react';

const PostModal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-2xl p-6 rounded-lg overflow-hidden">
        <button onClick={onClose} className="text-gray-500 text-lg mb-4">Close</button>
        <div className="flex">
          {/* Media Section */}
          <div className="w-2/3 h-full">
            {post.type === 'video' ? (
              <video src={post.src} className="object-cover w-full h-full" controls />
            ) : (
              <img src={post.src} alt="Post" className="object-cover w-full h-full" />
            )}
          </div>
          
          {/* Details Section */}
          <div className="w-1/3 p-4 flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Caption: {post.caption}</h2>
            <div className="overflow-y-auto max-h-64">
              {post.comments.map((comment, index) => (
                <p key={index} className="text-sm text-gray-700 mb-1">
                  <strong>{comment.user}:</strong> {comment.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
