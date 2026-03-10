import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const EducationTraining = () => {
    const sidebarMenu = [
        { label: 'TikTok Reels and YouTube Shorts', path: '/services/video-animation/shorts-reels' },
        { label: 'Videos for YouTube and Vlogs', path: '/services/video-animation/youtube-vlogs' },
        { label: 'Documentary Film Video Editing', path: '/services/video-animation/documentary' },
        { label: 'Business & Corporate Video Editing', path: '/services/video-animation/corporate' },
        { label: 'Film and Trailer Video Editing', path: '/services/video-animation/film-trailer' },
        { label: 'Music Video Editing Suite', path: '/services/video-animation/music-video' },
        { label: 'Weddings and Events Videos', path: '/services/video-animation/weddings-events' },
        { label: 'Color Grading for Videos', path: '/services/video-animation/color-grading' },
        { label: 'Education and Training Videos', path: '/services/video-animation/education-training', active: true },
        { label: 'Product Demo Videos', path: '/services/video-animation/product-demo' },
        { label: 'Podcast Videos', path: '/services/video-animation/podcast' },
        { label: 'Short Film Videos', path: '/services/video-animation/short-film' },
        { label: 'Travel Video Editing', path: '/services/video-animation/travel' },
        { label: 'Social Media Video Ads', path: '/services/video-animation/social-ads' },
        { label: 'Story Infographic Video Editing', path: '/services/video-animation/infographic' },
    ];

    const data = {
        title: 'Education and Training Videos',
        heroTitle: 'Educational Content & E-Learning',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'Education & Training' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
        description: "Clarity and engagement are essential for effective learning. We edit educational and training videos that make complex topics easy to understand, using clear pacing, helpful graphics, and clean audio.",
        features: [
            "Structured pacing for information retention",
            "Clear screen-recording and slide integration",
            "Engaging call-to-action and summary overlays"
        ],
        subDescription: "Whether it's a corporate training module or an online course for students, we ensure your message is delivered effectively. We focus on removing distractions and emphasizing key learning points through visual cues.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Empower your learners with high-quality educational videos that are as engaging as they are informative.",
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600',
            points: [
                "Closed captioning and transcription",
                "Interactive element placeholders",
                "Chapter and timestamp organization"
            ]
        }
    };

    return <ServiceDetailLayout {...data} />;
};

export default EducationTraining;
