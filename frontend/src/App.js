import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../src/components/Layout';
import Onboard from './pages/onboard.js';
import Campaigns from '../src/pages/Campaigns';
import Profile from './pages/profile.js';
import Insight from '../src/pages/Insights.js';
import CreateCampaignForm from '../src/pages/createCampaign.js';
import EditCampaignForm from './pages/editCampaign.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Onboard />} />
          <Route path="onboard" element={<Onboard />} />
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Insights" element={<Insight />} /> 
          <Route path="createCampaign" element={<CreateCampaignForm />} />
          <Route path="editCampaign/:id" element={<EditCampaignForm />} /> 
        </Route>
      </Routes>
    </Router>
  );   
};

export default App;
