import React from 'react';
import logo from './logo.png'; // Import your logo image

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo"/>
      </div>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/campaigns">Campaigns</a></li>
        <li><a href="/awareness">Awareness</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;