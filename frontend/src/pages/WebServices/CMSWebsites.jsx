import React from 'react';
import WebDesignDetailLayout from '../../components/WebDesignDetailLayout';

const CMSWebsites = () => {
    const data = {
        title: 'CMS Websites',
        breadcrumbLabel: 'CMS Websites',
        mainImg: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200',
        description1: "Take full control of your content without writing a single line of code. We build powerful Content Management Systems that empower your marketing team to launch pages in minutes.",
        description2: "Whether you need WordPress, Strapi, Contentful, or a custom CMS, we ensure your dashboard is intuitive, fast, and optimized for your specific content structure.",
        subtitle: "Empower Your Marketing Workflow",
        features1: [
            "Intuitive Drag-and-Drop",
            "Custom Post Types",
            "Rich Text Editing Suite",
            "Varian-Targeted Content"
        ],
        features2: [
            "SEO-Perfect Meta Handling",
            "Multi-User Roles & Permissions",
            "Headless & API-First Options",
            "Automated Backups & Versioning"
        ],
        advantageImg: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d1?auto=format&fit=crop&q=80&w=1200',
        advantageText: "A great CMS turns your website into a living, breathing asset that your whole team can use.",
        advantagePoints: [
            "Zero Coding Required",
            "Streamlined Page Creation",
            "Future-Ready Scalability",
            "Integrated Analytics Support"
        ],
        activeService: "CMS Websites",
        faqs: [
            {
                question: "Can I manage my blog and landing pages from the same CMS?",
                answer: "Yes. We create integrated dashboards that manage everything from your latest blog posts to your most complex functional pages."
            }
        ]
    };

    return <WebDesignDetailLayout {...data} />;
};

export default CMSWebsites;
