// import './App.css';
// import './index.css';
// import Footer from './components/footer';
// import NavBar from './components/nav-bar';
// import LandingPage from './pages/landing-page';
// import CampaignPage from './pages/campaign-page';
// // import SocialProfilePage from './pages/profile-page';
// import HomePage from './pages/home-page';
// import LoginPage from './pages/login-page';
// import Shop from './pages/shop';
// import Logout from './pages/logout';
// import PlantifyNetwork from './pages/network';
// import ContactUsPage from './pages/contact-us-page';
// import SocialSignUpPage from './pages/social-signup-page';
// import SettingsPage from './pages/settings';
// import AuthCheck from './pages/check';
// import VerificationCheck from './pages/verification-check';
// import Onboard from './pages/dashboard-pages/onboard';
// // import SideBar from './components/admin-components/sidebar';
// // import SocialGroupverificationPage from './pages/admin-pages/social-group-verification-page';
// // import CampaignReportsPage from './pages/admin-pages/campaign-reports-page';
// // import Dashboard from './pages/admin-pages/dashboard';
// // import ContactUsPage from './pages/admin-pages/contact-us-page';
// //import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Profile from './profileComp/profile-full';
// import React from 'react';
// import Layout from './components/dashboard-components/Layout';
// import Sidebar from './components/dashboard-components/sidebar';
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import DashboardLayout from './Layout/dashboard-layout';

// function App() {

//   const location = useLocation();
//   const isDashboardRoute = location.pathname.startsWith("/social-dashboard");
//   return (
//     // <BrowserRouter>
//     //   <NavBar/>
//     //   <Routes>
//     //       <Route index element={<LandingPage/>}/>
//     //       <Route path="campaign" element={<CampaignPage/>} />
//     //       {/* <Route path="campaign/socialGroup/:id" element={<SocialProfilePage/>} /> */}
//     //       <Route path="personal-growth" element={<HomePage/>} />
//     //       <Route path="login" element={<LoginPage/>} />
//     //       <Route path="logout" element={<Logout/>} />
//     //       <Route path="shop" element={<Shop/>} />
//     //       <Route path="plantify-network" element={<PlantifyNetwork/>} />
//     //       <Route path="contact-us" element={<ContactUsPage/>} />
//     //       <Route path="about-us" element={<PlantifyNetwork/>} />
//     //       <Route path="social-signUp" element={<SocialSignUpPage/>} />
//     //       <Route path="settings" element={<SettingsPage/>} />
//     //       <Route path='auth-check' element={<AuthCheck/>} />
//     //       <Route path='verification-check' element={<VerificationCheck/>} />
//     //       <Route path='social-dashboard' element={<Onboard/>} />
//     //   </Routes>
//     //   <Footer/>
//     // </BrowserRouter>

//     <BrowserRouter>
//       {!isDashboardRoute && <NavBar />}
//       <Routes>
//         <Route index element={<LandingPage />} />
//         <Route path="campaign" element={<CampaignPage />} />
//         <Route path="personal-growth" element={<HomePage />} />
//         <Route path="login" element={<LoginPage />} />
//         <Route path="logout" element={<Logout />} />
//         <Route path="shop" element={<Shop />} />
//         <Route path="plantify-network" element={<PlantifyNetwork />} />
//         <Route path="contact-us" element={<ContactUsPage />} />
//         <Route path="about-us" element={<PlantifyNetwork />} />
//         <Route path="social-signUp" element={<SocialSignUpPage />} />
//         <Route path="settings" element={<SettingsPage />} />
//         <Route path='auth-check' element={<AuthCheck />} />
//         <Route path='verification-check' element={<VerificationCheck />} />
//         <Route path='social-dashboard/*' element={<DashboardLayout />} />
//       </Routes>
//       {!isDashboardRoute && <Footer />}
//     </BrowserRouter>

//     //admin
//     // <BrowserRouter>
//     //   <SideBar/>
//     //   <Routes>
//     //       <Route index element={<Dashboard/>}/>
//     //       <Route path="campaign-reports" element={<CampaignReportsPage/>} />
//     //       <Route path="verify-socialGroup" element={<SocialGroupverificationPage/>} />
//     //       <Route path="contact-us" element={<ContactUsPage/>} />
//     //   </Routes>
//     // </BrowserRouter>
//   );
// }

// export default App;

// import './App.css';
// import './index.css';
// import Footer from './components/footer';
// import NavBar from './components/nav-bar';
// import LandingPage from './pages/landing-page';
// import CampaignPage from './pages/campaign-page';
// import HomePage from './pages/personal-growth-page';
// import CampaignDetailsPage from './pages/campaign-details-page';
// import LoginPage from './pages/login-page';
// import Shop from './pages/shop';
// import Logout from './pages/logout';
// import PlantifyNetwork from './pages/network';
// import ContactUsPage from './pages/contact-us-page';
// import SocialSignUpPage from './pages/social-signup-page';
// import SellerSignup from './pages/seller-signup-page';
// import SettingsPage from './pages/settings';
// import AuthCheck from './pages/check';
// import Profile from './profileComp/profile-full';
// import AboutUsPage from './pages/about-us-page';
// import VerificationCheck from './pages/verification-check';
// import React from 'react';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import DashboardLayout from './Layout/dashboard-layout';

// const AppContent = () => {
//   const location = useLocation();
//   const isDashboardRoute = location.pathname.startsWith("/social-dashboard");

//   return (
//     <>
//       {!isDashboardRoute && <NavBar />}
//       <Routes>
//         <Route index element={<LandingPage />} />
//         <Route path="campaign" element={<CampaignPage />} />
//         <Route path="personal-growth" element={<HomePage />} />
//         <Route path="campaign-details/:id" element={<CampaignDetailsPage />} />
//         <Route path="campaign/social-group/:id" element={<Profile/>} />
//         <Route path="login" element={<LoginPage />} />
//         <Route path="logout" element={<Logout />} />
//         <Route path="shop" element={<Shop />} />
//         <Route path="plantify-network" element={<PlantifyNetwork />} />
//         <Route path="contact-us" element={<ContactUsPage />} />
//         <Route path="about-us" element={<AboutUsPage />} />
//         <Route path="about-us" element={<PlantifyNetwork />} />
//         <Route path="social-signUp" element={<SocialSignUpPage />} />
//         <Route path="seller-signup" element={<SellerSignup />} />
//         <Route path="settings" element={<SettingsPage />} />
//         <Route path='auth-check' element={<AuthCheck />} />
//         <Route path='verification-check' element={<VerificationCheck />} />
//         <Route path='social-dashboard/:id/*' element={<DashboardLayout />} />
//       </Routes>
//       {!isDashboardRoute && <Footer />}
//     </>
//   );
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import LandingPage from './pages/landing-page';
import CampaignPage from './pages/campaign-page';
import HomePage from './pages/personal-growth-page';
import CampaignDetailsPage from './pages/campaign-details-page';
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
        <Route path="shop" element={<Shop />} />
        <Route path="logout" element={<Logout />} />
        <Route path="plantify-network" element={<PlantifyNetwork />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="about-us" element={<PlantifyNetwork />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path='auth-check' element={<AuthCheck />} />
        <Route path='verification-check' element={<VerificationCheck />} />
        
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
