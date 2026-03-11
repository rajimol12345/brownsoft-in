import React from 'react';
import CareerHero from '../components/CareerHero';
import CareerOpenings from '../components/CareerOpenings';
import CareerCTA from '../components/CareerCTA';
import CareerBenefits from '../components/CareerBenefits';
import CareerNewsletter from '../components/CareerNewsletter';

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
