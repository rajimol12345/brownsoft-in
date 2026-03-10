import React from 'react';
import WebDesignDetailLayout from '../components/WebDesignDetailLayout';

const WebDesign = () => {
    const data = {
        title: 'Web Design & Development',
        breadcrumbLabel: 'Web Design & Development',
        mainImg: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200',
        description1: "In the modern digital landscape, your website serves as the definitive anchor for your brand's global presence. We deliver sophisticated web architectures that harmonize elite aesthetic design with high-performance engineering.",
        description2: "Our mission is to transform your digital platform into a high-conversion engine that projects authority, builds uncompromising trust, and facilitates seamless scalability. Our approach integrates strategic UX research with cutting-edge technical execution.",
        subtitle: "Enterprise Web Solutions",
        features1: [
            "Advanced UI/UX Strategic Design",
            "Full-Stack Enterprise Development",
            "Performance-Optimized Ecosystems",
            "Technical SEO & Core Web Vitals"
        ],
        features2: [
            "Secure Cloud-Native Architecture",
            "Headless CMS & Content Strategy",
            "Conversion-Centric User Journeys",
            "Proactive Maintenance & Monitoring"
        ],
        advantageImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        advantageText: "We utilize state-of-the-art web technologies to ensure your digital infrastructure remains performant, resilient, and forward-compatible.",
        advantagePoints: [
            "Modern JavaScript Ecosystems",
            "Sub-Second Rendering Speeds",
            "Advanced Cybersecurity Protocols",
            "Human-Centric Interaction Design"
        ],
        faqs: [
            {
                question: "How long does it take to build a website?",
                answer: "A standard professional website typically takes 4 to 8 weeks from initial discovery to final launch, depending on the complexity and features required."
            },
            {
                question: "Will my website work on mobile devices?",
                answer: "Absolutely. Every website we build is fully responsive, meaning it will look and function perfectly on smartphones, tablets, and desktops."
            },
            {
                question: "Do you provide hosting and domain services?",
                answer: "Yes, we can assist with domain registration and provide high-speed, secure hosting solutions tailored to your website's needs."
            }
        ]
    };

    return <WebDesignDetailLayout {...data} />;
};

export default WebDesign;
