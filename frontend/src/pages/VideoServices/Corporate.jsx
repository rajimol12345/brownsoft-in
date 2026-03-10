import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const Corporate = () => {
    const sidebarMenu = [
        { label: 'TikTok Reels and YouTube Shorts', path: '/services/video-animation/shorts-reels' },
        { label: 'Videos for YouTube and Vlogs', path: '/services/video-animation/youtube-vlogs' },
        { label: 'Documentary Film Video Editing', path: '/services/video-animation/documentary' },
        { label: 'Business & Corporate Video Editing', path: '/services/video-animation/corporate', active: true },
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
        title: 'Business & Corporate Video Editing',
        heroTitle: 'Corporate Branding & Business Films',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'Corporate' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200',
        description: "Your corporate video is a reflection of your brand's values and professionalism. We provide high-end editing services for internal communications, brand stories, and client presentations that command respect and project authority.",
        features: [
            "Clean, minimalist aesthetic",
            "Professional lower-thirds and graphics",
            "Brand-consistent color and typography"
        ],
        subDescription: "We understand the corporate world's need for efficiency and quality. Our editors work to streamline your message, ensuring every frame serves a purpose. From executive interviews to office tours, we make your business look its best.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Project a professional image with business videos that speak to your excellence.",
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
            points: [
                "Stock footage curation and licensing",
                "Advanced audio cleanup for office environments",
                "Confidential and secure workflow"
            ]
        }
    };

    return <ServiceDetailLayout {...data} />;
};

export default Corporate;
