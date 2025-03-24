// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TextInput = ({ label, value, onChange, placeholder, type = "text" }) => (
//   <div className="flex flex-col">
//     <label className="text-sm text-gray-700 font-semibold mb-1">{label}</label>
//     <input
//       type={type}
//       value={value}
//       onChange={onChange}
//       className="p-3 border-2 rounded-lg border-gray-300 focus:border-green-600 transition text-gray-800 placeholder-gray-400"
//       placeholder={placeholder}
//     />
//   </div>
// );

// const TextArea = ({ label, value, onChange, placeholder }) => (
//   <div className="flex flex-col">
//     <label className="text-sm text-gray-700 font-semibold mb-1">{label}</label>
//     <textarea
//       value={value}
//       onChange={onChange}
//       className="p-3 border-2 rounded-lg border-gray-300 focus:border-green-600 transition text-gray-800 placeholder-gray-400"
//       placeholder={placeholder}
//       rows="3"
//     />
//   </div>
// );

// const RequestCampaignForm = ({ onClose, socialGroupId }) => {
//   const [email, setEmail] = useState('');
//   const [location, setLocation] = useState('');
//   const [contactNumber, setContactNumber] = useState('');
//   const [issue, setIssue] = useState('');
//   const [attachedImage, setAttachedImage] = useState(null);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user && user._id) {
//       setEmail(user.email);
//       console.log("Fetched userId from localStorage:", user._id);
//     }
//   }, []);

//   const handleFileInputChange = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type.startsWith('image/')) {
//       setAttachedImage(file);
//     } else {
//       alert('Please select a valid image file.');
//     }
//   };

//   const handleContactNumberChange = (e) => {
//     const value = e.target.value;
//     if (/^[0-9]*$/.test(value) && value.length <= 11) {
//       setContactNumber(value);
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     if (!location || !contactNumber || !issue || !attachedImage) {
//       alert('Please fill in all required fields and attach an image.');
//       return;
//     }

//     const formattedPhoneNumber = `+92${contactNumber.substring(1)}`;
//     const formData = new FormData();
//     formData.append('socialGroupId', socialGroupId);
//     formData.append('email', email);
//     formData.append('location', location);
//     formData.append('contactNumber', formattedPhoneNumber);
//     formData.append('issue', issue);
//     formData.append('attachedImage', attachedImage);

//     try {
//       await axios.post('https://plantify-backend.vercel.app/api/request-campaign', formData);
//       onClose();
//     } catch (error) {
//       console.error('Error submitting campaign request:', error);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg p-6 w-full max-w-2xl"> {/* Increased max width */}
//         <h3 className="text-xl font-bold mb-4 text-center">Request a Campaign</h3>
  
//         <form onSubmit={handleFormSubmit} className="space-y-4">
//           {/* Row 1: Email and Location */}
//           <div className="flex gap-4">
//             <div className="flex-1">
//               <label className="block text-sm font-medium">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your email"
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-sm font-medium">Location</label>
//               <input
//                 type="text"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 placeholder="Your location"
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>
//           </div>
  
//           {/* Row 2: Contact Number */}
//           <div className="flex gap-4">
//             <div className="flex-1">
//               <label className="block text-sm font-medium">Contact Number</label>
//               <input
//                 type="text"
//                 value={contactNumber}
//                 onChange={handleContactNumberChange}
//                 placeholder="Contact number (e.g., 03001234567)"
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-sm font-medium">Attach Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileInputChange}
//                 className="p-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer"
//               />
//               {attachedImage && <span className="text-sm text-gray-600 mt-2">{attachedImage.name}</span>}
//             </div>
//           </div>
  
//           {/* Row 3: Issue Text Area */}
//           <div>
//             <label className="block text-sm font-medium">Issue</label>
//             <textarea
//               value={issue}
//               onChange={(e) => setIssue(e.target.value)}
//               placeholder="Describe the issue in your area"
//               className="w-full p-2 border rounded-lg"
//             />
//           </div>
  
//           {/* Buttons */}
//           <div className="flex justify-end space-x-2 mt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="py-2 px-4 text-black rounded-md border border-gray-300"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="py-2 px-4 w-28 text-white bg-green-700 rounded-md hover:bg-green-600"
//             >
//               Submit Request
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
//   export default RequestCampaignForm;
  
  
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const TextInput = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div className="flex flex-col">
    <label className="text-sm text-gray-700 font-semibold mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="p-3 border-2 rounded-lg border-gray-300 focus:border-green-600 transition text-gray-800 placeholder-gray-400"
      placeholder={placeholder}
    />
  </div>
);

const TextArea = ({ label, value, onChange, placeholder }) => (
  <div className="flex flex-col">
    <label className="text-sm text-gray-700 font-semibold mb-1">{label}</label>
    <textarea
      value={value}
      onChange={onChange}
      className="p-3 border-2 rounded-lg border-gray-300 focus:border-green-600 transition text-gray-800 placeholder-gray-400"
      placeholder={placeholder}
      rows="3"
    />
  </div>
);

const RequestCampaignForm = ({ onClose, socialGroupId }) => {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [issue, setIssue] = useState('');
  const [attachedImage, setAttachedImage] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user._id) {
      setEmail(user.email);
      console.log("Fetched userId from localStorage:", user._id);
    }
  }, []);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setAttachedImage(file.name); // Set only the file name
    } else {
      Swal.fire("Invalid File", "Please select a valid image file.", "error");
      event.target.value = ""; // Reset the input if file is invalid
    }
  };
  
  const handleContactNumberChange = (e) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value) && value.length <= 11) {
      setContactNumber(value);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!location || !contactNumber || !issue || !attachedImage) {
      Swal.fire('Incomplete Form', 'Please fill in all required fields and attach an image.', 'error');
      return;
    }
  
    const formattedPhoneNumber = `+92${contactNumber.substring(1)}`;
  
    const payload = {
      socialGroup: socialGroupId,
      name: email,
      location: location,
      contactNumber: formattedPhoneNumber,
      issue: issue,
      attachedImage: attachedImage,  // Only sending the filename
    };
  
    try {
      console.log('Submitting payload:', payload);
      const response = await axios.post('https://plantify-backend.vercel.app/api/request-campaign/', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      Swal.fire('Submitted', 'Your campaign request has been submitted successfully.', 'success');
      onClose();
    } catch (error) {
      console.error('Error submitting campaign request:', error);
      Swal.fire('Submission Failed', 'An error occurred while submitting your request. Please try again.', 'error');
    }
  };
  
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <h3 className="text-xl font-bold mb-4 text-center">Request a Campaign</h3>
  
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <TextInput
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                type="email"
              />
            </div>
            <div className="flex-1">
              <TextInput
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Your location"
              />
            </div>
          </div>
  
          <div className="flex gap-4">
            <div className="flex-1">
              <TextInput
                label="Contact Number"
                value={contactNumber}
                onChange={handleContactNumberChange}
                placeholder="Contact number (e.g., 03001234567)"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium">Attach Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                className="p-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer"
              />
              {attachedImage && <span className="text-sm text-gray-600 mt-2">{attachedImage.name}</span>}
            </div>
          </div>
  
          <TextArea
            label="Issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            placeholder="Describe the issue in your area"
          />
  
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 text-black rounded-md border border-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 w-28 text-white bg-green-700 rounded-md hover:bg-green-600"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestCampaignForm;
