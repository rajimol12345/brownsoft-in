import React from 'react';
import GraphicServiceLayout from '../../components/GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const SocialMediaBanners = () => {
    const data = {
        title: "Social Media Banners Design",
        breadcrumbLabel: "Social Media Banners",
        mainImg: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Dynamic Digital Brand Presence",
        description1: "Your social media banners are your digital storefront's first impression. We design high-energy, brand-aligned banners for YouTube, LinkedIn, Facebook, and Twitter that instantly communicate who you are.",
        description2: "We optimize every design for multiple screen sizes—ensuring your profile looks professional whether viewed on a desktop or a mobile phone. We focus on clear messaging and high-impact visuals that drive engagement.",
        featureList1: [
            "YouTube channel art and thumbnails",
            "LinkedIn personal and company banners",
            "Facebook cover and event photos"
        ],
        featureList2: [
            "Cross-device optimized layouts",
            "High-resolution digital exports",
            "Consistent multi-platform style"
        ],
        stepsTitle: "3 Steps to Your Digital Cover",
        steps: [
            { title: 'Platform Specs', desc: 'We define the target platform dimensions.', icon: <FiLayers /> },
            { title: 'Visual Concept', desc: 'We build high-impact digital art.', icon: <FiPenTool /> },
            { title: 'Final Export', desc: 'Receive optimized files for all devices.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=600",
        advantageContent: "Professional banners significantly increase profile trust and follower conversion.",
        advantageFeatureList: [
            "Safe-zone aware design",
            "Fast-loading web formats",
            "Cohesive personal branding"
        ],
        faqs: [
            {
                question: "Do you design banners for all platforms?",
                answer: "Yes, we cover everything from Twitter headers to YouTube channel art, following specific platform guidelines."
            },
            {
                question: "Can you include my photo in the banner?",
                answer: "Absolutely! We can professionally retouch and integrate your portrait into any social media design."
            }
        ],
        activePath: "/services/graphics-design/social-media-banners"
    };

    return <GraphicServiceLayout {...data} />;
};

export default SocialMediaBanners;
