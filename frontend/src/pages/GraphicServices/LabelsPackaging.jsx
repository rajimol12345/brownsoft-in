import React from 'react';
import GraphicServiceLayout from '../../components/GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const LabelsPackaging = () => {
    const data = {
        title: "Labels & Packaging Design",
        breadcrumbLabel: "Labels & Packaging",
        mainImg: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Product Packaging That Sells",
        description1: "In a crowded marketplace, your product's packaging is your silent salesperson. We design labels and packaging that not only protect your product but also tell your brand story and attract customers on the shelf.",
        description2: "We consider everything from material constraints and shelf visibility to consumer psychology. Our goal is to create packaging that is functional, beautiful, and uniquely yours.",
        featureList1: [
            "Custom bottle and jar labels",
            "Innovative box packaging design",
            "Eco-friendly packaging concepts"
        ],
        featureList2: [
            "3D mockups for visualization",
            "Dieline creation and verification",
            "Brand-consistent color matching"
        ],
        stepsTitle: "3 Steps to Shelf Success",
        steps: [
            { title: 'Strategy & Mockup', desc: 'We analyze the market and create concepts.', icon: <FiLayers /> },
            { title: 'Design & Dieline', desc: 'We build precise design structures.', icon: <FiPenTool /> },
            { title: 'Production Files', desc: 'We provide technical files for printers.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Professional packaging increases perceived value and brand loyalty.",
        advantageFeatureList: [
            "Compliant with industry standards",
            "Print-ready CMYK files",
            "Visual impact on retail shelves"
        ],
        faqs: [
            {
                question: "Do you create the 3D dielines?",
                answer: "Yes, we create standard dielines for boxes, bags, and labels. For complex shapes, we work with your manufacturer's specs."
            },
            {
                question: "Can you design for sustainable materials?",
                answer: "Definitely! We can adapt our designs to work beautifully with recycled and eco-friendly packaging materials."
            }
        ],
        activePath: "/services/graphics-design/labels-packaging"
    };

    return <GraphicServiceLayout {...data} />;
};

export default LabelsPackaging;
