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
        const apiUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get(`${apiUrl}/api/campaigns/socialgroup/${id}`);
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
      className="bg-cover bg-ivory flex flex-col bg-center min-h-screen"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/dashboardbg.png'})` }}
      >
      <div className="ml-64 mr-80 mt-8">
        <div className="flex flex-col justify-center w-auto rounded-lg bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md ml-4 pt-4 mr-4">
          <h1 className="text-xl  font-josefin-sans font-bold">Campaign List</h1>
        </div>
        <div className="max-h-fit w-full rounded  pl-4 pr-4 mt-10 mr-4">
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
          
            <Button onClick={handleCreateCampaign} type="button" text="Create Campaign" color="fill" />
          
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
