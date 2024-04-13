import React from 'react';
import campaignPic from '../assets/campaign.jpg';
import {UserGroupIcon} from '@heroicons/react/24/solid';

const CampaignDetails = ({ campaign }) => {
    //const progress = (campaign.collected_donation/campaign.target_donation)*100;
    return (
        <div className="bg-palegreen-50 mt-2 flex flex-col">
            {campaign && (
                <div className="flex-1">
                    <div className="relative w-full h-[200px] mb-4">
                        <img src={campaignPic} alt={campaign.name} className="absolute w-full h-full object-cover" />
                    </div>
                    <div className='text-center text-gray-100 font-josefin-sans mt-10'>
                        <h2 className="text-xl font-bold">{campaign.name}</h2>
                        <p className="text-mini">A campaign by Riphah Green Club</p>
                    </div>
                    <div className="flex justify-between mt-20 gap-[100px]">
                        <div className="w-1/2 pr-2">
                            <h3 className="text-lg font-semibold mb-2">About the Campaign</h3>
                            <p className='text-justify'>{campaign.description}</p>
                        </div>
                        <div className="w-1/2 pl-2 border-l border-gray-300 text-center font-josefin-sans border-2 border-navygreen-300 py-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Actions</h3>
                            <div className='flex flex-column justify-center mt-6'>
                                <ul className='md:space-y-4'>
                                    <li>
                                        <button type="button" class="bg-navygreen-300 text-sm font-semibold text-gray-100 p-4 rounded-full">DONATE</button>
                                    </li>
                                    <li>
                                        <UserGroupIcon className="w-5 h-5" /><span><p className="text-sm ml-1">17 volunteers</p></span>
                                    </li>
                                    <li>
                                        <div className="bg-palegreen-50 border-[0.5px] border-navygreen-300 h-3 rounded-full">
                                            <div className="bg-navygreen-300 h-full rounded-full " style={{ width: 60 }}></div>
                                        </div>
                                        <p className="text-xs text-gray-600 mt-1">{campaign.collected_donation}Rs raised of {campaign.target_donation}Rs</p>
                                    </li>
                                    <li>
                                        <button type="button" class="bg-relative text-sm font-semibold text-gray-100 p-4 rounded-full border-[0.5px] border-navygreen-300">Share Campaign</button>
                                    </li>
                                    <li>
                                        <button type="button" class="bg-relative text-sm font-semibold text-gray-100 p-4 rounded-full border-[0.5px] border-navygreen-300">Follow Campaign</button>
                                    </li>
                                </ul>
                            </div> 
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CampaignDetails;
