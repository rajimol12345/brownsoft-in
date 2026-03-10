import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const EducationTraining = () => {
    const data = {
        title: "Education and Training Videos",
        breadcrumbLabel: "Education & Training",
        mainImg: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Educational Content & E-Learning",
        description1: "Clarity and engagement are essential for effective learning. We edit educational and training videos that make complex topics easy to understand, using clear pacing, helpful graphics, and clean audio.",
        description2: "Whether it's a corporate training module or an online course for students, we ensure your message is delivered effectively. We focus on removing distractions and emphasizing key learning points through visual cues.",
        featureList1: [
            "Structured pacing for information retention",
            "Clear screen-recording and slide integration",
            "Engaging call-to-action and summary overlays"
        ],
        featureList2: [
            "Closed captioning and transcription",
            "Interactive element placeholders",
            "Chapter and timestamp organization"
        ],
        stepsTitle: "3 Steps to Your Educational Video",
        steps: [
            { title: 'Discovery & Script', desc: 'We align on the educational goals and key takeaways.', icon: <FiLayers /> },
            { title: 'Production & Edit', desc: 'Our editors build a clear, structured learning journey.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters ready for your LMS or web.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Empower your learners with high-quality educational videos that are as engaging as they are informative.",
        advantageFeatureList: [
            "Closed captioning and transcription",
            "Interactive element placeholders",
            "Chapter and timestamp organization"
        ],
        faqs: [
            {
                question: "Do you provide voiceover services?",
                answer: "While we specialize in editing, we can assist in finding professional voiceover artists that fit your educational tone."
            },
            {
                question: "Can you add interactive quizzes to the video?",
                answer: "We can add visual cues and 'pause' points for quizzes, but the interactivity itself is usually handled by your LMS platform."
            }
        ],
        activePath: "/services/video-animation/education-training"
    };

    return <VideoServiceLayout {...data} />;
};

export default EducationTraining;
