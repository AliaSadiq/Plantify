import React from "react";
import FilterableCampaigns from "../components/Filters.js";
import CampaignList from "../components/CampaignList.js";
import Calendar from "../components/Calendar";
import Team from "../components/Team.js";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Campaigns = () => {
  const campaigns = []; // Assuming campaigns are fetched or passed as props

  return (
    <div className="flex h-full  bg-ivory bg-opacity-50">
      <div className="font-josefin-sans text-gary-100 ">
        <h1 className="text-2xl font-bold pt-10 pl-14 ">Campaigns</h1>
        <div className="ml-[540px] ">
          <Link
            to="/createCampaign"
            className="flex items-center w-28 p-2 bg-dbhover rounded"
            aria-label="Campaigns"
          >
            <FaPlusCircle className="mr-3" />
            Create
          </Link>
        </div>
        <div>
        <FilterableCampaigns/>
        </div>
       
        <div className="campaign-list">
          <CampaignList campaigns={campaigns} />
        </div>
        <div className="absolute right-3 h-52 top-10 flex items-center  ">
          <Calendar />
        </div>
        {/* <div> */}
        <div className="absolute right-1 top-3  flex items-center ">
        <Team/>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
