import React from 'react';
import PremiumServiceLayout from '../components/PremiumServiceLayout.jsx';
import PremiumHero from '../components/PremiumHero.jsx';
import PremiumIntro from '../components/PremiumIntro.jsx';

const SEOMarketing = () => {
    const seoServices = [
        { icon: 'fas fa-search-plus', title: 'Advanced SEO', desc: 'Data-driven optimization strategies to dominate search engine results pages.' },
        { icon: 'fas fa-bullhorn', title: 'Content Marketing', desc: 'Compelling narratives that attract, engage, and convert your target audience.' },
        { icon: 'fab fa-google', title: 'PPC Management', desc: 'Precision-targeted ad campaigns with maximized ROI across Google and Bing.' },
        { icon: 'fas fa-chart-line', title: 'Analytics & Reporting', desc: 'Deep-dive insights and transparent tracking of your digital growth metrics.' },
        { icon: 'fas fa-users-cog', title: 'Social Ads', desc: 'High-performance advertising across Meta, LinkedIn, and TikTok platforms.' },
        { icon: 'fas fa-envelope-open-text', title: 'Email Strategies', desc: 'Automated nurture sequences that build long-term customer loyalty.' }
    ];

    const data = {
        title: 'SEO & Marketing',
        heroSubtitle: 'Data-Backed Strategies for Unrivaled Digital Visibility',
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        introTitle: 'Where Strategic Intelligence Meets Growth Marketing',
        introSubtitle: 'Digital Dominance Through Data',
        introDescription1: 'Visibility is the hallmark of digital success. In a world where millions of searches happen every second, standing out requires more than just luck; it requires a sophisticated, data-driven approach to marketing.',
        introDescription2: 'Brownsoft delivers comprehensive SEO and marketing solutions that focus on one thing: ROI. We don\'t just drive traffic; we attract the right audience and convert them into loyal customers using advanced algorithms and creative storytelling.',
        introImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
        services: seoServices,
        faqs: [
            {
                question: "How long until I see SEO results?",
                answer: "SEO is a long-term investment. While some technical improvements show immediate impact, significant ranking growth typically occurs within 3 to 6 months."
            },
            {
                question: "Do you provide monthly reports?",
                answer: "Absolutely. Transparency is key. You will receive detailed monthly performance reports detailing traffic, keyword rankings, and conversion metrics."
            },
            {
                question: "Can you manage our social media ads?",
                answer: "Yes, we specialize in full-funnel social media advertising, from creative asset production to audience retargeting and budget optimization."
            }
        ],
        quoteImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
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

export default SEOMarketing;
