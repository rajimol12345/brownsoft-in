import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const SocialMediaAds = () => {
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
        { label: 'Social Media Video Ads', path: '/services/video-animation/social-ads', active: true },
        { label: 'Story Infographic Video Editing', path: '/services/video-animation/infographic' },
    ];

    const data = {
        title: 'Social Media Video Ads',
        heroTitle: 'High-Conversion Social Media Advertising',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'Social Media Ads' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200',
        description: "Stop the scroll and drive conversions with high-impact social media video ads. We specialize in creating short, persuasive videos optimized for Facebook, Instagram, LinkedIn, and more.",
        features: [
            "Attention-grabbing hooks and first frames",
            "Clear and persuasive call-to-actions",
            "Optimized for silent viewing with captions"
        ],
        subDescription: "A successful social ad is about more than just a good product—it's about the right psychological triggers. We use fast pacing, engaging typography, and social-proof elements to ensure your ad spend delivers results.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Maximize your ROAS with video ads that are designed to convert viewers into customers.",
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
            points: [
                "A/B test variations and edits",
                "Cross-platform aspect ratio optimization",
                "Dynamic text and motion graphics"
            ]
        }
    };

    return <ServiceDetailLayout {...data} />;
};

export default SocialMediaAds;
