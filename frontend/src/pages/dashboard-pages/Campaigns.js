
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Table from "../../components/dashboard-components/table.js";
// import { FaPlusCircle } from "react-icons/fa";
// import axios from "axios";
// import Button from "../../components/button.js";
// import { Input } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { format } from 'date-fns'; // Import date-fns for formatting dates
// import dashboardbg from "../../images/dashboardbg.png";

// const Campaigns = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [campaigns, setCampaigns] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const columns = [
//     "Campaign Name",
//     "Location",
//     "Start Date",
//     "End Date",
//     "Status"
//   ];

//   const fieldMappings = {
//     "Campaign Name": "name",
//     "Location": "location",
//     "Start Date": "start_date",
//     "End Date": "end_date",
//     "Status": "status",
//   };

//   const handleCreateCampaign = () => {
//     navigate(`/social-dashboard/${id}/createCampaign`);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/campaigns/socialgroup/${id}`);
//         const formattedCampaigns = response.data.map(campaign => ({
//           ...campaign,
//           start_date: format(new Date(campaign.start_date), 'MMM dd, yyyy'),
//           end_date: format(new Date(campaign.end_date), 'MMM dd, yyyy'),
//         }));
//         setCampaigns(formattedCampaigns);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//         setError('Failed to fetch campaigns.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchCampaigns();
//     }
//   }, [id]);

//   const filteredCampaigns = campaigns.filter(campaign => {
//     return (
//       campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.start_date.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.end_date.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   });

//   return (
//     <div
//       className="bg-cover bg-ivory flex flex-col bg-center min-h-screen"
//       style={{ backgroundImage: `url(${dashboardbg})` }}
//     >
//       <div className="ml-64 ">
//         <div className="flex flex-col justify-center w-auto rounded-lg bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md pt-4  mr-4">
//           <h1 className="text-xl text-center font-josefin-sans font-bold">Campaign List</h1>
//         </div>
//         <div className="max-h-fit w-full rounded mt-1 pl-4 pr-4 mr-4">
//           <div className="flex items-center justify-between mb-4">
//             <Button onClick={handleCreateCampaign} type="button" text="Create Campaign" color="fill"/>
//             <div className="flex items-center gap-2">
//               <Input
//                 label="Search"
//                 icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 className="w-80 rounded-md bg-navygreen-100"
//               />
//             </div>
//           </div>
//           <div className="w-full font-josefin-sans">
//             {loading ? (
//               <p>Loading campaigns...</p>
//             ) : error ? (
//               <p>{error}</p>
//             ) : (
//               <Table columns={columns} data={filteredCampaigns} fieldMappings={fieldMappings} setData={setCampaigns} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default Campaigns;
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Table from "../../components/dashboard-components/table.js";
// import { FaPlusCircle } from "react-icons/fa";
// import axios from "axios";
// import Button from "../../components/button.js";
// import { Input } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { format } from 'date-fns'; // Import date-fns for formatting dates
// import dashboardbg from "../../images/dashboardbg.png";

// const Campaigns = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [campaigns, setCampaigns] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const columns = [
//     "Campaign Name",
//     "Location",
//     "Start Date",
//     "End Date",
//     "Status"
//   ];

//   const fieldMappings = {
//     "Campaign Name": "name",
//     "Location": "location",
//     "Start Date": "start_date",
//     "End Date": "end_date",
//     "Status": "status",
//   };

//   const handleCreateCampaign = () => {
//     navigate(`/social-dashboard/${id}/createCampaign`);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/campaigns/socialgroup/${id}`);
//         const formattedCampaigns = response.data.map(campaign => ({
//           ...campaign,
//           start_date: format(new Date(campaign.start_date), 'MMM dd, yyyy'),
//           end_date: format(new Date(campaign.end_date), 'MMM dd, yyyy'),
//         }));
//         setCampaigns(formattedCampaigns);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//         setError('Failed to fetch campaigns.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchCampaigns();
//     }
//   }, [id]);

//   const filteredCampaigns = campaigns.filter(campaign => {
//     return (
//       campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.start_date.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       campaign.end_date.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   });

//  // Function to handle row click and navigate to the insights page
//   const handleRowClick = (campaignId) => {
//     navigate(`/social-dashboard/Insights/${campaignId}`);
//   };

