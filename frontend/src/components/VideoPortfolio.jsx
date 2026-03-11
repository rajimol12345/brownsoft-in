import React from 'react';
import './VideoPortfolio.css';

const VideoPortfolio = () => {
    const works = [
        {
            title: 'Dynamic Brand Ident',
            category: 'Motion Graphics',
            color: '#2b95ff'
        },
        {
            title: 'Cinematic Docu-series',
            category: 'Color Grading',
            color: '#ff9d44'
        },
        {
            title: 'Commercial Product Ad',
            category: '3D Animation',
            color: '#10b981'
        }
    ];

    return (
        <section className="video-portfolio-section">
            <div className="container">
                <div className="portfolio-header">
                    <h2 className="portfolio-title">Few Of Our <span>Works</span></h2>
                </div>

                <div className="portfolio-grid">
                    {works.map((work, index) => (
                        <div key={index} className="portfolio-card">
                            <div className="portfolio-thumb">
                                <div className="thumb-placeholder" style={{ backgroundColor: `${work.color}15` }}>
                                    <i className="fas fa-play"></i>
                                </div>
                                <div className="portfolio-overlay">
                                    <button className="view-project-btn">View Project</button>
                                </div>
                            </div>
                            <div className="portfolio-info">
                                <h3>{work.title}</h3>
                                <p>{work.category}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="portfolio-footer">
                    <button className="btn-view-all">View All Works</button>
                </div>
            </div>
        </section>
    );
};

export default VideoPortfolio;
