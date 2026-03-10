import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const Travel = () => {
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
        { label: 'Travel Video Editing', path: '/services/video-animation/travel', active: true },
        { label: 'Social Media Video Ads', path: '/services/video-animation/social-ads' },
        { label: 'Story Infographic Video Editing', path: '/services/video-animation/infographic' },
    ];

    const data = {
        title: 'Travel Video Editing',
        heroTitle: 'Cinematic Travel Vlogs & Adventure Films',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'Travel' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=1200',
        description: "Capture the spirit of adventure with travel videos that transport your audience. We use dynamic transitions, vibrant color grading, and immersive soundscapes to tell the story of your journeys.",
        features: [
            "Seamless and creative transitions (speed ramps, etc.)",
            "Vibrant, sun-soaked color grading",
            "Immersive soundscapes and background scores"
        ],
        subDescription: "A great travel video is about the feeling of being there. We work with your drone footage, GoPro shots, and cinematic B-roll to create a cohesive and exciting narrative of your travels.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Share your adventures with the world through videos that look like professional travel documentaries.",
            image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600',
            points: [
                "Map animation and route overlays",
                "Advanced sound balancing for outdoor audio",
                "Vertical edits for Instagram and TikTok"
            ]
        }
    };

    return <ServiceDetailLayout {...data} />;
};

export default Travel;
