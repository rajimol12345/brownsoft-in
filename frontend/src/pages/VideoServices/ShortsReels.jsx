import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const ShortsReels = () => {
    const data = {
        title: "TikTok Reels and YouTube Shorts",
        breadcrumbLabel: "Shorts & Reels",
        mainImg: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Short-Form Video Content",
        description1: "In today's fast-paced digital world, short-form video content is king. We specialize in creating high-energy, engaging TikTok reels and YouTube shorts that capture attention in the first three seconds. Our editing process focuses on trend-aware transitions, impactful sound design, and viral-ready aesthetics.",
        description2: "Our team understands the algorithms of major platforms. We don't just edit videos; we engineer content designed to go viral. From perfectly timed beat-drops to color grading that pops on mobile screens, we ensure your brand stands out in the scroll.",
        featureList1: [
            "Trend-based editing techniques for maximum reach",
            "High-speed cuts and engaging captions",
            "Optimized for vertical viewing (9:16 aspect ratio)"
        ],
        featureList2: [
            "Advanced sound balancing and noise reduction",
            "SEO-friendly metadata assistance",
            "Channel branding and consistent style"
        ],
        stepsTitle: "3 Steps to Your Viral Video",
        steps: [
            { title: 'Discovery & Trend', desc: 'We analyze current trends and your brand niche.', icon: <FiLayers /> },
            { title: 'Production & Edit', desc: 'Our editors build the timeline with high-speed cuts.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters ready for vertical screens.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Elevate your social media presence with content that converts viewers into followers.",
        advantageFeatureList: [
            "Custom animated overlays and text",
            "Copyright-free trending audio integration",
            "Fast 24-48 hour delivery options"
        ],
        faqs: [
            {
                question: "What is the ideal length for a Reel or Short?",
                answer: "We recommend 15 to 45 seconds for maximum engagement, though we can edit up to 60 seconds depending on the platform's current limits."
            },
            {
                question: "Do you provide subtitles and captions?",
                answer: "Yes, we provide dynamic, color-coded captions that are essential for viewers who watch without sound."
            }
        ],
        activePath: "/services/video-animation/shorts-reels"
    };

    return <VideoServiceLayout {...data} />;
};

export default ShortsReels;
