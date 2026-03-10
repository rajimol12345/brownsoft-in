import React from 'react';
import GraphicServiceLayout from '../../components/GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const UIUXMobile = () => {
    const data = {
        title: "UI UX Design for Mobile Apps",
        breadcrumbLabel: "UI/UX Mobile",
        mainImg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Seamless Mobile Experiences",
        description1: "Mobile users have high expectations. We design mobile app interfaces that are not only beautiful but also intuitive and lightning-fast. Our focus is on thumb-friendly navigation and clear visual hierarchies.",
        description2: "From iOS to Android, we follow platform-specific design guidelines while maintaining your brand's unique identity. We create high-fidelity prototypes that allow you to feel the app before a single line of code is written.",
        featureList1: [
            "iOS and Android native design",
            "Cross-platform app interfaces",
            "Micro-interaction design"
        ],
        featureList2: [
            "Thumb-zone optimized navigation",
            "Dark mode and accessibility",
            "Prototype testing and feedback"
        ],
        stepsTitle: "3 Steps to Your Mobile App",
        steps: [
            { title: 'User Flows', desc: 'We map out every screen and interaction.', icon: <FiLayers /> },
            { title: 'Interface Design', desc: 'We create the visual look and feel.', icon: <FiPenTool /> },
            { title: 'Interactive Prototype', desc: 'We build a clickable demo of your app.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Intuitive mobile design reduces user frustration and increases app retention.",
        advantageFeatureList: [
            "Modern, minimalist UI styles",
            "Comprehensive design systems",
            "Ready for developer implementation"
        ],
        faqs: [
            {
                question: "Do you design for both iOS and Android?",
                answer: "Yes, we can design specifically for each platform or create a unified cross-platform design (Material Design/Human Interface)."
            },
            {
                question: "What tools do you use for mobile design?",
                answer: "We primarily use Figma, which allows for real-time collaboration and easy handoffs."
            }
        ],
        activePath: "/services/graphics-design/ui-ux-mobile"
    };

    return <GraphicServiceLayout {...data} />;
};

export default UIUXMobile;
