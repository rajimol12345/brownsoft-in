import React from 'react';
import WebDesignDetailLayout from '../../components/WebDesignDetailLayout';

const SmallBusinessWebsites = () => {
    const data = {
        title: 'Small Business Websites',
        breadcrumbLabel: 'Small Business',
        mainImg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
        description1: "Get your business online fast with a professional, affordable, and high-impact website. We help local heroes and small agencies outshine the competition with big-brand digital quality.",
        description2: "Our small business packages are designed to be easy to manage, fast to launch, and effective at bringing in local leads and inquiries.",
        subtitle: "Local Impact with Global Quality",
        features1: [
            "Local SEO Optimization",
            "Google Maps Integration",
            "Appointment Booking Ready",
            "Lead Capture Forms"
        ],
        features2: [
            "Mobile-Friendly Response",
            "Easy Self-Editing Tools",
            "Social Media Linking",
            "Secure Domain & Hosting"
        ],
        advantageImg: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200',
        advantageText: "We make high-end web design accessible and manageable for growing small businesses.",
        advantagePoints: [
            "Affordable Growth Paths",
            "Quick Launch Timelines",
            "User-Friendly Dashboards",
            "Scalable Feature Lists"
        ],
        activeService: "Small Business Websites",
        faqs: [
            {
                question: "Can I update the content myself?",
                answer: "Absolutely! We provide a user-friendly CMS with training, so you can update text and images easily without any coding knowledge."
            }
        ]
    };

    return <WebDesignDetailLayout {...data} />;
};

export default SmallBusinessWebsites;
