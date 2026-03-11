import React from 'react';
import { Link } from 'react-router-dom';
import './AboutHero.css';

const AboutHero = ({ title = "About Us", showBreadcrumbs = true }) => {
    return (
        <section className="about-hero">
            <div className="container about-hero-container">
                <div className="hero-content">
                    <h1 className="hero-main-title">{title}</h1>
                    {showBreadcrumbs && (
                        <nav className="breadcrumb">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li className="separator">»</li>
                                <li className="active">{title}</li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
