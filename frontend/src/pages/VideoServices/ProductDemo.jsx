import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const ProductDemo = () => {
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
        { label: 'Product Demo Videos', path: '/services/video-animation/product-demo', active: true },
        { label: 'Podcast Videos', path: '/services/video-animation/podcast' },
        { label: 'Short Film Videos', path: '/services/video-animation/short-film' },
        { label: 'Travel Video Editing', path: '/services/video-animation/travel' },
        { label: 'Social Media Video Ads', path: '/services/video-animation/social-ads' },
        { label: 'Story Infographic Video Editing', path: '/services/video-animation/infographic' },
    ];

    const data = {
        title: 'Product Demo Videos',
        heroTitle: 'Product Showcase & Demonstrations',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Video & Animation', path: '/services/video-animation' },
            { label: 'Product Demos' }
        ],
        sidebarMenu: sidebarMenu,
        mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        description: "Seeing is believing. We create product demo videos that highlight features, demonstrate value, and drive sales. Our editing focuses on detail, clarity, and persuasive visual storytelling.",
        features: [
            "Macro-detail and close-up focus",
            "Clear feature-to-benefit visual flow",
            "Sleek and modern graphical callouts"
        ],
        subDescription: "From software walkthroughs to physical product reveals, we know how to showcase what makes your offering unique. We use professional lighting and grading to make your product look its absolute best.",
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        subSection: {
            title: "Convert prospects into customers with product videos that demonstrate your value clearly.",
            image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=600',
            points: [
                "Advanced screen capture editing",
                "3D model and render integration",
                "Fast-paced social media cuts"
            ]
        }
    };

    return <ServiceDetailLayout {...data} />;
};

export default ProductDemo;
