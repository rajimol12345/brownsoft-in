import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const WeddingsEvents = () => {
    const data = {
        title: "Weddings and Events Videos",
        breadcrumbLabel: "Weddings & Events",
        mainImg: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Wedding & Event Cinematography",
        description1: "Your special day deserves to be remembered in the most beautiful way possible. We provide high-end wedding and event video editing that captures the emotion, joy, and atmosphere of your most important celebrations.",
        description2: "From intimate weddings to large corporate events, we tailor our editing style to match the mood of the occasion. We offer both highlight reels for social media and full-length feature edits of your event.",
        featureList1: [
            "Emotional storytelling and narrative flow",
            "Professional color grading for a romantic look",
            "Perfectly timed music and sound design"
        ],
        featureList2: [
            "Multi-angle synchronization",
            "Advanced audio cleanup for speeches",
            "Custom digital delivery menus"
        ],
        stepsTitle: "3 Steps to Your Event Film",
        steps: [
            { title: 'Discovery & Mood', desc: 'We align on the emotional tone and key moments.', icon: <FiLayers /> },
            { title: 'Production & Edit', desc: 'Our editors build a beautiful, cinematic narrative.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters ready for family and social sharing.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Relive your most precious moments with cinematic edits that last a lifetime.",
        advantageFeatureList: [
            "Multi-angle synchronization",
            "Advanced audio cleanup for speeches",
            "Custom digital delivery menus"
        ],
        faqs: [
            {
                question: "How long is a typical wedding highlight reel?",
                answer: "Highlight reels usually range from 3 to 7 minutes, depending on the amount of key moments and the chosen music."
            },
            {
                question: "Can you include raw footage of the speeches?",
                answer: "Yes, we can provide separate edits of full speeches or include them in a longer documentary-style feature."
            }
        ],
        activePath: "/services/video-animation/weddings-events"
    };

    return <VideoServiceLayout {...data} />;
};

export default WeddingsEvents;
