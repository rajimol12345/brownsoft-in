import React from 'react';
import GraphicServiceLayout from '../../components/GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const BrochuresInfographics = () => {
    const data = {
        title: "Brochures and Infographics",
        breadcrumbLabel: "Brochures & Infographics",
        mainImg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Informative and Engaging Visuals",
        description1: "Complex information is best communicated through clear visuals. We design professional brochures and detailed infographics that make your data easy to understand and engaging for your audience.",
        description2: "From multi-page company brochures to single-panel data visualizations, our designs are structured for readability. We use a combination of custom icons, charts, and clean layouts to ensure your information is remembered.",
        featureList1: [
            "Tri-fold and bi-fold brochures",
            "Data-driven infographics",
            "Custom icon and chart design"
        ],
        featureList2: [
            "Professional layout structuring",
            "Print and digital formats",
            "Cohesive brand storytelling"
        ],
        stepsTitle: "3 Steps to Informative Design",
        steps: [
            { title: 'Data Analysis', desc: 'We organize your info for visual flow.', icon: <FiLayers /> },
            { title: 'Visual Mapping', desc: 'We design the structure and icons.', icon: <FiPenTool /> },
            { title: 'Final Polish', desc: 'We ensure clarity and brand alignment.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Visual information is processed 60,000 times faster than text alone.",
        advantageFeatureList: [
            "High-quality vector graphics",
            "Readable typography choices",
            "Impactful data visualizations"
        ],
        faqs: [
            {
                question: "Do you write the content for brochures?",
                answer: "We focus on the design. You provide the text, and we transform it into a professional visual layout."
            },
            {
                question: "Can infographics be used in presentations?",
                answer: "Absolutely! We can provide individual assets from the infographic for use in PowerPoint or Keynote."
            }
        ],
        activePath: "/services/graphics-design/brochures-infographics"
    };

    return <GraphicServiceLayout {...data} />;
};

export default BrochuresInfographics;
