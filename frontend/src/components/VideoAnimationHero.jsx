import React from 'react';
import './VideoAnimationHero.css';
import heroImg from '../assets/images/video-hero-main.png';

const VideoAnimationHero = ({ title, subtitle }) => {
    return (
        <section className="va-hero">
            <div className="va-hero-bg">
                <div className="va-shape va-shape-left"></div>
                <div className="va-shape va-shape-right"></div>
            </div>
            
            <div className="container va-hero-container">
                <div className="va-hero-content">
                    <h1 className="va-hero-title">{title || "VIDEO & ANIMATION"}</h1>
                    <p className="va-hero-subtitle">
                        {subtitle || "We craft high-fidelity visual stories that elevate your brand and captivate your audience across every digital platform."}
                    </p>
                </div>
                <div className="va-hero-visual">
                    <div className="va-hexagon-wrapper">
                        <div className="va-hexagon">
                            <img src={heroImg} alt="Video Editing" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoAnimationHero;
