import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/welcome.css';

function Home() {
  return (
    <div className="landing-container">
      <div className="content-wrapper">

        {/* Left Side: Heading + Search + Buttons */}
        <div className="left-section">
          <h1>Welcome<span></span></h1>

          {/* Optional search bar if desired */}
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button><i className="fas fa-search"></i></button>
          </div>

          <div className="action-buttons">
            <Link to="/admin/login" className="btn-primary">Admin Login</Link>
            <Link to="/login" className="btn-secondary">User Login</Link>
          </div>
        </div>

        {/* Right Side: Title + Icon + Description */}
        <div className="right-section">
          <div className="icon">🎓</div>
          <h2>School Management System</h2>
          <p>
            Empowering education through technology — manage students, staff, and curriculum
            efficiently with our all-in-one solution.
          </p>
        </div>
      </div>

      {/* Optional Footer */}
      
    </div>
  );
}

export default Home;
