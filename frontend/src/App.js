import './App.css';
import './index.css';
import SideBar from './components/sidebar';
import SocialGroupverificationPage from './pages/social-group-verification-page';
import CampaignReportsPage from './pages/campaign-reports-page';
import Dashboard from './pages/dashboard';
import ContactUsPage from './pages/contact-us-page';
import UsersPage from './pages/users-page';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    //admin
    <BrowserRouter>
      <SideBar/>
      <Routes>
          <Route index element={<Dashboard/>}/>
          <Route path="campaign-reports" element={<CampaignReportsPage/>} />
          <Route path="verify-socialGroup" element={<SocialGroupverificationPage/>} />
          <Route path="contact-us" element={<ContactUsPage/>} />
          <Route path="users" element={<UsersPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
