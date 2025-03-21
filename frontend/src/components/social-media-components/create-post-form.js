
import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../components/button';
import useFetchUserLocalStorage from "../../hooks/useFetchUserLocalStorage";

const CreatePostForm = ({ onClose, isSocialGroupPost, customName }) => {
  const user = useFetchUserLocalStorage();
  const userId = user?._id;
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [textContent, setTextContent] = useState("");
  const [privacy, setPrivacy] = useState("Public");
  const [offerForAdoption, setOfferForAdoption] = useState(false);
  const [plantDetails, setPlantDetails] = useState({ species: '', size: '', name: '', fertilizer: '' });

  // Helper function to get filenames
  const getFileNames = (files) => {
    return files.map(file => file.name);
  };

  // Handle adding images
  const handleAddImage = (e) => {
    const newImages = Array.from(e.target.files);
    
    // Validate image types (JPG, PNG, etc.)
    const isValidImage = newImages.every(file => file.type.startsWith('image/'));
    if (isValidImage && images.length + newImages.length <= 5 && !video) {
      setImages(prevImages => [...prevImages, ...newImages]);
    } else {
      alert("Please upload only images (JPG, PNG) and a maximum of 5 images.");
    }
  };

  // Handle video upload
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    
    // Validate video type (MP4)
    if (file && file.type === 'video/mp4' && !images.length) {
      setVideo(file);
    } else {
      alert("Please upload only one video (MP4) or images.");
    }
  };

  // Handle text content
  const handleTextChange = (e) => setTextContent(e.target.value.slice(0, 500));

  const handlePostSubmit = async () => {
    const formData = {
      userId,
      textContent,
      images: images.map((file) => file.name),
      video: video ? video.name : null,
      postType: offerForAdoption ? "adoption" : "simple",
      isSocialGroupPost: isSocialGroupPost || undefined, // Only include if true
      species: offerForAdoption ? plantDetails.species : undefined,
      size: offerForAdoption ? plantDetails.size : undefined,
      name: offerForAdoption ? plantDetails.name : undefined,
      fertilizer: offerForAdoption ? plantDetails.fertilizer : undefined,
    };

    try {
      const response = await axios.post('BACKEND_URL/api/post/add', formData);
      if (response.status === 201) {
        alert("Post created successfully!");
        onClose();
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("There was an error creating the post.");
    }
  };
  
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className={`bg-white rounded-lg p-6 ${offerForAdoption ? 'w-full max-w-3xl' : 'w-full max-w-xl'}`}>
        <h3 className="text-xl font-bold mb-4">Create Post</h3>

        <form className="flex space-x-6">
          {/* Main Form Section */}
          <div className="flex-grow space-y-4">
            {/* Image Upload Section */}
            <div className="flex gap-3 items-center mb-4">
              <label htmlFor="plantImage" className="block text-sm font-medium">Plant Image</label>
              <div className="flex items-center justify-center w-[100px] h-[100px] p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                {/* SVG Icon */}
              </div>
              <input
                type="file"
                id="plantImage"
                name="plantImage"
                className="hidden"
                accept="image/*"
                onChange={handleAddImage}
                disabled={!!video} // Disable if video is selected
              />
              <label htmlFor="plantImage" className="text-sm font-medium text-blue-500 cursor-pointer">
                Select Images
              </label>
            </div>

            {/* Video Upload Section */}
            <div className="flex gap-3 items-center mb-4">
              <label htmlFor="plantVideo" className="block text-sm font-medium">Plant Video</label>
              <div className="flex items-center justify-center w-[100px] h-[100px] p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                {/* SVG Icon */}
              </div>
              <input
                type="file"
                id="plantVideo"
                name="plantVideo"
                className="hidden"
                accept="video/*"
                onChange={handleVideoUpload}
                disabled={images.length > 0} // Disable if images are selected
              />
              <label htmlFor="plantVideo" className="text-sm font-medium text-blue-500 cursor-pointer">
                Select Video
              </label>
            </div>

            {/* Content Text Area */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Content (500 characters max)</label>
              <textarea
                value={textContent}
                onChange={handleTextChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Share your thoughts..."
              />
            </div>

            {/* Offer for Adoption Checkbox */}
            {!isSocialGroupPost && (
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  checked={offerForAdoption}
                  onChange={() => setOfferForAdoption(!offerForAdoption)}
                  className="mr-2"
                />
                <label className="text-sm font-medium">Offer for Adoption</label>
              </div>
            )}
          </div>

          {/* Right Side for Additional Fields */}
          {offerForAdoption && (
            <div className="w-[250px] space-y-4 border-l-2 border-gray-300 pl-6">
              <div>
                <label className="block text-sm font-medium">Species</label>
                <input
                  type="text"
                  value={plantDetails.species}
                  onChange={(e) => setPlantDetails({ ...plantDetails, species: e.target.value })}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Size</label>
                <input
                  type="text"
                  value={plantDetails.size}
                  onChange={(e) => setPlantDetails({ ...plantDetails, size: e.target.value })}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={plantDetails.name}
                  onChange={(e) => setPlantDetails({ ...plantDetails, name: e.target.value })}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Fertilizer Used</label>
                <input
                  type="text"
                  value={plantDetails.fertilizer}
                  onChange={(e) => setPlantDetails({ ...plantDetails, fertilizer: e.target.value })}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>
          )}
        </form>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 mt-4">
          <Button text="Cancel" type="button" onClick={onClose} className="py-2 px-4 text-black rounded-md" />
          <Button
            text="Post"
            type="button"
            onClick={handlePostSubmit}
            className="py-2 px-4 w-20 text-white rounded-md bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePostForm;
