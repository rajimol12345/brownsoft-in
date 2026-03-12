import React from 'react';
import Hero from '../components/Home/Hero';
import Marquee from '../components/Home/Marquee';
import Features from '../components/Home/Features';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Growth from '../components/Home/Growth';
import Achievements from '../components/Home/Achievements';
import Projects from '../components/Home/Projects';
import ReliableTech from '../components/Home/ReliableTech';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Team from '../components/Home/Team';
import Testimonials from '../components/Home/Testimonials';
import Brands from '../components/Home/Brands';
import Blog from '../components/Home/Blog';
import FAQ from '../components/Home/FAQ';
import CTA from '../components/Home/CTA';

const Home = () => {
    return (
        <div className="home-page-wrapper">
            <Hero />         
                <About />
                <Brands />
                <Services />
                <Achievements />
                <Projects />
                <Testimonials />
                <Team />
                <FAQ />
                <Blog />
                <CTA />
        </div>
    );
};

export default Home;
