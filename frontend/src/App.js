import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import LandingPage from './pages/landing-page';
import CampaignPage from './pages/campaign-page';
import HomePage from './pages/personal-growth-page';
import CampaignDetailsPage from './pages/campaign-details-page';
import PlantDiaryPage from './pages/plant-diary-page';
import Shop from './pages/shop';
import Logout from './pages/logout';
import PlantifyNetwork from './pages/network';
import ContactUsPage from './pages/contact-us-page';
import SettingsPage from './pages/settings';
import AuthCheck from './pages/check';
import Profile from './profileComp/profile-full';
import AboutUsPage from './pages/about-us-page';
import VerificationCheck from './pages/verification-check';
import DashboardLayout from './Layout/dashboard-layout';
import AuthLayout from './Layout/auth-layout';
import PlantDiaryDetailPage from './pages/diary-detail-page';
import MediaProfile from './components/social-media-components/profile-page';
import ExplorePage from './components/social-media-components/explore';

const AppContent = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/social-dashboard");
  const isAuthRoute = location.pathname.startsWith("/login") || location.pathname.startsWith("/social-signup") || location.pathname.startsWith("/seller-signup");

  return (
    <>
      {!isDashboardRoute && !isAuthRoute && <NavBar />}
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="campaign" element={<CampaignPage />} />
        <Route path="personal-growth" element={<HomePage />} />
        <Route path="campaign-details/:id" element={<CampaignDetailsPage />} />
        <Route path="campaign/social-group/:id" element={<Profile />} />
        <Route path="plant-diary" element={<PlantDiaryPage />} />
        <Route path="plant-diary-detail" element={<PlantDiaryDetailPage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="logout" element={<Logout />} />
        <Route path="plantify-network" element={<PlantifyNetwork />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="about-us" element={<PlantifyNetwork />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path='auth-check' element={<AuthCheck />} />
        <Route path='verification-check' element={<VerificationCheck />} />
        <Route path="explore" element={<ExplorePage />} />
        {/* Auth routes */}
        {isAuthRoute && <Route path="/*" element={<AuthLayout />} />}

        {/* Dashboard routes */}
        {isDashboardRoute && <Route path="social-dashboard/:id/*" element={<DashboardLayout />} />}
      </Routes>
      {!isDashboardRoute && !isAuthRoute && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
