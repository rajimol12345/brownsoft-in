import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const MusicVideo = () => {
    const data = {
        title: "Music Video Editing Suite",
        breadcrumbLabel: "Music Videos",
        mainImg: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Creative Music Video Post-Production",
        description1: "Music videos are the ultimate creative playground. We combine technical precision with artistic flair to create visuals that don't just accompany your music—they elevate it to a new dimension.",
        description2: "Whether you want a raw, gritty look or a polished, high-fashion aesthetic, our editors collaborate with artists to realize their vision. We use advanced masking and motion graphics to create unique visual experiences.",
        featureList1: [
            "Perfect rhythmic and beat-matching cuts",
            "Creative visual effects and overlays",
            "Stylized color grading and atmosphere"
        ],
        featureList2: [
            "Advanced performance lip-syncing",
            "Creative lighting and texture overlays",
            "Atmospheric sound effect integration"
        ],
        stepsTitle: "3 Steps to Your Visual Masterpiece",
        steps: [
            { title: 'Discovery & Vibe', desc: 'We align on the musical style and visual atmosphere.', icon: <FiLayers /> },
            { title: 'Production & Edit', desc: 'Our editors build a rhythmic, high-energy timeline.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters ready for Vevo or YouTube.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Turn your music into a visual journey with editing that feels like a masterpiece.",
        advantageFeatureList: [
            "Advanced performance lip-syncing",
            "Creative lighting and texture overlays",
            "Atmospheric sound effect integration"
        ],
        faqs: [
            {
                question: "Do you handle 4K multi-cam music videos?",
                answer: "Yes, we are equipped to handle high-resolution multi-cam productions, ensuring perfect synchronization across all angles."
            },
            {
                question: "Can you add stylized film grain or textures?",
                answer: "Absolutely. We have a vast library of cinematic textures and film grains to give your music video a specific aesthetic look."
            }
        ],
        activePath: "/services/video-animation/music-video"
    };

    return <VideoServiceLayout {...data} />;
};

export default MusicVideo;
