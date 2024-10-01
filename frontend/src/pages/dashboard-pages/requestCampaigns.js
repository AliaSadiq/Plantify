
import React, { useState, useEffect } from "react";
import {
  CardHeader,
  Typography,
  CardBody,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import SearchBar from "../../components/search-bar.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = ["#", "Title", "Location", "Issue"];

const RequestCampaign = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/request-campaign`);
        setCampaigns(response.data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  const handleRowClick = (campaign) => {
    setSelectedCampaign(campaign);
  };

  const handleCloseDialog = () => {
    setSelectedCampaign(null);
  };


const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleReject = async () => {
    if (selectedCampaign) {
      try {
        await axios.delete(`${apiUrl}/api/request-campaign/${selectedCampaign._id}`);
        setCampaigns(campaigns.filter(campaign => campaign._id !== selectedCampaign._id));
        handleCloseDialog();
      } catch (error) {
        console.error("Error rejecting campaign:", error);
      }
    }
  };

  const handleAccept = async () => {
    if (selectedCampaign) {
      try {
        navigate("/createCampaign", { state: { campaign: selectedCampaign } });
        handleCloseDialog();
      } catch (error) {
        console.error("Error accepting campaign:", error);
      }
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    return (
      campaign.issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col p-6"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/dashboardbg.png'})` }}    >
      <CardHeader floated={false} shadow={false} className="rounded-none bg-transparent">
        <div className="mb-4 flex justify-between gap-8 mt-3 ml-56 mr-80 md:items-center">
          <h1 className="text-xl text-black font-josefin-sans font-bold">Campaign Requests</h1>
         
        </div>
        <div className=" items-center ml-[500px] w-[450px] ">
        <SearchBar onSearch={handleSearch} placeholder={"Search Campaigns"} />
        </div>
      </CardHeader>
     
     
<CardBody className="overflow-x-auto shadow-md w-[950px] sm:rounded-lg mt-10 ml-60 mr-80 h-[calc(100%-80px)] px-0 py-0">
  <table className="w-full text-sm text-left rtl:text-right text-gray-900">
    <thead className="text-xs text-black uppercase bg-navygreen-300">
      <tr>
        {TABLE_HEAD.map((head, index) => (
          <th
            key={head}
            className={`px-6 py-3 ${index === 0 ? "w-10" : ""} ${index === 3 ? "w-2/4" : ""}`}
          >
            <Typography variant="small" color="black" className="font-bold leading-none opacity-70">
              {head}
            </Typography>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {filteredCampaigns.map((campaign, index) => {
        const rowClasses = `cursor-pointer border-b dark:border-gray-700 hover:bg-gray-50 ${
          index % 2 === 0 ? "bg-transparent" : "bg-navygreen-100"
        }`;

        return (
          <tr key={campaign._id} onClick={() => handleRowClick(campaign)} className={rowClasses}>
            <td className="px-6 py-4">{index + 1}</td>
           
             <td className="px-6 py-4"> {campaign.title}</td> 
            <td className="px-6 py-4">{campaign.location}</td>
            <td className="px-6 py-4">{campaign.issue.split(" ").slice(0, 30).join(" ")}...</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</CardBody>{selectedCampaign && (
  <Dialog open={Boolean(selectedCampaign)} handler={handleCloseDialog} className="relative bg-ivory shadow-lg rounded-lg p-4">
    <button onClick={handleCloseDialog} className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900" aria-label="Close">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    
    {/* Card-like Header Section with image */}
    <div className="rounded-t-lg pb-0 pt-0 p-4 flex justify-center">
      {selectedCampaign.attachedImage ? (
        <img
          src={selectedCampaign.attachedImage}
          alt="Attached"
          className="h-40 w-40 rounded-md object-cover"
        />
      ) : (
        <div className="bg-green-200 h-full w-full flex items-center justify-center rounded-md">
          <h1>image aye ga yhn</h1>
        </div>
      )}
    </div>

    {/* Card body */}
    <div className="bg-ivory font-josefin-sans mt-0 p-4">
      {/* Label and Heading */}
      <Typography variant="small" className="bg-navygreen-300 px-4 py-1 rounded-full text-white text-xs inline-block mb-4">
        {capitalizeFirstLetter(selectedCampaign.title)}
      </Typography>

      {/* Name and Contact in one row */}
      <div className="flex justify-between mb-4">
        <div className="flex">
          <Typography variant="small" className="font-semibold mr-2">
            Name:
          </Typography>
          <Typography variant="small">
            {selectedCampaign.name}
          </Typography>
        </div>
        <div className="flex">
          <Typography variant="small" className="font-semibold mr-2">
            Contact:
          </Typography>
          <Typography variant="small">
            {selectedCampaign.contactNumber}
          </Typography>
        </div>
        <div className="flex mb-4">
        <Typography variant="small" className="font-semibold mr-2">
          Location:
        </Typography>
        <Typography variant="small">
          {selectedCampaign.location}
        </Typography>
      </div>
      </div>

      {/* Location in the next row */}
     

      {/* Issue in the next row */}
      <div className="flex mb-4">
        <Typography variant="small" className="font-semibold mr-2">
          Issue:
        </Typography>
        <Typography variant="small" className="text-gray-600">
          {selectedCampaign.issue}
        </Typography>
      </div>
    </div>

    {/* Footer Actions */}
    <div className="flex justify-between p-4 border-t border-gray-200">
    <Button onClick={handleReject} className="font-josefin-sans text-sm font-semibold w-32 bg-transparent text-gray-100 p-2 rounded hover:rounded-full border-2 border-gray-100 mr-4">
              Reject
            </Button>
            <Button variant="gradient" color="black" onClick={handleAccept} className="font-josefin-sans w-32 text-sm font-semibold text-white bg-navygreen-500 p-2 rounded hover:rounded-full">
              Accept
            </Button>
    </div>
  </Dialog>
)}


    </div>
  );
};

export default RequestCampaign;
