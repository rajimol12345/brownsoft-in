import React from 'react';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

const VideoAnimation = () => {
    const sidebarMenu = [
        { label: 'TikTok Reels and YouTube Shorts', path: '/services/video-animation/shorts-reels' },
        { label: 'Videos for YouTube and Vlogs', path: '/services/video-animation/youtube-vlogs' },
        { label: 'Documentary Film Video Editing', path: '/services/video-animation/documentary' },
        { label: 'Business & Corporate Video Editing', path: '/services/video-animation/corporate' },
        { label: 'Film and Trailer Video Editing', path: '/services/video-animation/film-trailer' },
        { label: 'Music Video Editing Suite', path: '/services/video-animation/music-video' },
        { label: 'Weddings and Events Videos', path: '/services/video-animation/weddings-events' },
        { label: 'Color Grading for Videos', path: '/services/video-animation/color-grading' },
        { label: 'Education and Training Videos', path: '/services/video-animation/education-training' },
        { label: 'Product Demo Videos', path: '/services/video-animation/product-demo' },
        { label: 'Podcast Videos', path: '/services/video-animation/podcast' },
        { label: 'Short Film Videos', path: '/services/video-animation/short-film' },
        { label: 'Travel Video Editing', path: '/services/video-animation/travel' },
        { label: 'Social Media Video Ads', path: '/services/video-animation/social-ads' },
        { label: 'Story Infographic Video Editing', path: '/services/video-animation/infographic' },
    ];

    const data = {
        title: 'Video & Animation Services',
        heroTitle: 'Video & Animation Services',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200',
        description: "Our video and animation services are crafted to elevate your brand's visual identity. We combine creativity with strategy to deliver stunning visuals that communicate your message effectively. From cinematic editing to complex 2D/3D animations, we ensure every frame serves a purpose. Our team specializes in creating cohesive brand experiences across all digital platforms.",
        subDescription: "Whether you're a startup looking for your first social media ad or an established company needing a full brand documentary, our expertise ensures quality and impact at every stage of the production process.",
        features: [
            "Custom Animation Solutions",
            "High-Impact Social Content",
            "Professional Sound Design",
            "Cinematic Color Grading",
            "Cross-Platform Optimization",
            "Engaging Storytelling",
            "High-Fidelity Rendering",
            "Creative Visual Effects"
        ],
        steps: [
            { title: 'Discovery & Research', desc: 'We dive deep into your brand values and audience trends.', icon: 'fas fa-search' },
            { title: 'Storyboarding & Concept', desc: 'Our team develops unique concepts and visual blueprints.', icon: 'fas fa-pen-nib' },
            { title: 'Production & Delivery', desc: 'Receive high-quality video assets ready for any platform.', icon: 'fas fa-clapperboard' }
        ],
        faqs: [
            {
                question: "How do you ensure the video aligns with my brand?",
                answer: "We begin with a comprehensive discovery phase, researching your industry, competitors, and target audience. Our mood-boarding and scripting stages ensure every visual element resonates with your brand's core values."
            },
            {
                question: "What specific file formats are included in the final delivery?",
                answer: "We provide high-quality MP4 and MOV files optimized for web, social media, and broadcast. We can also provide project source files upon request for internal archiving."
            },
            {
                question: "How many revisions are included in the production?",
                answer: "Depending on the package, we typically offer 2-3 rounds of revisions at key milestones (concept, rough cut, and fine cut) to ensure the final product exceeds your expectations."
            }
        ]
    };

    return (
        <ServiceDetailLayout {...data} />
    );
};

export default VideoAnimation;
