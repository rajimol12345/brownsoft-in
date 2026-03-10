import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const ShortFilm = () => {
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
        { label: 'Short Film Videos', path: '/services/video-animation/short-film', active: true },
        { label: 'Travel Video Editing', path: '/services/video-animation/travel' },
        { label: 'Social Media Video Ads', path: '/services/video-animation/social-ads' },
        { label: 'Story Infographic Video Editing', path: '/services/video-animation/infographic' },
    ];

    const data = {
        title: 'Short Film Videos',
        heroTitle: 'Narrative Short Film Post-Production',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'Short Film' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1200',
        description: "Every short film is a unique artistic vision. Our editors work closely with directors to find the perfect rhythm, mood, and narrative flow for their stories. We handle everything from assembly to final delivery.",
        features: [
            "Pacing and structure optimization",
            "Advanced sound design and foley",
            "Festival-ready color grading and look"
        ],
        subDescription: "Narrative editing is about more than just putting shots together—it's about emotional resonance. We focus on the performance and the subtext, ensuring every cut serves the story and the characters.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Bring your cinematic vision to life with professional editing that respects your artistry.",
            image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=600',
            points: [
                "Advanced audio-visual effects",
                "Color correction and stylistic grading",
                "Industry-standard delivery formats"
            ]
        }
    };

    return <ServiceDetailLayout {...data} />;
};

export default ShortFilm;
