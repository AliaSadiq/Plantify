// import React, {useState, useEffect} from 'react';
// import { useParams } from 'react-router-dom';
// import ProgressBar from '../../components/progress-bar';
// import DonationBoard from '../../components/donations-board';
// import useFetch from '../../hooks/useFetch';
// import formatDate from '../../functions/format-date';
// import VolunteerRequestTable from '../../components/dashboard-components/volunteer-request-table';
// import Button from '../../components/button';

// export default function Insights () {
//   const { id } = useParams();
//   const {data: donations} = useFetch(`http://localhost:5000/api/donations/campaign/${id}`)
//   const {data: campaign} = useFetch(`http://localhost:5000/api/campaigns/${id}`)
//   return(
//     <div className='min-h-screen lg:ml-[245px] p-4'>
//       <div className='bg-neutral p-4 rounded-pl'>
//         <h2 className='text-lg font-bold'>{campaign.name}</h2>
//         <p className='mt-2 text-sm text-gray-700 mb-10'>start:{formatDate(campaign.start_date)} end:{formatDate(campaign.end_date)}</p>
//         <div className='w-full flex flex-col lg:flex-row gap-4'>
//           <div className='basis-1/2 flex flex-col gap-y-4'>
//             <div className='w-full border-2 border-gray-300 p-4 rounded-pl'>
//               <h3 className="text-md font-semibold mb-2">Donations Bar</h3>
//               <ProgressBar collected={4} target={9}/>
//               <h1 className="mt-4 font-bold text-md text-center">{campaign.collected_donation} PKR raised off {campaign.target_donation} PKR</h1>
//             </div>
//             <div className='w-full'>
//               <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 w-full">
//                 <div className="p-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
//                     <h3 className="text-md font-bold mb-2 z-10">Volunteers</h3>
//                     <p className='mt-4 mb-2 text-sm'>Total Volunteers</p>
//                     <h1 className='text-lg font-bold'>{campaign.total_volunteers_count}</h1>
//                 </div>
//                 <div className="p-8 py-4  w-full max-h-fit bg-navygreen-100  rounded-pl shadow-md">
//                     <h3 className="text-md font-bold mb-2 z-10">Followers</h3>
//                     <p className='mt-4 mb-2 text-sm'>Total Campaign Followers</p>
//                     <h1 className='text-lg font-bold'>12</h1>
//                 </div>
//                 <div className="px-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
//                     <h3 className="text-md font-bold mb-2 z-10">Social Groups</h3>
//                     <p className='mt-4 mb-2 text-sm'>Unverified Social Groups</p>
//                     <h1 className='text-lg font-bold'>12</h1>
//                 </div>
//                 <div className="p-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
//                     <h3 className="text-md font-bold mb-2 z-10">Plant Stores</h3>
//                     <p className='mt-4 mb-2 text-sm'>Unverified Plant Stores/Sellers</p>
//                     <h1 className='text-lg font-bold'>12</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='basis-1/2 w-full flex flex-col gap-y-4'>
//             <div className="p-4 col-span-3 w-full border border-2 border-gray-300 rounded rounded-pl ">
//               <h3 className="text-md font-semibold mb-2">Campaigns Followers</h3>
//               {/* <CampaignByMonthChart/> */}
//               {/* <Line data={data} options={options}/> */}
//               {/* <CampaignChart/> */}
//             </div>
//             <DonationBoard donations={donations}/>
//           </div>
//         </div>
//         {campaign?.volunteers && campaign.volunteers.length > 0 ? (
//           <div className='mt-4 w-full p-4 rounded-pl'>
//             <div className='flex items-center justify-between mb-2'>
//               <h3 className="text-md font-semibold mb-2">Volunteering Requests</h3>
//               <Button
//                 text="Accepted Volunteers"
//                 type="button"
//                 className="py-2"
//                 // onClick={}
//               />
//             </div>
//             <VolunteerRequestTable volunteers={campaign?.volunteers}/>
//           </div>
//         ):(
//           <p className='text-center mt-4 text-gray-700 hidden'>no volunteers</p>
//         )}
//       </div>
//     </div>
//   );
// }
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from '../../components/progress-bar';
import DonationBoard from '../../components/donations-board';
import useFetch from '../../hooks/useFetch';
import formatDate from '../../functions/format-date';
import VolunteerRequestTable from '../../components/dashboard-components/volunteer-request-table';
import Button from '../../components/button';
import Modal from 'react-modal';
import axios from 'axios';
import { XMarkIcon } from '@heroicons/react/24/solid';
import CreatePostForm from '../../components/social-media-components/create-post-form';


