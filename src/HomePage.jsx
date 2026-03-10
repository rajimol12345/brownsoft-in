import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Brands from './components/Brands';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import CTA from './components/CTA'


const HomePage = () => {
    return (
        <>
    
            <main>
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
              
                
            </main>
            
        </>
    );
};

export default HomePage;
