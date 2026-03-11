import React from 'react';
import './PremiumIntro.css';

const PremiumIntro = ({ title, subtitle, description1, description2, image }) => {
    return (
        <section className="video-intro-2col">
            <div className="container video-intro-2col-container">
                <div className="video-intro-visual">
                    <div className="video-intro-image-wrapper">
                        <img src={image} alt={title} />
                    </div>
                </div>

                <div className="video-intro-text">
                    <span className="video-intro-subtitle">{subtitle}</span>
                    <h2 className="video-intro-title">{title}</h2>

                    <p className="video-intro-description">
                        {description1}
                    </p>

                    {description2 && (
                        <p className="video-intro-description">
                            {description2}
                        </p>
                    )}

                    <div className="video-intro-cta">
                        <button className="btn-navy-outline">Discover More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumIntro;
