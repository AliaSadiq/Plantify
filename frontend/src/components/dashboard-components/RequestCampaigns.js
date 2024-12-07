// import React, { useState } from "react";
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
//   Avatar,
// } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// const TABLE_HEAD = ["#", "Name", "Location", "Description"];

// const TABLE_ROWS = [
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
//     name: "Spotify",
//     location: "New York",
//     description: "A campaign for promoting new artists.",
//     status: "Accepted",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
//     name: "Amazon",
//     location: "Seattle",
//     description: "Holiday sale campaign.",
//     status: "Accepted",
//   },
// ];

// const RequestCampaign = () => {
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleRowClick = (campaign) => {
//     setSelectedCampaign(campaign);
//   };

//   const handleCloseDialog = () => {
//     setSelectedCampaign(null);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Filter campaigns based on the search query
//   const filteredCampaigns = TABLE_ROWS.filter(campaign => {
//     return (
//       campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.description.toLowerCase().includes(searchQuery.toLowerCase())
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
//                   className={`border-y border-blue-gray-100 bg-navygreen-300 p-4 ${index === 0 ? "w-10" : ""} ${index === 3 ? "w-2/4" : ""}`}
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
//                 <tr key={campaign.name} onClick={() => handleRowClick(campaign)} className={rowClasses}>
//                   <td className={rowClasses}>
//                     <Typography variant="small" color="blue-gray" className="font-normal">
//                       {index + 1}
//                     </Typography>
//                   </td>
//                   <td className={rowClasses}>
//                     <div className="flex flex-col items-center gap-3">
//                       <Avatar src={campaign.img} alt={campaign.name} size="sm" />
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
//                       {campaign.description.split(' ').slice(0, 20).join(' ')}...
//                     </Typography>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </CardBody>

//       {/* Popup Dialog */}
     
//      {selectedCampaign && (
//   <Dialog open={Boolean(selectedCampaign)} handler={handleCloseDialog} className="relative bg-ivory">
//     <button
//       onClick={handleCloseDialog}
//       className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900"
//       aria-label="Close"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M6 18L18 6M6 6l12 12"
//         />
//       </svg>
//     </button>
//     <DialogHeader>
//       <div className="flex items-center gap-4">
//         <Avatar src={selectedCampaign.img} alt={selectedCampaign.name} size="lg" />
//         <Typography variant="h6">{selectedCampaign.name}</Typography>
//       </div>
//     </DialogHeader>
//     <DialogBody divider>
//       <div className="flex flex-col  gap-4">
//         {/* <Avatar src={selectedCampaign.img} alt={selectedCampaign.name} size="lg" /> */}
//         <div className="flex flex-row">
//           <Typography variant="small" color="black" className="font-semibold">
//             Location:
//           </Typography>
//           <Typography variant="small" color="black">
//             {selectedCampaign.location}
//           </Typography>
//           </div>
//           <div className="flex flex-row">
//           <Typography variant="small" color="black" className="font-semibold">
//             Description:
//           </Typography>
//           <Typography variant="small" color="black">
//             {selectedCampaign.description}
//           </Typography>
//         </div>
//       </div>
//     </DialogBody>
//     <DialogFooter>
//       <Button
//         type="button"
//         onClick={handleCloseDialog}
//         className="font-josefin-sans text-sm font-semibold bg-transparent text-gray-100 p-2 rounded hover:rounded-full border-2 border-gray-100 mr-4"
//       >
//         Reject
//       </Button>
//       <Button
//         variant="gradient"
//         color="green"
//         onClick={handleCloseDialog}
//         className="font-josefin-sans text-sm font-semibold text-white bg-gray-100 p-2 rounded hover:rounded-full border-2 border-gray-100 mr-4"
//       >
//         Accept
//       </Button>
//     </DialogFooter>
//   </Dialog>
// )}


//     </div>
//   );
// };

// export default RequestCampaign;
// import React, { useState } from "react";
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
//   Avatar,
// } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// const TABLE_HEAD = ["#", "Name", "Location", "Description"];

// const TABLE_ROWS = [
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
//     name: "Spotify",
//     location: "New York",
//     description: "A campaign for promoting new artists.",
//     status: "Accepted",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
//     name: "Amazon",
//     location: "Seattle",
//     description: "Holiday sale campaign.",
//     status: "Accepted",
//   },
// ];

// const RequestCampaign = () => {
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleRowClick = (campaign) => {
//     setSelectedCampaign(campaign);
//   };

//   const handleCloseDialog = () => {
//     setSelectedCampaign(null);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Filter campaigns based on the search query
//   const filteredCampaigns = TABLE_ROWS.filter(campaign => {
//     return (
//       campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.description.toLowerCase().includes(searchQuery.toLowerCase())
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
//                   className={`border-y border-blue-gray-100 bg-navygreen-300 p-4 ${
//                     index === 0 ? "w-10" : ""
//                   } ${index === 3 ? "w-2/4" : ""} ${
//                     head === "Name" ? "pl-10" : ""
//                   }`} // Add padding-left for "Name" column
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
//               const rowClasses = `p-4 border-b border-blue-gray-50 cursor-pointer ${
//                 index % 2 === 0 ? 'bg-transparent' : 'bg-navygreen-100'
//               }`;

//               return (
//                 <tr key={campaign.name} onClick={() => handleRowClick(campaign)} className={rowClasses}>
//                   <td className={rowClasses}>
//                     <Typography variant="small" color="blue-gray" className="font-normal">
//                       {index + 1}
//                     </Typography>
//                   </td>
//                   <td className={rowClasses}>
//                     <div className="flex flex-col items-center gap-3">
//                       <Avatar src={campaign.img} alt={campaign.name} size="sm" />
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
//                       {campaign.description.split(' ').slice(0, 20).join(' ')}...
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
//             <div className="flex items-center gap-4">
//               <Avatar src={selectedCampaign.img} alt={selectedCampaign.name} size="lg" />
//               <Typography variant="h6">{selectedCampaign.name}</Typography>
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
//                   Description:
//                 </Typography>
//                 <Typography variant="small" color="black">
//                   {selectedCampaign.description}
//                 </Typography>
//               </div>
//             </div>
//           </DialogBody>
//           <DialogFooter>
//             <Button
//               type="button"
//               onClick={handleCloseDialog}
//               className="font-josefin-sans text-sm font-semibold bg-transparent text-gray-100 p-2 rounded hover:rounded-full border-2 border-gray-100 mr-4"
//             >
//               Reject
//             </Button>
//             <Button
//               variant="gradient"
//               color="green"
//               onClick={handleCloseDialog}
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
//   Avatar,
// } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import axios from "axios";

// const TABLE_HEAD = ["#", "Name", "Location", "Description"];

// const RequestCampaign = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     // Fetch campaign data from the API when the component mounts
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/campaigns"); // Replace with your API URL
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
//         // Replace with your backend URL and campaign ID
//         await axios.delete(`http://localhost:5000/api/campaigns/${selectedCampaign._id}`);
        
//         // Remove the rejected campaign from the local state
//         setCampaigns(campaigns.filter(campaign => campaign._id !== selectedCampaign._id));
//         handleCloseDialog();
//       } catch (error) {
//         console.error("Error rejecting campaign:", error);
//       }
//     }
//   };

//   // Filter campaigns based on the search query
//   const filteredCampaigns = campaigns.filter(campaign => {
//     return (
//       campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.description.toLowerCase().includes(searchQuery.toLowerCase())
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
//                   className={`border-y border-blue-gray-100 bg-navygreen-300 p-4 ${
//                     index === 0 ? "w-10" : ""
//                   } ${index === 3 ? "w-2/4" : ""} ${
//                     head === "Name" ? "pl-10" : ""
//                   }`} // Add padding-left for "Name" column
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
//               const rowClasses = `p-4 border-b border-blue-gray-50 cursor-pointer ${
//                 index % 2 === 0 ? 'bg-transparent' : 'bg-navygreen-100'
//               }`;

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
//                       {campaign.description.split(' ').slice(0, 20).join(' ')}...
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
//             <div className="flex items-center gap-4">
          
//               <Typography variant="h6">{selectedCampaign.name}</Typography>
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
//                   Description:
//                 </Typography>
//                 <Typography variant="small" color="black">
//                   {selectedCampaign.description}
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
//               onClick={handleCloseDialog}
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

// // export default RequestCampaign;
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
//   Avatar,
// } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const TABLE_HEAD = ["#", "Name", "Location", "Description"];

// const RequestCampaign = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch campaign data from the API when the component mounts
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/campaigns"); // Replace with your API URL
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
//         // Replace with your backend URL and campaign ID
//         await axios.delete(`http://localhost:5000/api/campaigns/${selectedCampaign._id}`);
        
//         // Remove the rejected campaign from the local state
//         setCampaigns(campaigns.filter(campaign => campaign._id !== selectedCampaign._id));
//         handleCloseDialog();
//       } catch (error) {
//         console.error("Error rejecting campaign:", error);
//       }
//     }
//   };

//   const handleAccept = async () => {
//     if (selectedCampaign) {
//       try {
//         // Optionally update the campaign status or other details before redirecting
//         // await axios.put(`http://localhost:5000/api/campaigns/${selectedCampaign._id}`, { status: 'Accepted' });

//         // Navigate to the Create Campaign page
//         navigate("/createCampaign", { state: { campaign: selectedCampaign } });

//         handleCloseDialog();
//       } catch (error) {
//         console.error("Error accepting campaign:", error);
//       }
//     }
//   };

//   // Filter campaigns based on the search query
//   const filteredCampaigns = campaigns.filter(campaign => {
//     return (
//       campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.description.toLowerCase().includes(searchQuery.toLowerCase())
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
//                   className={`border-y border-blue-gray-100 bg-navygreen-300 p-4 $ {
//                     index === 0 ? "w-10" : ""
//                   } ${index === 3 ? "w-2/4" : ""} ${
//                     head === "Name" ? "pl-10" : ""
//                   }`} // Add padding-left for "Name" column
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
//               const rowClasses = `p-4 border-b border-blue-gray-50 cursor-pointer $ {
//                 index % 2 === 0 ? 'bg-transparent' : 'bg-navygreen-100'
//               }`;

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
//                       {campaign.description.split(' ').slice(0, 20).join(' ')}...
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
//             <div className="flex items-center gap-4">
//               <Typography variant="h6">{selectedCampaign.name}</Typography>
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
//                   Description:
//                 </Typography>
//                 <Typography variant="small" color="black">
//                   {selectedCampaign.description}
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

// // export default RequestCampaign;
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
//   const [campaigns, setCampaigns] = useState([]);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/campaigns"); // Replace with your API URL
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
//         await axios.delete(`http://localhost:5000/api/campaigns/${selectedCampaign._id}`);
//         setCampaigns(campaigns.filter(campaign => campaign._id !== selectedCampaign._id));
//         handleCloseDialog();
//       } catch (error) {
//         console.error("Error rejecting campaign:", error);
//       }
//     }
//   };

//   const handleAccept = async () => {
//     if (selectedCampaign) {
//       try {
//         navigate("/createCampaign", { state: { campaign: selectedCampaign } });
//         handleCloseDialog();
//       } catch (error) {
//         console.error("Error accepting campaign:", error);
//       }
//     }
//   };

//   const filteredCampaigns = campaigns.filter(campaign => {
//     return (
//       campaign.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.issue.toLowerCase().includes(searchQuery.toLowerCase())
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
//                   className={`border-y border-blue-gray-100 bg-navygreen-300 p-4 ${
//                     index === 0 ? "w-10" : ""
//                   } ${index === 3 ? "w-2/4" : ""} ${
//                     head === "Name" ? "pl-10" : ""
//                   }`} // Add padding-left for "Name" column
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
//               const rowClasses = `p-4 border-b border-blue-gray-50 cursor-pointer ${
//                 index % 2 === 0 ? 'bg-transparent' : 'bg-navygreen-100'
//               }`;

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
//                         {campaign.socialGroup.name || 'N/A'}
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
//             <div className="flex items-center gap-4">
//               <Typography variant="h6">{selectedCampaign.issue}</Typography>
//             </div>
//           </DialogHeader>
//           <DialogBody divider>
//             <div className="flex flex-col gap-4">
//               {selectedCampaign.attachedImage && (
//                 <img
//                   src={selectedCampaign.attachedImage}
//                   alt="Campaign"
//                   className="w-full h-auto object-cover"
//                 />
//               )}
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
//                   Contact Number:
//                 </Typography>
//                 <Typography variant="small" color="black">
//                   {selectedCampaign.contactNumber}
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
//             </div>
//           </DialogBody>
//           <DialogFooter>
//             <Button
//               type="button"
//               onClick={handleReject}
//               className="font-josefin-sans text-sm font-semibold bg-transparent text-gray-100 p-2 rounded hover:rounded-full border-2 border-gray-100 mr-4"
//             >
//               Reject
//             </Button>
//             <Button
//               variant="gradient"
//               color="green"
//               onClick={handleAccept}
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
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

const TABLE_HEAD = ["#", "Name", "Location", "Description"];

const RequestCampaign = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { id } = useParams();
console.log("Captured ID from URL:", id);

// Capitalize first letter utility function
const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
  useEffect(() => {
    // Fetch campaign data from the API when the component mounts
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/request-campaign/get-request", {
          params: { socialGroup: id },
        });
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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
  // Filter campaigns based on the search query
  const filteredCampaigns = campaigns.filter(campaign => {
    return (
      campaign.issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.location.toLowerCase().includes(searchQuery.toLowerCase())||
      campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none bg-transparent">
        <div className="mb-4 flex justify-between gap-8 md:items-center">
          <h3 className="text-md text-black font-semibold mb-2">Campaign Requests</h3>
          <div className="flex w-80 gap-2 md:w-max">
            <div className="w-72 rounded-md bg-navygreen-100">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-y-auto h-[calc(100%-80px)] px-0">
        <table className="w-full min-w-max table-fixed text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className={`border-y border-blue-gray-100 bg-navygreen-300 p-4 ${index === 0 ? "w-10" : ""} ${index === 3 ? "w-2/4" : ""} ${head === "Name" ? "pl-10" : ""}`} // Add padding-left for "Name" column
                >
                  <Typography
                    variant="small"
                    color="black"
                    className="font-bold leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredCampaigns.map((campaign, index) => {
              // Alternate row colors
              const rowClasses = `p-4 border-b border-blue-gray-50 cursor-pointer ${index % 2 === 0 ? 'bg-transparent' : 'bg-navygreen-100'}`;

              return (
                <tr key={campaign._id} onClick={() => handleRowClick(campaign)} className={rowClasses}>
                  <td className={rowClasses}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {index + 1}
                    </Typography>
                  </td>
                  <td className={rowClasses}>
                    <div className="flex flex-col items-center gap-3">
                      <Typography variant="small" color="blue-gray" className="font-bold">
                        {campaign.name}
                      </Typography>
                    </div>
                  </td>
                  <td className={rowClasses}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {campaign.location}
                    </Typography>
                  </td>
                  <td className={rowClasses}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {campaign.issue.split(' ').slice(0, 20).join(' ')}...
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>

      {/* Popup Dialog */}
      {selectedCampaign && (
        <Dialog open={Boolean(selectedCampaign)} handler={handleCloseDialog} className="relative bg-ivory">
          <button
            onClick={handleCloseDialog}
            className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <DialogHeader>
            {/* <div className="flex items-center gap-4">
              <Typography variant="h6">{selectedCampaign.title}</Typography>
            </div> */}
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
                  Description:
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
            <Button
              type="button"
              onClick={handleReject} // Call handleReject on click
              className="font-josefin-sans text-sm font-semibold bg-transparent text-gray-100 p-2 rounded hover:rounded-full border-2 border-gray-100 mr-4"
            >
              Reject
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={handleAccept} // Call handleAccept on click
              className="font-josefin-sans text-sm font-semibold text-white bg-gray-100 p-2 rounded hover:rounded-full border-2 border-gray-100 mr-4"
            >
              Accept
            </Button>
          </DialogFooter>
        </Dialog>
      )}
    </div>
  );
};

export default RequestCampaign;
