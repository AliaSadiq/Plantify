import './App.css';
import './index.css';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import HomePage from './pages/home-page';
import CampaignListPage from './pages/campaign-list-page';
import CampaignDetailPage from './pages/campaign-detail-page'; // Import CampaignDetailPage component
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="campaign-detail" element={<CampaignDetailPage/>} />
          <Route path="campaign" element={<CampaignListPage/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
