import React from 'react';
import PremiumServiceLayout from '../components/PremiumServiceLayout';
import PremiumHero from '../components/PremiumHero';
import PremiumIntro from '../components/PremiumIntro';

const AdminSupport = () => {
    const adminServices = [
        { icon: 'fas fa-user-tie', title: 'Virtual Assistant', desc: 'Professional back-office support to streamline your daily business operations.' },
        { icon: 'fas fa-database', title: 'Data Management', desc: 'Secure and organized handling of your enterprise data and documentation.' },
        { icon: 'fas fa-calendar-check', title: 'Executive Support', desc: 'High-level scheduling, travel planning, and administrative coordination.' },
        { icon: 'fas fa-file-invoice', title: 'Financial Admin', desc: 'Assistance with bookkeeping, invoicing, and budget tracking workflows.' },
        { icon: 'fas fa-headset', title: 'Customer Support', desc: 'Reliable first-line communication to maintain high client satisfaction.' },
        { icon: 'fas fa-shield-alt', title: 'Confidentiality', desc: 'Strict data protection protocols ensuring your business privacy is always guarded.' }
    ];

    const data = {
        title: 'Admin Support',
        heroSubtitle: 'Empowering Your Business With Precision Administrative Excellence',
        heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
        introTitle: 'Scaling Your Efficiency Through Executive Support',
        introSubtitle: 'Seamless Back-Office Operations',
        introDescription1: 'Efficiency is the fuel that drives business growth. While you focus on high-level strategy, your administrative foundation must remain rock-solid and responsive to every challenge.',
        introDescription2: 'Brownsoft provides world-class virtual assistant and administrative support services tailored to modern enterprises. We handle the complexities of data, scheduling, and office management so you can lead with absolute focus.',
        introImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000',
        services: adminServices,
        faqs: [
            {
                question: "How do you ensure data security?",
                answer: "We sign strict NDAs and utilize enterprise-grade encrypted communication and storage tools to protect all client information."
            },
            {
                question: "Do you offer part-time support?",
                answer: "Yes, we have flexible engagement models ranging from project-based tasks to full-time dedicated executive assistance."
            },
            {
                question: "What tools are your assistants proficient in?",
                answer: "Our team is expert in Microsoft 365, Google Workspace, Slack, Trello, and various CRM/Bookkeeping softwares."
            }
        ],
        quoteImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000"
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

export default AdminSupport;