export default function Insights () {
  const { id } = useParams();
  const {data: donations} = useFetch(`http://localhost:5000/api/donations/campaign/${id}`)
  const {data: campaign, refetch} = useFetch(`http://localhost:5000/api/campaigns/${id}`)

  const [isModalOpen, setModalOpen] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showPostingModal, setShowPostingModal] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setShowPostingModal(false);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  const isSameDate = (date1, date2) => {
    try {
      // Ensure both dates are valid before comparing
      const formattedDate1 = new Date(date1).toISOString().slice(0, 10); // YYYY-MM-DD
      const formattedDate2 = new Date(date2).toISOString().slice(0, 10); // YYYY-MM-DD
      return formattedDate1 === formattedDate2;
    } catch (error) {
      console.error("Error comparing dates:", { date1, date2, error });
      return false; // Handle gracefully
    }
  };


  // useEffect(() => { 
  //   // Check if the collected donations have reached the target donation 
  //   if (campaign && campaign.collected_donation >= campaign.target_donation && campaign.stage === 'Fundraising') { 
  //     updateCampaignStageToBuying(); 
  //   } 

  //   if (campaign && new Date(campaign.end_date).getTime() === new Date().setHours(0, 0, 0, 0) && campaign.stage === 'Buying Plants') {
  //     updateCampaignStageToPlantation();
  //   }
  
  //   // Show the complete modal if the stage is "Buying Plants"
  //   if (campaign && campaign.stage === 'Buying Plants') {
  //     setShowCompleteModal(true);
  //   }

  //   // Show the complete modal if the stage is "Plantation"
  //   if (campaign && campaign.stage === 'Plantation') {
  //     setShowPostingModal(true);
  //   }
  // }, [campaign]); 
  useEffect(() => {
    const handleCampaignStage = async () => {
      if (!campaign) return;
  
      const today = new Date().toISOString().split('T')[0]; // Get current date in yyyy-mm-dd format
  
      if (
        campaign.collected_donation >= campaign.target_donation &&
        campaign.stage === 'Fundraising'
      ) {
        await updateCampaignStageToBuying();
      } else if (
        isSameDate(campaign.end_date, today) &&
        campaign.stage === 'Buying Plants'
      ) {
        await updateCampaignStageToPlantation();
      }
  
      // Show modals based on updated stage
      if (campaign.stage === 'Buying Plants') {
        setShowCompleteModal(true);
      } else if (campaign.stage === 'Plantation') {
        setShowPostingModal(true);
      } else {
        setShowCompleteModal(false);
        setShowPostingModal(false);
      }
    };
  
    handleCampaignStage();
  }, [campaign]);
  
  const updateCampaignStageToBuying = async () => { 
    try { 
      await axios.put(`http://localhost:5000/api/campaigns/${id}`, { stage: 'Buying Plants' }); 
      refetch(); // Refetch campaign data to update the stage 
      
    } catch (error) { 
      console.error("Error updating campaign stage:", error); 
    } 
  };

  const updateCampaignStageToPlantation = async () => { 
    try { 
      await axios.put(`http://localhost:5000/api/campaigns/${id}`, { stage: 'Plantation' }); 
      refetch(); // Refetch campaign data to update the stage 
      
    } catch (error) { 
      console.error("Error updating campaign stage:", error); 
    } 
  };

  // Filter accepted volunteers
  const acceptedVolunteers =
    campaign?.volunteers?.filter((volunteer) => volunteer.status === 'accepted') || [];

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return(
    <div className='min-h-screen lg:ml-[245px] p-4'>
      <div className='bg-neutral p-4 rounded-pl'>
        <h2 className='text-lg font-bold'>{campaign.name}</h2>
        <p className='mt-2 text-sm text-gray-700 mb-10'>start:{formatDate(campaign.start_date)} end:{formatDate(campaign.end_date)}</p>
        <div className='w-full flex flex-col lg:flex-row gap-4'>
          <div className='basis-1/2 flex flex-col gap-y-4'>
            <div className='w-full border-2 border-gray-300 p-4 rounded-pl'>
              <h3 className="text-md font-semibold mb-2">Donations Bar</h3>
              <ProgressBar collected={campaign.collected_donation} target={campaign.target_donation}/>
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
                    <h1 className='text-lg font-bold'>{campaign?.followers?.length || 0}</h1>
                </div>
                <div className="px-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
                    <h3 className="text-md font-bold mb-2 z-10">Likes</h3>
                    <p className='mt-4 mb-2 text-sm'>Total Campaign Likes</p>
                    <h1 className='text-lg font-bold'>{campaign?.likes || 0}</h1>
                </div>
                <div className="p-8 py-4 w-full max-h-fit bg-navygreen-100 rounded-pl shadow-md">
                    <h3 className="text-md font-bold mb-2 z-10">Collected</h3>
                    <p className='mt-4 mb-2 text-sm'>Collected Donation Amount</p>
                    <h1 className='text-lg font-bold'>{campaign.collected_donation} PKR</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='basis-1/2 w-full flex flex-col gap-y-4'>
            <DonationBoard donations={donations}/>
          </div>
        </div>
        {campaign?.volunteers && campaign.volunteers.length > 0 ? (
          <div className='mt-4 w-full p-4 rounded-pl'>
            <div className='flex items-center justify-between mb-2'>
              <h3 className="text-md font-semibold mb-2">Volunteering Requests</h3>
              <Button
                text="Accepted Volunteers"
                type="button"
                className="py-2"
                onClick={openModal}
              />
            </div>
            <VolunteerRequestTable volunteers={campaign?.volunteers} campaignId={campaign?._id}/>
          </div>
        ):(
          <p className='text-center mt-4 text-gray-700 hidden'>no volunteers</p>
        )}
        {/* React-Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Accepted Volunteers"
          className="bg-navygreen-50 border-2 border-navygreen-100 p-6 rounded-pl shadow-lg w-3/4 lg:w-1/2 mx-auto mt-10"
          overlayClassName="fixed inset-0 bg-navygreen-100 bg-opacity-50 flex justify-center items-center"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Accepted Volunteers</h2>
            <button
              onClick={closeModal}
              className="p-2 rounded-full hover:bg-navygreen-100"
            >
              <XMarkIcon className='w-6'/>
            </button>
          </div>
          {acceptedVolunteers.length > 0 ? (
            <ul className="space-y-2">
              {acceptedVolunteers.map((volunteer) => (
                <li
                  key={volunteer._id}
                  className="p-2 border-b border-gray-300 flex justify-between"
                >
                  <span>{volunteer.user.username}</span>
                  <span>{volunteer.contact}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No accepted volunteers found.</p>
          )}
        </Modal>
        {/* Fundraising Complete Modal */}
        <Modal
          isOpen={showCompleteModal}
          onRequestClose={() => setShowCompleteModal(false)}
          contentLabel="Fundraising Complete"
          className="bg-white border-2 border-gray-300 p-6 rounded-lg shadow-lg w-3/4 lg:w-1/2 mx-auto mt-10"
          overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Fundraising Complete</h2>
            <button
                onClick={() => setShowCompleteModal(false)}
                className="p-2 rounded-full hover:bg-navygreen-100"
            >
                <XMarkIcon className='w-6' />
            </button>
          </div>
          <p className="mb-4">Congratulations! The fundraising stage is complete. It's time to start buying plants.</p>
          <Button
            text="Go to Shop"
            type="button"
            className="py-2"
          />
        </Modal>
        {/* Post on Social Media Modal*/}
        <Modal
          isOpen={showPostingModal}
          onRequestClose={() => setShowPostingModal(false)}
          contentLabel="Campaign Complete"
          className="bg-white border-2 border-gray-300 p-6 rounded-lg shadow-lg w-3/4 lg:w-1/2 mx-auto mt-10"
          overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
        >
          <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Plantation Complete</h2>
              <button
                onClick={() => setShowPostingModal(false)}
                className="p-2 rounded-full hover:bg-navygreen-100"
              >
                <XMarkIcon className='w-6' />
              </button>
          </div>
          <p className="mb-4">The end date of the campaign is here. Have you planted Already?</p>
          <p className="mb-4">Post about your campaign on social media.</p>
          <Button
        text="Make a Post"
        type="button"
        className="py-2"
        onClick={handleOpenForm}
      />
        </Modal>
      </div>
      {isFormOpen && <CreatePostForm onClose={handleCloseForm} isSocialGroupPost="true"/>}
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
