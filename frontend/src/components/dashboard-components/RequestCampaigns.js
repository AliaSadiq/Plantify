// import axios from "axios";
// import { useEffect, useState } from "react";

// const RequestCampaign = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedCampaign, setSelectedCampaign] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/requests");
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleCampaignClick = (campaign) => {
//     setSelectedCampaign(campaign);
//   };

//   const handleAccept = () => {
//     // Logic for accepting the campaign
//     console.log("Campaign accepted:", selectedCampaign);
//     setSelectedCampaign(null);
//   };

//   const handleReject = () => {
//     // Logic for rejecting the campaign
//     console.log("Campaign rejected:", selectedCampaign);
//     setSelectedCampaign(null);
//   };

//   return (
//     <div className="container mx-auto p-4 overflow-auto" style={{ maxHeight: "250px" }}>
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold">Campaign Requests</h1>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="border border-gray-300 rounded-full py-2 px-4 mr-4 focus:outline-none focus:border-blue-500"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>
//       <div className="flex flex-col space-y-4">
//         {Array.isArray(data) &&
//           data
//             .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
//             .map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center p-4 rounded-lg shadow-md cursor-pointer ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
//                 onClick={() => handleCampaignClick(item)}
//               >
//                 <img
//                   src={item.profilePicture}
//                   alt={item.name}
//                   className="w-12 h-12 rounded-full mr-4"
//                 />
//                 <div>
//                   <h2 className="text-lg font-semibold">{item.name}</h2>
//                   <p className="text-gray-600">{item.location}</p>
//                 </div>
//               </div>
//             ))}
//       </div>

//       {selectedCampaign && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             <div className="flex items-center mb-4">
//               <img
//                 src={selectedCampaign.profilePicture}
//                 alt={selectedCampaign.name}
//                 className="w-16 h-16 rounded-full mr-4"
//               />
//               <div>
//                 <h2 className="text-xl font-bold">{selectedCampaign.name}</h2>
//                 <p className="text-gray-600">{selectedCampaign.location}</p>
//               </div>
//             </div>
//             <p className="mb-4">{selectedCampaign.description}</p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//                 onClick={handleAccept}
//               >
//                 Accept
//               </button>
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//                 onClick={handleReject}
//               >
//                 Reject
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RequestCampaign;
// import axios from "axios";
// import { useEffect, useState } from "react";
// import GetStartedPopup from "../components/GetStartedPopup"; // Default import
// import RejectPopup from "../components/RejectPopup"; // Default import
// import { FaCheck, FaTimes } from 'react-icons/fa'; // Importing icons

// const RequestCampaign = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [showGetStartedPopup, setShowGetStartedPopup] = useState(false);
//   const [showRejectPopup, setShowRejectPopup] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/requests");
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleAccept = (campaign) => {
//     setSelectedCampaign(campaign);
//     setShowGetStartedPopup(true);
//   };

//   const handleReject = (campaign) => {
//     setSelectedCampaign(campaign);
//     setShowRejectPopup(true);
//   };

//   return (
//     <div className="container mx-auto p-4 overflow-auto" style={{ maxHeight: "250px" }}>
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold">Campaign Requests</h1>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="border border-gray-300 rounded-full py-2 px-4 mr-4 focus:outline-none focus:border-blue-500"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>
//       <div className="flex flex-col space-y-4">
//         {Array.isArray(data) &&
//           data
//             .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
//             .map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center justify-between p-4 rounded-lg shadow-md ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
//               >
//                 <div className="flex items-center cursor-pointer" onClick={() => setSelectedCampaign(item)}>
//                   <img
//                     src={item.profilePicture}
//                     alt={item.name}
//                     className="w-12 h-12 rounded-full mr-4"
//                   />
//                   <div>
//                     <h2 className="text-lg font-semibold">{item.name}</h2>
//                     <p className="text-gray-600">{item.location}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <FaCheck className="text-green-500 cursor-pointer" onClick={() => handleAccept(item)} />
//                   <FaTimes className="text-red-500 cursor-pointer" onClick={() => handleReject(item)} />
//                 </div>
//               </div>
//             ))}
//       </div>

//       {showGetStartedPopup && <GetStartedPopup onClose={() => setShowGetStartedPopup(false)} />}
//       {showRejectPopup && <RejectPopup onClose={() => setShowRejectPopup(false)} />}
//     </div>
//   );
// };

// export default RequestCampaign;
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import { FaCheck, FaTimes } from 'react-icons/fa';

// const RequestCampaign = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [rejectedMessage, setRejectedMessage] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/requests");
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleAccept = (campaign) => {
//     setSelectedCampaign(campaign);
//     // Redirect to the CreateCampaign page
//     navigate('/createCampaign');
//   };

//   const handleReject = (campaign) => {
//     // Your reject logic here
//     setRejectedMessage(`${campaign.name} campaign has been rejected.`);
//     setData(data.filter(item => item !== campaign)); // Remove the rejected campaign from the list
//   };

//   return (
//     <div className="container mx-auto p-4 overflow-auto" style={{ maxHeight: "250px" }}>
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold">Campaign Requests</h1>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="border border-gray-300 rounded-full py-2 px-4 mr-4 focus:outline-none focus:border-blue-500"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>
//       <div className="flex flex-col space-y-4">
//         {Array.isArray(data) &&
//           data
//             .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
//             .map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center justify-between p-4 rounded-lg shadow-md ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
//               >
//                 <div className="flex items-center cursor-pointer" onClick={() => setSelectedCampaign(item)}>
//                   <img
//                     src={item.profilePicture}
//                     alt={item.name}
//                     className="w-12 h-12 rounded-full mr-4"
//                   />
//                   <div>
//                     <h2 className="text-lg font-semibold">{item.name}</h2>
//                     <p className="text-gray-600">{item.location}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <FaCheck className="text-green-500 cursor-pointer" onClick={() => handleAccept(item)} />
//                   <FaTimes className="text-red-500 cursor-pointer" onClick={() => handleReject(item)} />
//                 </div>
//               </div>
//             ))}
//       </div>
//       {rejectedMessage && <div className="text-red-500">{rejectedMessage}</div>}
//     </div>
//   );
// };

// export default RequestCampaign;
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import { FaCheck, FaTimes } from 'react-icons/fa';

// const RequestCampaign = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [rejectedMessage, setRejectedMessage] = useState("");
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/requests");
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleAccept = (campaign) => {
//     setSelectedCampaign(campaign);
//     // Redirect to the CreateCampaign page
//     navigate('/createCampaign');
//   };

//   const handleReject = (campaign) => {
//     // Your reject logic here
//     setRejectedMessage(`${campaign.name} campaign has been rejected.`);
//     setData(data.filter(item => item !== campaign)); // Remove the rejected campaign from the list
//   };

//   const handleCampaignClick = (campaign) => {
//     setSelectedCampaign(campaign);
//     setShowPopup(true);
//   };

//   return (
//     <div className="container mx-auto p-4 overflow-auto" style={{ maxHeight: "250px" }}>
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold">Campaign Requests</h1>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="border border-gray-300 rounded-full py-2 px-4 mr-4 focus:outline-none focus:border-blue-500"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>
//       <div className="flex flex-col space-y-4">
//         {Array.isArray(data) &&
//           data
//             .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
//             .map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center justify-between p-4 rounded-lg shadow-md ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
//                 onClick={() => handleCampaignClick(item)}
//               >
//                 <div className="flex items-center cursor-pointer">
//                   <img
//                     src={item.profilePicture}
//                     alt={item.name}
//                     className="w-12 h-12 rounded-full mr-4"
//                   />
//                   <div>
//                     <h2 className="text-lg font-semibold">{item.name}</h2>
//                     <p className="text-gray-600">{item.location}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <FaCheck className="text-green-500 cursor-pointer" onClick={() => handleAccept(item)} />
//                   <FaTimes className="text-red-500 cursor-pointer" onClick={() => handleReject(item)} />
//                 </div>
//               </div>
//             ))}
//       </div>
//       {showPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             <div className="flex items-center mb-4">
//               <img
//                 src={selectedCampaign.profilePicture}
//                 alt={selectedCampaign.name}
//                 className="w-16 h-16 rounded-full mr-4"
//               />
//               <div>
//                 <h2 className="text-xl font-bold">{selectedCampaign.name}</h2>
//                 <p className="text-gray-600">{selectedCampaign.location}</p>
//               </div>
//             </div>
//             <p className="mb-4">{selectedCampaign.description}</p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//                 onClick={() => handleAccept(selectedCampaign)}
//               >
//                 Accept
//               </button>
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//                 onClick={() => handleReject(selectedCampaign)}
//               >
//                 Reject
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {rejectedMessage && <div className="text-red-500">{rejectedMessage}</div>}
//     </div>
//   );
// };

// export default RequestCampaign;
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { FaCheck, FaTimes } from 'react-icons/fa';

const RequestCampaign = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [rejectedMessage, setRejectedMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/requests");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAccept = (campaign) => {
    setSelectedCampaign(campaign);
    // Redirect to the CreateCampaign page
    navigate('/createCampaign');
  };

  const handleReject = (campaign) => {
    // Your reject logic here
    setRejectedMessage(`${campaign.name} campaign has been rejected.`);
    setData(data.filter(item => item !== campaign)); // Remove the rejected campaign from the list
    setSelectedCampaign(null); // Clear selected campaign
  };

  const handleCampaignClick = (campaign) => {
    setSelectedCampaign(campaign);
    setShowPopup(true);
  };

  return (
    <div className="container mx-auto p-4 overflow-auto" style={{ maxHeight: "250px" }}>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Campaign Requests</h1>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-full py-2 px-4 mr-4 focus:outline-none focus:border-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-col space-y-4">
        {Array.isArray(data) &&
          data
            .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            .map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-lg shadow-md ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                onClick={() => handleCampaignClick(item)}
              >
                <div className="flex items-center cursor-pointer">
                  <img
                    src={item.profilePicture}
                    alt={item.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaCheck className="text-green-500 cursor-pointer" onClick={() => handleAccept(item)} />
                  <FaTimes className="text-red-500 cursor-pointer" onClick={() => handleReject(item)} />
                </div>
              </div>
            ))}
      </div>
      {showPopup && selectedCampaign && (
  <div className="fixed inset-0  bg-dashboard bg-opacity-50 flex items-center  justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm py-50">
      <div className="flex items-center mb-4">
       
      
        <div>
           <img
          src={selectedCampaign.profilePicture}
          alt={selectedCampaign.name}
          className="w-16 h-16 rounded-full mr-4"
        />
          <h2 className="text-xl font-bold">{selectedCampaign.name}</h2>
          <p className="text-gray-600 text"><strong>Location: </strong>{selectedCampaign.location}</p>

          <p className="text-gray-600 text whitespace-pre-wrap"><strong>Description:</strong> {selectedCampaign.description}</p>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => handleAccept(selectedCampaign)}
        >
          Accept
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => handleReject(selectedCampaign)}
        >
          Reject
        </button>
      </div>
    </div>
  </div>
)}

      {rejectedMessage && <div className="text-red-500">{rejectedMessage}</div>}
    </div>
  );
};

export default RequestCampaign;

