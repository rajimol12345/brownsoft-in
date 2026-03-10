import React from 'react';
import GraphicServiceLayout from '../../components/GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const BusinessCardsBillboards = () => {
    const data = {
        title: "Design Business Cards & Billboards",
        breadcrumbLabel: "Business Cards & Billboards",
        mainImg: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200",
        subtitle: "From Pocket-Sized to Sky-High",
        description1: "We design professional business cards that leave a lasting first impression and high-impact billboards that capture attention at a distance. Our designs are optimized for their specific viewing context.",
        description2: "A business card needs to be legible and tactile, while a billboard needs to be bold and concise. We understand the technical requirements of both, from high-resolution print specs to large-format outdoor visibility.",
        featureList1: [
            "Premium business card layouts",
            "Large-format billboard design",
            "Consistent brand identity"
        ],
        featureList2: [
            "High-contrast visual design",
            "Print-ready technical files",
            "Custom finish recommendations"
        ],
        stepsTitle: "3 Steps to Big Results",
        steps: [
            { title: 'Format Analysis', desc: 'We define the size and viewing context.', icon: <FiLayers /> },
            { title: 'Visual Design', desc: 'We build high-impact concepts.', icon: <FiPenTool /> },
            { title: 'Final Production', desc: 'We provide files for the print house.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Consistent professional design across all scales builds brand trust.",
        advantageFeatureList: [
            "Vector-based infinite scalability",
            "Optimized for readability",
            "Modern and professional look"
        ],
        faqs: [
            {
                question: "Do you design for specific billboard sizes?",
                answer: "Yes, we can design for any standard or custom outdoor advertising format, including digital billboards."
            },
            {
                question: "What finishes do you recommend for business cards?",
                answer: "We can recommend finishes like spot UV, matte lamination, or foil stamping to make your card stand out."
            }
        ],
        activePath: "/services/graphics-design/business-cards-billboards"
    };

    return <GraphicServiceLayout {...data} />;
};

export default BusinessCardsBillboards;
