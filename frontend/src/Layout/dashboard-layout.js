// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Onboard from '../pages/dashboard-pages/onboard';
// import Campaigns from '../pages/dashboard-pages/Campaigns';
// import RequestCmapaign from '../pages/dashboard-pages/requestCampaigns';
// import Message  from '../pages/dashboard-pages/Messages.js';
// import Insight from '../pages/dashboard-pages/Insights';
// import CreateCampaignForm from '../pages/dashboard-pages/createCampaign';
// import Footer from '../components/footer';
// import Sidebar from '../components/dashboard-components/sidebar';
// import EditCampaignForm from '../pages/dashboard-pages/editCampaign';
// const DashboardLayout = () => {
//   return (
//     <>
//       <Sidebar />
//       <Routes>
//           <Route path='/' element={<Onboard />} />
//           <Route path="campaigns" element={<Campaigns />} />
//           <Route path="requestCampaigns" element={<RequestCmapaign />} />
//           <Route path="Insights/:campaignId" element={<Insight/>} />
//           <Route path="createCampaign" element={<CreateCampaignForm />} />
//           <Route path="Messages" element={<Message />} />
//           <Route path="editCampaign/:campaignId" element={<EditCampaignForm/>}/>
         
         
//       </Routes>

//     </>
//   );
// };

// export default DashboardLayout;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Onboard from '../pages/dashboard-pages/onboard';
import Campaigns from '../pages/dashboard-pages/Campaigns';
import RequestCampaign from '../pages/dashboard-pages/requestCampaigns'; // Fix the typo here
import Message from '../pages/dashboard-pages/Messages.js';
import Insight from '../pages/dashboard-pages/Insights';
import CreateCampaignForm from '../pages/dashboard-pages/createCampaign';
import Footer from '../components/footer';
import Sidebar from '../components/dashboard-components/sidebar';
import EditCampaignForm from '../pages/dashboard-pages/editCampaign';
import Profile from '../pages/dashboard-pages/profile.js';

const DashboardLayout = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="requestCampaigns" element={<RequestCampaign />} /> {/* Correct component name here */}
        <Route path="Insights/:id" element={<Insight />} />
        <Route path="createCampaign" element={<CreateCampaignForm />} />
        <Route path="Messages" element={<Message />} />
        <Route path="Profile" element={<Profile />} />

        <Route path="editCampaign/:campaignId" element={<EditCampaignForm />} />
      </Routes>
    </>
  );
};

export default DashboardLayout;
