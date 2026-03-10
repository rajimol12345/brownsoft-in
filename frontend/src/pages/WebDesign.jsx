import React from 'react';
import PremiumServiceLayout from '../components/PremiumServiceLayout';
import PremiumHero from '../components/PremiumHero';
import PremiumIntro from '../components/PremiumIntro';

const WebDesign = () => {
    const webServices = [
        { icon: 'fas fa-award', title: 'Award-Winning Design', desc: 'Creative UI/UX architectures that prioritize user experience and aesthetic excellence.' },
        { icon: 'fas fa-laptop-code', title: 'Full-Stack Development', desc: 'Scalable, performant, and secure web applications built with modern frameworks.' },
        { icon: 'fas fa-shopping-cart', title: 'E-commerce Solutions', desc: 'Robust online stores optimized for customer journey and conversion rate optimization.' },
        { icon: 'fas fa-mobile-alt', title: 'Mobile First Philosophy', desc: 'Responsive designs that look and feel perfect across every device and screen size.' },
        { icon: 'fas fa-search-dollar', title: 'SEO Optimized Sites', desc: 'Websites engineered for maximum visibility and high-speed search engine performance.' },
        { icon: 'fas fa-headset', title: 'Maintenance & Support', desc: '24/7 technical monitoring to ensure your digital storefront never skips a beat.' }
    ];

    const data = {
        title: 'Web Design',
        heroSubtitle: 'Engineering Digital Experiences That Redefine Your Brand',
        heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200',
        introTitle: 'Where High-End Code Meets Innovative Design',
        introSubtitle: 'Precision Engineered Websites',
        introDescription1: 'Your website is the digital headquarters of your business ventures. It is not just about having an online presence; it is about creating a high-performance ecosystem that builds trust and drives growth.',
        introDescription2: 'At Brownsoft, we fuse world-class design with cutting-edge technology to build websites that are as functional as they are beautiful. From rapid-loading landing pages to enterprise-level platforms, we deliver the digital foundation your brand deserves.',
        introImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        services: webServices,
        faqs: [
            {
                question: "How long does it take to build a website?",
                answer: "A custom professional website typically takes between 4 to 8 weeks from initial design to final deployment, depending on functionality requirements."
            },
            {
                question: "Do you specialize in specific frameworks?",
                answer: "We are experts in modern stacks including React, Next.js, and Node.js, ensuring your site is future-proof and hyper-fast."
            },
            {
                question: "Is SEO included in the development?",
                answer: "Yes, every site we build follows strict SEO best practices, including semantic HTML, optimized assets, and technical SEO foundations."
            }
        ],
        quoteImage: "https://images.unsplash.com/photo-1522071823991-b5505710204e?auto=format&fit=crop&q=80&w=1000"
    };

    return (
        <PremiumServiceLayout
            {...data}
            customHero={<PremiumHero title={data.title} subtitle={data.heroSubtitle} heroImage={data.heroImage} />}
            customIntro={<PremiumIntro
                title={data.introTitle}
                subtitle={data.introSubtitle}
                description1={data.introDescription1}
                description2={data.introDescription2}
                image={data.introImage}
            />}
        />
    );
};

export default WebDesign;