//   return (
//     <div
//       className="bg-cover bg-ivory flex flex-col bg-center min-h-screen"
//       style={{ backgroundImage: `url(${dashboardbg})` }}
//     >
//       <div className="ml-64 ">
//         <div className="flex flex-col justify-center w-auto rounded-lg bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md pt-4  mr-4">
//           <h1 className="text-xl text-center font-josefin-sans font-bold">Campaign List</h1>
//         </div>
//         <div className="max-h-fit w-full rounded mt-1 pl-4 pr-4 mr-4">
//           <div className="flex items-center justify-between mb-4">
//             <Button onClick={handleCreateCampaign} type="button" text="Create Campaign" color="fill"/>
//             <div className="flex items-center gap-2">
//               <Input
//                 label="Search"
//                 icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 className="w-80 rounded-md bg-navygreen-100"
//               />
//             </div>
//           </div>
//           <div className="w-full font-josefin-sans">
//             {loading ? (
//               <p>Loading campaigns...</p>
//             ) : error ? (
//               <p>{error}</p>
//             ) : (
//               <Table
//                 columns={columns}
//                 data={filteredCampaigns}
//                 fieldMappings={fieldMappings}
//                 setData={setCampaigns}
//                 rowClickHandler={handleRowClick}  // Pass row click handler
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Campaigns;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Table from "../../components/dashboard-components/table.js";
import { FaPlusCircle } from "react-icons/fa";
import SearchBar from "../../components/search-bar.js";
import axios from "axios";
import Button from "../../components/button.js";
import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { format } from 'date-fns'; // For formatting dates
import dashboardbg from "../../images/dashboardbg.png";

const Campaigns = () => {
  const { id } = useParams(); // Get the social group ID from the URL
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Column headers for the table
  const columns = [
    "Campaign Name",
    "Location",
    "Start Date",
    "End Date",
    "Status"
  ];

  // Map column names to data field names
  const fieldMappings = {
    "Campaign Name": "name",
    "Location": "location",
    "Start Date": "start_date",
    "End Date": "end_date",
    "Status": "status",
  };

  // Navigate to create a new campaign
  const handleCreateCampaign = () => {
    navigate(`/social-dashboard/${id}/createCampaign`);
  };

  // // Update search query
  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Fetch campaigns from the API
  useEffect(() => {
    const fetchCampaigns = async () => {
      if (!id) {
        setError('Invalid social group ID.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/api/campaigns/socialgroup/${id}`);
        const formattedCampaigns = response.data.map(campaign => ({
          ...campaign,
          start_date: format(new Date(campaign.start_date), 'MMM dd, yyyy'),
          end_date: format(new Date(campaign.end_date), 'MMM dd, yyyy'),
        }));
        setCampaigns(formattedCampaigns);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
        setError('Failed to fetch campaigns.');
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [id]);

  // Filter campaigns based on the search query
  const filteredCampaigns = campaigns.filter(campaign => {
    return (
      campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.start_date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.end_date.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Navigate to the insights page on row click
  const handleRowClick = (campaignId) => {
    navigate(`/social-dashboard/Insights/${campaignId}`);
  };

  return (
    <div
      className="bg-cover bg-ivory flex flex-col items-center bg-center min-h-screen"
      style={{ backgroundImage: `url(${dashboardbg})` }}
    >
      <div className="ml-64 mt-8">
        <div className="flex flex-col justify-center w-auto rounded-lg bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md ml-4 pt-4 mr-4">
          <h1 className="text-xl  font-josefin-sans font-bold">Campaign List</h1>
        </div>
        <div className="max-h-fit w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center w-[450px] gap-2">
               {/* <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-80 rounded-md bg-navygreen-100"
              />
               */}
                 <SearchBar onSearch={handleSearch} placeholder={"Search Campaigns"} />
            </div>  
          
            <Button onClick={handleCreateCampaign} type="button" text="Create Campaign" className="py-2 bg-gray-100 text-white" />
          
          </div>
          <div className="w-full font-josefin-sans">
            {loading ? (
              <p>Loading campaigns...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <Table
                columns={columns}
                data={filteredCampaigns}
                fieldMappings={fieldMappings}
                setData={setCampaigns}
                rowClickHandler={handleRowClick} // Pass row click handler to the table
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
