import './App.css';
import './index.css';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import LandingPage from './pages/landing-page';
import CampaignPage from './pages/campaign-page';
// import SocialProfilePage from './pages/profile-page';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';
import Shop from './pages/shop';
import Logout from './pages/logout';
import PlantifyNetwork from './pages/network';
import ContactUsPage from './pages/contact-us-page';
import SocialSignUpPage from './pages/social-signup-page';
import SettingsPage from './pages/settings';
import AuthCheck from './pages/check';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route index element={<LandingPage/>}/>
          <Route path="campaign" element={<CampaignPage/>} />
          {/* <Route path="campaign/socialGroup/:id" element={<SocialProfilePage/>} /> */}
          <Route path="home" element={<HomePage/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="logout" element={<Logout/>} />
          <Route path="shop" element={<Shop/>} />
          <Route path="plantify-network" element={<PlantifyNetwork/>} />
          <Route path="contact-us" element={<ContactUsPage/>} />
          <Route path="about-us" element={<PlantifyNetwork/>} />
          <Route path="social-signUp" element={<SocialSignUpPage/>} />
          <Route path="settings" element={<SettingsPage/>} />
          <Route path='auth-check' element={<AuthCheck/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
