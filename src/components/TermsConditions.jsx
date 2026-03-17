import React, { useEffect } from 'react';
import { FaFileContract, FaUserCheck, FaCopyright, FaExclamationTriangle, FaBan, FaSyncAlt, FaEnvelope } from 'react-icons/fa';
import './TermsConditions.css';

const TermsConditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page-wrapper">
      <div style={{minHeight: '100vh', backgroundColor: '#ffffff'}}>
        {/* Hero Section */}
        <section className="terms-hero">
          <div className="container">
            <div className="hero-content">
              <div className="terms-icon-wrapper">
                <FaFileContract className="main-terms-icon" />
              </div>
              <h1 className="terms-title">Terms & Conditions</h1>
              <p className="terms-intro-text">
                Brownsoft's Terms and Conditions are crucial for a seamless and respectful online experience. You improve the security and openness of the digital environment by being aware of and following these guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="terms-content-section">
          <div className="container">
            <div className="terms-grid">
              <div className="terms-main">
                
                <div className="terms-block">
                  <div className="block-header">
                    <FaUserCheck className="block-icon" />
                    <h2>The Website's Use</h2>
                  </div>
                  <div className="block-body">
                    <p>When you access the Borownsofts website, remember that you're entering into a contract. It is governed by specific rules. Here's a breakdown of how you should conduct yourself while utilizing the platform:</p>
                    <ul>
                      <li><strong>Only for Lawful Purposes:</strong> Verify that everything you do on the website complies with the law. It is totally forbidden to engage in any unauthorized or illegal activity.</li>
                      <li><strong>Respect Intellectual Property:</strong> Avoid infringing on others' rights, especially for intellectual property. Plagiarism and unauthorized use of content are off-limits.</li>
                      <li><strong>Cybersecurity:</strong> Be aware of cybersecurity. Avoid sending viruses or malware. They could harm the website. Never forget that everyone is accountable for cybersecurity.</li>
                      <li><strong>Identity Integrity:</strong> Impersonating others is a serious offence. Be authentic and represent yourself truthfully to maintain a trustworthy online environment.</li>
                    </ul>
                  </div>
                </div>

                <div className="terms-block">
                  <div className="block-header">
                    <FaCopyright className="block-icon" />
                    <h2>Intellectual Property</h2>
                  </div>
                  <div className="block-body">
                    <p>Borownsofts values its ideas. It expects users to do the same. Here's what you need to know about respecting their content:</p>
                    <h3>Protecting Copyright</h3>
                    <p>The content on the Borownsofts website is protected by copyright laws. Any reproduction or distribution without explicit permission is a violation.</p>
                    <h3>Guidelines for Permission</h3>
                    <p>If you wish to use or change any content from the website, always seek authorization from Borownsofts. Respect their intellectual creations.</p>
                  </div>
                </div>

                <div className="terms-block">
                  <div className="block-header">
                    <FaExclamationTriangle className="block-icon" />
                    <h2>Disclaimers & Guidelines</h2>
                  </div>
                  <div className="block-body">
                    <p>Acknowledging this is key. Our website and its contents have disclaimers. Here are some things to remember:</p>
                    <p><strong>As-Is-Nature:</strong> The website is provided "as is," meaning that errors or inconsistencies can exist. Acknowledge that there won't always be perfection and prepare for the occasional setback.</p>
                  </div>
                </div>

                <div className="terms-block">
                  <div className="block-header">
                    <FaBan className="block-icon" />
                    <h2>Restriction of Liability</h2>
                  </div>
                  <div className="block-body">
                    <p>Here's what to know in case you experience any unfavourable consequences or problems as a result of using the website:</p>
                    <p><strong>Damages of any kind:</strong> Borownsofts disclaims all liability for harm from using this platform. This harm can be direct, indirect, or consequential. Be mindful of your actions and act with caution.</p>
                  </div>
                </div>

                <div className="terms-block">
                  <div className="block-header">
                    <FaSyncAlt className="block-icon" />
                    <h2>Terminations and Modifications</h2>
                  </div>
                  <div className="block-body">
                    <p>You may no longer have access to the website, and Borownsofts reserves the right to change the terms and conditions. To prevent disruptions, keep yourself informed and follow any updates.</p>
                  </div>
                </div>

                <div className="terms-block contact-block">
                  <div className="block-header">
                    <FaEnvelope className="block-icon" />
                    <h2>Questions?</h2>
                  </div>
                  <div className="block-body">
                    <p>For any inquiries or clarifications regarding these terms and conditions, reach out to <strong>cs@brownsofts.in</strong>. We are here to help.</p>
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <aside className="terms-sidebar">
                <div className="sidebar-card">
                  <h3>Respect & Compliance</h3>
                  <p>Follow the regulations of Borownsofts. Seek clarification if needed and stay informed about our latest updates.</p>
                  <div className="commitment-divider"></div>
                  <div className="last-updated">Effective: March 2026</div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
