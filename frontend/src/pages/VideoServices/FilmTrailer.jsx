import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const FilmTrailer = () => {
    const sidebarMenu = [
        { label: 'TikTok Reels and YouTube Shorts', path: '/services/video-animation/shorts-reels' },
        { label: 'Videos for YouTube and Vlogs', path: '/services/video-animation/youtube-vlogs' },
        { label: 'Documentary Film Video Editing', path: '/services/video-animation/documentary' },
        { label: 'Business & Corporate Video Editing', path: '/services/video-animation/corporate' },
        { label: 'Film and Trailer Video Editing', path: '/services/video-animation/film-trailer', active: true },
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
        title: 'Film and Trailer Video Editing',
        heroTitle: 'Cinematic Film & Trailer Design',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'Trailers' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200',
        description: "A trailer is more than just a preview—it's an experience. We specialize in the high-impact editing required to build tension, excitement, and anticipation for your film or product launch.",
        features: [
            "Impactful beat-synced cutting",
            "Professional sound design and 'hits'",
            "Epic color grading and cinematic look"
        ],
        subDescription: "Our trailer editors know how to tease a story without giving it away. We focus on the most visually stunning and emotionally powerful moments of your footage, backed by a score that demands attention.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Hook your audience from the first frame with trailers that promise a masterpiece.",
            image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600',
            points: [
                "Custom cinematic title design",
                "Advanced audio-visual synchronization",
                "Professional grading for big-screen feel"
            ]
        }
    };

    return <ServiceDetailLayout {...data} />;
};

export default FilmTrailer;
