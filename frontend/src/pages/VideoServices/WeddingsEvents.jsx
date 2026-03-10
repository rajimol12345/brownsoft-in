import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const WeddingsEvents = () => {
    const sidebarMenu = [
        { label: 'TikTok Reels and YouTube Shorts', path: '/services/video-animation/shorts-reels' },
        { label: 'Videos for YouTube and Vlogs', path: '/services/video-animation/youtube-vlogs' },
        { label: 'Documentary Film Video Editing', path: '/services/video-animation/documentary' },
        { label: 'Business & Corporate Video Editing', path: '/services/video-animation/corporate' },
        { label: 'Film and Trailer Video Editing', path: '/services/video-animation/film-trailer' },
        { label: 'Music Video Editing Suite', path: '/services/video-animation/music-video' },
        { label: 'Weddings and Events Videos', path: '/services/video-animation/weddings-events', active: true },
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
        title: 'Weddings and Events Videos',
        heroTitle: 'Wedding & Event Cinematography',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'Weddings & Events' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
        description: "Your special day deserves to be remembered in the most beautiful way possible. We provide high-end wedding and event video editing that captures the emotion, joy, and atmosphere of your most important celebrations.",
        features: [
            "Emotional storytelling and narrative flow",
            "Professional color grading for a romantic look",
            "Perfectly timed music and sound design"
        ],
        subDescription: "From intimate weddings to large corporate events, we tailor our editing style to match the mood of the occasion. We offer both highlight reels for social media and full-length feature edits of your event.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Relive your most precious moments with cinematic edits that last a lifetime.",
            image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600',
            points: [
                "Multi-angle synchronization",
                "Advanced audio cleanup for speeches",
                "Custom DVD or digital delivery menus"
            ]
        }
    };

    return <ServiceDetailLayout {...data} />;
};

export default WeddingsEvents;
