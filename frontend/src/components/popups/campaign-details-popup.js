import React from 'react';
import { Link } from 'react-router-dom';
import camp from '../../assets/campaign-card.jpeg';
import { XMarkIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const CampaignDetailsPopup = ({ campaign, closePopup }) => {
  if (!campaign) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="backdrop-blur-sm backdrop-filter relative bg-navygreen-200 rounded-lg p-8 max-w-3xl z-10 bg-opacity-60 flex flex-col items-center">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none" 
          onClick={closePopup}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className='text-center font-josefin-sans'>
          <h1 className='text-xl font-bold'>{campaign.name}</h1>
          <p className='font-light'>A campaign by <Link to={`/campaign/socialGroup/${campaign.socialGroup._id}`} className="text-gray-100 hover:text-pinky"><span className='font-semibold'>{campaign.socialGroup.name}</span></Link></p>
        </div>
        <div className='flex flex-row mx-2 mt-10 gap-[20px] flex-grow'>
          <div className='flex flex-col'>
            <img src={camp} alt="Campaign Image" className="w-[300px] h-[150px] object-cover rounded-lg" />
            <p className='font-semibold text-lg mt-6'>Campaign Motive</p>
            <p>{campaign.description}</p>
          </div>
          <div className='flex flex-col border-2 border-gray-100 p-8 items-center justify-center font-josefin-sans'>
            <p className='text-lg'>{campaign.collected_donation} raised off {campaign.target_donation}</p>
            <button type="button" class="mt-4 font-josefin-sans text-sm font-semibold text-white bg-darkbrown p-4 rounded hover:rounded-full border-2 border-darkbrown">Donate</button>
            <div className="bg-sage-100 h-2 rounded-full overflow-hidden border-2 border-sage-200 mt-4">
              <div className="bg-nav-green h-full" style={{ width: '80%' }}></div>
            </div>
            <div className='flex flex-row gap-[10px] mt-4'>
              <UserGroupIcon className="h-4 w-4"/>
              <p>17 Volunteers</p>
            </div>
            <div className='flex flex-row gap-[10px] mt-4'>
              <button type="button" class="font-josefin-sans text-sm font-semibold text-gray-100 bg-transparent p-4 rounded hover:rounded-full border-2 border-gray-100">Share Campaign</button>
              <button type="button" class="font-josefin-sans text-sm font-semibold text-gray-100 bg-transparent p-4 rounded hover:rounded-full border-2 border-gray-100">Follow Campaign</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CampaignDetailsPopup;