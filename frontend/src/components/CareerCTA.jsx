import React from 'react';
import './CareerCTA.css';

const CareerCTA = () => {
    return (
        <section className="career-cta">
            <div className="cta-overlay"></div>
            <div className="container cta-container">
                <div className="cta-content text-center">
                    <h2 className="cta-title">Your Next Big Opportunity Starts Here</h2>
                    <p className="cta-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <button className="btn-discover">Discover more</button>
                </div>
            </div>
        </section>
    );
};

export default CareerCTA;
