// export default Campaigns;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Table from "../../components/dashboard-components/table.js";
import SearchBar from "../../components/search-bar.js";
import axios from "axios";
import Button from "../../components/button.js";
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
        const response = await axios.get(`http://localhost:5000/api/campaigns/socialgroup/${id}`);
        const formattedCampaigns = response.data.map(campaign => ({
          ...campaign,
          start_date: format(new Date(campaign.start_date), 'MMM dd, yyyy'),
          end_date: format(new Date(campaign.end_date), 'MMM dd, yyyy'),
        }));
        setCampaigns(formattedCampaigns);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
        setError('No campaign exists.');
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
    <div className='min-h-screen lg:ml-[245px] p-4'> 
      <div className='min-h-screen p-8 rounded-pl bg-neutral'>
          <div className='mb-6 flex flex-col lg:flex-row items-center lg:justify-between'>
              <div className='w-full text-lg font-bold '>Campaigns List</div>
              <div className="w-full flex flex-col lg:flex-row items-center gap-2">
                <SearchBar onSearch={handleSearch} placeholder={"Search Campaigns"} />
                <Button onClick={handleCreateCampaign} type="button" text="Create Campaign" className="py-2 bg-gray-100 text-white" />
              </div>
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
  );
};

export default Campaigns;
