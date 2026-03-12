import React from 'react';
import ServiceLandingLayout from '../components/ServiceLandingLayout.jsx';
import SubServicesGrid from '../components/SubServicesGrid.jsx';

const GraphicsDesign = () => {
    const graphicsServices = [
        { icon: 'fas fa-pen-nib', title: 'Logo Design', desc: 'Unique and memorable brand identities that stand out.' },
        { icon: 'fas fa-object-group', title: 'Brand Identity', desc: 'Unified visual languages across all your touchpoints.' },
        { icon: 'fas fa-palette', title: 'Visual Design', desc: 'Beautiful UI/UX and digital art for modern platforms.' },
        { icon: 'fas fa-print', title: 'Print Design', desc: 'Professional business cards, flyers, and marketing materials.' },
        { icon: 'fas fa-mobile-alt', title: 'Social Graphics', desc: 'Engaging content optimized for every social media feed.' },
        { icon: 'fas fa-box-open', title: 'Package Design', desc: 'Creative and practical packaging that sells your products.' }
    ];

    const data = {
        title: 'Graphics Design',
        heroSubtitle: 'Transforming Ideas Into Stunning Visual Realities',
        heroImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200',
        introTitle: 'Where Innovation Accents Visual Excellence',
        introSubtitle: 'Crafting Premium Brand Identities',
        introDescription1: 'In a world driven by visuals, your brand identity is more than just a logo—it is the first impression you make. High-quality graphic design bridge the gap between your brand and your audience, creating an emotional connection that lasts.',
        introDescription2: 'Brownsoft specializes in premium graphic solutions, from award-winning logo designs to complex brand guidelines. We combine creative artistry with strategic thinking to ensure your brand stands out in the most crowded digital landscape.',
        introImage: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=1000',
        services: graphicsServices,
        faqs: [
            {
                question: "How long does a logo design process take?",
                answer: "Typically, a complete logo and brand identity package takes between 7 to 14 days, depending on the complexity and revision cycles."
            },
            {
                question: "Do you provide source files?",
                answer: "Yes, all our design projects include high-resolution source files (AI, PSD, SVG) along with format-ready versions for web and print."
            },
            {
                question: "Can you redesign our existing brand?",
                answer: "Absolutely. We specialize in brand evolution, helping existing companies modernize their look while preserving their core values."
            }
        ],
        quoteImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000"
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

export default GraphicsDesign;
