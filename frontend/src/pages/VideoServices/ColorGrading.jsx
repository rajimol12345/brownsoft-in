import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const ColorGrading = () => {
    const data = {
        title: "Color Grading for Videos",
        breadcrumbLabel: "Color Grading",
        mainImg: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Professional Color Grading & Correction",
        description1: "Color is one of the most powerful tools in visual storytelling. Our professional colorists use industry-standard software to enhance your footage, ensuring consistent skin tones, vivid environments, and a cinematic feel.",
        description2: "We don't just 'filter' your video. We meticulously adjust the shadows, midtones, and highlights of every shot to ensure technical perfection and artistic impact. Whether you need a warm, inviting look or a cold, clinical aesthetic, we deliver.",
        featureList1: [
            "Advanced primary and secondary color correction",
            "Stylistic grading for specific moods (LUTs)",
            "Consistency across multiple camera sources"
        ],
        featureList2: [
            "HDR grading and delivery",
            "Skin tone preservation and enhancement",
            "Atmospheric and cinematic lighting effects"
        ],
        stepsTitle: "3 Steps to Your Cinematic Look",
        steps: [
            { title: 'Discovery & Palette', desc: 'We align on the visual mood and color palette.', icon: <FiLayers /> },
            { title: 'Production & Grade', desc: 'Our colorists balance and grade every individual shot.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters with professional color depth.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Give your video a high-end, professional look with grading that enhances every frame.",
        advantageFeatureList: [
            "HDR grading and delivery",
            "Skin tone preservation and enhancement",
            "Atmospheric and cinematic lighting effects"
        ],
        faqs: [
            {
                question: "Do you work with LOG or RAW footage?",
                answer: "Yes, we prefer working with LOG or RAW footage as it provides the most dynamic range for high-quality grading."
            },
            {
                question: "Can you match the color of two different cameras?",
                answer: "Absolutely. Our matching process ensures that footage from different cameras (e.g., Sony and Canon) looks consistent throughout the film."
            }
        ],
        activePath: "/services/video-animation/color-grading"
    };

    return <VideoServiceLayout {...data} />;
};

export default ColorGrading;
