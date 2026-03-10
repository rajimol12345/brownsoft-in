import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const ColorGrading = () => {
    const sidebarMenu = [
        { label: 'TikTok Reels and YouTube Shorts', path: '/services/video-animation/shorts-reels' },
        { label: 'Videos for YouTube and Vlogs', path: '/services/video-animation/youtube-vlogs' },
        { label: 'Documentary Film Video Editing', path: '/services/video-animation/documentary' },
        { label: 'Business & Corporate Video Editing', path: '/services/video-animation/corporate' },
        { label: 'Film and Trailer Video Editing', path: '/services/video-animation/film-trailer' },
        { label: 'Music Video Editing Suite', path: '/services/video-animation/music-video' },
        { label: 'Weddings and Events Videos', path: '/services/video-animation/weddings-events' },
        { label: 'Color Grading for Videos', path: '/services/video-animation/color-grading', active: true },
        { label: 'Education and Training Videos', path: '/services/video-animation/education-training' },
        { label: 'Product Demo Videos', path: '/services/video-animation/product-demo' },
        { label: 'Podcast Videos', path: '/services/video-animation/podcast' },
        { label: 'Short Film Videos', path: '/services/video-animation/short-film' },
        { label: 'Travel Video Editing', path: '/services/video-animation/travel' },
        { label: 'Social Media Video Ads', path: '/services/video-animation/social-ads' },
        { label: 'Story Infographic Video Editing', path: '/services/video-animation/infographic' },
    ];

    const data = {
        title: 'Color Grading for Videos',
        heroTitle: 'Professional Color Grading & Correction',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'Color Grading' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200',
        description: "Color is one of the most powerful tools in visual storytelling. Our professional colorists use industry-standard software to enhance your footage, ensuring consistent skin tones, vivid environments, and a cinematic feel.",
        features: [
            "Advanced primary and secondary color correction",
            "Stylistic grading for specific moods (LUTS)",
            "Consistency across multiple camera sources"
        ],
        subDescription: "We don't just 'filter' your video. We meticulously adjust the shadows, midtones, and highlights of every shot to ensure technical perfection and artistic impact. Whether you need a warm, inviting look or a cold, clinical aesthetic, we deliver.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Give your video a high-end, professional look with grading that enhances every frame.",
            image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600',
            points: [
                "HDR grading and delivery",
                "Skin tone preservation and enhancement",
                "Atmospheric and cinematic lighting effects"
            ]
        }
    };

    return <ServiceDetailLayout {...data} />;
};

export default ColorGrading;
