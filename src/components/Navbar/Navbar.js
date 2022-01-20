import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="main-nav">
      <div class="logo"></div>
      <div class="nav-links">
        <ul className="links">
          <li class="spl">Premium</li>
          <li class="spl">Support</li>
          <li class="spl">Download</li>
          <li class="ntspl">|</li>
          <li class="nspl">Sign up</li>
          <li class="nspl">Log in</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
