import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from '../../components/progress-bar';
import DonationBoard from '../../components/donations-board';
import useFetch from '../../hooks/useFetch';
import formatDate from '../../functions/format-date';
import VolunteerRequestTable from '../../components/dashboard-components/volunteer-request-table';

export default function Insights () {
  const { id } = useParams();
  const {data: donations} = useFetch(`http://localhost:5000/api/donations/campaign/${id}`)
  const {data: campaign} = useFetch(`http://localhost:5000/api/campaigns/${id}`)
  return(
    <div className='min-h-screen lg:ml-[245px] p-4'>
      <div className='bg-neutral p-4 rounded-pl'>
        <h2 className='text-lg font-bold'>{campaign.name}</h2>
        <p className='mt-2 text-sm text-gray-700 mb-10'>start:{formatDate(campaign.start_date)} end:{formatDate(campaign.end_date)}</p>
        <div className='w-full flex flex-col lg:flex-row gap-4'>
          <div className='basis-1/2 flex flex-col gap-y-4'>
            <div className='w-full border-2 border-gray-300 p-4 rounded-pl'>
              <h3 className="text-md font-semibold mb-2">Donations Bar</h3>
              <ProgressBar collected={4} target={9}/>
              <h1 className="mt-4 font-bold text-md text-center">{campaign.collected_donation} PKR raised off {campaign.target_donation} PKR</h1>
            </div>
            <div className='w-full'>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 w-full">
                <div className="p-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
                    <h3 className="text-md font-bold mb-2 z-10">Volunteers</h3>
                    <p className='mt-4 mb-2 text-sm'>Total Volunteers</p>
                    <h1 className='text-lg font-bold'>{campaign.total_volunteers_count}</h1>
                </div>
                <div className="p-8 py-4  w-full max-h-fit bg-navygreen-100  rounded-pl shadow-md">
                    <h3 className="text-md font-bold mb-2 z-10">Followers</h3>
                    <p className='mt-4 mb-2 text-sm'>Total Campaign Followers</p>
                    <h1 className='text-lg font-bold'>12</h1>
                </div>
                <div className="px-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
                    <h3 className="text-md font-bold mb-2 z-10">Social Groups</h3>
                    <p className='mt-4 mb-2 text-sm'>Unverified Social Groups</p>
                    <h1 className='text-lg font-bold'>12</h1>
                </div>
                <div className="p-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
                    <h3 className="text-md font-bold mb-2 z-10">Plant Stores</h3>
                    <p className='mt-4 mb-2 text-sm'>Unverified Plant Stores/Sellers</p>
                    <h1 className='text-lg font-bold'>12</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='basis-1/2 w-full flex flex-col gap-y-4'>
            <div className="p-4 col-span-3 w-full border border-2 border-gray-300 rounded rounded-pl ">
              <h3 className="text-md font-semibold mb-2">Campaigns Followers</h3>
              {/* <CampaignByMonthChart/> */}
              {/* <Line data={data} options={options}/> */}
              {/* <CampaignChart/> */}
            </div>
            <DonationBoard donations={donations}/>
          </div>
        </div>
        <div className='mt-4 w-full border-2 border-gray-300 p-4 rounded-pl'>
          <VolunteerRequestTable/>
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import MetricCard from '../../components/dashboard-components/KeyMetricCard';
// import { Doughnut } from 'react-chartjs-2';
// import ProgressBar from "../../components/progress-bar";
// import dashboardbg from "../../images/dashboardbg.png";
// import { useParams } from 'react-router-dom';
// const Insights = () => {
//   const [metrics, setMetrics] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     // Fetch data from API
//     const fetchMetrics = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/campaigns/insights/${id}`); // API endpoint
//         const data = await response.json();

//         // Format data for your metrics structure
//         const formattedMetrics = [
//           {
//             title: "Targeted Donation",
//             value: `Rs.${data.targetDonations}`,
//             chartData: {
//               labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//               datasets: [
//                 {
//                   label: 'Targeted Donation',
//                   data: [12000, 25000, 50000, 60000, 85000, data.targetDonations],
//                   borderColor: 'rgba(75, 192, 192, 1)',
//                   backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                   fill: true,
//                 },
//               ],
//             },
//           },
//           {
//             title: "Collected Donation",
//             value: `Rs.${data.collecteddonations}`,
//             chartData: {
//               labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//               datasets: [
//                 {
//                   label: 'Collected Donation',
//                   data: [10000, 15000, 30000, 40000, 60000, data.collecteddonations],
//                   borderColor: 'rgba(255, 99, 132, 1)',
//                   backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                   fill: true,
//                 },
//               ],
//             },
//           },
//           {
//             title: "Likes",
//             value: `${data.likes}`,
//             chartData: {
//               labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//               datasets: [
//                 {
//                   label: 'Likes',
//                   data: [200, 500, 800, 1200, 1700, data.likes],
//                   borderColor: 'rgba(54, 162, 235, 1)',
//                   backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                   fill: true,
//                 },
//               ],
//             },
//           },
//           {
//             title: "Followers",
//             value: `${data.followers}`,
//             chartData: {
//               labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//               datasets: [
//                 {
//                   label: 'Followers',
//                   data: [500, 800, 1000, 1200, 1400, data.followers],
//                   borderColor: 'rgba(153, 102, 255, 1)',
//                   backgroundColor: 'rgba(153, 102, 255, 0.2)',
//                   fill: true,
//                 },
//               ],
//             },
//           }
//         ];

//         setMetrics(formattedMetrics);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching metrics:", error);
//         setError("Failed to load data");
//         setLoading(false);
//       }
//     };
    
//     fetchMetrics();
//   }, [id]);

//   // const doughnutData = {
//   //   labels: ['Targeted Donation', 'Collected Donation'],
//   //   datasets: [
//   //     {
//   //       data: metrics.length ? [metrics[0].value.replace('Rs.', ''), metrics[1].value.replace('Rs.', '')] : [],
//   //       backgroundColor: ['#99BC85', '#B5B6B8'],
//   //       hoverBackgroundColor: ['#99BC85', '#B5B6B8'],
//   //     }
//   //   ]
//   // };
//   const doughnutData = {
//     labels: ['Targeted Donation', 'Collected Donation'],
//     datasets: [
//       {
//         data: metrics.length 
//           ? [
//               Number(metrics[0].value.replace('Rs.', '').replace(/,/g, '').trim()), 
//               Number(metrics[1].value.replace('Rs.', '').replace(/,/g, '').trim())
//             ] 
//           : [0, 0],
//         backgroundColor: ['#99BC85', '#B5B6B8'],
//         hoverBackgroundColor: ['#99BC85', '#B5B6B8'],
//       }
//     ]
//   };
  
//   // Calculate total for percentages
//   const total = doughnutData.datasets[0].data.reduce((acc, val) => acc + val, 0);
//   if (total > 0) {
//     doughnutData.datasets[0].data = [
//       (Number(metrics[0].value.replace('Rs.', '').replace(/,/g, '').trim()) / total) * 100,
//       (Number(metrics[1].value.replace('Rs.', '').replace(/,/g, '').trim()) / total) * 100
//     ];
//   }
  
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${dashboardbg})` }}>
//       <div className="px-20 py-4 mx-auto max-w-screen-xl">
//         <h1 className="text-2xl font-bold mb-6">Campaign Insights</h1>
//         <ProgressBar collected={3} target={33} className="mt-4 mx-10 mb-6" />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           {metrics.map((metric, index) => (
//             <MetricCard
//               key={index}
//               title={metric.title}
//               value={metric.value}
//               chartData={metric.chartData}
//             />
//           ))}
//         </div>

//         <div className="flex flex-col lg:flex-row gap-6 mt-8">
//           <div className="flex-1 rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-josefin-sans font-bold text-left mb-4">Donation Distribution</h2>
//             <div className="relative h-[250px]">
//               <Doughnut 
//                 data={doughnutData} 
//                 options={{
//                   maintainAspectRatio: false,
//                   responsive: true,
//                 }}
//               />
//             </div>
//           </div>
//           <div className="flex-1 rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-bold text-center mb-4">Leaderboard</h2>
//             {/* Add leaderboard content here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Insights;
