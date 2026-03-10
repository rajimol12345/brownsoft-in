import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const Infographic = () => {
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
        { label: 'Story Infographic Video Editing', path: '/services/video-animation/infographic', active: true },
    ];

    const data = {
        title: 'Story Infographic Video Editing',
        heroTitle: 'Data Storytelling & Animated Infographics',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'Infographics' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        description: "Turn complex data into compelling stories with animated infographics. We use motion graphics to bring numbers and facts to life, making your information memorable and easy to digest.",
        features: [
            "Dynamic data visualization and charts",
            "Engaging character and icon animation",
            "Clear and concise narrative structure"
        ],
        subDescription: "Infographic videos are perfect for explaining products, sharing company results, or educating your audience. We focus on a clean, modern aesthetic that aligns with your brand's identity.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Simplify the complex and engage your audience with data-driven motion graphics.",
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
            points: [
                "Custom 2D/3D motion graphics",
                "Professional voiceover integration",
                "Brand-consistent color and typography"
            ]
        }
    };

    return <ServiceDetailLayout {...data} />;
};

export default Infographic;
