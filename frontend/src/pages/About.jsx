import React from 'react';
import AboutHero from '../components/AboutHero.jsx';
import AboutSection from '../components/AboutSection.jsx';
// import CompanyHistory from '../components/CompanyHistory.jsx';
import TeamSection from '../components/TeamSection.jsx';
import Achievements from '../components/Home/Achievements.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';

const About = () => {
    return (
        <div className="about-page-wrapper">
            <AboutHero title="About Us" showBreadcrumbs={true} />
            <AboutSection />
            {/* <CompanyHistory /> */}
            <TeamSection />
            <Achievements />
            <TestimonialsSection />
        </div>
    );
};

export default About;
