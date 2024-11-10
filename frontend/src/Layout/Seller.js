// src/components/Layout.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ListIcon, ChartBarIcon, TagIcon, ClipboardListIcon } from 'lucide-react'; // Use Lucide for icons

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-green-800 text-white transition-transform duration-300 lg:translate-x-0 lg:relative z-20`}>
        <div className="flex items-center justify-center h-16 bg-green-900 shadow-md">
          <h1 className="text-xl font-semibold">Seller Dashboard</h1>
        </div>
        <nav className="mt-4 space-y-4">
          <Link to="/" className="flex items-center px-4 py-2 text-sm hover:bg-green-700">
            <HomeIcon className="mr-3 h-5 w-5" />
            Home (Analytics)
          </Link>
          <Link to="/products" className="flex items-center px-4 py-2 text-sm hover:bg-green-700">
            <ListIcon className="mr-3 h-5 w-5" />
            Products
          </Link>
          <Link to="/orders" className="flex items-center px-4 py-2 text-sm hover:bg-green-700">
            <ClipboardListIcon className="mr-3 h-5 w-5" />
            Orders
          </Link>
          <Link to="/reports" className="flex items-center px-4 py-2 text-sm hover:bg-green-700">
            <ChartBarIcon className="mr-3 h-5 w-5" />
            Reports
          </Link>
          <Link to="/discounts" className="flex items-center px-4 py-2 text-sm hover:bg-green-700">
            <TagIcon className="mr-3 h-5 w-5" />
            Discounts
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <header className="flex items-center justify-between bg-white p-4 shadow-lg">
          <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none lg:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
