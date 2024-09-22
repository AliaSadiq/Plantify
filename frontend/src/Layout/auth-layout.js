// Layout/AuthLayout.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login-page';
import SocialSignUpPage from '../pages/social-signup-page';
import SellerSignup from '../pages/seller-signup-page';

const AuthLayout = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="social-signup" element={<SocialSignUpPage />} />
        <Route path="seller-signup" element={<SellerSignup />} />
    </Routes>
  );
};

export default AuthLayout;
