import React from 'react';
import GraphicServiceLayout from '../../components/GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const BackgroundRemoval = () => {
    const data = {
        title: "Image Background Removal",
        breadcrumbLabel: "Background Removal",
        mainImg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Clean and Professional Product Images",
        description1: "High-quality product images are essential for e-commerce success. We provide professional background removal services, ensuring your products look clean, sharp, and consistent across your entire store.",
        description2: "Using advanced masking and pen tool techniques, we handle even the most complex edges—like hair, fur, or intricate product details. We deliver your images in the format that best suits your needs, whether it's transparent PNG or clean white JPG.",
        featureList1: [
            "Precise manual clipping paths",
            "Advanced hair and fur masking",
            "Transparent or solid backgrounds"
        ],
        featureList2: [
            "Consistent shadow and reflection",
            "Bulk image processing",
            "Amazon and eBay standard images"
        ],
        stepsTitle: "3 Steps to Clean Images",
        steps: [
            { title: 'Image Audit', desc: 'We review your source images for quality.', icon: <FiLayers /> },
            { title: 'Precise Removal', desc: 'We manually remove backgrounds with precision.', icon: <FiPenTool /> },
            { title: 'Quality Check', desc: 'We ensure edges are smooth and natural.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Clean backgrounds eliminate distractions and make your products pop.",
        advantageFeatureList: [
            "Fast 24-hour turnaround",
            "Scalable for large catalogs",
            "Professional e-commerce aesthetics"
        ],
        faqs: [
            {
                question: "What file formats do you deliver?",
                answer: "We typically deliver PNGs with transparent backgrounds or JPGs with white backgrounds, but we can provide any format you need."
            },
            {
                question: "Can you handle bulk orders?",
                answer: "Yes, we specialize in high-volume background removal for large e-commerce catalogs."
            }
        ],
        activePath: "/services/graphics-design/background-removal"
    };

    return <GraphicServiceLayout {...data} />;
};

export default BackgroundRemoval;
