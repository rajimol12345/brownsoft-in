import React from 'react';
import './PremiumServiceLayout.css';

const PremiumServiceLayout = ({
    title,
    heroSubtitle,
    heroImage,
    introTitle,
    introText,
    services,
    faqs,
    quoteImage,
    customHero,
    customIntro
}) => {
    return (
        <div className="premium-page">
            {/* --- HERO SECTION --- */}
            {customHero ? customHero : (
                <section className="premium-hero">
                    {/* Abstract Patterns */}
                    <div className="shape blob blob-1"></div>
                    <div className="shape blob blob-2"></div>
                    <div className="shape circle circle-1"></div>
                    <div className="shape circle circle-2"></div>

                    {/* Geometric Elements */}
                    <div className="shape geo geo-triangle"></div>
                    <div className="shape geo geo-square"></div>

                    {/* Particles */}
                    <div className="shape particle p-1"></div>
                    <div className="shape particle p-2"></div>
                    <div className="shape particle p-3"></div>

                    <div className="container premium-hero-container">
                        <div className="hero-content">
                            <span className="hero-tagline">Award Winning Agency</span>
                            <h1 className="hero-title">{title}</h1>
                            <p className="hero-description">{heroSubtitle}</p>
                        </div>
                        <div className="hero-visual">
                            <div className="image-glass-backdrop"></div>
                            <div className="hero-image-wrapper">
                                <img src={heroImage || "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000"} alt={title} />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* --- INTRO SECTION --- */}
            {customIntro && customIntro}

            {/* --- SERVICES GRID SECTION --- */}
            <section className="premium-services">
                <div className="container">
                    <div className="section-header-centered">
                        <span className="premium-subtitle">Why Choose Us</span>
                        <h2 className="premium-title">{introTitle || "Specialized Solutions For Your Brand"}</h2>
                    </div>

                    <div className="premium-grid">
                        {services && services.map((service, idx) => (
                            <div key={idx} className="premium-card">
                                <div className="card-icon-wrap">
                                    <i className={service.icon}></i>
                                </div>
                                <h3 className="card-title">{service.title}</h3>
                                <p className="card-text">
                                    {service.desc || introText || "We provide high-quality professional editing services tailored to your specific project needs."}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <section className="premium-faq">
                <div className="container">
                    <div className="section-header-centered">
                        <span className="premium-subtitle">Got Questions?</span>
                        <h2 className="premium-title">Frequently Asked Questions</h2>
                    </div>

                    <div className="faq-list">
                        {faqs && faqs.map((faq, idx) => (
                            <details key={idx} className="faq-item">
                                <summary>{faq.question}</summary>
                                <div className="faq-inner">
                                    <p>{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- QUOTE SECTION --- */}
            <section id="quote" className="premium-quote">
                <div className="container">
                    <div className="quote-grid">
                        <div className="quote-visual">
                            <img src={quoteImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"} alt="Get a Quote" />
                        </div>
                        <div className="quote-card">
                            <h3>Get A Free Quote</h3>
                            <form className="premium-form">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="john@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Project Brief</label>
                                    <textarea placeholder="Tell us about your project..." rows="4"></textarea>
                                </div>
                                <button type="submit" className="btn-submit-premium">
                                    Send Message <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PremiumServiceLayout;
