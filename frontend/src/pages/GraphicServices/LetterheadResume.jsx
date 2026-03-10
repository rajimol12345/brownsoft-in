import React from 'react';
import GraphicServiceLayout from '../../components/GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const LetterheadResume = () => {
    const data = {
        title: "Letterhead and Resume Design",
        breadcrumbLabel: "Letterhead & Resume",
        mainImg: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Professional Personal and Corporate Branding",
        description1: "Professionalism is in the details. We design elegant corporate letterheads that build trust and modern, high-impact resumes that help individuals stand out in a competitive job market.",
        description2: "For businesses, we ensure your stationary is a consistent extension of your brand. For individuals, we focus on layout clarity and visual storytelling to highlight your career achievements effectively.",
        featureList1: [
            "Custom corporate letterheads",
            "Modern professional resumes",
            "Matching business stationary"
        ],
        featureList2: [
            "Clean and readable layouts",
            "Editable Word/PDF templates",
            "Cohesive personal branding"
        ],
        stepsTitle: "3 Steps to Professionalism",
        steps: [
            { title: 'Style Selection', desc: 'We choose a tone—formal or modern.', icon: <FiLayers /> },
            { title: 'Content Layout', desc: 'We organize the info for maximum impact.', icon: <FiPenTool /> },
            { title: 'Final Files', desc: 'Receive print and digital templates.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Consistent professional stationary makes your communications more authoritative.",
        advantageFeatureList: [
            "ATS-friendly resume structures",
            "Vector-based logo integration",
            "Standard and custom paper sizes"
        ],
        faqs: [
            {
                question: "Can I edit the resume myself later?",
                answer: "Yes, we provide editable Microsoft Word templates alongside the final polished PDF versions."
            },
            {
                question: "Is the letterhead compatible with email?",
                answer: "Yes, we can provide digital versions of your letterhead for use in Google Docs or Microsoft Word."
            }
        ],
        activePath: "/services/graphics-design/letterhead-resume"
    };

    return <GraphicServiceLayout {...data} />;
};

export default LetterheadResume;
