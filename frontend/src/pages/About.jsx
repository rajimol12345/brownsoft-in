import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutSection from '../components/AboutSection';
import CompanyHistory from '../components/CompanyHistory';
import TeamSection from '../components/TeamSection';
import CounterSection from '../components/CounterSection';
import TestimonialsSection from '../components/TestimonialsSection';

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
