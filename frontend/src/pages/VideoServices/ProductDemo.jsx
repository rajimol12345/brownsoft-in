import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const ProductDemo = () => {
    const data = {
        title: "Product Demo Videos",
        breadcrumbLabel: "Product Demos",
        mainImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Product Showcase & Demonstrations",
        description1: "Seeing is believing. We create product demo videos that highlight features, demonstrate value, and drive sales. Our editing focuses on detail, clarity, and persuasive visual storytelling.",
        description2: "From software walkthroughs to physical product reveals, we know how to showcase what makes your offering unique. We use professional lighting and grading to make your product look its absolute best.",
        featureList1: [
            "Macro-detail and close-up focus",
            "Clear feature-to-benefit visual flow",
            "Sleek and modern graphical callouts"
        ],
        featureList2: [
            "Advanced screen capture editing",
            "3D model and render integration",
            "Fast-paced social media cuts"
        ],
        stepsTitle: "3 Steps to Your Product Reveal",
        steps: [
            { title: 'Discovery & Feature', desc: 'We identify the key features and USP of your product.', icon: <FiLayers /> },
            { title: 'Production & Edit', desc: 'Our editors build a persuasive, high-impact showcase.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters ready for your store or web.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Convert prospects into customers with product videos that demonstrate your value clearly.",
        advantageFeatureList: [
            "Advanced screen capture editing",
            "3D model and render integration",
            "Fast-paced social media cuts"
        ],
        faqs: [
            {
                question: "Do you handle specialized '3D' product animation?",
                answer: "Yes, we can integrate 3D renders into your live-action footage or create full 3D product animations to showcase internal components."
            },
            {
                question: "Can you edit 'explainer' style product videos?",
                answer: "Absolutely. We specialize in creating high-clarity explainer videos that break down complex product usage into simple steps."
            }
        ],
        activePath: "/services/video-animation/product-demo"
    };

    return <VideoServiceLayout {...data} />;
};

export default ProductDemo;
