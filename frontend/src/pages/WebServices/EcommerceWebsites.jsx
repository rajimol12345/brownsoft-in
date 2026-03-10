import React from 'react';
import WebDesignDetailLayout from '../../components/WebDesignDetailLayout';

const EcommerceWebsites = () => {
    const data = {
        title: 'E-commerce Websites',
        breadcrumbLabel: 'E-commerce',
        mainImg: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200',
        description1: "Sell anything, anywhere, anytime. We build robust, secure, and user-friendly online stores that make shopping a breeze and management even easier.",
        description2: "From inventory sync to secure payment gateways, we handle the tech so you can focus on your products. Our stores are optimized for mobile-first shoppers and high-conversion checkouts.",
        subtitle: "High-Performance Digital Commerce",
        features1: [
            "Secure Payment Gateways",
            "Inventory Management Sync",
            "Customer Review Systems",
            "Advanced Product Search"
        ],
        features2: [
            "One-Page Checkout UX",
            "Abandoned Cart Recovery",
            "Mobile-Wallet Ready",
            "Dynamic Pricing Engines"
        ],
        advantageImg: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200',
        advantageText: "An e-commerce site isn't just a shop; it's a sophisticated logistics and conversion engine.",
        advantagePoints: [
            "Rock-Solid Security",
            "Lightning Fast Loading",
            "Conversion-Focused UX",
            "Scalable Multi-Channel Sales"
        ],
        activeService: "E-commerce Websites",
        faqs: [
            {
                question: "Which e-commerce platforms do you support?",
                answer: "We specialize in Shopify, WooCommerce, and custom-built headless commerce solutions depending on your scale and requirements."
            }
        ]
    };

    return <WebDesignDetailLayout {...data} />;
};

export default EcommerceWebsites;
