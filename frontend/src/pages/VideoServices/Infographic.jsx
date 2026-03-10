import React from 'react';
import VideoServiceLayout from '../../components/VideoServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const Infographic = () => {
    const data = {
        title: "Story Infographic Video Editing",
        breadcrumbLabel: "Infographics",
        mainImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Data Storytelling & Animated Infographics",
        description1: "Turn complex data into compelling stories with animated infographics. We use motion graphics to bring numbers and facts to life, making your information memorable and easy to digest.",
        description2: "Infographic videos are perfect for explaining products, sharing company results, or educating your audience. We focus on a clean, modern aesthetic that aligns with your brand's identity.",
        featureList1: [
            "Dynamic data visualization and charts",
            "Engaging character and icon animation",
            "Clear and concise narrative structure"
        ],
        featureList2: [
            "Custom 2D/3D motion graphics",
            "Professional voiceover integration",
            "Brand-consistent color and typography"
        ],
        stepsTitle: "3 Steps to Your Data Story",
        steps: [
            { title: 'Discovery & Data', desc: 'We review your data and identify the key narrative points.', icon: <FiLayers /> },
            { title: 'Production & Animation', desc: 'Our animators bring your data to life with motion.', icon: <FiPenTool /> },
            { title: 'Final Delivery', desc: 'Receive high-quality masters ready for presentations or web.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Simplify the complex and engage your audience with data-driven motion graphics.",
        advantageFeatureList: [
            "Custom 2D/3D motion graphics",
            "Professional voiceover integration",
            "Brand-consistent color and typography"
        ],
        faqs: [
            {
                question: "Can you animate charts from Excel or CSV files?",
                answer: "Yes, we can take your raw data files and transform them into dynamic, animated charts and graphs."
            },
            {
                question: "Do you offer localized versions for different languages?",
                answer: "Absolutely. We can create separate versions of your infographic video with translated text and voiceovers."
            }
        ],
        activePath: "/services/video-animation/infographic"
    };

    return <VideoServiceLayout {...data} />;
};

export default Infographic;
