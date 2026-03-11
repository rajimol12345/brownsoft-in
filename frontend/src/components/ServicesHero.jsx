import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesHero.css';
import heroMainImg from '../assets/images/services-hero-main.png';

const ServicesHero = ({ 
    title = "Our Service", 
    subtext = "We create outstanding and world-class digital products, web design, apps, and branding.",
    showBreadcrumbs = true 
}) => {
    return (
        <section className="services-hero">
            <div className="container services-hero-grid">
                <div className="hero-content">
                    {showBreadcrumbs && (
                        <nav className="breadcrumb">
                            <Link to="/" className="breadcrumb-link">Home</Link>
                            <span className="separator">/</span>
                            <span className="active">{title}</span>
                        </nav>
                    )}
                    <h1 className="hero-main-title">{title}</h1>
                    <p className="hero-sub-text">{subtext}</p>
                    <button className="cta-button">Explore More</button>
                </div>

                <div className="hero-visual-area">
                    <div className="three-d-card">
                        <div className="hero-image-inner">
                            <img 
                                src={heroMainImg} 
                                alt="Professional Service" 
                                className="hero-main-img" 
                            />
                            {/* Decorative glass element for depth */}
                            <div className="glass-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;