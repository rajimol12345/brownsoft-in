import React from 'react';
import './CareerBenefits.css';

const CareerBenefits = () => {
    const benefits = [
        {
            title: 'Innovative Work Environment',
            desc: 'Tellus commodo volutpat consectetur class facilisi lobortis et diam sollicitudin'
        },
        {
            title: 'Global Career Opportunities',
            desc: 'Tellus commodo volutpat consectetur class facilisi lobortis et diam sollicitudin'
        },
        {
            title: 'Experienced Professional Team',
            desc: 'Tellus commodo volutpat consectetur class facilisi lobortis et diam sollicitudin'
        }
    ];

    return (
        <section className="career-benefits section-padding">
            <div className="container benefits-container">
                <div className="benefits-left">
                    <span className="sub-label">WHY JOIN US</span>
                    <h2 className="section-title">Knowledge is the key to making the right future decisions.</h2>
                    
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-item">
                                <h3 className="benefit-title">{benefit.title}</h3>
                                <p className="benefit-desc">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="benefits-right">
                    {/* Illustration Placeholder - Using CSS for a stylized shape */}
                    <div className="illustration-box">
                        <div className="mock-illustration">
                            <div className="mock-circle-large"></div>
                            <div className="mock-rect-1"></div>
                            <div className="mock-rect-2"></div>
                            <div className="mock-rect-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerBenefits;
