import './App.css';
import './index.css';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import LandingPage from './pages/landing-page';
import CampaignPage from './pages/campaign-page';
import SocialProfilePage from './pages/social-profile-page';
import HomePage from './pages/home-page';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route index element={<LandingPage/>}/>
          <Route path="campaign" element={<CampaignPage/>} />
          <Route path="campaign/socialGroup/:id" element={<SocialProfilePage/>} />
          <Route path="home" element={<HomePage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
