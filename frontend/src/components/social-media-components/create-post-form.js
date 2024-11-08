import React, { useState } from 'react';
import Button from '../../components/button';

const CreatePostForm = ({ onClose }) => {
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [textContent, setTextContent] = useState("");
  const [privacy, setPrivacy] = useState("Public");
  const [offerForAdoption, setOfferForAdoption] = useState(false);
  const [plantDetails, setPlantDetails] = useState({ species: '', size: '', name: '', fertilizer: '' });

  const handleAddImage = (e) => {
    if (images.length < 5 && !video) {
      const newImage = e.target.files[0];
      setImages([...images, newImage]);
    }
  };

  const handleVideoUpload = (e) => {
    if (!images.length) {
      setVideo(e.target.files[0]);
    }
  };

  const handleTextChange = (e) => setTextContent(e.target.value.slice(0, 500));

  const handlePrivacyToggle = () => setPrivacy((prev) => (prev === 'Public' ? 'Private' : 'Public'));

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className={`bg-white rounded-lg p-6 ${offerForAdoption ? 'w-full max-w-3xl' : 'w-full max-w-xl'}`}>
        <h3 className="text-xl font-bold mb-4">Create Post</h3>

        <form className="flex space-x-6">
          {/* Main Form Section */}
          <div className="flex-grow space-y-4">
            {/* Image/Video Upload Section */}
            <div className="flex gap-3 items-center mb-4">
              <label htmlFor="plantImage" className="block text-sm font-medium">Plant Image</label>
              <label htmlFor="plantImage" className="flex items-center justify-center w-[100px] h-[100px] p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                {/* SVG Icon */}
              </label>
              <input type="file" id="plantImage" name="plantImage" className="hidden" accept="image/*" onChange={handleAddImage} disabled={!!video} />
              <input type="file" id="plantVideo" name="plantVideo" className="hidden" accept="video/*" onChange={handleVideoUpload} disabled={images.length > 0} />
            </div>

            {/* Content Text Area */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Content (500 characters max)</label>
              <textarea value={textContent} onChange={handleTextChange} className="w-full p-2 border rounded-lg" placeholder="Share your thoughts..." />
            </div>

            {/* Privacy Option */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Privacy</label>
              <button type="button" onClick={handlePrivacyToggle} className="w-full p-2 border rounded-lg">
                {privacy}
              </button>
            </div>

            {/* Offer for Adoption Checkbox */}
            <div className="mb-4 flex items-center">
              <input type="checkbox" checked={offerForAdoption} onChange={() => setOfferForAdoption(!offerForAdoption)} className="mr-2" />
              <label className="text-sm font-medium">Offer for Adoption</label>
            </div>
          </div>

          {/* Right Side for Additional Fields */}
          {offerForAdoption && (
            <div className="w-[250px] space-y-4 border-l-2 border-gray-300 pl-6">
              <div>
                <label className="block text-sm font-medium">Species</label>
                <input type="text" value={plantDetails.species} onChange={(e) => setPlantDetails({ ...plantDetails, species: e.target.value })} className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium">Size</label>
                <input type="text" value={plantDetails.size} onChange={(e) => setPlantDetails({ ...plantDetails, size: e.target.value })} className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input type="text" value={plantDetails.name} onChange={(e) => setPlantDetails({ ...plantDetails, name: e.target.value })} className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium">Fertilizer Used</label>
                <input type="text" value={plantDetails.fertilizer} onChange={(e) => setPlantDetails({ ...plantDetails, fertilizer: e.target.value })} className="w-full p-2 border rounded-lg" />
              </div>
            </div>
          )}
        </form>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 mt-4">
          <Button text="Cancel" type="button"  onClick={onClose} className="py-2 px-4 text-black rounded-md" />
          <Button
          text="Post"
          type="submit"
        // Specify the background color
          className="py-2 px-4 w-20 text-white rounded-md bg-black"  // Add text color class or style
         />

        </div>
      </div>
    </div>
  );
};

export default CreatePostForm;
