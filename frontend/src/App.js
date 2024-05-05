import './App.css';
import './index.css';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import LandingPage from './pages/landing-page';
import CampaignPage from './pages/campaign-page';
import SocialProfilePage from './pages/social-profile-page';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/profileComp/profile-full';
function App() {
  return (
    <div className="App">
    
    <Header/> 
 
    </div>
  );
}

export default App;
