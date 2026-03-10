import React from 'react';
import GraphicServiceLayout from '../../components/GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const UIUXWebsite = () => {
    const data = {
        title: "UI UX Design For Websites",
        breadcrumbLabel: "UI/UX Website",
        mainImg: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200",
        subtitle: "User-Centric Web Experiences",
        description1: "We create intuitive and visually stunning website designs that prioritize user experience. Our approach combines aesthetic beauty with functional clarity, ensuring your visitors have a seamless journey from the moment they land on your site.",
        description2: "Our team conducts thorough research to understand your audience and business goals. We use this data to create wireframes and high-fidelity prototypes that are tested for usability and performance.",
        featureList1: [
            "Responsive and adaptive layouts",
            "Interactive prototyping",
            "User journey mapping"
        ],
        featureList2: [
            "Accessibility-focused design",
            "Consistent branding integration",
            "Conversion rate optimization"
        ],
        stepsTitle: "3 Steps to Your Perfect UI/UX",
        steps: [
            { title: 'Discovery & Research', desc: 'We analyze your brand and user needs.', icon: <FiLayers /> },
            { title: 'Concept & Wireframe', desc: 'We build the skeletal structure of your site.', icon: <FiPenTool /> },
            { title: 'Final UI Design', desc: 'We deliver high-fidelity, polished designs.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600",
        advantageContent: "A well-designed UI/UX can significantly increase user retention and business growth.",
        advantageFeatureList: [
            "Modern and clean aesthetics",
            "Fast-loading design assets",
            "Developer-friendly handoffs"
        ],
        faqs: [
            {
                question: "Do you design for all screen sizes?",
                answer: "Yes, our designs are fully responsive, ensuring a great experience on mobile, tablet, and desktop."
            },
            {
                question: "Will I get the source design files?",
                answer: "Absolutely! We provide all Figma or Adobe XD files upon project completion."
            }
        ],
        activePath: "/services/graphics-design/ui-ux-website"
    };

    return <GraphicServiceLayout {...data} />;
};

export default UIUXWebsite;
