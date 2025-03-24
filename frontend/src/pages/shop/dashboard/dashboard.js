import React from 'react';
import useFetchCampaignCount from '../../../hooks/campaign-count';
import useFetchSocialGroupCount from '../../../hooks/socialgroup-count';
// import TodoDropdown from '../../../components/dropdowns.js/todo-dropdown';
import SalesByMonthChart from '../../../components/charts/sales-by-month';
import useCount from '../../../hooks/useCount';
import { FaShoppingCart, FaBox, FaBoxes, FaChartLine } from 'react-icons/fa';
import OrdersChart from '../../../components/charts/orders-chart';

export default function Dashboard () {
    const {count, loading, error} = useFetchCampaignCount();
    const {scount, sloading, serror} = useFetchSocialGroupCount();
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
        socialGroupsOnWait: "https://plantify-backend.vercel.app/api/socialgroup/count-on-wait",
        sellersOnWait: "https://plantify-backend.vercel.app/api/sellers/count-on-wait",
      };
    const {count: onWaitSocialGroupsCount, loading: soloading , error: soerror} = useCount(url.socialGroupsOnWait);
    const {count: onWaitSellersCount, loading: slloading, error: slerror} = useCount(url.sellersOnWait);
    return(
        <div className='min-h-screen lg:ml-[245px] p-4 '>
            <div className='bg-neutral p-4 rounded-pl'>
                <h2 className='text-lg font-bold mb-4'>Seller Dashboard</h2>
                <div className='flex flex-col lg:flex-row gap-4 w-full py-2 pl-4 pr-8'>
                       {/* <h3 className="text-md font-bold mb-2 z-10">Orders</h3> */}
                            
                   <div className='lg:relative basis-3/4 w-full p-2 rounded-pl border-gray-300'>
      <div className='w-full'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
        
          {/* Sales Metric */}
          <div className="p-8 py-2 w-full max-h-fit h-36 bg-navygreen-100 rounded-pl shadow-md flex items-center gap-4">
            {/* Text */}
            <div className="lg:w-2/3">
              <h3 className="text-md font-bold mb-2">Sales</h3>
              <p className='mt-4 mb-2 text-sm'>Total Sales</p>
              <h1 className='text-lg font-bold'>{count}</h1>
            </div>
            {/* Icon */}
            <div className="lg:w-1/3 md:w-3/4 w-1/3 flex justify-end">
              <FaChartLine className="h-10 w-10 text-navygreen-500" />
            </div>
          </div>
          
          {/* Orders Metric */}
          <div className="p-8 py-2 w-full max-h-fit h-36 bg-navygreen-100 rounded-pl shadow-md flex items-center gap-4">
            {/* Text */}
            <div className="lg:w-2/3">
              <h3 className="text-md font-bold mb-2">Orders</h3>
              <p className='mt-4 mb-2 text-sm'>Total Orders</p>
              <h1 className='text-lg font-bold'>{scount}</h1>
            </div>
            {/* Icon */}
            <div className="lg:w-1/3 md:w-3/4 w-1/3 flex justify-end">
              <FaBox className="h-10 w-10 text-navygreen-500" />
            </div>
          </div>

          {/* Products Metric */}
          <div className="px-8 py-2 w-full max-h-fit h-36 bg-navygreen-100 rounded-pl shadow-md flex items-center gap-4">
            {/* Text */}
            <div className="lg:w-2/3">
              <h3 className="text-md font-bold mb-2">Products</h3>
              <p className='mt-4 mb-2 text-sm'>Total Products</p>
              <h1 className='text-lg font-bold'>{onWaitSocialGroupsCount}</h1>
            </div>
            {/* Icon */}
            <div className="lg:w-1/3 md:w-3/4 w-1/3 flex justify-end">
              <FaBoxes className="h-10 w-10 text-navygreen-500" />
            </div>
          </div>

          {/* Top-selling Metric */}
          <div className="p-8 py-2 w-full max-h-fit h-36 bg-navygreen-100 rounded-pl shadow-md flex items-center gap-4">
            {/* Text */}
            <div className="lg:w-2/3">
              <h3 className="text-md font-bold mb-2">Top-selling</h3>
              <p className='mt-4 mb-2 text-sm'>Top selling products</p>
              <h1 className='text-lg font-bold'>{onWaitSellersCount}</h1>
            </div>
            {/* Icon */}
            <div className="lg:w-1/3 md:w-3/4 w-1/3 flex justify-end">
              <FaShoppingCart className="h-10 w-10 text-navygreen-500" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
                    
                    <div className="basis-1/4 p-6  w-full mt-2 h-64 bg-navygreen-100 rounded-pl shadow-md">
                    <p className='text-md mt-32 font-semibold mb-2'>Hello {admin.fullname}!</p>
                        <p>Get the Store insights on the Plantify's Seller dashboard.</p>
                        <img src='/assets/admin/man.png' alt='a man holding a plant' className='w-48 hidden lg:block absolute right-28 top-10'/>
                        <div className='lg:absolute bottom-4 left-4 flex gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>

                            <p className='text-sm right-28 bottom-64'>{formattedDate}</p>
                        </div>
                        </div>
                </div>
                <div className="flex flex-col h-full justify-between gap-4 lg:flex-row py-2 px-4 rounded rounded-pl mr-4">
                <div className="p-4 col-span-3 w-full  border border-2 border-gray-300 rounded rounded-pl ">
                        <h3 className="text-md font-semibold ">Orders per Day</h3>
                        <OrdersChart/>
                       
                    </div>
                  
                    
                    <div className="p-4 col-span-3 w-full  border border-2  border-gray-300 mr-4 pr-4 rounded rounded-pl ">
                        <h3 className="text-md font-semibold">Sales per Month</h3>
                        <SalesByMonthChart/>
                       
                    </div>
                  
                </div>
            </div>
        </div>
    );
}