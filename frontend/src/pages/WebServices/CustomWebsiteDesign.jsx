import React from 'react';
import WebDesignDetailLayout from '../../components/WebDesignDetailLayout';

const CustomWebsiteDesign = () => {
    const data = {
        title: 'Custom Website Design',
        breadcrumbLabel: 'Custom Design',
        mainImg: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
        description1: "Generic templates are for generic businesses. We specialize in custom-built websites tailored specifically to your unique goals, workflows, and brand identity. No compromises, just pure strategic design.",
        description2: "Our custom solutions are built from the ground up, ensuring that every feature, layout, and interaction is optimized for your specific target audience and conversion goals.",
        subtitle: "Tailor-Made Digital Architectures",
        features1: [
            "Unique Visual Concepts",
            "Custom Workflow Automation",
            "Proprietary Component Library",
            "Modular Architecture"
        ],
        features2: [
            "Personalized User Journeys",
            "Custom CMS Integrations",
            "Dynamic Content Architectures",
            "High-Stakes Web Security"
        ],
        advantageImg: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
        advantageText: "Custom design means your website grows with you, not against you.",
        advantagePoints: [
            "No Template Restrictions",
            "Optimized for Conversions",
            "Superior Loading Speeds",
            "Future-Proof Codebase"
        ],
        activeService: "Custom Website Design",
        faqs: [
            {
                question: "Is custom design more expensive than a template?",
                answer: "Custom design requires more upfront investment but yields significantly higher ROI through better performance, unique branding, and perfect alignment with your business processes."
            }
        ]
    };

    return <WebDesignDetailLayout {...data} />;
};

export default CustomWebsiteDesign;
