import React from 'react';
import PremiumServiceLayout from '../components/PremiumServiceLayout.jsx';
import VideoAnimationHero from '../components/VideoAnimationHero.jsx';
import VideoIntroTwoColumn from '../components/VideoIntroTwoColumn.jsx';

const VideoAnimation = () => {
    const videoServices = [
        { icon: 'fab fa-tiktok', title: 'TikTok & Reels', desc: 'High-energy, fast-paced editing for maximum social media engagement.' },
        { icon: 'fab fa-youtube', title: 'YouTube Content', desc: 'Full-service editing for vlogs, educational content, and video essays.' },
        { icon: 'fas fa-film', title: 'Documentary Films', desc: 'Narrative-driven editing that tells compelling real-world stories.' },
        { icon: 'fas fa-building', title: 'Corporate Identity', desc: 'Clean, professional videos that showcase your brand or company culture.' },
        { icon: 'fas fa-clapperboard', title: 'Trailers & Promos', desc: 'Impactful teasers designed to build excitement and drive conversions.' },
        { icon: 'fas fa-music', title: 'Music & Art', desc: 'Creative visual timing and stylistic grading for artistic expressions.' },
    ];

    const data = {
        title: 'Video & Animation',
        heroSubtitle: 'We craft high-fidelity visual stories that elevate your brand and captivate your audience across every digital platform.',
        heroImage: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=1200',
        introTitle: 'Why Should You Choose Us For Video Editing?',
        services: videoServices,
        faqs: [
            {
                question: "How long does a typical video project take?",
                answer: "Our standard turnaround time is 48-72 hours for social media content. More complex films and corporate projects typically range from 1 to 2 weeks."
            },
            {
                question: "What video formats do you provide?",
                answer: "We provide high-resolution deliverables in all formats (4K, MP4, ProRes) optimized for platforms like YouTube, Instagram, and LinkedIn."
            },
            {
                question: "Do you offer sound design and color grading?",
                answer: "Yes, every premium project includes professional color correction, sound balancing, and royalty-free background music selection."
            }
        ],
        quoteImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
    };

    return (
        <PremiumServiceLayout 
            {...data} 
            customHero={<VideoAnimationHero title={data.title} subtitle={data.heroSubtitle} />} 
            customIntro={<VideoIntroTwoColumn />}
        />
    );
};

export default VideoAnimation;
