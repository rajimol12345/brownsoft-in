import React from 'react';

const Hero = () => {
    return (
        <section className="hero-banner">
            <div className="container hero-content">
                <div className="hero-badge">
                    <span>Contact Us</span>
                </div>
                <h1 className="hero-title">Get in Touch</h1>
                <p className="hero-subtitle">
                    We're here to help and answer any question you might have.
                </p>
                <ul className="breadcrumb-list breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li className="separator">/</li>
                    <li className="current">Contact</li>
                </ul>
            </div>
        </section>
    );
};

export default Hero;
