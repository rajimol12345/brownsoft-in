import React from 'react';
import './ServiceLandingLayout.css';

const ServiceLandingLayout = ({
    title,
    heroSubtitle,
    introTitle,
    introText,
    introImage,
    whyTitle,
    whySubtitle,
    features,
    faqs,
    extraContent
}) => {
    return (
        <div className="wibita-page">
            {/* --- HERO SECTION --- */}
            <header className="wibita-hero">
                <div className="wibita-hero-content">
                    <h1>{title}</h1>
                    {heroSubtitle && <p>{heroSubtitle}</p>}
                </div>
            </header>

            {/* --- INTRO SECTION --- */}
            <section className="wibita-intro section-padding">
                <div className="container grid-2">
                    <div className="wibita-intro-text">
                        <h6 className="wibita-tagline">Boost Your Online Visibility</h6>
                        <h2>{introTitle}</h2>
                        <div className="wibita-description">
                            {introText}
                        </div>
                        <button className="wibita-btn-primary">Get A Free Audit</button>
                    </div>
                    <div className="wibita-intro-image">
                        <img src={introImage} alt={title} className="img-fluid rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            {extraContent && (
                <section className="wibita-extra">
                    <div className="container">
                        {extraContent}
                    </div>
                </section>
            )}

            {/* --- WHY CHOOSE US --- */}
            {(whyTitle || (features && features.length > 0)) && (
                <section className="wibita-why section-padding">
                    <div className="container">
                        <div className="wibita-section-header centered">
                            <h2>{whyTitle}</h2>
                            {whySubtitle && <p>{whySubtitle}</p>}
                        </div>

                        <div className="wibita-features-grid grid-4">
                            {features && features.map((feature, idx) => (
                                <div key={idx} className="wibita-feature-card">
                                    <h3>{feature.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* --- FAQ SECTION --- */}
            <section className="wibita-faq section-padding">
                <div className="container">
                    <h2 className="centered mb-10">Frequently Asked Questions</h2>
                    <div className="wibita-faq-list">
                        {faqs && faqs.map((faq, idx) => (
                            <details key={idx} className="wibita-faq-item">
                                <summary>{faq.question}</summary>
                                <div className="wibita-faq-content">
                                    <p>{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section >

            {/* --- QUOTE SECTION --- */}
            < section className="wibita-quote section-padding" >
                <div className="container grid-2 align-center">
                    <div className="wibita-quote-visual">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Consultation" />
                    </div>
                    <div className="wibita-quote-form">
                        <h3>Get A Free Quote</h3>
                        <form>
                            <div className="form-group">
                                <label>Name*</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Email*</label>
                                <input type="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label>Phone*</label>
                                <input type="text" placeholder="Your Phone" />
                            </div>
                            <button type="submit" className="wibita-btn-quote">Get A Free Quote</button>
                        </form>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default ServiceLandingLayout;
