import React from "react";
import FilterableCampaigns from "../../components/dashboard-components/Campaignfilters.js";
import CampaignList from "../../components/dashboard-components/CampaignList.js";
import Calendar from "../../components/dashboard-components/Calendar.js";
import Team from "../../components/dashboard-components/team.js";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Campaigns = () => {
  const campaigns = []; // Assuming campaigns are fetched or passed as props

  return (
    <div className="flex h-full">
      <div className="font-josefin-sans text-gary-100 ">
        <h1 className="text-2xl font-bold pt-10 pl-14 ">Campaigns</h1>
        <div>
          <FilterableCampaigns />
        </div>
        <div>
          <Link
            to="/createCampaign"
            className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded"
            aria-label="Campaigns"
          >
            <FaPlusCircle className="mr-3" />
            Create Campaign
          </Link>
        </div>
        <div className="campaign-list">
          <CampaignList campaigns={campaigns} />
        </div>
        <div className="absolute right-3 h-48 top-20 flex items-center  ">
          <Calendar />
        </div>
        {/* <div> */}
        <div className="absolute right-1 top-1 flex items-center ">
        <Team/>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
