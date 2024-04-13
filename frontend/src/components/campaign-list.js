import React from "react";
import CampaignCardSh from "./campaign-card-sh"; // Assuming you have a CampaignCard component

const CampaignList = ({ campaigns, onSelectCampaign }) => {
    return (
        <div className="flex">
            <div className="mt-40 ml-[20px]">
                {campaigns.map(campaign => (
                    <CampaignCardSh
                        key={campaign.id}
                        campaign={campaign}
                        onClick={() => onSelectCampaign(campaign.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CampaignList;