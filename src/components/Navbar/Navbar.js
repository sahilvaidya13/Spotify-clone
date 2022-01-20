import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="main-nav">
      <div class="logo"></div>
      <div class="nav-links">
        <ul className="links">
          <li>Premium</li>
          <li>Support</li>
          <li>Download</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
