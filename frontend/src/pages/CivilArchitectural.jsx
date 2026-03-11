import React from 'react';
import PremiumServiceLayout from '../components/PremiumServiceLayout';
import PremiumHero from '../components/PremiumHero';
import PremiumIntro from '../components/PremiumIntro';

const CivilArchitectural = () => {
    const civilServices = [
        { icon: 'fas fa-drafting-compass', title: 'Architectural Design', desc: 'Precision blueprints and creative spatial planning for modern structural visionaries.' },
        { icon: 'fas fa-hard-hat', title: 'Civil Engineering', desc: 'Robust infrastructure development and professional construction project management.' },
        { icon: 'fas fa-building', title: 'Structural Analysis', desc: 'Advanced integrity testing and engineering calculations for sustainable buildings.' },
        { icon: 'fas fa-map-marked-alt', title: 'Urban Planning', desc: 'Strategic land development and master planning for future-proof communities.' },
        { icon: 'fas fa-road', title: 'Landscape Design', desc: 'Integrating nature with structure through professional outdoor environment planning.' },
        { icon: 'fas fa-shield-alt', title: 'Safety Compliance', desc: 'Strict adherence to international building codes and rigorous onsite safety protocols.' }
    ];

    const data = {
        title: 'Civil & Architectural',
        heroSubtitle: 'Designing & Building the Future of Sustainable Infrastructure',
        heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
        introTitle: 'Where Blueprint Accuracy Meets Visionary Architecture',
        introSubtitle: 'Building Tomorrow’s Landmarks',
        introDescription1: 'Architecture is the physical manifestation of a brand\'s legacy. It is about more than just bricks and mortar; it is about creating sustainable, efficient, and inspiring spaces that define the way we live and work.',
        introDescription2: 'Brownsoft’s civil and architectural division combines heritage-standard engineering with modern sustainable practices. We bridge the gap between visionary blueprints and structural reality, ensuring every project is an icon of excellence.',
        introImage: 'https://images.unsplash.com/photo-1503387762-592df58ef4fb?auto=format&fit=crop&q=80&w=1000',
        services: civilServices,
        faqs: [
            {
                question: "Do you handle residential and commercial?",
                answer: "Yes, our portfolio includes everything from boutique residential designs to large-scale commercial and industrial infrastructures."
            },
            {
                question: "What building codes do you follow?",
                answer: "We ensure 100% compliance with local municipal codes and international engineering standards like ISO and LEED."
            },
            {
                question: "Can you provide 3D walkthroughs?",
                answer: "Absolutely. We utilize advanced BIM and 3D modeling tools to provide immersive pre-construction visualizations."
            }
        ],
        quoteImage: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000"
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

export default CivilArchitectural;
