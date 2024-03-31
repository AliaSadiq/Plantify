import React from 'react';
import CampaignCard from '../components/campaign-card';
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';
import CamapignCardSh from '../components/campaign-card-sh';

export default function CampaignListPage(){
    return(
        <div className="App">
        {/*<NavBar/>*/}
        <div className='p-20 w-full mt-40 flow-root'>
          <div className='float-left ml-20'>
            <p className='font-josefin-sans text-lg font-semibold'>Campaigns</p>
            <p className='font-josefin-sans text-sm font-light'>List of campaigns on Plantify</p>
          </div>
          <div className='float-right mr-20'>
            <p className='font-josefin-sans text-sm font-medium'>Filters</p>
            <select className="font-josefin-sans text-sm bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-nav-green">
              <option value="all">All</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className='float-right mr-10'>
            <Link to="/new-campaign"><PlusCircleIcon className="text-yellowgreen-100 h-[75px] w-[75px] relative" /></Link>
          </div>
          <div className="mt-20 mx-auto">
            <div className="flex flex-wrap justify-left gap-4 p-8 ml-12">
              <Link to="/campaign-detail">
                <CamapignCardSh />
              </Link>
              <CamapignCardSh />
              <CamapignCardSh />
              <CamapignCardSh />
              <CamapignCardSh />
              <CamapignCardSh />
              {/* Add more CampaignCard components as needed */}
            </div>
          </div>
        </div>
        {/* Route for CampaignDetailPage */}
      </div>
    );
}