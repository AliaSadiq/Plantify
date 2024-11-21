
import React, { useState, useEffect }  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS
import { useNavigate } from "react-router-dom";
import useFetchUserLocalStorage from '../../hooks/useFetchUserLocalStorage';
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/24/solid";




const PostModal = ({ post, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const navigate = useNavigate();

  const currentUser =   useFetchUserLocalStorage();


  // Slider settings
  const settings = {
    dots: true,
    infinite: post.images?.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentImageIndex(next),
  };

  const isAdoptionPost = post.postType === "adoption";
  useEffect(() => {
    if (!post) return;
    // Fetch comments for the post
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/post-comment/${post._id}`);
        setComments(response.data.comments);
      } catch (error) {
        console.error("Failed to fetch comments", error);
      }
    };

    fetchComments();
  }, [post._id]);

  const handleAddComment = async () => {
    if (!currentUser || !currentUser._id) {
      console.error("User not authenticated.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/post-comment", {
        postId: post?._id,
        comment: newComment,
        userId: currentUser._id, // Pass userId from localStorage
      });

      setComments((prev) => [response.data.comment, ...prev]);
      setNewComment(""); // Clear the input field
    } catch (error) {
      console.error("Failed to add comment", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div
        className={`bg-white px-4 pb-6 pt-4 rounded-lg overflow-hidden ${
          isAdoptionPost ? "w-full max-w-4xl" : "w-full max-w-4xl"
        }`}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 p-2 rounded-full focus:outline-none hover:bg-navygreen-100"
          >
            <XMarkIcon className="w-6"/>
          </button>

          <div className="flex">
            {/* Left Section: Image/Video Carousel */}
            <div className="h-full basis-2/5">
              {post.images?.length > 0 || post.video ? (
                <Slider {...settings}>
                  {post.video ? (
                    <div key="video" className="w-full">
                      <video
                        src={`/assets/${post.video}`}
                        className="object-cover w-full h-[400px] rounded-lg"
                        controls
                      />
                    </div>
                  ) : (
                    post.images.map((img, index) => (
                      <div key={index} className="w-full">
                        <img
                          src={`/assets/${img}`}
                          alt={`Slide ${index + 1}`}
                          className="object-cover w-full h-[400px] rounded-lg"
                        />
                      </div>
                    ))
                  )}
                </Slider>
              ) : (
                <img
                  src="/assets/placeholder.jpg"
                  alt="No images available"
                  className="object-cover w-full h-[400px] rounded-lg"
                />
              )}
            </div>

            {/* Right Section: Caption and Comments */}
            <div className="p-4 flex flex-col basis-3/5">
              {/* Profile Information */}
              <div className="flex items-center mb-4">
                <img
                  src={`/assets/avatars/${post.author?.avatar || "placeholder-profile.png"}`}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h3
                    className="font-medium ml-2 text-sm text-blue-600 cursor-pointer hover:underline"
                    onClick={() =>
                      navigate("/plantify-network/profile-socialmedia", {
                        state: { profileData: post.author },
                      })
                    }
                  >
                    {post.author?.username || "Unknown User"}
                  </h3>
                </div>
              </div>

              <h2 className="text-sm mb-4">{post.caption || "No Caption"}</h2>

              {/* Extra Fields for Adoption */}
              {isAdoptionPost && (
                <div className="mb-4">
                  <h3 className="text-md font-bold mb-2">Adoption Details:</h3>
                  {post.species && (
                    <p className="text-sm text-gray-700 mb-1">
                      <strong>Species:</strong> {post.species}
                    </p>
                  )}
                  {post.size && (
                    <p className="text-sm text-gray-700 mb-1">
                      <strong>Size:</strong> {post.size}
                    </p>
                  )}
                  {post.fertilizerUsed && (
                    <p className="text-sm text-gray-700 mb-1">
                      <strong>Fertilizer Used:</strong> {post.fertilizerUsed}
                    </p>
                  )}
                  {post.isAdopted !== undefined && (
                    <p className="text-sm text-gray-700 mb-1">
                      <strong>Adopted:</strong> {post.isAdopted ? "Yes" : "No"}
                    </p>
                  )}
                </div>
              )}

              {/* Comments Section */}
              <div className="bg-inherit w-full p-2 border-neutral border-2 rounded-[20px] mt-4">
                <h2 className="font-semibold text-md text-center py-2">Comments</h2>
                <ul className="flex flex-col items-start overflow-y-auto max-h-80">
                  {comments.map((comment) => (
                    <li className="relative w-full p-2 border-b-2 border-neutral" key={comment._id}>
                      <div className="w-full flex flex-row items-center">
                        <img
                          src={`/assets/avatars/${comment.userId?.avatar || "placeholder-profile.png"}`}
                          className="w-10 h-10 object-cover rounded-full"
                          alt="user avatar"
                        />
                        <div className="ml-2 w-full text-sm flow-root">
                          <p className="float-left font-semibold ml-2">{comment.userId?.username}</p>
                          <p className="float-right text-gray-500">{new Date(comment.createdAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <p className="mt-2 mr-4 text-justify text-sm">{comment.comment}</p>
                    </li>
                  ))}
                </ul>

                {/* Conditional Rendering of Comment Input */}
                {/* {post.author._id !== currentUser?._id && ( */}
                  <div className="mt-4 flex items-center bg-neutral py-2 px-3 rounded-2xl">
                    <textarea
                      id="comment"
                      className="bg-inherit pl-2 w-full outline-none border-none"
                      style={{ resize: "none" }}
                      name="comment"
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      required
                    />
                    <button className="p-2 rounded-2xl ml-2 hover:bg-navygreen-200" onClick={handleAddComment}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12Zm0 0h7.5"
                        />
                      </svg>
                    </button>
                  </div>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;

