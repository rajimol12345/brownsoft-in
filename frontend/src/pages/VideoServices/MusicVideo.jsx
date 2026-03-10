import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const MusicVideo = () => {
    const sidebarMenu = [
        { label: 'TikTok Reels and YouTube Shorts', path: '/services/video-animation/shorts-reels' },
        { label: 'Videos for YouTube and Vlogs', path: '/services/video-animation/youtube-vlogs' },
        { label: 'Documentary Film Video Editing', path: '/services/video-animation/documentary' },
        { label: 'Business & Corporate Video Editing', path: '/services/video-animation/corporate' },
        { label: 'Film and Trailer Video Editing', path: '/services/video-animation/film-trailer' },
        { label: 'Music Video Editing Suite', path: '/services/video-animation/music-video', active: true },
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
        title: 'Music Video Editing Suite',
        heroTitle: 'Creative Music Video Post-Production',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'Music Videos' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200',
        description: "Music videos are the ultimate creative playground. We combine technical precision with artistic flair to create visuals that don't just accompany your music—they elevate it to a new dimension.",
        features: [
            "Perfect rhythmic and beat-matching cuts",
            "Creative visual effects and overlays",
            "Stylized color grading and atmosphere"
        ],
        subDescription: "Whether you want a raw, gritty look or a polished, high-fashion aesthetic, our editors collaborate with artists to realize their vision. We use advanced masking and motion graphics to create unique visual experiences.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Turn your music into a visual journey with editing that feels like a masterpiece.",
            image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=600',
            points: [
                "Advanced performance lip-syncing",
                "Creative lighting and texture overlays",
                "Atmospheric sound effect integration"
            ]
        }
    };

    return <ServiceDetailLayout {...data} />;
};

export default MusicVideo;
