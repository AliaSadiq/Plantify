import React from 'react';
import useFetchCampaignCount from '../hooks/campaign-count';
import useFetchSocialGroupCount from '../hooks/socialgroup-count';
import TodoDropdown from '../components/dropdowns.js/todo-dropdown';

export default function Dashboard () {
    const {count, loading, error} = useFetchCampaignCount();
    const {scount, sloading, serror} = useFetchSocialGroupCount();
    return(
        <div className='min-h-screen ml-[245px] p-4'>
            <div className='bg-neutral p-4 rounded-pl'>
                <h2 className='text-lg font-bold mb-10'>Admin Dashboard</h2>
                <div className="flex flex-col justify-between gap-4 lg:flex-row h-full p-4 rounded rounded-pl my-4 mr-4">
                    <div className='w-full'>
                        <div className="grid grid-cols-3 gap-4 w-full">
                            <div className="p-8 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
                                <h3 className="text-lg font-bold mb-2 z-10">Campaigns</h3>
                                <p className='mt-4 mb-2 text-sm'>Total Campaigns</p>
                                <h1 className='text-lg font-bold'>{count}</h1>
                            </div>
                            <div className="p-8 w-full max-h-fit bg-navygreen-100  rounded-pl shadow-md">
                                <h3 className="text-lg font-bold mb-2 z-10">Social Groups</h3>
                                <p className='mt-4 mb-2 text-sm'>Total Social Groups</p>
                                <h1 className='text-lg font-bold'>{scount}</h1>
                            </div>
                            <div className="p-8 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
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
                    </div>
                    <div className="flex flex-col h-fit gap-y-4">
                        <div className="bg-navygreen-100 p-4 rounded-pl min-w-60">
                            <div className='mb-6 flex items-center justify-between'>
                                <div className='text-md font-bold '>To-do List</div>
                                <button 
                                    className='flex gap-2 dark:bg-forest-200 dark:text-gray-400 bg-navygreen-100 hover:bg-navygreen-200 dark:hover:bg-forest-100 text-gray-100 p-2 rounded-pl'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </button>
                            </div>
                            {/* list */}
                            <ul className='flex flex-col gap-2'>
                                {/* list item */}
                                <div className='flex items-center justify-between gap-2 p-4 bg-neutral w-full rounded-pl text-sm'>
                                    <div><p>xyz v.imp</p></div>
                                    <TodoDropdown/>
                                </div>
                                {/* list item */}
                                <div className='flex items-center justify-between gap-2 p-4 bg-neutral w-full rounded-pl text-sm'>
                                    <div><p>xyz v.imp</p></div>
                                    <TodoDropdown/>
                                </div>
                                {/* list item */}
                                <div className='flex items-center justify-between gap-2 p-4 bg-neutral w-full rounded-pl text-sm'>
                                    <div><p>xyz today v.imp</p></div>
                                    <TodoDropdown/>
                                </div>
                                {/* list item */}
                                <div className='flex items-center justify-between gap-2 p-4 bg-neutral w-full rounded-pl text-sm'>
                                    <div><p>xyz today v.imp</p></div>
                                    <TodoDropdown/>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}