
// import React, { useState, useEffect } from "react";
// import {
//   CardHeader,
//   Typography,
//   CardBody,
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Button,
// } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const TABLE_HEAD = ["#", "Name", "Location", "Description"];

// const RequestCampaign = () => {
//   const navigate = useNavigate();
//   const [campaigns, setCampaigns] = useState([]);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
// // Capitalize first letter utility function
// const capitalizeFirstLetter = (string) => {
//   if (!string) return "";
//   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// };
//   useEffect(() => {
//     // Fetch campaign data from the API when the component mounts
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/request-campaign"); // Update API URL for requests
//         setCampaigns(response.data);
//       } catch (error) {
//         console.error("Error fetching campaigns:", error);
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   const handleRowClick = (campaign) => {
//     setSelectedCampaign(campaign);
//   };

//   const handleCloseDialog = () => {
//     setSelectedCampaign(null);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleReject = async () => {
//     if (selectedCampaign) {
//       try {
//         await axios.delete(`http://localhost:5000/api/request-campaign/${selectedCampaign._id}`);
//         setCampaigns(campaigns.filter(campaign => campaign._id !== selectedCampaign._id));
//         handleCloseDialog();
//       } catch (error) {
//         console.error("Error rejecting campaign:", error);
//       }
//     }
//   };

//   const handleAccept = async () => {
//         if (selectedCampaign) {
//           try {
//             navigate("/createCampaign", { state: { campaign: selectedCampaign } });
//             handleCloseDialog();
//           } catch (error) {
//             console.error("Error accepting campaign:", error);
//           }
//         }
//       };
//   // Filter campaigns based on the search query
//   const filteredCampaigns = campaigns.filter(campaign => {
//     return (
//       campaign.issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.location.toLowerCase().includes(searchQuery.toLowerCase())||
//       campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   });

//   return (
//     <div className="h-full w-full">
//       <CardHeader floated={false} shadow={false} className="rounded-none bg-transparent">
//         <div className="mb-4 flex justify-between gap-8 md:items-center">
//           <h3 className="text-md text-black font-semibold mb-2">Campaign Requests</h3>
//           <div className="flex w-80 gap-2 md:w-max">
//             <div className="w-72 rounded-md bg-navygreen-100">
//               <Input
//                 label="Search"
//                 icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//               />
//             </div>
//           </div>
//         </div>
//       </CardHeader>
//       <CardBody className="overflow-y-auto h-[calc(100%-80px)] px-0">
//         <table className="w-full min-w-max table-fixed text-left">
//           <thead>
//             <tr>
//               {TABLE_HEAD.map((head, index) => (
//                 <th
//                   key={head}
//                   className={`border-y border-blue-gray-100 bg-navygreen-300 p-4 ${index === 0 ? "w-10" : ""} ${index === 3 ? "w-2/4" : ""} ${head === "Name" ? "pl-10" : ""}`} // Add padding-left for "Name" column
//                 >
//                   <Typography
//                     variant="small"
//                     color="black"
//                     className="font-bold leading-none opacity-70"
//                   >
//                     {head}
//                   </Typography>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCampaigns.map((campaign, index) => {
//               // Alternate row colors
//               const rowClasses = `p-4 border-b border-blue-gray-50 cursor-pointer ${index % 2 === 0 ? 'bg-transparent' : 'bg-navygreen-100'}`;

//               return (
//                 <tr key={campaign._id} onClick={() => handleRowClick(campaign)} className={rowClasses}>
//                   <td className={rowClasses}>
//                     <Typography variant="small" color="blue-gray" className="font-normal">
//                       {index + 1}
//                     </Typography>
//                   </td>
//                   <td className={rowClasses}>
//                     <div className="flex flex-col items-center gap-3">
//                       <Typography variant="small" color="blue-gray" className="font-bold">
//                         {campaign.name}
//                       </Typography>
//                     </div>
//                   </td>
//                   <td className={rowClasses}>
//                     <Typography variant="small" color="blue-gray" className="font-normal">
//                       {campaign.location}
//                     </Typography>
//                   </td>
//                   <td className={rowClasses}>
//                     <Typography variant="small" color="blue-gray" className="font-normal">
//                       {campaign.issue.split(' ').slice(0, 20).join(' ')}...
//                     </Typography>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </CardBody>

//       {/* Popup Dialog */}
//       {selectedCampaign && (
//         <Dialog open={Boolean(selectedCampaign)} handler={handleCloseDialog} className="relative bg-ivory">
//           <button
//             onClick={handleCloseDialog}
//             className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900"
//             aria-label="Close"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//           <DialogHeader>
//             {/* <div className="flex items-center gap-4">
//               <Typography variant="h6">{selectedCampaign.title}</Typography>
//             </div> */}
//             <div className="flex items-center gap-4">
//               <Typography variant="h6">{capitalizeFirstLetter(selectedCampaign.title)}</Typography>
//             </div>
//           </DialogHeader>
//           <DialogBody divider>
//             <div className="flex flex-col gap-4">
//               <div className="flex flex-row">
//                 <Typography variant="small" color="black" className="font-semibold">
//                   Location:
//                 </Typography>
//                 <Typography variant="small" color="black">
//                   {selectedCampaign.location}
//                 </Typography>
//               </div>
//               <div className="flex flex-row">
//                 <Typography variant="small" color="black" className="font-semibold">
//                   Name:
//                 </Typography>
//                 <Typography variant="small" color="black">
//                   {selectedCampaign.name}
//                 </Typography>
//               </div>
//               <div className="flex flex-row">
//                 <Typography variant="small" color="black" className="font-semibold">
//                   Title:
//                 </Typography>
//                 <Typography variant="small" color="black">
//                   {selectedCampaign.title}
//                 </Typography>
//               </div>
//               <div className="flex flex-row">
//                 <Typography variant="small" color="black" className="font-semibold">
//                   Description:
//                 </Typography>
//                 <Typography variant="small" color="black">
//                   {selectedCampaign.issue}
//                 </Typography>
//               </div>
//               {selectedCampaign.attachedImage && (
//                 <div className="flex flex-col items-center">
//                   <img src={selectedCampaign.attachedImage} alt="Attached" className="w-full max-w-sm rounded-md" />
//                 </div>
//               )}
//               <div className="flex flex-row">
//                 <Typography variant="small" color="black" className="font-semibold">
//                   Contact Number:
//                 </Typography>
//                 <Typography variant="small" color="black">
//                   {selectedCampaign.contactNumber}
//                 </Typography>
//               </div>
//             </div>
//           </DialogBody>
//           <DialogFooter>
//             <Button
//               type="button"
//               onClick={handleReject} // Call handleReject on click
//               className="font-josefin-sans text-sm font-semibold bg-transparent text-gray-100 p-2 rounded hover:rounded-full border-2 border-gray-100 mr-4"
//             >
//               Reject
//             </Button>
//             <Button
//               variant="gradient"
//               color="green"
//               onClick={handleAccept} // Call handleAccept on click
//               className="font-josefin-sans text-sm font-semibold text-white bg-gray-100 p-2 rounded hover:rounded-full border-2 border-gray-100 mr-4"
//             >
//               Accept
//             </Button>
//           </DialogFooter>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default RequestCampaign;
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
import dashboardbg from "../../images/dashboardbg.png"; // Importing background image

const TABLE_HEAD = ["#", "Title", "Location", "Issue"];

const RequestCampaign = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/request-campaign");
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
        await axios.delete(`http://localhost:5000/api/request-campaign/${selectedCampaign._id}`);
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
      style={{ backgroundImage: `url(${dashboardbg})` }} // Apply the Onboard background
    >
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


{/* {selectedCampaign && (
  <Dialog open={Boolean(selectedCampaign)} handler={handleCloseDialog} className="relative bg-ivory">
    <button onClick={handleCloseDialog} className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900" aria-label="Close">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <DialogHeader>
      <div className="flex justify-center">
        <Typography variant="h6" className="text-center font-semibold">
          {capitalizeFirstLetter(selectedCampaign.title)}
        </Typography>
      </div>
    </DialogHeader>
    <DialogBody divider>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <Typography variant="small" color="black" className="font-semibold">
              Name:
            </Typography>
            <Typography variant="small" color="black">
              {selectedCampaign.name}
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography variant="small" color="black" className="font-semibold">
              Title:
            </Typography>
            <Typography variant="small" color="black">
              {selectedCampaign.title}
            </Typography>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <Typography variant="small" color="black" className="font-semibold">
              Location:
            </Typography>
            <Typography variant="small" color="black">
              {selectedCampaign.location}
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography variant="small" color="black" className="font-semibold">
              Contact Number:
            </Typography>
            <Typography variant="small" color="black">
              {selectedCampaign.contactNumber}
            </Typography>
          </div>
        </div>
        <div className="flex flex-col">
          <Typography variant="small" color="black" className="font-semibold">
            Issue:
          </Typography>
          <Typography variant="small" color="black">
            {selectedCampaign.issue}
          </Typography>
        </div>
        {selectedCampaign.attachedImage && (
          <div className="flex flex-col items-center">
            <img src={selectedCampaign.attachedImage} alt="Attached" className="w-full max-w-sm rounded-md" />
          </div>
        )}
      </div>
    </DialogBody>
    <DialogFooter>
      <Button onClick={handleReject} className="font-josefin-sans text-sm font-semibold bg-transparent text-gray-100 p-2 rounded hover:rounded-full border-2 border-gray-100 mr-4">
        Reject
      </Button>
      <Button variant="gradient" color="green" onClick={handleAccept} className="font-josefin-sans text-sm font-semibold text-white bg-navygreen-500 p-2 rounded hover:rounded-full">
        Accept
      </Button>
    </DialogFooter>
  </Dialog>
)} */}
      {/* {selectedCampaign && (
        <Dialog open={Boolean(selectedCampaign)} handler={handleCloseDialog} className="relative bg-ivory">
          <button onClick={handleCloseDialog} className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <DialogHeader>
            <div className="flex items-center gap-4">
              <Typography variant="h6">{capitalizeFirstLetter(selectedCampaign.title)}</Typography>
            </div>
          </DialogHeader>
          <DialogBody divider>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row">
                <Typography variant="small" color="black" className="font-semibold">
                  Location:
                </Typography>
                <Typography variant="small" color="black">
                  {selectedCampaign.location}
                </Typography>
              </div>
              <div className="flex flex-row">
                <Typography variant="small" color="black" className="font-semibold">
                  Name:
                </Typography>
                <Typography variant="small" color="black">
                  {selectedCampaign.name}
                </Typography>
              </div>
              <div className="flex flex-row">
                <Typography variant="small" color="black" className="font-semibold">
                  Title:
                </Typography>
                <Typography variant="small" color="black">
                  {selectedCampaign.title}
                </Typography>
              </div>
              <div className="flex flex-row">
                <Typography variant="small" color="black" className="font-semibold">
                  Issue:
                </Typography>
                <Typography variant="small" color="black">
                  {selectedCampaign.issue}
                </Typography>
              </div>
              {selectedCampaign.attachedImage && (
                <div className="flex flex-col items-center">
                  <img src={selectedCampaign.attachedImage} alt="Attached" className="w-full max-w-sm rounded-md" />
                </div>
              )}
              <div className="flex flex-row">
                <Typography variant="small" color="black" className="font-semibold">
                  Contact Number:
                </Typography>
                <Typography variant="small" color="black">
                  {selectedCampaign.contactNumber}
                </Typography>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button onClick={handleReject} className="font-josefin-sans text-sm font-semibold bg-transparent text-gray-100 p-2 rounded hover:rounded-full border-2 border-gray-100 mr-4">
              Reject
            </Button>
            <Button variant="gradient" color="green" onClick={handleAccept} className="font-josefin-sans text-sm font-semibold text-white bg-navygreen-500 p-2 rounded hover:rounded-full">
              Accept
            </Button>
          </DialogFooter>
        </Dialog>
      )} */}
    </div>
  );
};

export default RequestCampaign;
