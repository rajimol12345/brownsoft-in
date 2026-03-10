import React from 'react';
import './VideoIntroTwoColumn.css';
import introImg from '../assets/images/video-intro-left.png';

const VideoIntroTwoColumn = () => {
    return (
        <section className="video-intro-2col">
            <div className="container video-intro-2col-container">
                <div className="video-intro-visual">
                    <div className="video-intro-image-wrapper">
                        <img src={introImg} alt="Professional Video Editing" />
                    </div>
                </div>
                
                <div className="video-intro-text">
                    <span className="video-intro-subtitle">Elevate Your Brand Storytelling</span>
                    <h2 className="video-intro-title">With High-Fidelity <br /> Video & Animation</h2>
                    
                    <p className="video-intro-description">
                        We live in an era where video content dominates every digital platform. From 
                        social media feeds to corporate websites, high-quality visual stories are 
                        the primary way brands connect with their audience. Does your brand have 
                        the cinematic presence needed to stand out in a crowded market?
                    </p>
                    
                    <p className="video-intro-description">
                        Brownsoft is a leading creative agency specializing in professional video 
                        editing and 2D/3D animation. We help brands like yours build a powerful 
                        visual identity that captivates viewers and drives measurable results. 
                        Get in touch with us today for cinematic content that takes your 
                        brand to the next level.
                    </p>
                    
                    <div className="video-intro-cta">
                        <button className="btn-navy-outline">Discover More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoIntroTwoColumn;
