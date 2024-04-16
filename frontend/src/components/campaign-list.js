import React from "react";
import CampaignCardSh from "./campaign-card-sh"; // Assuming you have a CampaignCard component

const CampaignList = ({ campaigns, onSelectCampaign }) => {
    return (
        <div className="flex">
            <div className="ml-[50px]">
                {campaigns.map(campaign => (
                    <CampaignCardSh
                        key={campaign._id}
                        campaign={campaign}
                        onClick={onSelectCampaign} // Pass the onSelectCampaign function directly
                    />
                ))}
            </div>
        </div>
    );
}

export default CampaignList;
