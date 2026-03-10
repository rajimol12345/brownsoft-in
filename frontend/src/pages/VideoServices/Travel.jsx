import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const Travel = () => {
    const data = {
        title: "Travel Video Editing",
        breadcrumbLabel: "Travel",
        mainImg: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Cinematic Travel Vlogs & Adventure Films",
        description1: "Capture the spirit of adventure with travel videos that transport your audience. We use dynamic transitions, vibrant color grading, and immersive soundscapes to tell the story of your journeys.",
        description2: "A great travel video is about the feeling of being there. We work with your drone footage, GoPro shots, and cinematic B-roll to create a cohesive and exciting narrative of your travels.",
        featureList1: [
            "Seamless and creative transitions (speed ramps, etc.)",
            "Vibrant, sun-soaked color grading",
            "Immersive soundscapes and background scores"
        ],
        featureList2: [
            "Map animation and route overlays",
            "Advanced sound balancing for outdoor audio",
            "Vertical edits for Instagram and TikTok"
        ],
        stepsTitle: "3 Steps to Your Travel Vlog",
        steps: [
            { title: 'Discovery & Footage', desc: 'We review your footage and identify the key moments.', icon: <FiLayers /> },
            { title: 'Production & Edit', desc: 'Our editors build a fast-paced, immersive journey.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters ready for YouTube or social media.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Share your adventures with the world through videos that look like professional travel documentaries.",
        advantageFeatureList: [
            "Map animation and route overlays",
            "Advanced sound balancing for outdoor audio",
            "Vertical edits for Instagram and TikTok"
        ],
        faqs: [
            {
                question: "Do you specialize in drone footage editing?",
                answer: "Yes, we have extensive experience in stabilizing and color-grading drone footage to give it a cinematic, high-end feel."
            },
            {
                question: "Can you add animated travel maps?",
                answer: "Absolutely. We can create custom animated 'route' maps to show the progress of your journey across the globe."
            }
        ],
        activePath: "/services/video-animation/travel"
    };

    return <VideoServiceLayout {...data} />;
};

export default Travel;
