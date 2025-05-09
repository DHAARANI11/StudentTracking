import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/welcome.css';
import logo from '../assets/logo.png';

function Home() {
  return (
    <div className="hero-section">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src={logo} className="logo-img" alt="EduPortal Logo" /> EduPortal
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <a href="#section">About</a>
          <a href="#footer">Contact</a>
        </nav>
      </header>

      {/* Hero Image with Title Only */}
      {/* Hero Banner */}
<section className="hero-title-banner">
  <div className="overlay"></div>
  <h1 className="hero-heading">Student Tracking with EduPortal</h1>
</section>

{/* Content Section */}
<section className="content-section">
  {/* Left Column */}
  <div className="left-column">
    <p>
      Say goodbye to paperwork and disconnected systems. EduPortal brings everything you need to manage your institution in one intelligent platform.
    </p>
    <ul className="features-list">
      <li> <i>Centralized student records</i></li>
      <li> <i>Instant communication between staff, students, and parents</i></li>
      <li> <i>Customizable modules tailored to your school’s workflow</i></li>
    </ul>
    <p>
      Trusted by educators. Designed for performance. Built for the future of learning.
    </p>
    <Link to="/login" className="cta-button">Explore EduPortal</Link>
  </div>

      {/* Right Column - Query Form */}
      <div className="right-column">
        <h2>Submit Your Query</h2>
        <form className="query-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>


      {/* Features Section */}
        <section className="features-section" id="section">
        <h2>Why Choose EduPortal?</h2>
        <p className="section-subtitle">A complete digital solution to manage your school effectively.</p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Smart Attendance</h3>
            <p>Real-time student attendance tracking with visual analytics and automated alerts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Course & Curriculum</h3>
            <p>Manage courses, schedules, and academic materials easily with our intuitive platform.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧑‍🏫</div>
            <h3>Mentor Dashboard</h3>
            <p>Mentors can monitor progress, approve leave requests, and engage with students effectively.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Admin Analytics</h3>
            <p>Get actionable insights and performance metrics with our powerful admin dashboard.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🗓️</div>
            <h3>Calendar Integration</h3>
            <p>Stay updated with school events, exams, and holidays using our built-in calendar tools.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Login</h3>
            <p>Ensure safety and data protection with role-based access control for students, staff, and admins.</p>
          </div>
          <div className="feature-card">
        <div className="feature-icon">📥</div>
        <h3>Leave Management</h3>
        <p>Students can apply for leave and track approvals from mentors through a streamlined interface.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">📨</div>
        <h3>Instant Notifications</h3>
        <p>Stay updated with real-time announcements and alerts via email and in-app messages.</p>
      </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        style={{
          backgroundColor: '#1c1c3b',
          color: 'white',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <p>&copy; 2025 EduPortal. All rights reserved.</p>
        <p>
          Contact us at{' '}
          <a href="mailto:support@eduportal.com" style={{ color: '#f5a623' }}>
            support@eduportal.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
