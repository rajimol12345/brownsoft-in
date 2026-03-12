import React from 'react';
import AboutHero from '../components/AboutHero.jsx';
import AboutSection from '../components/AboutSection.jsx';
import CompanyHistory from '../components/CompanyHistory.jsx';
import TeamSection from '../components/TeamSection.jsx';
import CounterSection from '../components/CounterSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';

const About = () => {
    return (
        <div className="about-page-wrapper">
            <AboutHero title="About Us" showBreadcrumbs={true} />
            <AboutSection />
            <CompanyHistory />
            <TeamSection />
            <CounterSection />
            <TestimonialsSection />
        </div>
    );
};

export default About;
