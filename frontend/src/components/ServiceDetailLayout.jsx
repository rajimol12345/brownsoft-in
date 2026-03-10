import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetailLayout.css';

const ServiceDetailLayout = ({
    title,
    heroTitle,
    breadcrumbs,
    sidebarMenu,
    mainImage,
    description,
    subDescription,
    features,
    faqs,
    steps,
    advantage
}) => {
    // Default steps if none provided
    const defaultSteps = [
        { title: 'Discovery & Research', desc: 'We dive deep into your brand values and market trends.', icon: 'fas fa-layer-group' },
        { title: 'Concept & Creation', desc: 'Our editors bring concepts to life with multiple iterations.', icon: 'fas fa-pen-nib' },
        { title: 'Final Delivery', desc: 'Receive high-quality video assets ready for any platform.', icon: 'fas fa-film' }
    ];

    const displaySteps = steps || defaultSteps;

    return (
        <div className="sdl-page">
            {/* ── PAGE HEADER ── */}
            <header className="sd-page-header">
                <div className="container">
                    <h1 className="sd-page-title">{heroTitle || title}</h1>
                    <div className="sd-breadcrumb">
                        {breadcrumbs.map((bc, idx) => (
                            <React.Fragment key={idx}>
                                {bc.path ? <Link to={bc.path}>{bc.label}</Link> : <span>{bc.label}</span>}
                                {idx < breadcrumbs.length - 1 && <span>/</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </header>

            <div className="container sdl-container">
                {/* ── MAIN CONTENT (LEFT) ── */}
                <main className="sd-main-content">
                    <div className="sd-content-section">
                        <img src={mainImage} alt={title} className="sd-main-image" />

                        <h2 className="sd-section-title">{title}</h2>
                        <div className="sd-text">
                            {description}
                        </div>

                        {subDescription && (
                            <p className="sd-text">
                                {subDescription}
                            </p>
                        )}

                        {features && (
                            <ul className="sd-feature-list">
                                {features.map((item, idx) => (
                                    <li key={idx} className="sd-feature-item">
                                        <i className="fas fa-check-square sd-feature-icon"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <h2 className="sd-section-title">3 Steps to Your New Design</h2>
                        <p className="sd-text">
                            We follow a streamlined process to ensure your project is delivered on time and exceeds your expectations.
                        </p>

                        <div className="sd-steps-row">
                            {displaySteps.map((step, idx) => (
                                <div key={idx} className="sd-step-card">
                                    <div className="sd-step-icon">
                                        <i className={step.icon}></i>
                                    </div>
                                    <h4 className="sd-step-title">{step.title}</h4>
                                    <p className="sd-text small mb-0">{step.desc}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </main>

                {/* ── SIDEBAR (RIGHT) ── */}
                <aside className="sd-sidebar">
                    {/* Services Menu */}
                    <div className="sd-widget">
                        <h4 className="sd-widget-title">Our Expertise</h4>
                        <div className="sd-service-menu">
                            {sidebarMenu.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.path || '#!'}
                                    className={`sd-service-link ${item.active ? 'active' : ''}`}
                                >
                                    {item.label}
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Brochure Widget */}
                    <div className="sd-widget">
                        <h4 className="sd-widget-title">Free Brochure</h4>
                        <button className="sd-download-btn">
                            <i className="fas fa-file-pdf" style={{ color: '#ff0000' }}></i>
                            <span>DOWNLOAD PDF</span>
                        </button>
                        <button className="sd-download-btn">
                            <i className="fas fa-file-word" style={{ color: '#2b579a' }}></i>
                            <span>DOWNLOAD DOC</span>
                        </button>
                    </div>

                    {/* Contact Widget */}
                    <div className="sd-widget sd-contact-widget">
                        <div className="sd-contact-icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h4 className="sd-widget-title" style={{ color: '#fff', border: 'none', padding: 0 }}>
                            Have Questions? Call Us
                        </h4>
                        <p className="sd-contact-phone">92 666 888 0000</p>
                        <Link to="/contact" className="sd-contact-btn">
                            Get in Touch <i className="fas fa-arrow-right ms-2"></i>
                        </Link>
                    </div>
                </aside>
            </div>

            {/* ── FULL WIDTH ADVANTAGE SECTION ── */}
            {advantage && (
                <section className="sd-advantage-full-width">
                    <div className="container">
                        <h3 className="sd-section-subtitle text-center mb-5">Key Advantages</h3>
                        <div className="sd-advantage-box">
                            <img src={advantage.image} alt="Advantage" className="sd-advantage-img" />
                            <div className="sd-advantage-content">
                                <p className="sd-text">
                                    {advantage.text || "Reliable services that prioritize client satisfaction and visual excellence."}
                                </p>
                                <ul className="sd-feature-list" style={{ gridTemplateColumns: '1fr' }}>
                                    {(advantage.points || features || []).slice(0, 4).map((point, idx) => (
                                        <li key={idx} className="sd-feature-item">
                                            <i className="fas fa-check-square sd-feature-icon"></i>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <div className="container sdl-container-bottom">
                <main className="sd-main-content-full">
                    {faqs && (
                        <div className="sd-faq-modern-wrapper">
                            <h3 className="sd-section-subtitle mb-4">Common Questions</h3>
                            <div className="sd-custom-accordion">
                                {faqs.map((faq, idx) => (
                                    <details key={idx} className="sd-faq-item">
                                        <summary className="sd-faq-summary">
                                            <span><i className="fas fa-question-circle me-2"></i> {faq.question}</span>
                                            <i className="fas fa-chevron-down"></i>
                                        </summary>
                                        <div className="sd-faq-content">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ServiceDetailLayout;
