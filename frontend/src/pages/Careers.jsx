import React from 'react';
import CareerHero from '../components/CareerHero.jsx';
import CareerOpenings from '../components/CareerOpenings.jsx';
import CareerCTA from '../components/CareerCTA.jsx';
import CareerBenefits from '../components/CareerBenefits.jsx';
import CareerNewsletter from '../components/CareerNewsletter.jsx';

const Careers = () => {
    return (
        <div className="careers-page-wrapper">
            <CareerHero />
            <CareerOpenings />
            <CareerCTA />
            <CareerBenefits />
            <CareerNewsletter />
        </div>
    );
};

export default Careers;
