import React from 'react';
import WebDesignDetailLayout from '../../components/WebDesignDetailLayout';

const LandingPages = () => {
    const data = {
        title: 'Landing & Promo Pages',
        breadcrumbLabel: 'Landing Pages',
        mainImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        description1: "Turn clicks into customers with high-conversion landing pages. We design specifically for one goal: action. Whether it's a product launch, a newsletter signup, or a direct sale, our pages perform.",
        description2: "We utilize psychological triggers, heat-map data, and aggressive A/B testing to ensure your traffic is maximized and your cost-per-acquisition is minimized.",
        subtitle: "The Science of High Conversion",
        features1: [
            "A/B Testing Frameworks",
            "Heatmap Analysis Ready",
            "Compelling CTA Design",
            "Psychological UX Optimization"
        ],
        features2: [
            "Ultra-Fast Load Speeds",
            "Mobile-Scroll Optimization",
            "Social Proof Integration",
            "CRM & Autoresponder Sync"
        ],
        advantageImg: 'https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=1200',
        advantageText: "Every element on our landing pages is there for one reason: to increase your conversion rate.",
        advantagePoints: [
            "Measurable ROI Focus",
            "Lightning Fast Performance",
            "Optimized for PPC Traffic",
            "Sleek & Trust-Building Design"
        ],
        activeService: "Landing & Promo Pages",
        faqs: [
            {
                question: "How do you track conversion success?",
                answer: "We integrate advanced tracking scripts, Google Analytics 4, and heatmap tools like Hotjar to provide daily insights into how your users interact with the page."
            }
        ]
    };

    return <WebDesignDetailLayout {...data} />;
};

export default LandingPages;
