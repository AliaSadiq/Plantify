// import './App.css';
// import './index.css';
// import SideBar from './components/sidebar';
// import SocialGroupverificationPage from './pages/social-group-verification-page';
// import SellerVerificationPage from './pages/seller-verification-page';
// import SocialGroupPage from './pages/social-groups-page';
// import Profile from './profileComp/profile-full';
// import CampaignReportsPage from './pages/campaign-reports-page';
// import Dashboard from './pages/dashboard';
// import ContactUsPage from './pages/contact-us-page';
// import VerificationDetailPage from './pages/verification-detail-page';
// import SellerVerificationDetailPage from './pages/seller-verfication-detail-page';
// import UsersPage from './pages/users-page';
// import Login from './pages/auth/login';
// import Signup from './pages/auth/signup';
// import { BrowserRouter, Routes, Route} from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <SideBar/>
//       <Routes>
//         <Route index element={<Dashboard/>}/>
//         <Route path="campaign-reports" element={<CampaignReportsPage/>} />
//         <Route path="verify-socialGroup" element={<SocialGroupverificationPage/>} />
//         <Route path="verify-seller" element={<SellerVerificationPage/>} />
//         <Route path="verify-socialGroup/social-profile/:id" element={<VerificationDetailPage/>} />
//         <Route path="verify-seller/seller-profile/:id" element={<SellerVerificationDetailPage/>} />
//         <Route path="social-groups" element={<SocialGroupPage/>} />
//         <Route path="social-groups/social-profile/:id" element={<Profile/>} />
//         <Route path="contact-us" element={<ContactUsPage/>} />
//         <Route path="users" element={<UsersPage/>} />
//         <Route path='login-plantify-admin' element={<Login/>} />
//         <Route path='add-plantify-admin' element={<Signup/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import './App.css';
import './index.css';
import SideBar from './components/sidebar';
import SocialGroupverificationPage from './pages/social-group-verification-page';
import SellerVerificationPage from './pages/seller-verification-page';
import SocialGroupPage from './pages/social-groups-page';
import Profile from './profileComp/profile-full';
import CampaignReportsPage from './pages/campaign-reports-page';
import Dashboard from './pages/dashboard';
import ContactUsPage from './pages/contact-us-page';
import VerificationDetailPage from './pages/verification-detail-page';
import SellerVerificationDetailPage from './pages/seller-verfication-detail-page';
import UsersPage from './pages/users-page';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Logout from './pages/logout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './protected-route';

function App() {
  const isAdminLoggedIn = !!localStorage.getItem("adminToken"); // Check if admin is logged in

  return (
    <BrowserRouter>
      {isAdminLoggedIn && <SideBar />} {/* Sidebar only shows if admin is logged in */}
      <Routes>
        {/* Unprotected Login Route */}
        <Route path="login-plantify-admin" element={<Login />} />
        <Route path="logout-plantify-admin" element={<Logout />} />

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="campaign-reports" element={<ProtectedRoute><CampaignReportsPage /></ProtectedRoute>} />
        <Route path="verify-socialGroup" element={<ProtectedRoute><SocialGroupverificationPage /></ProtectedRoute>} />
        <Route path="verify-seller" element={<ProtectedRoute><SellerVerificationPage /></ProtectedRoute>} />
        <Route path="verify-socialGroup/social-profile/:id" element={<ProtectedRoute><VerificationDetailPage /></ProtectedRoute>} />
        <Route path="verify-seller/seller-profile/:id" element={<ProtectedRoute><SellerVerificationDetailPage /></ProtectedRoute>} />
        <Route path="social-groups" element={<ProtectedRoute><SocialGroupPage /></ProtectedRoute>} />
        <Route path="social-groups/social-profile/:id" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="contact-us" element={<ProtectedRoute><ContactUsPage /></ProtectedRoute>} />
        <Route path="users" element={<ProtectedRoute><UsersPage /></ProtectedRoute>} />

        {/* Signup route is accessible only from the sidebar */}
        <Route path="add-plantify-admin" element={<ProtectedRoute><Signup /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

