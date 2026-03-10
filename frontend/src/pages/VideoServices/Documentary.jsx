import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const Documentary = () => {
    const data = {
        title: "Documentary Film Video Editing",
        breadcrumbLabel: "Documentary",
        mainImg: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Cinematic Documentary Editing",
        description1: "Documentaries require a unique approach to editing—one that prioritizes truth and narrative depth. Our editors are skilled at weaving complex interviews, archival footage, and cinematic b-roll into a cohesive and emotionally resonant story.",
        description2: "We believe every documentary has a soul. Our job is to find it in the hours of footage and bring it to light. We handle everything from the initial assembly to final audio mixing, ensuring your vision is preserved throughout the process.",
        featureList1: [
            "Narrative-driven pacing and structure",
            "Archival footage cleanup and integration",
            "Professional color grading for mood"
        ],
        featureList2: [
            "Advanced interview audio enhancement",
            "Cinematic color correction",
            "Subtitles and multi-language support"
        ],
        stepsTitle: "3 Steps to Your Documentary Film",
        steps: [
            { title: 'Discovery & Interview', desc: 'We align on the narrative arc and key message.', icon: <FiLayers /> },
            { title: 'Production & Edit', desc: 'Our editors build the story from dozens of hours of footage.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters ready for festivals or web.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Tell stories that matter with a cinematic touch that inspires and informs.",
        advantageFeatureList: [
            "Advanced interview audio enhancement",
            "Cinematic color correction",
            "Subtitles and multi-language support"
        ],
        faqs: [
            {
                question: "How do you handle large amounts of footage?",
                answer: "We use a rigorous logging and tagging process to organize every clip, making it easy to find specific moments during the creative assembly."
            },
            {
                question: "Can you assist with licensing archival music?",
                answer: "Yes, we work with several music libraries to provide high-quality, licensed scores that fit the mood of your documentary."
            }
        ],
        activePath: "/services/video-animation/documentary"
    };

    return <VideoServiceLayout {...data} />;
};

export default Documentary;
