import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Table from "../../components/dashboard-components/table.js";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import Button from "../../components/button.js";

const Campaigns = () => {
  const { id } = useParams();
  const [campaigns, setCampaigns] = useState([]);
  const columns = [
    "Campaign Name",
    "Donors",
    "Targeted Amount",
    "Raised Amount"
  ];

  const fieldMappings = {
    "Campaign Name": "name",
    "Donors": "volunteers",
    "Targeted Amount": "target_donation",
    "Raised Amount": "collected_donation"
  };


  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/campaigns/socialgroup/${id}`);
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    if (id) {
      fetchCampaigns();
    }
  }, [id]);

  return (
    // <div className="flex h-full  bg-ivory bg-opacity-50">
    //   <div className="font-josefin-sans text-gary-100 ">
    //     <h1 className="text-2xl font-bold pt-10 pl-14 ">Campaigns</h1>
    //     <div className="ml-[540px] ">
    //       <Link
    //         to="/createCampaign"
    //         className="flex items-center w-28 p-2 bg-dbhover rounded"
    //         aria-label="Campaigns"
    //       >
    //         <FaPlusCircle className="mr-3" />
    //         Create
    //       </Link>
    //     </div>
    //     <div>
    //     <FilterableCampaigns/>
    //     </div>
       
    //     <div className="campaign-list">
    //       <CampaignList campaigns={campaigns} />
    //     </div>
    //     <div className="absolute right-3 h-52 top-10 flex items-center  ">
    //       <Calendar />
    //     </div>
    //     {/* <div> */}
    //     <div className="absolute right-1 top-3  flex items-center ">
    //     <Team/>
    //     </div>
    //   </div>
    // </div>
    <div className="ml-64 p-4">
      <div className="flex justify-center w-auto bg-navygreen-100 rounded rounded-pl p-4 mr-4">
        <h1 className="text-xl text-center font-bold">Campaign List</h1>
      </div>
      <div className="max-h-fit w-full bg-neutral rounded-pl mt-4 p-4 mr-4">
        <div className="flex items-center justify-between mb-4">
          <Link to="/createCampaign">
            <Button text="Create Campaign" color="fill"/>
          </Link>
          <div>
            search bar ya filter wala idhr dal diyo idk
          </div>
        </div>
        <div className="w-full">
          <Table columns={columns} data={campaigns} fieldMappings={fieldMappings} />
        </div>
      </div>
    </div>
  );
};

export default Campaigns;

