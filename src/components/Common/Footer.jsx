import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import "../../styles/Footer.css";

function Footer() {
  return (
    <footer>
      {/* <div className="footer-top">
        <div className="footer-brand">
          <h2 className="brand-logo">🏫 <span>EduPortal</span></h2>
          <p>Empowering schools with smart digital solutions for students, staff, and administrators.</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div> */}

      <div className="footer-bottom">
        <p>&copy; 2025 EduPortal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;