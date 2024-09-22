import React from 'react';
import useFetchCampaignCount from '../hooks/campaign-count';
import useFetchSocialGroupCount from '../hooks/socialgroup-count';

export default function Dashboard () {
    const {count, loading, error} = useFetchCampaignCount();
    const {scount, sloading, serror} = useFetchSocialGroupCount();
    return(
        <div className='min-h-screen ml-[245px] p-4 dark:bg-forest-200 dark:text-white'>
            <div className='bg-neutral dark:bg-forest-100 p-4 rounded-pl'>
                <h2 className='text-lg font-bold mb-10'>Admin Dashboard</h2>
                <div className="flex flex-col justify-between gap-4 lg:flex-row h-full p-4 rounded rounded-pl my-4 mr-4">
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="p-8 w-full bg-navygreen-100 dark:bg-forest-200 dark:text-white rounded-pl ">
                            <h3 className="text-lg font-bold mb-2 z-10">Campaigns</h3>
                            <p className='mt-4 mb-2 text-sm'>Total Campaigns</p>
                            <h1 className='text-lg font-bold'>{count}</h1>
                        </div>
                        <div className="p-8 w-full bg-navygreen-100 dark:bg-forest-200 rounded-pl ">
                            <h3 className="text-lg font-bold mb-2 z-10">Social Groups</h3>
                            <p className='mt-4 mb-2 text-sm'>Total Social Groups</p>
                            <h1 className='text-lg font-bold'>{scount}</h1>
                        </div>
                        <div className="p-8 w-full bg-navygreen-100 dark:bg-forest-200 rounded-pl ">
                            <h3 className="text-lg font-bold mb-2 z-10">On wait</h3>
                            <p className='mt-4 mb-2 text-sm'>Unverified Social Groups</p>
                            <h1 className='text-lg font-bold'>15</h1>
                        </div>
                        <div className="p-4 col-span-3 w-full border border-2 border-gray-300 rounded rounded-pl ">
                            <h3 className="text-md font-semibold mb-2">Statistics</h3>
                            {/* <Line data={data} options={options}/> */}
                            {/* <CampaignChart/> */}
                        </div>
                    </div>
                    <div className="flex flex-col h-fit gap-y-4 p-4 rounded-pl border border-2 border-gray-300">
                        <div className="bg-navygreen-100 dark:bg-forest-200 p-4 rounded-pl border border-2 border-gray-300">
                            <p className="text-md font-semibold mb-2">Event Calendar</p>
                        </div>
                        <div className="bg-navygreen-100 dark:bg-forest-200 p-4 rounded-pl border border-2 border-gray-300">
                            <p className="text-md font-semibold mb-2">Group's Team</p>
                        </div>
                        <div className="bg-navygreen-100 dark:bg-forest-200 p-4 rounded-pl border border-2 border-gray-300">
                            <p className="text-md font-semibold mb-2">Task List</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}