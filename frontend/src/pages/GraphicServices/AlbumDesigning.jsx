import React from 'react';
import GraphicServiceLayout from '../../components/GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const AlbumDesigning = () => {
    const data = {
        title: "Album Designing — Weddings & Real Estate",
        breadcrumbLabel: "Album Designing",
        mainImg: "https://images.unsplash.com/photo-1546190255-451a91afc548?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Preserving Memories and Portfolios",
        description1: "A well-designed album is a timeless way to showcase your most important moments or professional portfolios. We specialize in custom album layouts for weddings and high-end real estate presentations.",
        description2: "Our approach to album design is cinematic and storytelling-driven. We don't just place photos on a page; we create a narrative flow that highlights the emotion of a wedding or the architectural beauty of a property.",
        featureList1: [
            "Custom wedding story albums",
            "Luxury real estate portfolios",
            "Modern and classic layout styles"
        ],
        featureList2: [
            "Professional color consistency",
            "High-resolution print-ready files",
            "Unlimited revision rounds"
        ],
        stepsTitle: "3 Steps to Your Custom Album",
        steps: [
            { title: 'Photo Selection', desc: 'We help you choose the best shots.', icon: <FiLayers /> },
            { title: 'Layout Design', desc: 'We build the visual story and flow.', icon: <FiPenTool /> },
            { title: 'Final Review', desc: 'We perfect the album for printing.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1518131359073-ad293c3f90ca?auto=format&fit=crop&q=80&w=600",
        advantageContent: "A professionally designed album adds immense value to your services and memories.",
        advantageFeatureList: [
            "Bespoke cover and spine design",
            "Optimized for premium printing",
            "Cohesive and elegant aesthetics"
        ],
        faqs: [
            {
                question: "How many pages can an album have?",
                answer: "We can design albums from 10 to 100+ pages, depending on your needs and the printing house's specs."
            },
            {
                question: "Do you offer printing and binding?",
                answer: "We focus on the design phase. We provide the final digital files ready for your preferred professional lab."
            }
        ],
        activePath: "/services/graphics-design/album-designing"
    };

    return <GraphicServiceLayout {...data} />;
};

export default AlbumDesigning;
