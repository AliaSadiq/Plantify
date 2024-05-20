import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RequestCampaignForm = ({ onClose, socialGroupId }) => {
  const [location, setLocation] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [issue, setIssue] = useState('');
  const [attachedImageName, setAttachedImageName] = useState('');

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAttachedImageName(file.name);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      socialGroupId,
      location,
      contactNumber,
      issue,
      attachedImage: attachedImageName
    };

    try {
      await axios.post('http://localhost:5000/api/request-campaign', formData);
      onClose();
    } catch (error) {
      console.error('Error submitting campaign request:', error);
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-40"
      onClick={onClose}
    >
      <div
        className="relative bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-6 w-85 shadow-lg"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="self-end bg-red-500 text-white rounded p-1" onClick={onClose}>
          X
        </button>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Request Campaign in Your Area</h2>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-2 w-full">
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Location</label>
            <input
              type="text"
              className="border rounded px-2 py-1 text-sm text-gray-800"
              placeholder="Your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Contact Number</label>
            <input
              type="text"
              className="border rounded px-2 py-1 text-sm text-gray-800"
              placeholder="Contact number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Issue</label>
            <textarea
              className="border rounded px-2 py-1 text-sm text-gray-800"
              placeholder="Describe your issue"
              rows="2"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Attach Image</label>
            <input
              type="file"
              className="border rounded px-2 py-1 text-sm text-gray-800"
              accept="image/*"
              onChange={handleFileInputChange}
            />
          </div>
          <button className="mt-3 py-2 px-8 w-40 bg-green-700 text-white rounded hover:bg-green-600 text-sm">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};


// const RequestCampaignForm = ({ onClose }) => {
//   return (
//     <div
//       className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-40"
//       onClick={onClose}
//     >
//       {/* Popup with background image and glass effect */}
//       <div
//         className="relative bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-6 w-85 shadow-lg" // Glass effect
//         style={{
//           // backgroundImage: url(${backgroundImage}), // Set the background image
//           backgroundSize: 'cover', // Ensure the image covers the whole div
//           backgroundPosition: 'center', // Center the image
//         }}
//         onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the form
//       >
//         <button
//           className="self-end bg-red-500 text-white rounded p-1"
//           onClick={onClose}
//         >
//           X
//         </button>
        
//         <h2 className="text-lg font-semibold text-gray-800 mb-3">Request Campaign in Your Area</h2>

//         <div className="flex flex-col gap-2 w-full">
//           {/* Location Field */}
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700">Location</label>
//             <input
//               type="text"
//               className="border rounded px-2 py-1 text-sm text-gray-800"
//               placeholder="Your location"
//             />
//           </div>

//           {/* Contact Number Field */}
//           <div class="flex flex-col">
//             <label className="text-sm text-gray-700">Contact Number</label>
//             <input
//               type="text"
//               className="border rounded px-2 py-1 text-sm text-gray-800"
//               placeholder="Contact number"
//             />
//           </div>

//           {/* Issue Field */}
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700">Issue</label>
//             <textarea
//               class="border rounded px-2 py-1 text-sm text-gray-800"
//               placeholder="Describe your issue"
//               rows="2"
//             ></textarea>
//           </div>

//           {/* Image Attachment Field */}
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700">Attach Image</label>
//             <input
//               type="file"
//               className="border rounded px-2 py-1 text-sm text-gray-800"
//               accept="image/*"
//             />
//           </div>

//           {/* Submit Button */}
//           <button className="mt-3 py-2 px-8 w-40 bg-green-700 text-white rounded hover:bg-green-600 text-sm">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Profile = () => {
//   const { id } = useParams();
//   const [isRequestFormVisible, setRequestFormVisible] = useState(false);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(http://localhost:5000/api/socialgroup/${id});
//         setUserData(response.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, [id]);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }


//   return (
//     <div className="w-[1100px] h-[550px] mx-auto bg-white overflow-hidden rounded-tl-lg rounded-tr-lg relative">
//       <div className="relative">
//         <img
//           className="w-full h-[200px] object-cover"
//           src={/assets/${userData.banner} }
     
//           // src= {userData.banner || 'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'} // Replace with actual header image URL
//           alt="Header"
//         />
//         <div className="absolute inset-0 flex justify-center items-center">
//           <div className="relative mt-[200px]">
//             <div className="relative">
//               <div className="w-40 h-40 overflow-hidden">
//                 <img
//                   className="w-full h-full object-cover rounded-full border-4 border-white"
//                   src={/assets/${userData.image} } // Replace with actual profile image URL
//                   alt="Profile"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-[100px]">
//         <div className="flex justify-center items-center space-x-2">
//           <h2 className="text-lg font-semibold">{userData.name}</h2>
       
//         </div>

//         <div className="mt-5 flex justify-center space-x-4">
//           <div className="text-center">
//             <span className="block text-lg font-bold">5</span>
//             <span className="text-black-500">Campaigns</span>
//           </div>
//           <button
//             type="button"
//             className="font-josefin-sans text-sm font-semibold text-white bg-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100"
//             onClick={() => setRequestFormVisible(true)}
//           >
//             Request
//           </button>
//         </div>

//         <div className="mt-6 w-[750px] mx-auto text-black-700 text-sm relative text-center">
//           <p>
//             {userData.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.'}
//           </p>
       
//         </div>
//       </div>

//       {isRequestFormVisible && (
//         <RequestCampaignForm onClose={() => setRequestFormVisible(false)} socialGroupId={id}/>
//       )}
//     </div>
//   );
// };

// export default Profile;


const Profile = () => {
  const { id } = useParams();
  const [isRequestFormVisible, setRequestFormVisible] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/socialgroup/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-white overflow-hidden rounded-tl-lg rounded-tr-lg  relative">
      <div className="relative">
        <img
          className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
          src={`/assets/${userData.banner}`}
          alt="Header"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative mt-24 sm:mt-32 md:mt-40 lg:mt-48">
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                  src={`/assets/${userData.image}`}
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 sm:mt-24 md:mt-28 lg:mt-32 font-josefin-sans">
        <div className="flex justify-center items-center space-x-2">
          <h2 className="lg:text-lg sm:text-2xl md:text-3xl font-semibold">{userData.name}</h2>
        </div>

        <div className="mt-5 flex justify-center space-x-4">
          <div className="text-center">
            <span className="block text-lg font-bold">5</span>
            <span className="text-gray-500">Campaigns</span>
          </div>
          <button
            type="button"
            className="font-josefin-sans text-sm sm:text-base font-semibold text-white bg-gray-700 p-2 sm:p-3 md:p-4 rounded hover:rounded-full border-2 border-gray-700"
            onClick={() => setRequestFormVisible(true)}
          >
            Request
          </button>
        </div>

        <div className="mt-6 max-w-3xl mx-auto text-gray-700 lg:text-lg sm:text-base md:text-lg relative font-josefin-sans text-center">
          <p>
            {userData.initiative }
          </p>
        </div>
      </div>

      {isRequestFormVisible && (
        <RequestCampaignForm onClose={() => setRequestFormVisible(false)} socialGroupId={id} />
      )}
    </div>
  );
};

export default Profile;