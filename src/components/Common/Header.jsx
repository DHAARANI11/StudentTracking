import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <h1>School<span>Connect</span></h1>
        </div>
        <nav className="header-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <span>Admin</span>
              <ul className="dropdown-menu">
                <li><Link to="/admin-login">Login</Link></li>
                <li><Link to="/admin-signup">Signup</Link></li>
              </ul>
            </li>
            <li><Link to="/staff-login">Staff</Link></li>
            <li><Link to="/student-login">Student</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
