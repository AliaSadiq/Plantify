import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import LandingPage from './pages/landing-page';
import CampaignPage from './pages/campaign-page';
import HomePage from './pages/personal-growth-page';
import CampaignDetailsPage from './pages/campaign-details-page';
import PlantDiaryPage from './pages/plant-diary-page';
// import Shop from './pages/shop';
import ProductDetailsPage from './pages/shop/product-detail-page';
import Cart from './pages/shop/cart';
import Checkout from './pages/shop/checkout';
import Shop from './pages/shop/landing';
import Layout from './Layout/Seller'
import Plants from './pages/shop/plants';
import Soils from './pages/shop/soils';
import Tools from './pages/shop/tools';
import StorePage from './pages/shop/store-page';
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
  const isSellerRoute = location.pathname.startsWith("/seller");
  const isPlantifyNetworkRoute = location.pathname.startsWith("/plantify-network"); // New check for plantify network route

  return (
    <>
      {!isDashboardRoute && !isAuthRoute && !isSellerRoute && <NavBar />}
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="campaign" element={<CampaignPage />} />
        <Route path="personal-growth" element={<HomePage />} />
        <Route path="campaign-details/:id" element={<CampaignDetailsPage />} />
        <Route path="campaign/social-group/:id" element={<Profile />} />
        <Route path="plant-diary/:id" element={<PlantDiaryPage />} />
        <Route path="plant-diary-detail/:id" element={<PlantDiaryDetailPage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="plants" element={<Plants />} />
        <Route path="soils" element={<Soils />} />
        <Route path="tools" element={<Tools />} />
        <Route path="logout" element={<Logout />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="auth-check" element={<AuthCheck />} />
        <Route path="verification-check" element={<VerificationCheck />} />
        <Route path="/plantify-network/*" element={<PlantifyNetwork />} />
        <Route path="auth-check" element={<AuthCheck />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Checkout" element={<Checkout />} />
        <Route path="verification-check" element={<VerificationCheck />} />
        <Route path="store-page" element={<StorePage />} />
        
        {/* Auth routes */}
        {isAuthRoute && <Route path="/*" element={<AuthLayout />} />}

        {/* Seller route */}
        {isSellerRoute && <Route path="seller/*" element={<Layout />} />}

        {/* Dashboard routes */}
        {isDashboardRoute && <Route path="social-dashboard/:id/*" element={<DashboardLayout />} />}
        <Route path="seller" element={<Layout />} />
      </Routes>
      {!isDashboardRoute && !isAuthRoute && !isSellerRoute && !isPlantifyNetworkRoute && <Footer />}
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
