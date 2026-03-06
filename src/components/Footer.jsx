import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube, 
  FaChevronRight, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaArrowRight,
  FaArrowUp
} from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About */}
        <div className="footer-column about">
          <div className="footer-logo">
            <img src={logo} alt="BrownSofts LLC Logo" className="footer-logo-img" />
            <span></span>
          </div>
          <p className="about-text">
            Sparking Global Success in the Digital World. Your Technology Partner for Complete Success Solutions.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/brownsoftsin" className="social-icon" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://x.com/brownsoftsIn" className="social-icon" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/brownsoftsin/" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://youtube.com/@brownsofts" className="social-icon" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/blog"><FaChevronRight className="footer-links-icon" /> Our Blog</a></li>
            <li><a href="/services"><FaChevronRight className="footer-links-icon" /> Our Services</a></li>
            <li><a href="/privacy-policy"><FaChevronRight className="footer-links-icon" /> Privacy Policy</a></li>
            <li><a href="/opt-out-policy"><FaChevronRight className="footer-links-icon" /> Opt Out Policy</a></li>
            <li><a href="/terms-conditions"><FaChevronRight className="footer-links-icon" /> Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 3: Recent Blogs */}
        <div className="footer-column">
          <h3 className="footer-heading">Recent Blogs</h3>
          
          <div className="recent-post">
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" alt="Blog 1" className="post-thumb" />
            <div className="post-info">
              <span className="post-date"><FaCalendarAlt className="post-date-icon" /> March 24, 2025</span>
              <a href="#" className="post-title">Boost Customer Relations with YouTube</a>
            </div>
          </div>

          <div className="recent-post">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" alt="Blog 2" className="post-thumb" />
            <div className="post-info">
              <span className="post-date"><FaCalendarAlt className="post-date-icon" /> March 24, 2025</span>
              <a href="#" className="post-title">Creative Photo Editing Services</a>
            </div>
          </div>
        </div>

        {/* Column 4: Contact Us */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>
                C.K.Building, Near Panamkalai Railway Road,<br />
                RC Street - Kaliakkavilai
              </span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <span> 83000 50033 </span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>cs@brownsofts.in</span>
            </div>
          </div>
          {/* <button className="quote-btn">
            Get A Quote <FaArrowRight />
          </button> */}
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
        <div className="footer-bottom-container">
          <p className="copyright">Copyright © 2026 BrownSofts LLC. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="/terms-conditions">Terms & Condition</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
