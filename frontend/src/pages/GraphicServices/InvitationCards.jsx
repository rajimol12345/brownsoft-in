import React from 'react';
import GraphicServiceLayout from '../../components/GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const InvitationCards = () => {
    const data = {
        title: "Invitation Cards, Postcards & Posters",
        breadcrumbLabel: "Invitations & Posters",
        mainImg: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Memorable Print Designs",
        description1: "Whether it's a grand wedding, a corporate event, or a personal celebration, our custom invitation cards set the perfect tone. We also design high-impact postcards and posters that capture attention and communicate your message effectively.",
        description2: "Our designs are tailored to your event's theme and personality. We pay close attention to typography, color palettes, and paper selection to ensure your print materials look as good in hand as they do on screen.",
        featureList1: [
            "Custom wedding and event invitations",
            "Professional corporate postcards",
            "Eye-catching event posters"
        ],
        featureList2: [
            "Unique typography and layouts",
            "Print-ready high-resolution files",
            "Multiple style concepts"
        ],
        stepsTitle: "3 Steps to Your Custom Print",
        steps: [
            { title: 'Theme Discovery', desc: 'We discuss your event theme and style.', icon: <FiLayers /> },
            { title: 'Concept Design', desc: 'We create initial layout concepts for you.', icon: <FiPenTool /> },
            { title: 'Print Readiness', desc: 'We finalize and prepare files for printing.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Physical print materials create a lasting impression that digital media often lacks.",
        advantageFeatureList: [
            "Premium finish and texture advice",
            "Scalable vector illustrations",
            "Quick turnaround for events"
        ],
        faqs: [
            {
                question: "Do you handle the actual printing?",
                answer: "We provide print-ready files and can recommend reliable printing services, but we do not handle printing in-house."
            },
            {
                question: "Can you design for specific sizes?",
                answer: "Yes, we can design for any standard or custom size requirements you may have."
            }
        ],
        activePath: "/services/graphics-design/invitation-cards"
    };

    return <GraphicServiceLayout {...data} />;
};

export default InvitationCards;
