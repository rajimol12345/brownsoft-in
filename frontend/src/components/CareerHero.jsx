import React from 'react';
import { Link } from 'react-router-dom';
import './CareerHero.css';

const CareerHero = () => {
    return (
        <section className="career-hero">
            {/* Abstract Decorative Shapes */}
            <div className="career-shape shape-top-right"></div>
            <div className="career-shape shape-bottom-right"></div>

            {/* Mock Header for Context */}
            <div className="career-header-placeholder">
                <div className="container header-inner">
                    <div className="logo">Nexovortex</div>
                    <nav className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact us</Link>
                        <Link to="/pages">Pages</Link>
                    </nav>
                    <button className="btn-get-started">Get started</button>
                </div>
            </div>

            <div className="container career-hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Career</h1>
                    <p className="hero-subtitle">Unlock Your Potential In A Fast-Growing Industry</p>
                </div>
            </div>
        </section>
    );
};

export default CareerHero;
