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
        const response = await axios.get("http://localhost:5000/api/campaignrequests");
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
    setRejectedMessage(`${campaign.title} campaign has been rejected.`);
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
        <h1 className="text-md font-bold">Campaign Requests</h1>
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
            .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
            .map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-lg shadow-md ${index % 2 === 0 ? "bg-gray-" : "bg-white"}`}
                onClick={() => handleCampaignClick(item)}
              >
                <div className="flex items-center cursor-pointer">
                  {/* <img
                    src={`assest/{item.profilePicture} ` }
                    alt={item.name}
                    className="w-12 h-12 rounded-full mr-4"
                  /> */}
                  <div>
                    <h2 className="text-sm font-semibold">{item.title}</h2>
                    <p className="text-gray-600">{item.location}</p>
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
  <div className="fixed inset-0  bg-dashboard bg-opacity
  
  -10 flex items-center  justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm py-50">
      <div className="flex items-center mb-4">
       
      
        <div>
           {/* <img
          src={selectedCampaign.image}
          alt={selectedCampaign.name}
          className="w-16 h-16 rounded-full mr-4"
        /> */}
          <h2 className="text-sm font-bold">{selectedCampaign.title}</h2>
          <p className="text-gray-600 text"><strong>Location: </strong>{selectedCampaign.location}</p>

          <p className="text-gray-600 text whitespace-pre-wrap"><strong>Description:</strong> {selectedCampaign.description}</p>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2  bg-greentop text-white rounded hover:bg-green-600"
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

