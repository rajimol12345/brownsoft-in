import React from 'react';
import PremiumHero from '../components/PremiumHero';
import ServicesHubList from '../components/ServicesHubList';

const Services = () => {
    return (
        <div className="services-page-wrapper">
            <PremiumHero
                title="Our Services"
                subtitle="Comprehensive digital solutions tailored to help your brand grow, from high-end design and development to 24/7 administrative support."
                heroImage="https://images.unsplash.com/photo-1522071823991-b5505710204e?auto=format&fit=crop&q=80&w=1200"
            />
            <ServicesHubList />
        </div>
    );
};

export default Services;
