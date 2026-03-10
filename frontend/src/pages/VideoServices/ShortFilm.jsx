import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const ShortFilm = () => {
    const data = {
        title: "Short Film Videos",
        breadcrumbLabel: "Short Film",
        mainImg: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Narrative Short Film Post-Production",
        description1: "Every short film is a unique artistic vision. Our editors work closely with directors to find the perfect rhythm, mood, and narrative flow for their stories. We handle everything from assembly to final delivery.",
        description2: "Narrative editing is about more than just putting shots together—it's about emotional resonance. We focus on the performance and the subtext, ensuring every cut serves the story and the characters.",
        featureList1: [
            "Pacing and structure optimization",
            "Advanced sound design and foley",
            "Festival-ready color grading and look"
        ],
        featureList2: [
            "Advanced audio-visual effects",
            "Color correction and stylistic grading",
            "Industry-standard delivery formats"
        ],
        stepsTitle: "3 Steps to Your Short Film",
        steps: [
            { title: 'Discovery & Selects', desc: 'We align on the vision and review the best takes.', icon: <FiLayers /> },
            { title: 'Production & Edit', desc: 'Our editors build the narrative and emotional arc.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters ready for festivals or web.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Bring your cinematic vision to life with professional editing that respects your artistry.",
        advantageFeatureList: [
            "Advanced audio-visual effects",
            "Color correction and stylistic grading",
            "Industry-standard delivery formats"
        ],
        faqs: [
            {
                question: "Do you handle specialized 'VFX' for short films?",
                answer: "Yes, we can handle basic to intermediate visual effects, including green screen compositing and digital cleanup."
            },
            {
                question: "Can you assist with the festival submission format?",
                answer: "Absolutely. We provide DCP (Digital Cinema Package) ready exports and other industry-standard formats required by major festivals."
            }
        ],
        activePath: "/services/video-animation/short-film"
    };

    return <VideoServiceLayout {...data} />;
};

export default ShortFilm;
