import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const SocialMediaAds = () => {
    const data = {
        title: "Social Media Video Ads",
        breadcrumbLabel: "Social Media Ads",
        mainImg: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200",
        subtitle: "High-Conversion Social Media Advertising",
        description1: "Stop the scroll and drive conversions with high-impact social media video ads. We specialize in creating short, persuasive videos optimized for Facebook, Instagram, LinkedIn, and more.",
        description2: "A successful social ad is about more than just a good product—it's about the right psychological triggers. We use fast pacing, engaging typography, and social-proof elements to ensure your ad spend delivers results.",
        featureList1: [
            "Attention-grabbing hooks and first frames",
            "Clear and persuasive call-to-actions",
            "Optimized for silent viewing with captions"
        ],
        featureList2: [
            "A/B test variations and edits",
            "Cross-platform aspect ratio optimization",
            "Dynamic text and motion graphics"
        ],
        stepsTitle: "3 Steps to Your Ad Campaign",
        steps: [
            { title: 'Discovery & Target', desc: 'We align on your target audience and ad goals.', icon: <FiLayers /> },
            { title: 'Production & Edit', desc: 'Our editors build a high-impact, scroll-stopping ad.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters ready for all ad platforms.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Maximize your ROAS with video ads that are designed to convert viewers into customers.",
        advantageFeatureList: [
            "A/B test variations and edits",
            "Cross-platform aspect ratio optimization",
            "Dynamic text and motion graphics"
        ],
        faqs: [
            {
                question: "Do you handle square (1:1) and vertical (9:16) formats?",
                answer: "Yes, we provide all social-standard aspect ratios for every ad campaign to ensure your brand looks great everywhere."
            },
            {
                question: "Can you edit 'User-Generated Content' (UGC) ads?",
                answer: "Absolutely. We specialize in cleaning up and editing UGC footage to make it look authentic yet professional and high-converting."
            }
        ],
        activePath: "/services/video-animation/social-ads"
    };

    return <VideoServiceLayout {...data} />;
};

export default SocialMediaAds;
