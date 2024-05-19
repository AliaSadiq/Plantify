import React from 'react';
import Sidebar from "./sidebar";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow pl-5 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
