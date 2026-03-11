import React from 'react';
import './PremiumHero.css';

const PremiumHero = ({ title, subtitle, heroImage }) => {
    return (
        <section className="va-hero">
            <div className="va-hero-bg">
                <div className="va-shape va-shape-left"></div>
                <div className="va-shape va-shape-accent"></div>
                <div className="va-shape va-shape-right-top"></div>
                <div className="va-shape va-shape-right-bottom"></div>
                <div className="va-shape va-shape-outline-1"></div>
            </div>

            <div className="container va-hero-container">
                <div className="va-hero-content">
                    <h1 className="va-hero-title">{title || "SERVICE TITLE"}</h1>
                    <p className="va-hero-subtitle">
                        {subtitle || "We provide top-notch professional solutions tailored to your business needs and digital growth."}
                    </p>
                </div>
                <div className="va-hero-visual">
                    <div className="va-hexagon-wrapper">
                        <div className="va-hexagon">
                            <img src={heroImage} alt={title || "Service Visual"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumHero;
