import React from 'react';
import GraphicServiceLayout from '../../GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const LogoDesign = () => {
    const data = {
        title: "Design Your Dream Logo",
        breadcrumbLabel: "Logo Design",
        mainImg: "https://images.unsplash.com/photo-1541462608141-ad4d05342992?auto=format&fit=crop&q=80&w=1200",
        subtitle: "The Face of Your Brand",
        description1: "A logo is more than just an image; it's the foundation of your brand identity. We design memorable, versatile, and timeless logos that capture the essence of your business and leave a lasting impression on your audience.",
        description2: "Our design process starts with understanding your vision and values. We then create multiple concepts, refining the chosen direction through collaboration until it perfectly Represents your dream brand.",
        featureList1: [
            "Unique custom logo concepts",
            "Vibrant color palettes",
            "Scalable vector source files"
        ],
        featureList2: [
            "Full brand style guides",
            "Business card integration",
            "Social media optimized versions"
        ],
        stepsTitle: "3 Steps to Your New Logo",
        steps: [
            { title: 'Brand Discovery', desc: 'We dive deep into your brand values.', icon: <FiLayers /> },
            { title: 'Concept Creation', desc: 'We build multiple unique directions.', icon: <FiPenTool /> },
            { title: 'Final Refinement', desc: 'We perfect the details for delivery.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=600",
        advantageContent: "A professionally designed logo builds instant trust and separates you from the competition.",
        advantageFeatureList: [
            "Infinite scalability (Vector)",
            "Memorable visual identity",
            "Cross-platform versatility"
        ],
        faqs: [
            {
                question: "How many concepts will I receive?",
                answer: "We typically provide 3-5 distinct initial concepts and then refine the one you like best."
            },
            {
                question: "Do I get ownership of the logo?",
                answer: "Yes, upon final payment, you own the full copyright to your final logo design."
            }
        ],
        activePath: "/services/graphics-design/logo-design"
    };

    return <GraphicServiceLayout {...data} />;
};

export default LogoDesign;
