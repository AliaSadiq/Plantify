import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/login';
const AuthLayout = () => {
  return (
    <Routes>
        <Route path="login-plantify-admin" element={<Login />} />
    </Routes>
  );
};

export default AuthLayout;
