import React from 'react';
import './VideoFeatures.css';

const VideoFeatures = () => {
    const features = [
        {
            icon: 'fas fa-magic',
            title: 'Exceptional Design',
            desc: 'We focus on high-fidelity visual aesthetics that stand out in any feed.'
        },
        {
            icon: 'fas fa-cogs',
            title: 'Reliable Framework',
            desc: 'Structured storytelling workflows ensuring fast delivery and top quality.'
        },
        {
            icon: 'fas fa-users',
            title: 'User Experience',
            desc: 'Content optimized for viewer retention and emotional resonance.'
        }
    ];

    return (
        <section className="video-features-section">
            <div className="container">
                <div className="features-header">
                    <h2 className="features-main-title">
                        Save Time & Money By Choosing To <br />
                        Work With Our Video Experts
                    </h2>
                    <p className="features-sub-text">
                        Why waste weeks trying to learn complex tools when you can have a dedicated
                        post-production team ready to deliver world-class results in days?
                        We provide full-service video editing, motion graphics, and audio mixing
                        under one roof, saving you both time and resources.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((item, idx) => (
                        <div key={idx} className="feature-item">
                            <div className="feature-icon">
                                <i className={item.icon}></i>
                            </div>
                            <div className="feature-info">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoFeatures;
