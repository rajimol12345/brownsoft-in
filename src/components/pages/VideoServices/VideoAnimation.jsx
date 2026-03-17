import React from 'react';
import VideoServiceLayout from '../../VideoServiceLayout';
import { FiFilm, FiMonitor, FiCamera } from 'react-icons/fi';

const VideoAnimation = () => {
    const data = {
        title: "Video & Animation Services",
        breadcrumbLabel: "Video & Animation",
        mainImg: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Professional Video Production & Motion Graphics",
        description1: "In today's digital landscape, video is the most powerful medium for storytelling and communication. Our Video & Animation team combines technical mastery with creative vision to produce content that captivates audiences and delivers results.",
        description2: "From social media reels and corporate documentaries to music videos and cinematic trailers, we handle every aspect of the production process. Our mission is to transform your ideas into high-impact visual experiences that resonate with your target market.",
        featureList1: [
            "Complete post-production services",
            "Professional color grading and correction",
            "High-end motion graphics and animation"
        ],
        featureList2: [
            "Sound design and audio mixing",
            "Specialized YouTube and Vlog editing",
            "Corporate and event video solutions"
        ],
        stepsTitle: "Our Creative Process",
        stepsDescription: "We follow a collaborative approach to ensure your vision is realized with the highest quality standards.",
        steps: [
            { 
                title: 'Pre-Production', 
                desc: 'Storyboarding, scriptwriting, and visual planning.', 
                icon: <FiCamera /> 
            },
            { 
                title: 'Post-Production', 
                desc: 'Meticulous editing, grading, and sound design.', 
                icon: <FiMonitor /> 
            },
            { 
                title: 'Final Master', 
                desc: 'High-quality delivery in all required formats.', 
                icon: <FiFilm /> 
            }
        ],
        advantageTitle: "Why Choose Our Video Services?",
        advantageDescription: "We leverage cutting-edge technology and human creativity to produce videos that stand out in a crowded digital world.",
        advantageImg: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Experience the difference of working with a team that treats every frame as a work of art.",
        advantageFeatureList: [
            "Industry-standard editing suites",
            "Expert storytellers and visual artists",
            "Fast turnaround without compromising quality",
            "Tailored solutions for every platform"
        ],
        faqs: [
            {
                question: "What is your typical turnaround time?",
                answer: "Turnaround time depends on project complexity. Small edits can be completed in 2-3 days, while complex documentaries or trailers may take 1-2 weeks."
            },
            {
                question: "Do you provide original sound design?",
                answer: "Yes, we have an extensive library of licensed music and sound effects, and we can also create custom soundscapes for your production."
            },
            {
                question: "Can you edit footage for different social platforms?",
                answer: "Absolutely. We can deliver optimized versions of your video for YouTube (16:9), Instagram/TikTok (9:16), and LinkedIn/Facebook (1:1 or 4:5)."
            }
        ],
        activePath: "/services/video-animation"
    };

    return <VideoServiceLayout {...data} />;
};

export default VideoAnimation;
