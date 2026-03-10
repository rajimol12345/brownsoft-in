import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const Corporate = () => {
    const data = {
        title: "Business & Corporate Video Editing",
        breadcrumbLabel: "Corporate",
        mainImg: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Corporate Branding & Business Films",
        description1: "Your corporate video is a reflection of your brand's values and professionalism. We provide high-end editing services for internal communications, brand stories, and client presentations that command respect and project authority.",
        description2: "We understand the corporate world's need for efficiency and quality. Our editors work to streamline your message, ensuring every frame serves a purpose. From executive interviews to office tours, we make your business look its best.",
        featureList1: [
            "Clean, minimalist aesthetic",
            "Professional lower-thirds and graphics",
            "Brand-consistent color and typography"
        ],
        featureList2: [
            "Stock footage curation and licensing",
            "Advanced audio cleanup for office environments",
            "Confidential and secure workflow"
        ],
        stepsTitle: "3 Steps to Your Corporate Film",
        steps: [
            { title: 'Discovery & Brief', desc: 'We align on your brand guidelines and communication goals.', icon: <FiLayers /> },
            { title: 'Production & Edit', desc: 'Our editors build a polished, professional narrative.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters ready for your board or web.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Project a professional image with business videos that speak to your excellence.",
        advantageFeatureList: [
            "Stock footage curation and licensing",
            "Advanced audio cleanup for office environments",
            "Confidential and secure workflow"
        ],
        faqs: [
            {
                question: "Can you provide captions for our presentations?",
                answer: "Absolutely. We provide burnt-in captions or separate SRT files for accessibility in all corporate projects."
            },
            {
                question: "Do you offer bulk editing for internal training?",
                answer: "Yes, we have discounted rates for ongoing corporate training modules and internal brand updates."
            }
        ],
        activePath: "/services/video-animation/corporate"
    };

    return <VideoServiceLayout {...data} />;
};

export default Corporate;
