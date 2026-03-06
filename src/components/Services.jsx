import React, { useState } from 'react';
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
  FaArrowRight
} from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Professional Video Editing',
    description: 'Expert visual storytelling including travel documentaries, cinematic cuts, and podcast video production.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333V7zM4 17V7h12v10H4z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Social Media Video Ads',
    description: 'High-converting video content optimized for TikTok, Instagram Reels, and YouTube Shorts.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5.007 12 5.007s-6.265 0-7.831.43a2.506 2.506 0 00-1.762 1.766C2 8.769 2 12.007 2 12.007s0 3.237.407 4.803a2.506 2.506 0 001.762 1.766c1.566.43 7.831.43 7.831.43s6.265 0 7.831-.43a2.506 2.506 0 001.762-1.766c.407-1.566.407-4.803.407-4.803s0-3.238-.407-4.804zM9.996 15.005V9.009l5.205 2.998-5.205 2.998z"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Custom Web Design',
    description: 'Bespoke UI/UX design for websites and mobile apps focused on seamless user experiences.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-8h16v8H4z"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'E-commerce Solutions',
    description: 'Complete online store setups, product management, and secure payment integration services.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.822 7.431A1 1 0 0021 7H7.333L6.179 4.23A1.994 1.994 0 004.333 3H2v2h2.333l4.744 11.385A1 1 0 0010 17h10v-2H10.99l-.833-2H20a1 1 0 00.975-.724l1.625-6a1 1 0 00-.778-1.245z"/>
        <circle cx="10.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Logo & Branding',
    description: 'Comprehensive brand identity kits including logos, business cards, and social media banners.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.023 16.977a35.13 35.13 0 01-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8 1.337A6.962 6.962 0 0016 11c0-3.859-3.141-7-7-7S2 7.141 2 11s3.141 7 7 7c1.71 0 3.273-.617 4.491-1.642l1.337 2.8s.275.224.653.596c.387.363.639.605 1.377 1.389l2.314 2.314 4.221-4.221-2.314-2.314zM9 16c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/>
      </svg>
    )
  },
  {
    id: 6,
    title: 'SEO & Growth',
    description: 'Strategic on-page, technical, and local SEO services to drive organic traffic and visibility.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1zm-1 6H5v-4h4v4zm8-6l-3 3 2 2-2 2 3 3 3-3-2-2 2-2-3-3z"/>
      </svg>
    )
  },
  {
    id: 7,
    title: 'Paid Advertising',
    description: 'Expert management for Google Adwords, Facebook Ads, and niche Reddit/Blockchain marketing.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 7L9 19l-5-5 1.41-1.41L9 16.17 19.59 5.59 21 7zM11 3h10v2H11V3zm0 4h7v2H11V7zm0 4h10v2H11v-2zm0 4h7v2H11v-2z"/>
      </svg>
    )
  },
  {
    id: 8,
    title: '24/7 Website Support',
    description: 'Continuous technical maintenance, content updates, and live chat/email support for your digital assets.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C9.243 2 7 3.791 7 6v1H6c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2h-1V6c0-2.209-2.243-4-5-4zm-3 5V6c0-1.103 1.346-2 3-2s3 .897 3 2v1H9zM6 9h12v10H6V9zm6 3c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"/>
      </svg>
    )
  }
];

const faqData = [
  {
    id: 1,
    question: 'How do you ensure project success?',
    answer: 'We focus on high-quality visual storytelling and brand-aligned digital experiences, ensuring every project meets your specific business goals.'
  },
  {
    id: 2,
    question: 'What platforms do you support for video ads?',
    answer: 'We optimize content for platforms like TikTok, Instagram Reels, YouTube Shorts, and corporate presentations.'
  },
  {
    id: 3,
    question: 'Do you offer 24/7 technical support?',
    answer: 'Yes, our Admin Support team provides round-the-clock live chat, email support, and website management.'
  }
];

const teamData = [
  {
    id: 1,
    name: 'Robert Amplilian',
    role: 'President & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Jenifer Alex',
    role: 'Chief Strategy Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'John Doe',
    role: 'Chief Marketing Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    name: 'Jecy Deoko',
    role: 'CTO of Company',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  }
];

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Sparking Global Success</h1>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <FaChevronRight className="breadcrumb-separator" />
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Services</span>
            <h2 className="section-title">Your Complete Success Solution</h2>
          </div>
          
          <div className="services-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href={`/services/${service.id}`} className="read-more">
                  Read More
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated FAQ Section to match image */}
      <section className="faq-section-new">
        <div className="faq-bg-shape"></div>
        <div className="container">
          <div className="faq-grid-new">
            <div className="faq-image-side">
              <div className="blob-image">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team meeting" />
              </div>
            </div>

            <div className="faq-content-side">
              <h2 className="faq-title-new">
                Keep Your Business Safe & <br /> Ensure High Availability
              </h2>
              
              <div className="accordion-new">
                {faqData.map((faq) => (
                  <div 
                    key={faq.id} 
                    className={`accordion-item-new ${activeFaq === faq.id ? 'active' : ''}`}
                  >
                    <div 
                      className="accordion-header-new" 
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span>{faq.question}</span>
                      <span className="accordion-icon-new">»</span>
                    </div>
                    {activeFaq === faq.id && (
                      <div className="accordion-body-new">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
                {/* Decorative element from the image */}
                <div className="decorative-circle-wrapper">
                  <div className="decorative-circle">
                    <div className="decorative-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <div className="subtitle-wrapper">
              <span className="line"></span>
              <span className="section-subtitle">Our Team</span>
            </div>
            <h2 className="section-title">Meet The Team Of <br /> Innovations!</h2>
          </div>

          <div className="team-grid">
            {teamData.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image-wrapper">
                  <div className="team-border-offset"></div>
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Replicated from Image */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-header">
            <span className="contact-subtitle">TALK TO US</span>
            <h2 className="contact-title">How May We Help You!</h2>
          </div>
          
          <form className="contact-form-new">
            <div className="form-row">
              <div className="form-group">
                <label>Your name*</label>
                <input type="text" placeholder="Robot fox" />
                <span className="error-text">Please fill out this field.</span>
              </div>
              <div className="form-group">
                <label>Your Email*</label>
                <input type="email" placeholder="info@example.com" />
                <span className="error-text">Please fill out this field.</span>
              </div>
            </div>
            <div className="form-group">
              <label>Message*</label>
              <textarea placeholder="Write Message"></textarea>
            </div>
            <button type="submit" className="btn-send">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer Info Section - Replicated from Image */}
      <section className="footer-info-section">
        <div className="container">
          <div className="footer-info-grid">
            <div className="info-item">
              <div className="info-icon-dashed">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.46.69 3.58a1 1 0 01-.27 1.11l-2.2 2.2z" fill="currentColor"/>
                </svg>
              </div>
              <div className="info-text">
                <span>Call Us 7/24</span>
                <p>408-418-5597</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-dashed">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
              </div>
              <div className="info-text">
                <span>Make a Quote</span>
                <p>cs@brownsofts.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-dashed">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
              </div>
              <div className="info-text">
                <span>Location</span>
                <p>5900 Balcones Drive, Austin, TX</p>
              </div>
            </div>
          </div>
          <div className="footer-separator">
            <div className="separator-line"></div>
            <div className="separator-dot-outer">
              <div className="separator-dot-inner"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <div className="scroll-top">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
    </div>
  );
};

export default Services;
