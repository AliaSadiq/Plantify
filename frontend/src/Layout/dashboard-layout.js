import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/dashboard-components/Layout';
import Onboard from '../pages/dashboard-pages/onboard';
import Campaigns from '../pages/dashboard-pages/Campaigns';
import Profile from '../pages/dashboard-pages/profile';
import Insight from '../pages/dashboard-pages/Insights';
import CreateCampaignForm from '../pages/dashboard-pages/createCampaign';

const DashboardLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Onboard />} />
        <Route path="onboard" element={<Onboard />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="profile" element={<Profile />} />
        <Route path="Insights" element={<Insight />} />
        <Route path="createCampaign" element={<CreateCampaignForm />} />
      </Route>
    </Routes>
  );
};

export default DashboardLayout;
