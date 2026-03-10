import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const YouTubeVlogs = () => {
    const sidebarMenu = [
        { label: 'TikTok Reels and YouTube Shorts', path: '/services/video-animation/shorts-reels' },
        { label: 'Videos for YouTube and Vlogs', path: '/services/video-animation/youtube-vlogs', active: true },
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
        title: 'Videos for YouTube and Vlogs',
        heroTitle: 'YouTube Content Creation',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'YouTube & Vlogs' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200',
        description: "Consistency and quality are the pillars of a successful YouTube channel. We help creators focus on their message while we handle the heavy lifting of editing. From lifestyle vlogs to deep-dive educational content, we ensure your videos are polished and professional.",
        features: [
            "Seamless multi-cam switching and sync",
            "Professional b-roll integration",
            "Engaging intro and outro animations"
        ],
        subDescription: "A great vlog is about storytelling. We work with your raw footage to find the best narrative arc, removing filler and dead space to keep your audience engaged. We use professional color grading to ensure a high-end look across all your content.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Build a loyal audience with high-quality videos that look like they were made in a professional studio.",
            image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=600',
            points: [
                "Advanced sound balancing and noise reduction",
                "SEO-friendly metadata assistance",
                "Channel branding and consistent style"
            ]
        }
    };

    return <ServiceDetailLayout {...data} />;
};

export default YouTubeVlogs;
