import React from 'react';
import WebDesignDetailLayout from '../../components/WebDesignDetailLayout';

const CorporateWebsites = () => {
    const data = {
        title: 'Corporate Websites',
        breadcrumbLabel: 'Corporate Design',
        mainImg: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
        description1: "Project authority and reliability with a world-class corporate website. We help large-scale organizations present a professional global image through high-performance digital platforms.",
        description2: "Our corporate designs focus on investor relations, recruitment, and multi-departmental content management, ensuring all stakeholders find exactly what they need in a secure environment.",
        subtitle: "Global Authority & Digital Trust",
        features1: [
            "Multi-Language Support",
            "IR & Media Center Integration",
            "Enterprise Security Compliance",
            "Granular Access Controls"
        ],
        features2: [
            "Global CDN Integration",
            "Stakeholder-Centric UX",
            "Accessibility (WCAG) Compliance",
            "Intranet & Portal Options"
        ],
        advantageImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
        advantageText: "A corporate website is the digital face of your enterprise's integrity and scale.",
        advantagePoints: [
            "Uncompromising Reliability",
            "Seamless Brand Consistency",
            "Optimized Content Workflows",
            "Advanced Security Protocols"
        ],
        activeService: "Corporate Websites",
        faqs: [
            {
                question: "Do you handle content migration for large sites?",
                answer: "Yes, we specialize in migrating thousands of pages from legacy systems while maintaining SEO equity and structural integrity."
            }
        ]
    };

    return <WebDesignDetailLayout {...data} />;
};

export default CorporateWebsites;
