import React, {useState, useEffect} from 'react';
import useFetchCampaignCount from '../hooks/campaign-count';
import useFetchSocialGroupCount from '../hooks/socialgroup-count';
import CampaignByMonthChart from '../components/charts/campaign-by-month-chart';
import {jwtDecode} from 'jwt-decode';
import useCount from '../hooks/useCount';
import useFetch from '../hooks/useFetch';

export default function Dashboard () {
    const [adminName, setAdminName] = useState('');
    const [loadingAdmin, setLoadingAdmin] = useState(true);
    const [errorAdmin, setErrorAdmin] = useState(null);

    const {count, loading, error} = useFetchCampaignCount();
    const {scount, sloading, serraor} = useFetchSocialGroupCount();
    const adminsUrl = 'http://localhost:5000/api/admin';
    const {data: admins, loading:adminsLoading, error: adminsError} = useFetch(adminsUrl);
    const formatDate = (date) => { 
        const day = String(date.getDate()).padStart(2, '0'); 
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        // Months are 0-based 
        const year = date.getFullYear(); 
        return `${day}.${month}.${year}`; 
    }; 
    const currentDate = new Date(); 
    const formattedDate = formatDate(currentDate);

    const admin = {
        fullname: 'asghar ali',
    }

    const url = {
        socialGroupsOnWait: "http://localhost:5000/api/socialgroup/count-on-wait",
        sellersOnWait: "http://localhost:5000/api/sellers/count-on-wait",
      };
    const {count: onWaitSocialGroupsCount, loading: soloading , error: soerror} = useCount(url.socialGroupsOnWait);
    const {count: onWaitSellersCount, loading: slloading, error: slerror} = useCount(url.sellersOnWait);

    useEffect(() => {
        // Extract admin ID from JWT
        const token = localStorage.getItem('adminToken');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                console.log("decoded: " + decodedToken._id);
                const adminId = decodedToken._id; // Assumes token has an `id` field
                fetch(`http://localhost:5000/api/admin/${adminId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token here
                    },
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed to fetch admin details');
                        }
                        return response.json();
                    })
                    .then(data => {
                        setAdminName(data.fullname);
                        setLoadingAdmin(false);
                    })
                    .catch(error => {
                        console.error(error);
                        setErrorAdmin(error.message);
                        setLoadingAdmin(false);
                    });
            } catch (err) {
                console.error('Error decoding token:', err);
                setErrorAdmin('Invalid token');
                setLoadingAdmin(false);
            }
        } else {
            setErrorAdmin('No token found');
            setLoadingAdmin(false);
        }
    }, []);
    return(
        <div className='min-h-screen lg:ml-[245px] p-4'>
            <div className='bg-neutral p-4 rounded-pl'>
                <h2 className='text-lg font-bold mb-10'>Admin Dashboard</h2>
                <div className='flex flex-col lg:flex-row gap-4 w-full py-2 pl-4 pr-8'>
                    <div className='lg:relative basis-3/4 w-full p-4 rounded-pl border-2 border-gray-300'>
                        <p className='text-md font-semibold mb-4'>Hello {loadingAdmin ? 'Loading...' : errorAdmin ? 'Error fetching name' : adminName}!</p>
                        <p>Get the website insights on the Plantify's admin dashboard</p>
                        <img src='/assets/admin/man.png' alt='a man holding a plant' className='w-48 hidden lg:block absolute right-8 -top-4'/>
                        <div className='lg:absolute bottom-4 left-4 flex gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>

                            <p className='text-sm'>{formattedDate}</p>
                        </div>
                        
                    </div>
                    <div className="basis-1/4 p-8 w-full bg-navygreen-100 rounded-pl shadow-md">
                        <h3 className="text-lg font-bold mb-2 z-10">Users</h3>
                        <p className='mt-4 mb-2 text-sm'>Total Users</p>
                        <h1 className='text-lg font-bold'>{count}</h1>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-4 lg:flex-row h-full p-4 rounded rounded-pl mr-4">
                    <div className='w-full'>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                            <div className="p-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
                                <h3 className="text-md font-bold mb-2 z-10">Campaigns</h3>
                                <p className='mt-4 mb-2 text-sm'>Total Campaigns</p>
                                <h1 className='text-lg font-bold'>{count}</h1>
                            </div>
                            <div className="p-8 py-4  w-full max-h-fit bg-navygreen-100  rounded-pl shadow-md">
                                <h3 className="text-md font-bold mb-2 z-10">Social Groups</h3>
                                <p className='mt-4 mb-2 text-sm'>Total Social Groups</p>
                                <h1 className='text-lg font-bold'>{scount}</h1>
                            </div>
                            <div className="px-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
                                <h3 className="text-md font-bold mb-2 z-10">Social Groups</h3>
                                <p className='mt-4 mb-2 text-sm'>Unverified Social Groups</p>
                                <h1 className='text-lg font-bold'>{onWaitSocialGroupsCount}</h1>
                            </div>
                            <div className="p-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
                                <h3 className="text-md font-bold mb-2 z-10">Plant Stores</h3>
                                <p className='mt-4 mb-2 text-sm'>Unverified Plant Stores/Sellers</p>
                                <h1 className='text-lg font-bold'>{onWaitSellersCount}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 col-span-3 w-full border border-2 border-gray-300 rounded rounded-pl ">
                        <h3 className="text-md font-semibold mb-2">Campaigns per Month</h3>
                        <CampaignByMonthChart/>
                        {/* <Line data={data} options={options}/> */}
                        {/* <CampaignChart/> */}
                    </div>
                    <div className="flex flex-col h-fit gap-y-4">
                        <div className="bg-navygreen-100 p-4 rounded-pl min-w-60">
                            <div className='mb-6 flex items-center justify-between'>
                                <div className='text-md font-bold '>Admins List</div>
                            </div>
                            {/* list */}
                            <ul className='flex flex-col gap-2'>
                                {/* list item */}
                                {admins.length > 0 ? (
                                    admins.map((admin, index) => (
                                        <li key={index} className='flex items-center justify-between gap-2 p-4 bg-neutral w-full rounded-pl text-sm'>
                                            <div><p>{admin.fullname}</p></div>
                                            {/* <TodoDropdown/> */}
                                        </li>
                                    ))
                                ):(
                                    <p>No admins yet.</p>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}