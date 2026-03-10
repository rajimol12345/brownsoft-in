import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const Documentary = () => {
    const sidebarMenu = [
        { label: 'TikTok Reels and YouTube Shorts', path: '/services/video-animation/shorts-reels' },
        { label: 'Videos for YouTube and Vlogs', path: '/services/video-animation/youtube-vlogs' },
        { label: 'Documentary Film Video Editing', path: '/services/video-animation/documentary', active: true },
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
        title: 'Documentary Film Video Editing',
        heroTitle: 'Cinematic Documentary Editing',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'Documentary' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        description: "Documentaries require a unique approach to editing—one that prioritizes truth and narrative depth. Our editors are skilled at weaving complex interviews, archival footage, and cinematic b-roll into a cohesive and emotionally resonant story.",
        features: [
            "Narrative-driven pacing and structure",
            "Archival footage cleanup and integration",
            "Professional color grading for mood"
        ],
        subDescription: "We believe every documentary has a soul. Our job is to find it in the hours of footage and bring it to light. We handle everything from the initial assembly to final audio mixing, ensuring your vision is preserved throughout the process.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Tell stories that matter with a cinematic touch that inspires and informs.",
            image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600',
            points: [
                "Advanced interview audio enhancement",
                "Cinematic color correction",
                "Subtitles and multi-language support"
            ]
        }
    };

    return <ServiceDetailLayout {...data} />;
};

export default Documentary;
