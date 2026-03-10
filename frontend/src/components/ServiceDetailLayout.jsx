import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetailLayout.css';

const ServiceDetailLayout = ({
    title,
    heroTitle,
    breadcrumbs,
    sidebarMenu,
    openingHours,
    mainImage,
    description,
    featureBoxes,
    subSection,
    bottomFeatures,
    faqs,
    extraContent
}) => {
    return (
        <div className="sdl-page">
            {/* ── HERO ── */}
            <section className="sdl-hero">
                <div className="container">
                    <h1 className="sdl-hero-title">{heroTitle || title}</h1>
                    <ul className="sdl-breadcrumb">
                        {breadcrumbs.map((bc, index) => (
                            <React.Fragment key={index}>
                                <li>
                                    {bc.path ? (
                                        <Link to={bc.path}>{bc.label}</Link>
                                    ) : (
                                        <span className="active">{bc.label}</span>
                                    )}
                                </li>
                                {index < breadcrumbs.length - 1 && (
                                    <li className="separator"><i className="fas fa-chevron-right"></i></li>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ── BODY ── */}
            <section className="sdl-body">
                <div className="container sdl-container">

                    {/* Sidebar */}
                    <aside className="sdl-sidebar">
                        <div className="sdl-menu-card">
                            <h3 className="sdl-sidebar-title">All Services</h3>
                            <ul className="sdl-menu-list">
                                {sidebarMenu.map((item, index) => (
                                    <li key={index} className="sdl-menu-item">
                                        <Link
                                            to={item.path}
                                            className={`sdl-menu-link ${item.active ? 'active' : ''}`}
                                        >
                                            {item.label}
                                            <i className="fas fa-long-arrow-alt-right"></i>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {openingHours && (
                            <div className="sdl-hours-card">
                                <h3 className="sdl-sidebar-title">Opening Hours</h3>
                                <ul className="sdl-hours-list">
                                    {openingHours.map((item, index) => (
                                        <li key={index} className="sdl-hours-item">
                                            <i className="far fa-clock"></i>
                                            <span>{item.day}:</span>
                                            <span className="time">{item.time}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="sdl-help-box">
                            <div className="sdl-help-icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <h3>Need Help? Call Here</h3>
                            <span className="phone">+208-555-0112</span>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="sdl-main">
                        <div className="sdl-main-image">
                            <img src={mainImage} alt={title} />
                        </div>

                        <h2 className="sdl-content-title">{title}</h2>

                        <div className="sdl-description">
                            {description}
                        </div>

                        {/* Feature Grid */}
                        <div className="sdl-feature-grid">
                            {featureBoxes.map((box, index) => (
                                <div key={index} className="sdl-feature-box">
                                    <div className="sdl-ficon">
                                        <i className={box.icon}></i>
                                    </div>
                                    <div className="sdl-fcontent">
                                        <h4>{box.title}</h4>
                                        <p>{box.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sub Section */}
                        {subSection && (
                            <div className="sdl-sub-section">
                                <div className="sdl-sub-image">
                                    <img src={subSection.image} alt={subSection.title} />
                                </div>
                                <div className="sdl-sub-content">
                                    <h3>{subSection.title}</h3>
                                    <p>{subSection.description}</p>
                                </div>
                            </div>
                        )}

                        {/* FAQ Section */}
                        {faqs && (
                            <div className="sdl-faq-section">
                                <h3 className="sdl-content-title">Most Comment Question</h3>
                                <div className="sdl-faq-accordion">
                                    {faqs.map((faq, index) => (
                                        <details key={index} className="sdl-faq-item">
                                            <summary className="sdl-faq-summary">
                                                {faq.question}
                                                <i className="fas fa-plus"></i>
                                            </summary>
                                            <div className="sdl-faq-content">
                                                <p>{faq.answer}</p>
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        )}

                        {extraContent && (
                            <div className="sdl-extra-content">
                                {extraContent}
                            </div>
                        )}
                    </main>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailLayout;
