import React from 'react';
import AboutHero from '../components/AboutHero.jsx';
import ServicesList from '../components/Home/Services.jsx';

const Services = () => {
    return (
        <div className="services-page-wrapper">
            <AboutHero
                title="Our Services"
                showBreadcrumbs={true}
            />
            <ServicesList />
        </div>
    );
};

export default Services;
