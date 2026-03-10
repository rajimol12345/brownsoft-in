import React from 'react';
import WebDesignDetailLayout from '../../components/WebDesignDetailLayout';

const WebsiteRedesign = () => {
    const data = {
        title: 'Website Redesign',
        breadcrumbLabel: 'Redesign',
        mainImg: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200',
        description1: "Is your website feeling like a relic of the past? We breathe new life into outdated digital assets. A redesign is more than a coat of paint; it's a strategic evolution of your business.",
        description2: "We focus on improving speed, user journey, and conversion paths while ensuring your existing SEO value is preserved and enhanced in the new architecture.",
        subtitle: "Modernize, Optimize, Monetize",
        features1: [
            "UX/UI Modernization",
            "Legacy Content Migration",
            "SEO Equity Preservation",
            "Core Web Vitals Boost"
        ],
        features2: [
            "Responsive Architecture",
            "Modern Framework Upgrade",
            "Brand Refresh Integration",
            "Security Patching & Updates"
        ],
        advantageImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        advantageText: "Redesigning is the fastest way to increase your revenue without increasing your traffic.",
        advantagePoints: [
            "Revitalized Brand Image",
            "Higher Engagement Rates",
            "Simplified Maintenance",
            "Significant Speed Gains"
        ],
        activeService: "Website Redesign",
        faqs: [
            {
                question: "Will I lose my Google rankings during a redesign?",
                answer: "No. We implement rigorous 301 redirect strategies and structural mapping to ensure your search rankings are preserved and often improved."
            }
        ]
    };

    return <WebDesignDetailLayout {...data} />;
};

export default WebsiteRedesign;
