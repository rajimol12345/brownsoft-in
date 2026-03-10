import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const Podcast = () => {
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
        { label: 'Podcast Videos', path: '/services/video-animation/podcast', active: true },
        { label: 'Short Film Videos', path: '/services/video-animation/short-film' },
        { label: 'Travel Video Editing', path: '/services/video-animation/travel' },
        { label: 'Social Media Video Ads', path: '/services/video-animation/social-ads' },
        { label: 'Story Infographic Video Editing', path: '/services/video-animation/infographic' },
    ];

    const data = {
        title: 'Podcast Videos',
        heroTitle: 'Video Podcast & Interview Editing',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'Podcast' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1200',
        description: "Video podcasts are the future of long-form audio. We provide professional multi-cam editing for podcasts, ensuring seamless transitions between speakers and high-quality audio that's a pleasure to listen to.",
        features: [
            "Seamless speaker-driven multi-cam switching",
            "Advanced audio leveling and noise reduction",
            "Engaging social media 'clips' and 'highlights'"
        ],
        subDescription: "We don't just cut the footage; we enhance the conversation. We remove fillers, dead silence, and awkward pauses while maintaining the natural flow of the interview. We also provide professional branding and lower-thirds.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Expand your reach with video podcasts that look as professional as they sound.",
            image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600',
            points: [
                "Full-length and highlight reel options",
                "Intro/Outro animation and branding",
                "Distribution-ready vertical shorts"
            ]
        }
    };

    return <ServiceDetailLayout {...data} />;
};

export default Podcast;
