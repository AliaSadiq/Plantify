import './App.css';
import './index.css';
import SideBar from './components/sidebar';
import SocialGroupverificationPage from './pages/social-group-verification-page';
import SocialGroupPage from './pages/social-groups-page';
import Profile from './profileComp/profile-full';
import CampaignReportsPage from './pages/campaign-reports-page';
import Dashboard from './pages/dashboard';
import ContactUsPage from './pages/contact-us-page';
import VerificationDetailPage from './pages/verification-detail-page';
import UsersPage from './pages/users-page';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SideBar/>
      <Routes>
          <Route index element={<Dashboard/>}/>
          <Route path="campaign-reports" element={<CampaignReportsPage/>} />
          <Route path="verify-socialGroup" element={<SocialGroupverificationPage/>} />
          <Route path="verify-socialGroup/social-profile/:id" element={<VerificationDetailPage/>} />
          <Route path="social-groups" element={<SocialGroupPage/>} />
          <Route path="social-groups/social-profile/:id" element={<Profile/>} />
          <Route path="contact-us" element={<ContactUsPage/>} />
          <Route path="users" element={<UsersPage/>} />
          <Route path='login-plantify-admin' element={<Login/>} />
          <Route path='add-plantify-admin' element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
