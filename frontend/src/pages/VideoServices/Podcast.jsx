import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const Podcast = () => {
    const data = {
        title: "Podcast Videos",
        breadcrumbLabel: "Podcast",
        mainImg: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Video Podcast & Interview Editing",
        description1: "Video podcasts are the future of long-form audio. We provide professional multi-cam editing for podcasts, ensuring seamless transitions between speakers and high-quality audio that's a pleasure to listen to.",
        description2: "We don't just cut the footage; we enhance the conversation. We remove fillers, dead silence, and awkward pauses while maintaining the natural flow of the interview. We also provide professional branding and lower-thirds.",
        featureList1: [
            "Seamless speaker-driven multi-cam switching",
            "Advanced audio leveling and noise reduction",
            "Engaging social media 'clips' and 'highlights'"
        ],
        featureList2: [
            "Full-length and highlight reel options",
            "Intro/Outro animation and branding",
            "Distribution-ready vertical shorts"
        ],
        stepsTitle: "3 Steps to Your Brand Podcast",
        steps: [
            { title: 'Discovery & Sync', desc: 'We sync all your multi-cam sources and audio tracks.', icon: <FiLayers /> },
            { title: 'Production & Edit', desc: 'Our editors build a polished, professional conversation.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters ready for YouTube or Spotify.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Expand your reach with video podcasts that look as professional as they sound.",
        advantageFeatureList: [
            "Full-length and highlight reel options",
            "Intro/Outro animation and branding",
            "Distribution-ready vertical shorts"
        ],
        faqs: [
            {
                question: "Do you provide 'clipping' services for social media?",
                answer: "Yes, we can extract the most viral-ready moments from your podcast and format them for TikTok and Reels (9:16)."
            },
            {
                question: "Can you assist with remote podcast recordings?",
                answer: "We specialize in cleaning up and editing remote recordings from platforms like Riverside or Zencastr, ensuring local-quality audio."
            }
        ],
        activePath: "/services/video-animation/podcast"
    };

    return <VideoServiceLayout {...data} />;
};

export default Podcast;
