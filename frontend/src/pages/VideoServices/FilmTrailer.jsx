import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const FilmTrailer = () => {
    const data = {
        title: "Film and Trailer Video Editing",
        breadcrumbLabel: "Trailers",
        mainImg: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Cinematic Film & Trailer Design",
        description1: "A trailer is more than just a preview—it's an experience. We specialize in the high-impact editing required to build tension, excitement, and anticipation for your film or product launch.",
        description2: "Our trailer editors know how to tease a story without giving it away. We focus on the most visually stunning and emotionally powerful moments of your footage, backed by a score that demands attention.",
        featureList1: [
            "Impactful beat-synced cutting",
            "Professional sound design and 'hits'",
            "Epic color grading and cinematic look"
        ],
        featureList2: [
            "Custom cinematic title design",
            "Advanced audio-visual synchronization",
            "Professional grading for big-screen feel"
        ],
        stepsTitle: "3 Steps to Your Epic Trailer",
        steps: [
            { title: 'Discovery & Hook', desc: 'We identify the emotional core and hook of your project.', icon: <FiLayers /> },
            { title: 'Production & Edit', desc: 'Our editors build a fast-paced, high-tension timeline.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters ready for theatrical or web.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Hook your audience from the first frame with trailers that promise a masterpiece.",
        advantageFeatureList: [
            "Custom cinematic title design",
            "Advanced audio-visual synchronization",
            "Professional grading for big-screen feel"
        ],
        faqs: [
            {
                question: "Do you handle specialized 'trailer music' scores?",
                answer: "Yes, we work with several cinematic music libraries to provide the high-impact scores required for modern trailers."
            },
            {
                question: "How long is a typical trailer edit?",
                answer: "For feature films, we usually recommend a 1:30 to 2:30 minute trailer. For shorter promos, 30-60 seconds is ideal."
            }
        ],
        activePath: "/services/video-animation/film-trailer"
    };

    return <VideoServiceLayout {...data} />;
};

export default FilmTrailer;
