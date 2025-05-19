import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/patema.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faLinkedin, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  // Social media links
  const socialLinks = {
    facebook: "https://www.facebook.com/patemaventures",
    twitter: "https://twitter.com/patemaventures",
    linkedin: "https://www.linkedin.com/company/patema-ventures",
    instagram: "https://www.instagram.com/patemaventures"
  };

  // Contact information
  const contactInfo = {
    email: "patemaventuresltd@gmail.com",
    phone: "+254 -7032-98-702",
    address: "Great wall, Beijing Road, Mombasa Rd"
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand-section">
          <Link to="/" className="footer-logo-link">
            <img src={Logo} alt="Patema Ventures Logo" className="footer-logo" />
            <span>PATEMA VENTURES LTD</span>
          </Link>
          <h3>PATEMA VENTURES LTD</h3>
          <p>Comprehensive Construction Solutions for Every Need</p>
          <div className="social-links">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            <p>Phone: <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a></p>
            <p>Address: {contactInfo.address}</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Patema Ventures Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;