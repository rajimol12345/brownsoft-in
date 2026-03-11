import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesHubList.css';

const ServicesHubList = () => {
    const categories = [
        {
            title: 'Video & Animation',
            desc: 'Professional video editing, animation, and content production services for brands, creators, and businesses.',
            icon: 'fas fa-video',
            path: '/services/video-animation',
            color: '#124ebb'
        },
        {
            title: 'Web Design',
            desc: 'Creative and responsive web design solutions to build a stunning online presence for your brand.',
            icon: 'fas fa-laptop-code',
            path: '/services/web-design',
            color: '#124ebb'
        },
        {
            title: 'Graphics & Design',
            desc: 'Bespoke brand identities, marketing materials, and digital UI/UX experiences crafted to perfection.',
            icon: 'fas fa-palette',
            path: '/services/graphics-design',
            color: '#124ebb'
        },
        {
            title: 'SEO & Marketing',
            desc: 'Data-driven marketing strategies, SEO audits, and paid advertising to multiply your revenue.',
            icon: 'fas fa-chart-line',
            path: '/services/seo-marketing',
            color: '#124ebb'
        },
        {
            title: 'Admin Support',
            desc: 'Reliable virtual assistants, customer support, and administrative solutions to streamline operations.',
            icon: 'fas fa-headset',
            path: '/services/admin-support',
            color: '#124ebb'
        },
        {
            title: 'Civil and Architectural',
            desc: 'Comprehensive civil engineering, structural design, and urban planning services.',
            icon: 'fas fa-city',
            path: '/services/civil-architectural',
            color: '#124ebb'
        }
    ];

    return (
        <section className="services-hub section-padding">
            <div className="container">
                <div className="shub-header">
                    <h6 className="shub-section-subtitle">Our Expertise</h6>
                    <h2 className="shub-section-title">Comprehensive Solutions Tailored For You</h2>
                </div>

                <div className="shub-grid">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="shub-card">
                            <div className="shub-icon-wrap" style={{ backgroundColor: `${cat.color}15`, color: cat.color }}>
                                <i className={cat.icon}></i>
                            </div>
                            <h3 className="shub-card-title">{cat.title}</h3>
                            <p className="shub-card-desc">{cat.desc}</p>
                            <Link to={cat.path} className="shub-card-link" style={{ color: cat.color }}>
                                Explore Service <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesHubList;
