import React from 'react';
import GraphicServiceLayout from '../../components/GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const PhotoEditing = () => {
    const data = {
        title: "Photo Editing & Retouching",
        breadcrumbLabel: "Photo Editing",
        mainImg: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Professional Grade Visual Perfection",
        description1: "Good photography becomes great with professional editing. We provide high-end retouching services for portraits, fashion, products, and commercial photography, ensuring every image meets industry standards.",
        description2: "Our retouching process is meticulous but natural. We enhance colors, balance lighting, and remove imperfections without losing the authentic feel of the original photograph. We use advanced non-destructive techniques to maintain maximum image quality.",
        featureList1: [
            "High-end skin retouching",
            "Color correction and grading",
            "Product image enhancement"
        ],
        featureList2: [
            "Frequency separation techniques",
            "Lighting and exposure balancing",
            "Object removal and compositing"
        ],
        stepsTitle: "3 Steps to Perfection",
        steps: [
            { title: 'Image Analysis', desc: 'We identify areas for enhancement.', icon: <FiLayers /> },
            { title: 'Expert Retouching', desc: 'We apply professional edits manually.', icon: <FiPenTool /> },
            { title: 'Final Polish', desc: 'We ensure the output is flawless.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1493723843671-1d655e6d984d?auto=format&fit=crop&q=80&w=600",
        advantageContent: "High-quality editing significantly boosts your brand's professional image.",
        advantageFeatureList: [
            "Natural and realistic results",
            "Consistent look across series",
            "Full resolution preservation"
        ],
        faqs: [
            {
                question: "Can you fix blurry or low-quality photos?",
                answer: "We can significantly improve lighting and color, but severely blurry or low-resolution images have technical limits for recovery."
            },
            {
                question: "Do you offer bulk editing for events?",
                answer: "Yes, we provide batch editing services for large sets of photos from weddings or corporate events."
            }
        ],
        activePath: "/services/graphics-design/photo-editing"
    };

    return <GraphicServiceLayout {...data} />;
};

export default PhotoEditing;
