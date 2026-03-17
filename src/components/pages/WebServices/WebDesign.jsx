import React from 'react';
import WebDesignDetailLayout from '../../WebDesignDetailLayout';

const WebDesign = () => {
    const data = {
        title: 'Web Design and Development',
        breadcrumbLabel: 'Web Design',
        mainImg: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
        description1: "We create high-performing, visually stunning websites that are optimized for growth. Our web design services combine creativity with technical excellence to deliver seamless user experiences across all devices.",
        description2: "Whether you need a simple landing page or a complex e-commerce platform, our team of expert developers and designers will work with you to bring your vision to life.",
        subtitle: "Innovative Web Solutions",
        featureList1: [
            "User-Centric Design",
            "Responsive Frameworks",
            "SEO-Friendly Code",
            "Fast Loading Times"
        ],
        featureList2: [
            "Custom Functionalities",
            "Secure Architecture",
            "Interactive Elements",
            "CMS Integration"
        ],
        advantageImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        advantageText: "Our web design approach is data-driven and results-oriented, ensuring your website not only looks great but also converts visitors into customers.",
        advantagePoints: [
            "Modern Aesthetic",
            "Intuitive Navigation",
            "Conversion Optimization",
            "Robust Backends"
        ],
        activeService: "Web Design and Development",
        faqs: [
            {
                question: "Do you offer mobile-friendly designs?",
                answer: "Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop devices."
            },
            {
                question: "Can you redesign an existing website?",
                answer: "Absolutely! We can take your current site and give it a modern, high-performing makeover while preserving your brand identity."
            }
        ]
    };

    return <WebDesignDetailLayout {...data} />;
};

export default WebDesign;
