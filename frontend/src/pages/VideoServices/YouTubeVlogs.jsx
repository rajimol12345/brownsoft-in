import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const YouTubeVlogs = () => {
    const data = {
        title: "Videos for YouTube and Vlogs",
        breadcrumbLabel: "YouTube & Vlogs",
        mainImg: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200",
        subtitle: "YouTube Content Creation",
        description1: "Consistency and quality are the pillars of a successful YouTube channel. We help creators focus on their message while we handle the heavy lifting of editing. From lifestyle vlogs to deep-dive educational content, we ensure your videos are polished and professional.",
        description2: "A great vlog is about storytelling. We work with your raw footage to find the best narrative arc, removing filler and dead space to keep your audience engaged. We use professional color grading to ensure a high-end look across all your content.",
        featureList1: [
            "Seamless multi-cam switching and sync",
            "Professional b-roll integration",
            "Engaging intro and outro animations"
        ],
        featureList2: [
            "Advanced sound balancing and noise reduction",
            "Professional color grading",
            "Storytelling-focused narrative editing"
        ],
        stepsTitle: "3 Steps to Your YouTube Masterpiece",
        steps: [
            { title: 'Discovery & Outline', desc: 'We align on your channel branding and specific video goals.', icon: <FiLayers /> },
            { title: 'Production & Edit', desc: 'Our editors build the narrative and add professional overlays.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters ready for your YouTube channel.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Build a loyal audience with high-quality videos that look like they were made in a professional studio.",
        advantageFeatureList: [
            "Advanced sound balancing and noise reduction",
            "SEO-friendly metadata assistance",
            "Channel branding and consistent style"
        ],
        faqs: [
            {
                question: "Do you specialize in specific YouTube niches?",
                answer: "Yes, we have experience in lifestyle, tech, education, finance, and gaming vlogs. Each niche has its own editing style which we strictly follow."
            },
            {
                question: "How long is the turnaround for a 10-minute vlog?",
                answer: "A standard vlog typically takes 3-5 business days depending on the complexity of the raw footage and requested graphics."
            }
        ],
        activePath: "/services/video-animation/youtube-vlogs"
    };

    return <VideoServiceLayout {...data} />;
};

export default YouTubeVlogs;
