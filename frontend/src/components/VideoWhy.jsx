import React from 'react';
import './VideoWhy.css';
import engagementImg from '../assets/images/video_editing_engagement.png';
import trustImg from '../assets/images/video_editing_brand_trust.png';

const VideoWhy = () => {
    return (
        <section className="video-why-section">
            <div className="container">
                {/* Block 1: Engagement */}
                <div className="why-block">
                    <div className="why-text">
                        <h6 className="why-subtitle">Engagement & Retention</h6>
                        <h2 className="why-title">Why Is Video Content <br /><span>Essential for Engagement?</span></h2>
                        <p>
                            Video content captures the attention of your audience faster than any
                            other medium. By implementing professional editing techniques like
                            strategic pacing, color correction, and smooth transitions, we ensure
                            your viewers stay engaged from the first second to the last. High-quality
                            video isn't just a luxury; it's the foundation of your digital presence.
                        </p>
                    </div>
                    <div className="why-image">
                        <img src={engagementImg} alt="Engagement & Retention" />
                    </div>
                </div>

                {/* Block 2: Trust (Reversed) */}
                <div className="why-block why-reversed">
                    <div className="why-text">
                        <h6 className="why-subtitle">Brand Authority</h6>
                        <h2 className="why-title">How Does Professional Editing <br /><span>Build Brand Trust?</span></h2>
                        <p>
                            Consistency in your visual storytelling builds trust. When your videos
                            look world-class, your brand is perceived as world-class. Our tailored
                            animation and post-production services align perfectly with your brand
                            identity, creating a cohesive and professional narrative that
                            establishes you as an authority in your industry.
                        </p>
                    </div>
                    <div className="why-image">
                        <img src={trustImg} alt="Brand Authority & Trust" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoWhy;
