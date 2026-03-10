import React, { useState } from 'react';
import './AboutSection.css';
import aboutMain from '../assets/images/about-main.png';

const AboutSection = () => {
    const [activeTab, setActiveTab] = useState('Mission');

    const tabContent = {
        Mission: "Our mission at Brownsofts LLC is to empower businesses with innovative digital solutions that drive growth and measurable success. We create high-performing websites, implement proven SEO strategies, and develop data-driven digital marketing campaigns that increase visibility, attract qualified traffic, and boost conversions. Our goal is to help businesses achieve their online potential through reliable technology, creative design, and results-focused strategies.",
        Vision: "Our vision is to become a trusted global digital solutions partner that helps businesses succeed in the ever-evolving online world. We aim to continuously innovate and deliver modern, high-quality digital experiences that strengthen brands, improve customer engagement, and enable long-term digital growth for organizations of all sizes.",
        Value: "At Brownsofts LLC, our values guide everything we do and shape the way we serve our clients. We are deeply committed to customer satisfaction, providing reliable support and building strong, long-term relationships with every business we work with. We believe in innovation and creativity, delivering modern designs, advanced motion graphics, and digital solutions that enhance brand storytelling and user experience. Our team follows a results-driven approach, ensuring that every strategy, campaign, and solution we implement contributes to measurable growth and real business success. We also maintain a strong focus on quality and excellence, delivering high-performance digital services with seamless functionality and attention to detail. Above all, we operate with integrity and trust, maintaining transparency, professionalism, and a genuine commitment to helping our clients achieve their digital goals."
    };

    return (
        <section className="about-section-new section-padding">
            <div className="container about-new-container">
                {/* Left Content */}
                <div className="about-new-content">
                    <div className="section-label-wrapper">
                        <span className="section-label-blue">About Us</span>
                        <div className="custom-wavy-icon">
                            <svg width="45" height="15" viewBox="0 0 45 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10C5 10 7 2 12 2C17 2 19 13 24 13C29 13 31 5 36 5C41 5 42 10 44 10" stroke="#124ebb" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M6 13C10 13 12 5 17 5C22 5 24 10 29 10C34 10 36 2 41 2" stroke="#124ebb" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
                            </svg>
                        </div>
                    </div>

                    <h2 className="section-title-large">
                        Choose <span className="highlight-blue">The Best</span> IT <br /> Service Company
                    </h2>

                    <p className="section-description-gray">
                        ITSoft has been optimized to give your visitors the best experience in terms of UX/UI, with a unique design.
                    </p>

                    <div className="about-tabs-wrapper">
                        <div className="tabs-header">
                            {Object.keys(tabContent).map((tab) => (
                                <button
                                    key={tab}
                                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    Our {tab}
                                </button>
                            ))}
                        </div>
                        <div className="tab-content-pane" key={activeTab}>
                            <p>{tabContent[activeTab]}</p>
                        </div>
                    </div>


                </div>

                {/* Right Visual Stack */}
                <div className="about-new-visual">
                    <div className="visual-stack">
                        {/* Solid Blue Ring */}
                        <div className="blue-circle-shape"></div>

                        {/* Main Image */}
                        <div className="main-img-holder">
                            <img src={aboutMain} alt="Professional smiling" />
                        </div>

                        {/* Experience Badge */}
                        <div className="exp-badge-square">
                            <div className="exp-dots-pattern"></div>
                            <div className="exp-number">12</div>
                            <div className="exp-text">years of <br /> experiences</div>
                        </div>

                        {/* Award Badge Card */}
                        <div className="award-badge-bottom-full slide-up-animation">
                            <div className="award-icon-modern">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 15l-2 5 2-1 2 1-2-5z" />
                                    <circle cx="12" cy="8" r="7" />
                                    <path d="M12 5l1 2h2l-1.5 1.5.5 2.5-2-1.5-2 1.5.5-2.5-1.5-1.5h2z" />
                                </svg>
                            </div>
                            <div className="award-text-modern">
                                <h3>Best Awarded Company</h3>
                                <p>We adapt our delivery to the way your work, whether as an external provider.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
