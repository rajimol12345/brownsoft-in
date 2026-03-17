import React, { useEffect } from 'react';
import AboutHero from '../AboutHero';
import AboutSection from '../AboutSection';
import CompanyHistory from '../CompanyHistory';
import TeamSection from '../TeamSection';
import CounterSection from '../Achievements';
import TestimonialsSection from '../TestimonialsSection';

const About = () => {
    useEffect(() => {
        document.title = "About Us | BrownSofts IT Services";
    }, []);

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