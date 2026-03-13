import React, { useEffect } from 'react';
import Hero from '../components/Home/Hero.jsx';
import About from '../components/Home/About.jsx';
import Brands from '../components/Home/Brands.jsx';
import Services from '../components/Home/Services.jsx';
import Achievements from '../components/Home/Achievements.jsx';
import Projects from '../components/Home/Projects.jsx';
import Testimonials from '../components/Home/Testimonials.jsx';
import Team from '../components/Home/Team.jsx';
import FAQ from '../components/Home/FAQ.jsx';
import Blog from '../components/Home/Blog.jsx';
import CTA from '../components/Home/CTA.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    }, []);

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