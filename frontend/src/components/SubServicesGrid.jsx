import React from 'react';
import './SubServicesGrid.css';

const SubServicesGrid = ({ services, title, subtitle }) => {
    return (
        <div className="ssg-section">
            <div className="ssg-header centered mb-10">
                {title && <h2 className="ssg-section-title">{title}</h2>}
                {subtitle && <p className="ssg-section-subtitle">{subtitle}</p>}
            </div>
            <div className="ssg-grid">
                {services.map((service, index) => (
                    <div key={index} className="ssg-card">
                        <div className="ssg-icon">
                            <i className={service.icon || 'fas fa-check'}></i>
                        </div>
                        <h3 className="ssg-title">{service.title}</h3>
                        {service.desc && <p className="ssg-desc">{service.desc}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubServicesGrid;
