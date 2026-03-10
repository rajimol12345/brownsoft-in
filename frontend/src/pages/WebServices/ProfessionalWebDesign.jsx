import React from 'react';
import WebDesignDetailLayout from '../../components/WebDesignDetailLayout';

const ProfessionalWebDesign = () => {
    const data = {
        title: 'Professional Web Design Company',
        breadcrumbLabel: 'Professional Web Design',
        mainImg: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200',
        description1: "In today's competitive landscape, a professional digital presence is not just an advantage—it's a requirement. We specialize in building enterprise-grade websites that project authority, build trust, and deliver measurable results.",
        description2: "Our award-winning team combines artistic vision with high-performance engineering to create digital experiences that set industry standards. From strategy to deployment, we ensure your brand stands out with excellence.",
        subtitle: "Bespoke Excellence for Elite Brands",
        features1: [
            "Bespoke Brand Identities",
            "Advanced UI/UX Research",
            "Enterprise-Grade Scalability",
            "Technical SEO Integration"
        ],
        features2: [
            "Mobile-First Architecture",
            "Rapid Performance Optimization",
            "Cloud-Native Security",
            "Custom API Integrations"
        ],
        advantageImg: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
        advantageText: "We combine years of industry experience with a passion for innovation to create websites that truly stand out and convert.",
        advantagePoints: [
            "Strategic Brand Integration",
            "Data-Backed Design Decisions",
            "Cross-Industry Expertise",
            "Scalable Digital Foundations"
        ],
        activeService: "Professional Web Design Company",
        faqs: [
            {
                question: "How do you ensure the design aligns with my brand?",
                answer: "We begin with a comprehensive discovery phase, researching your industry, competitors, and target audience. Our mood-boarding and conceptualization stages ensure every visual element resonates with your brand's core values."
            },
            {
                question: "What is your typical project timeline?",
                answer: "For professional enterprise sites, we typically deliver within 6-12 weeks, depending on the complexity and custom requirements of the architecture."
            }
        ]
    };

    return <WebDesignDetailLayout {...data} />;
};

export default ProfessionalWebDesign;
