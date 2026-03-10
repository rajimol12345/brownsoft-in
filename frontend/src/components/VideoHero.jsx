import React from 'react';
import { Link } from 'react-router-dom';
import './VideoHero.css';
import heroVisual from '../assets/images/video-hero-visual.png';

const VideoHero = ({ title = "HOW TO DO GREAT BUSINESS" }) => {
    return (
        <section className="video-hero-premium">
            {/* Background Decorative Elements */}
            <div className="bg-pattern circle-large"></div>
            <div className="bg-pattern circle-medium"></div>
            <div className="bg-pattern dots-pattern-white"></div>
            <div className="bg-pattern dots-pattern-blue"></div>

            <div className="container video-hero-premium-container">
                <div className="video-hero-main-content">
                    <div className="hero-text-side">
                        <h1 className="hero-main-title">
                            HOW TO DO <br /> GREAT <br /> BUSINESS
                        </h1>
                        <p className="hero-subtext">
                            When you start doing a new business, let's visit the blog to guide you in doing business.
                        </p>
                        <Link to="/contact" className="hero-cta-btn">JOIN US</Link>
                    </div>

                    <div className="hero-image-side">
                        <div className="visual-wrapper">
                            <div className="decorative-wavy-circle">
                                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                                    <circle cx="200" cy="200" r="180" fill="#E0E7FF" fillOpacity="0.4" />
                                    <path d="M50 200C50 200 80 160 120 160C160 160 190 200 230 200C270 200 300 160 340 160" stroke="white" strokeWidth="4" strokeLinecap="round" />
                                    <path d="M60 220C60 220 90 180 130 180C170 180 200 220 240 220C280 220 310 180 350 180" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
                                    <path d="M70 240C70 240 100 200 140 200C180 200 210 240 250 240C290 240 320 200 360 200" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
                                </svg>
                            </div>
                            <img src={heroVisual} alt="Professional Business Man" className="hero-visual-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoHero;
