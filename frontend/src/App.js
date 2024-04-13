import './App.css';
import './index.css';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import LandingPage from './pages/landing-page';
import CampaignListPage from './pages/campaign-page';
import CampaignDetailPage from './pages/campaign-detail-page'; // Import CampaignDetailPage component
//import CampaignCard from './components/campaign-card';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route index element={<LandingPage/>}/>
          <Route path="campaign-detail" element={<CampaignDetailPage/>} />
          <Route path="campaign" element={<CampaignListPage/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
