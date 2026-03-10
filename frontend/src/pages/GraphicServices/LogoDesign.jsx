import React from 'react';
import GraphicServiceLayout from '../../components/GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const LogoDesign = () => {
    const data = {
        title: "Design Your Dream Logo",
        breadcrumbLabel: "Logo Design",
        mainImg: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200",
        subtitle: "The Foundation of Your Visual Identity",
        description1: "A logo is more than just a symbol; it's the heart of your brand. We design memorable, timeless, and versatile logos that capture your business's essence and build an immediate connection with your audience.",
        description2: "Our design process is deeply collaborative and strategic. We explore multiple concepts, from minimalist marks to complex illustrative logos, ensuring the final result is unique and functional across all media.",
        featureList1: [
            "Custom minimalist and modern logos",
            "Hand-drawn illustrative marks",
            "Bespoke typography and wordmarks"
        ],
        featureList2: [
            "Infinite vector scalability",
            "Full brand color palette",
            "Comprehensive brand guidelines"
        ],
        stepsTitle: "3 Steps to Your Iconic Logo",
        steps: [
            { title: 'Brand Discovery', desc: 'We define your brand values and vibe.', icon: <FiLayers /> },
            { title: 'Iterative Design', desc: 'We build and refine unique concepts.', icon: <FiPenTool /> },
            { title: 'Final Identity', desc: 'Deliver full vector and raster kit.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=600",
        advantageContent: "A professional logo is the single most important investment in your brand's future.",
        advantageFeatureList: [
            "Works in black and white",
            "High-resolution vector files",
            "Full copyright ownership"
        ],
        faqs: [
            {
                question: "How many concepts will I receive?",
                answer: "Depending on the package, we typically present 3 to 5 unique initial concepts to choose from."
            },
            {
                question: "What files will I get at the end?",
                answer: "You'll receive full vector files (AI, EPS, SVG) for printing and high-res PNG/JPG for web use."
            }
        ],
        activePath: "/services/graphics-design/logo-design"
    };

    return <GraphicServiceLayout {...data} />;
};

export default LogoDesign;
