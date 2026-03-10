import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const ShortsReels = () => {
    const sidebarMenu = [
        { label: 'TikTok Reels and YouTube Shorts', path: '/services/video-animation/shorts-reels', active: true },
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
        { label: 'Story Infographic Video Editing', path: '/services/video-animation/infographic' },
    ];

    const data = {
        title: 'TikTok Reels and YouTube Shorts',
        heroTitle: 'Short-Form Video Content',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'Shorts & Reels' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200',
        description: "In today's fast-paced digital world, short-form video content is king. We specialize in creating high-energy, engaging TikTok reels and YouTube shorts that capture attention in the first three seconds. Our editing process focuses on trend-aware transitions, impactful sound design, and viral-ready aesthetics.",
        features: [
            "Trend-based editing techniques for maximum reach",
            "High-speed cuts and engaging captions",
            "Optimized for vertical viewing (9:16 aspect ratio)"
        ],
        subDescription: "Our team understands the algorithms of major platforms. We don't just edit videos; we engineer content designed to go viral. From perfectly timed beat-drops to color grading that pops on mobile screens, we ensure your brand stands out in the scroll.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Elevate your social media presence with content that converts viewers into followers.",
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600',
            points: [
                "Custom animated overlays and text",
                "Copyright-free trending audio integration",
                "Fast 24-48 hour delivery options"
            ]
        },
        faqs: [
            {
                question: "What is the ideal length for a Reel or Short?",
                answer: "We recommend 15 to 45 seconds for maximum engagement, though we can edit up to 60 seconds depending on the platform's current limits."
            },
            {
                question: "Do you provide subtitles and captions?",
                answer: "Yes, we provide dynamic, color-coded captions that are essential for viewers who watch without sound."
            }
        ]
    };

    return <ServiceDetailLayout {...data} />;
};

export default ShortsReels;
