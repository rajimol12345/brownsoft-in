import React from 'react';
import './VideoSubServices.css';

const VideoSubServices = () => {
    const services = [
        { icon: 'fab fa-tiktok', title: 'TikTok Reels and YouTube Shorts' },
        { icon: 'fab fa-youtube', title: 'Videos for YouTube and Vlogs' },
        { icon: 'fas fa-film', title: 'Documentary Film Video Editing' },
        { icon: 'fas fa-building', title: 'Business & Corporate Video Editing' },
        { icon: 'fas fa-clapperboard', title: 'Film and Trailer Video Editing' },
        { icon: 'fas fa-music', title: 'Music Video Editing Suite' },
        { icon: 'fas fa-church', title: 'Weddings and Events Videos' },
        { icon: 'fas fa-palette', title: 'Color Grading for Videos' },
        { icon: 'fas fa-chalkboard-teacher', title: 'Education and Training Videos' },
        { icon: 'fas fa-box-open', title: 'Product Demo Videos' },
        { icon: 'fas fa-microphone-alt', title: 'Podcast Videos' },
        { icon: 'fas fa-video', title: 'Short Film Videos' },
        { icon: 'fas fa-plane', title: 'Travel Video Editing' },
        { icon: 'fas fa-ad', title: 'Social Media Video Ads' },
        { icon: 'fas fa-info-circle', title: 'Story Infographic Video Editing' }
    ];

    return (
        <div className="vss-section">
            <h3 className="sdl-content-title">Our Specialized Video Services</h3>
            <div className="vss-grid">
                {services.map((service, index) => (
                    <div key={index} className="vss-card">
                        <div className="vss-icon">
                            <i className={service.icon}></i>
                        </div>
                        <h4 className="vss-title">{service.title}</h4>
                        <p className="vss-desc">
                            High-quality professional editing tailored specifically for {service.title.toLowerCase()}.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoSubServices;
