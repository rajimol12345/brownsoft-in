import React, { useEffect } from 'react';
import { FaShieldAlt, FaLock, FaUserShield, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import './PrivacyPolicy.css';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    console.log('PrivacyPolicyPage rendered');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page-wrapper">
      <div style={{minHeight: '100vh', backgroundColor: '#ffffff'}}>
        {/* Hero Section */}
        <section className="privacy-hero">
          <div className="container">
            <div className="hero-content">
              <div className="privacy-icon-wrapper">
                <FaShieldAlt className="main-privacy-icon" />
              </div>
              <h1 className="privacy-title">Privacy Policy</h1>
              <p className="privacy-intro-text">
                At Brownsofts, we prioritize transparency and security, and our privacy policy outlines how we handle your data to ensure your peace of mind. Your security and commitment to privacy are at the core of our operations.
              </p>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="policy-content-section">
          <div className="container">
            <div className="policy-grid">
              <div className="policy-main">
                
                <div className="policy-block">
                  <div className="block-header">
                    <FaUserShield className="block-icon" />
                    <h2>Information You Provide Us Directly</h2>
                  </div>
                  <div className="block-body">
                    <p>When you sign up on our website, we collect your name, email address, username, and password for account creation.</p>
                    <p>Making a purchase requires providing your shipping and billing addresses, as well as payment details such as your credit card number.</p>
                    <p>Contacting us through forms, emails, or live chat entails sharing your email address and message content.</p>
                    <p>Participation in surveys, contests, or promotions includes sharing personal details like your name and email address.</p>
                  </div>
                </div>

                <div className="policy-block">
                  <div className="block-header">
                    <FaInfoCircle className="block-icon" />
                    <h2>Information We Automatically Collect</h2>
                  </div>
                  <div className="block-body">
                    <p>Upon visiting our website, we automatically gather information about your device and browsing activity, including operating system, IP address, web pages visited, and device details.</p>
                    <p>Data from cookies and tracking technologies help us understand your preferences and enhance your experience on our site.</p>
                  </div>
                </div>

                <div className="policy-block">
                  <div className="block-header">
                    <FaLock className="block-icon" />
                    <h2>How We Use Your Data</h2>
                  </div>
                  <div className="block-body">
                    <ul>
                      <li>Managing services, order processing, and customer support.</li>
                      <li>Personalizing your visit by tracking searches and preferences and creating new features to enhance your experience.</li>
                      <li>Sending marketing and promotional communications, with the option to opt out at any time.</li>
                      <li>Maintaining legal compliance in addition to identifying and thwarting security threats.</li>
                    </ul>
                  </div>
                </div>

                <div className="policy-block">
                  <div className="block-header">
                    <FaShieldAlt className="block-icon" />
                    <h2>Disclosure of Your Information</h2>
                  </div>
                  <div className="block-body">
                    <p>With reputable outside service providers who help us run our website and deliver services, we might disclose your personal information. Disclosure may occur if required by law or to protect the rights and safety of Brownsoft, employees, users, or the public.</p>
                  </div>
                </div>

                <div className="policy-block">
                  <div className="block-header">
                    <FaInfoCircle className="block-icon" />
                    <h2>Modification of Policy</h2>
                  </div>
                  <div className="block-body">
                    <p>For your knowledge, we will notify you of any changes to our privacy statements via our website. We may update it from time to time.</p>
                  </div>
                </div>

                <div className="policy-block contact-block">
                  <div className="block-header">
                    <FaEnvelope className="block-icon" />
                    <h2>Contact Us</h2>
                  </div>
                  <div className="block-body">
                    <p>Please reach out to us at <strong>cs@brownsofts.in</strong> with any questions or concerns regarding our privacy policy. We are dedicated to addressing inquiries promptly.</p>
                  </div>
                </div>

              </div>

              {/* Sticky Sidebar for quick navigation if needed later */}
              <aside className="policy-sidebar">
                <div className="sidebar-card">
                  <h3>Our Commitment</h3>
                  <p>Protecting your privacy is our top priority. Your security and peace of mind are at the core of our commitment.</p>
                  <div className="commitment-divider"></div>
                  <div className="last-updated">Last Updated: March 2026</div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
