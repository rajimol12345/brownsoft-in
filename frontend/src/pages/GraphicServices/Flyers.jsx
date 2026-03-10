import React from 'react';
import GraphicServiceLayout from '../../components/GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const Flyers = () => {
    const data = {
        title: "Craft Memorable Flyers",
        breadcrumbLabel: "Flyers",
        mainImg: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200",
        subtitle: "High-Impact Marketing Collateral",
        description1: "A well-designed flyer is still one of the most effective ways to promote your business or event. We create eye-catching flyers that grab attention from a distance and provide clear, actionable information up close.",
        description2: "We focus on a strong visual hierarchy, ensuring your main message and call-to-action are prominent. Whether it's for a local event, a new product launch, or a corporate promotion, our flyer designs are built to convert.",
        featureList1: [
            "Single and double-sided flyers",
            "Event and promotional designs",
            "Custom illustrations and icons"
        ],
        featureList2: [
            "High-impact visual hierarchy",
            "Print-ready CMYK files",
            "Digital versions for social media"
        ],
        stepsTitle: "3 Steps to Your New Flyer",
        steps: [
            { title: 'Goal Setting', desc: 'We define the purpose of your flyer.', icon: <FiLayers /> },
            { title: 'Creative Design', desc: 'We build high-impact visual concepts.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive print and digital-ready files.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1517245318773-b7b85cf76380?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Great flyer design makes your message stand out in a cluttered environment.",
        advantageFeatureList: [
            "Modern and trendy design styles",
            "Clear call-to-action focus",
            "Quick turnaround for campaigns"
        ],
        faqs: [
            {
                question: "What sizes do you design for?",
                answer: "We design for all standard sizes (A4, A5, DL, 4x6, 5x7) as well as custom dimensions."
            },
            {
                question: "Can I use the design for social media?",
                answer: "Yes, we provide optimized digital versions of your flyer for use on platforms like Instagram and Facebook."
            }
        ],
        activePath: "/services/graphics-design/flyers"
    };

    return <GraphicServiceLayout {...data} />;
};

export default Flyers;
