import React from 'react';
import GraphicServiceLayout from '../../GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const GraphicsDesign = () => {
    const data = {
        title: "Professional Graphic Design Services",
        breadcrumbLabel: "Graphic Design",
        mainImg: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Visual Excellence for Your Brand",
        description1: "We provide a comprehensive range of graphic design services to help your brand stand out in a crowded market. From stunning logos to professional brochures and high-impact marketing materials, our team of experts is dedicated to delivering visual excellence.",
        description2: "Our approach combines artistic creativity with strategic thinking. We don't just create beautiful designs; we create visual solutions that communicate your brand values and resonate with your target audience.",
        featureList1: [
            "UI/UX Design for Web & Mobile",
            "Professional Logo Creation",
            "Advanced Photo Editing",
            "Print & Digital Marketing Assets"
        ],
        featureList2: [
            "Consistent Brand Identity",
            "High-Resolution Print Files",
            "Modern & Trendy Aesthetics",
            "Fast & Reliable Delivery"
        ],
        stepsTitle: "Our Design Process",
        steps: [
            { title: 'Goal Analysis', desc: 'We understand your objectives and brand.', icon: <FiLayers /> },
            { title: 'Creative Execution', desc: 'We bring concepts to life.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality, ready-to-use files.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Great design is the silent ambassador of your brand.",
        advantageFeatureList: [
            "User-Centric Approach",
            "Infinite Scalability",
            "Cross-Platform Consistency"
        ],
        faqs: [
            {
                question: "What industries do you work with?",
                answer: "We work with clients across all industries, including e-commerce, real estate, hospitality, tech, and more."
            },
            {
                question: "Do you offer revisions?",
                answer: "Yes, we provide multiple rounds of revisions to ensure you are 100% satisfied with the final result."
            }
        ],
        activePath: "/services/graphics-design"
    };

    return <GraphicServiceLayout {...data} />;
};

export default GraphicsDesign;
