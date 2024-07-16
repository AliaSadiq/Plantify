import React from 'react';
import Sidebar from "./sidebar";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray bg-opacity-50">
      <Sidebar />
      <div className="flex-grow pl-5 bg-gray">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
