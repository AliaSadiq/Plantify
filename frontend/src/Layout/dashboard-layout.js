import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Onboard from '../pages/dashboard-pages/onboard';
import Campaigns from '../pages/dashboard-pages/Campaigns';
import Profile from '../pages/dashboard-pages/profile';
import Insight from '../pages/dashboard-pages/Insights';
import CreateCampaignForm from '../pages/dashboard-pages/createCampaign';
import Footer from '../components/footer';
import Sidebar from '../components/dashboard-components/sidebar';

const DashboardLayout = () => {
  return (
    <>
      <Sidebar />
      <Routes>
          <Route path='/' element={<Onboard />} />
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="social-profile" element={<Profile />} />
          <Route path="Insights" element={<Insight />} />
          <Route path="createCampaign" element={<CreateCampaignForm />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
};

export default DashboardLayout;
