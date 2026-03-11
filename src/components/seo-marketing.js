import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FiCheckSquare, FiTrendingUp, FiTarget, FiSearch, FiPhoneCall, FiArrowRight, FiHelpCircle } from 'react-icons/fi';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';
import '../style/seo-marketing.css';

const serviceData = {
    "Complete SEO Package": {
        title: "Complete SEO Package",
        subtitle: "Comprehensive Search Engine Optimization",
        description: "Our Complete SEO Package is a full-service solution designed to elevate your website's visibility from every angle. We combine on-page technical excellence with off-page authority building to ensure your brand dominates search engine results pages (SERPs).",
        mainImg: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2070&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        features1: ["Keyword Research & Strategy", "On-Page SEO Optimization", "Technical SEO Audit", "Content Strategy"],
        features2: ["High-Quality Link Building", "Monthly Progress Reports", "Competitor Analysis", "Local SEO Integration"]
    },
    "DappRadar Banner Ads": {
        title: "DappRadar Banner Ads",
        subtitle: "Targeted Blockchain Advertising",
        description: "Reach the heart of the decentralized world with our DappRadar Banner Ads management. We design and execute high-impact banner campaigns that specifically target blockchain enthusiasts and DApp users, ensuring maximum ROI for your Web3 project.",
        mainImg: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2070&auto=format&fit=crop",
        features1: ["Blockchain Audience Targeting", "High-Conversion Ad Design", "Real-time Performance Tracking", "Platform Specific Optimization"],
        features2: ["Budget Management", "A/B Testing", "Creative Asset Development", "ROI Focused Reporting"]
    },
    "Etherscan Ads Management": {
        title: "Etherscan Ads Management",
        subtitle: "Premium Crypto Visibility",
        description: "Leverage the power of Etherscan, the primary block explorer for Ethereum. Our management services place your brand directly in front of active crypto transactors, providing unmatched authority and visibility in the Ethereum ecosystem.",
        mainImg: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2070&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop",
        features1: ["Ethereum Ecosystem Targeting", "Native Ad Integration", "Audience Segmentation", "Strategic Bid Management"],
        features2: ["Conversion Analytics", "Brand Trust Building", "Custom Ad Scheduling", "Dedicated Account Support"]
    },
    "BscScan Ads Management": {
        title: "BscScan Ads Management",
        subtitle: "Dominate Binance Smart Chain",
        description: "Capture the vast audience of the Binance Smart Chain ecosystem. Our BscScan Ads Management ensures your project is visible to millions of users interacting with BSC tokens and contracts every day.",
        mainImg: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2069&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
        features1: ["BSC User Targeting", "Low Cost Per Impression", "High Visibility Placements", "Campaign Scalability"],
        features2: ["Traffic Quality Auditing", "Multi-language Ad Support", "Direct Contract Interaction Ads", "Weekly Performance Syncs"]
    },
    "Banner Advertising Campaigns": {
        title: "Banner Advertising",
        subtitle: "Visual Impact Marketing",
        description: "Broaden your reach with strategic banner advertising across a network of high-traffic websites. We focus on creative excellence and data-driven placement to ensure your brand remains top-of-mind for your target audience.",
        mainImg: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2062&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        features1: ["Cross-Platform Reach", "Dynamic Creative Design", "Contextual Targeting", "Behavioral Retargeting"],
        features2: ["Frequency Capping", "Fraud Detection", "Transparent Reporting", "Mobile-First Ad Formats"]
    },
    "Google Adwords Management": {
        title: "Google Adwords",
        subtitle: "PPC & Search Marketing",
        description: "Maximize your presence on the world's most powerful search engine. Our certified experts manage your Google Ads (AdWords) campaigns to drive high-intent traffic, reduce cost-per-acquisition, and scale your business growth.",
        mainImg: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2070&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        features1: ["Search & Display Campaigns", "Smart Bidding Strategies", "Keyword Negative List Management", "Ad Extension Optimization"],
        features2: ["Landing Page CRO", "Remarketing Campaigns", "Detailed Monthly Insights", "Budget Fluidity Planning"]
    },
    "YouTube Advertising Campaigns": {
        title: "YouTube Advertising",
        subtitle: "Video Content Marketing",
        description: "Tell your brand's story through compelling video ads on YouTube. We manage everything from TrueView in-stream ads to discovery ads, reaching users during their most engaged moments of content consumption.",
        mainImg: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2070&auto=format&fit=crop",
        features1: ["Video Content Creation", "In-Stream Ad Placement", "Channel Specific Targeting", "Bumper Ad Integration"],
        features2: ["View-Through Conversion Tracking", "Audience Affinity Targeting", "Remarketing from Video Views", "Cross-Device Impact Analysis"]
    },
    "Twitter Ads Management": {
        title: "Twitter Ads",
        subtitle: "Real-time Audience Engagement",
        description: "Ignite conversations around your brand with Twitter Ads. We help you reach influential audiences through promoted tweets, accounts, and trends, optimized for engagement and community growth.",
        mainImg: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2072&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        features1: ["Hashtag Campaign Strategy", "Influencer Audience Targeting", "Tweet Copy Optimization", "Engagement Focused Ads"],
        features2: ["Follower Growth Campaigns", "Website Click Ads", "Twitter Analytics Insights", "Strategic Thread Promotion"]
    },
    "Facebook & Instagram Ads Management": {
        title: "Meta Ads Management",
        subtitle: "Social Media Dominance",
        description: "Harness the power of Meta's massive ecosystem. Our Facebook and Instagram ad campaigns use deep demographic and interest-based targeting to put your products in front of the people most likely to buy.",
        mainImg: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2074&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2070&auto=format&fit=crop",
        features1: ["Lookalike Audience Creation", "Dynamic Product Ads", "Story & Reels Placement", "Lead Generation Forms"],
        features2: ["Pixel & API Tracking", "Creative Refresh Strategy", "Funnel-Based Remarketing", "Detailed ROI Dashboard"]
    },
    "Page Creation and Design": {
        title: "Page Creation & Design",
        subtitle: "High-Conversion Landing Pages",
        description: "Your digital storefront needs to convert. We design and build professional, responsive social media pages and landing pages that reflect your brand identity and are optimized for user engagement.",
        mainImg: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
        features1: ["Responsive UI/UX Design", "Brand Identity Integration", "SEO-Friendly Structures", "Social Media Page Setup"],
        features2: ["Custom Graphic Assets", "Copywriting Support", "Mobile Optimization", "User Experience Audits"]
    },
    "Reddit Promotion": {
        title: "Reddit Promotion",
        subtitle: "Community-Driven Marketing",
        description: "Engage with the most passionate communities on the internet. Our Reddit promotion strategies focus on authentic engagement and targeted subreddit advertising to build trust and drive traffic from niche audiences.",
        mainImg: "https://images.unsplash.com/photo-1611162618828-bc409f073cbf?q=80&w=2074&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        features1: ["Subreddit Research", "Organic Engagement Strategy", "Native Ad Management", "Community Trust Building"],
        features2: ["Viral Potential Analysis", "Reddit Analytics Monitoring", "Moderation Compliance", "AMA Session Coordination"]
    },
    "Social Media Management": {
        title: "Social Media Management",
        subtitle: "Full-Scale Social Presence",
        description: "Build a vibrant and consistent brand presence across all major social platforms. We handle content creation, scheduling, community engagement, and growth strategies so you can focus on running your business.",
        mainImg: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
        features1: ["Multi-Platform Posting", "Content Calendar Planning", "Community Moderation", "Engagement Growth Tactics"],
        features2: ["Brand Voice Definition", "Influencer Outreach", "Social Listening Reports", "Trend-Based Content Creation"]
    },
};

const SeoMarketing = () => {
    const overviewData = {
        title: "SEO & Digital Marketing",
        subtitle: "Strategic Marketing Solutions for Business Growth",
        description: "In today's digital landscape, a strong online presence is non-negotiable. Our SEO and marketing services are designed to propel your brand to the top of search results and engage your audience across multiple channels. We combine technical SEO expertise with creative marketing strategies to drive organic traffic, increase conversions, and maximize your ROI.",
        mainImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2062&auto=format&fit=crop",
        features1: ["Targeted Keyword Research", "Data-Driven Marketing Insights", "Expert Content Strategy", "Social Media Growth Hacks"],
        features2: ["Performance Tracking", "Competitive Market Analysis", "Increased Brand Awareness", "High-Quality Lead Generation"]
    };

    const servicesList = Object.keys(serviceData);
    const [currentServiceKey, setCurrentServiceKey] = useState(null);
    const [currentData, setCurrentData] = useState(overviewData);

    useEffect(() => {
        if (currentServiceKey) {
            setCurrentData(serviceData[currentServiceKey]);
        } else {
            setCurrentData(overviewData);
        }
        window.scrollTo(0, 0);
    }, [currentServiceKey]);

    const handleDownload = (type) => {
        const filePath = type === 'pdf' ? '/assets/SEO-Marketing-Case-Study.pdf' : '/assets/Marketing-Guide.docx';
        const fileName = type === 'pdf' ? 'SEO-Marketing-Case-Study.pdf' : 'Marketing-Guide.docx';

        const link = document.createElement('a');
        link.href = filePath;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="sd-page-wrapper">
            {/* Page Header */}
            <div className="sd-page-headers">
                <Container>
                    <h1 className="sd-page-title">{currentData.title}</h1>
                    <div className="sd-breadcrumb">
                        <a href="/">Home</a>
                        <span>/</span>
                        <span>SEO & Marketing</span>
                        {currentServiceKey && (
                            <>
                                <span>/</span>
                                <span>{currentData.title}</span>
                            </>
                        )}
                    </div>
                </Container>
            </div>

            <Container className="py-5">
                <Row>
                    {/* Main Content Area */}
                    <Col lg={8}>
                        <div className="sd-content-section">
                            <img src={currentData.mainImg} alt={currentData.title} className="sd-main-image" />
                            
                            <h2 className="sd-section-title">{currentData.subtitle}</h2>
                            <p className="sd-text">
                                {currentData.description}
                            </p>
                            <p className="sd-text">
                                We utilize the latest industry tools and methodologies to ensure your project not only meets but exceeds expectations. Our team of specialists is dedicated to providing transparent, measurable, and sustainable results that contribute directly to your bottom line.
                            </p>

                            <h3 className="sd-section-subtitle">Excellence in Execution</h3>
                            <p className="sd-text">
                                Our approach is built on a foundation of data and strategy, ensuring that every marketing dollar spent is an investment in your brand's future.
                            </p>

                            <Row className="mb-4">
                                <Col md={6}>
                                    <ul className="sd-feature-list">
                                        {currentData.features1.map((item, index) => (
                                            <li key={index} className="sd-feature-item">
                                                <FiCheckSquare className="sd-feature-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <ul className="sd-feature-list">
                                        {currentData.features2.map((item, index) => (
                                            <li key={index} className="sd-feature-item">
                                                <FiCheckSquare className="sd-feature-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>

                            <h2 className="sd-section-title">3 Steps to Success</h2>
                            <p className="sd-text">
                                We follow a proven workflow to deliver consistent results for our clients.
                            </p>

                            <Row className="mb-5">
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon">
                                            <FiSearch />
                                        </div>
                                        <h4 className="sd-step-title">Audit & Research</h4>
                                        <p className="sd-text small mb-0">Deep dive into data to identify opportunities.</p>
                                    </div>
                                </Col>
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon">
                                            <FiTarget />
                                        </div>
                                        <h4 className="sd-step-title">Strategy Design</h4>
                                        <p className="sd-text small mb-0">Custom roadmap built for your specific goals.</p>
                                    </div>
                                </Col>
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon">
                                            <FiTrendingUp />
                                        </div>
                                        <h4 className="sd-step-title">Launch & Optimize</h4>
                                        <p className="sd-text small mb-0">Continuous monitoring and refined execution.</p>
                                    </div>
                                </Col>
                            </Row>

                            <h3 className="sd-section-subtitle">Key Advantages</h3>
                            <div className="sd-advantage-box">
                                <img src={currentData.advantageImg} alt="Advantage" className="sd-advantage-img" />
                                <div className="sd-advantage-content">
                                    <p className="sd-text">
                                        Partnering with us gives you access to top-tier talent and cutting-edge technology.
                                    </p>
                                    <ul className="sd-feature-list" style={{ gridTemplateColumns: '1fr' }}>
                                        {currentData.features2.slice(0, 4).map((item, index) => (
                                            <li key={index} className="sd-feature-item">
                                                <FiCheckSquare className="sd-feature-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="sd-faq-modern-wrapper mt-5">
                                <h3 className="sd-section-subtitle mb-4">Common Questions</h3>
                                <Accordion defaultActiveKey="0" className="sd-custom-accordion">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <FiHelpCircle className="me-2" /> What is the expected timeline for results?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Timeline varies by service. PPC and social ads can show results in days, while SEO typically requires 3-6 months for significant organic growth. We provide clear expectations during onboarding.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <FiHelpCircle className="me-2" /> Do you provide regular reporting?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Yes, we provide comprehensive monthly reports detailing all KPIs, work completed, and strategic adjustments for the following period.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <FiHelpCircle className="me-2" /> Can I customize my service package?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Absolutely. We believe in tailored solutions. We can mix and match services to create a package that perfectly aligns with your current business needs and budget.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </Col>

                    {/* Sidebar with Navigation */}
                    <Col lg={4}>
                        <div className="sd-sidebar">
                            {/* Services Navigation Menu */}
                            <div className="sd-widget">
                                <h4 className="sd-widget-title">SEO & Marketing Services</h4>
                                <div className="sd-service-menu">
                                    <button 
                                        onClick={() => setCurrentServiceKey(null)}
                                        className={`sd-service-link w-100 border-0 text-start ${currentServiceKey === null ? 'active' : ''}`}
                                    >
                                        SEO & Marketing Overview
                                    </button>
                                    {servicesList.map((item, index) => (
                                        <button 
                                            key={index} 
                                            onClick={() => setCurrentServiceKey(item)}
                                            className={`sd-service-link w-100 border-0 text-start ${currentServiceKey === item ? 'active' : ''}`}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Brochure Widget */}
                            <div className="sd-widget">
                                <h4 className="sd-widget-title">Free Resources</h4>
                                <button className="sd-download-btn w-100 border-0" onClick={() => handleDownload('pdf')}>
                                    <FaFilePdf style={{ color: '#ff0000' }} />
                                    <span>DOWNLOAD CASE STUDY</span>
                                </button>
                                <button className="sd-download-btn w-100 border-0" onClick={() => handleDownload('doc')}>
                                    <FaFileWord style={{ color: '#2b579a' }} />
                                    <span>MARKETING GUIDE</span>
                                </button>
                            </div>

                            {/* Contact Widget */}
                            <div className="sd-widget sd-contact-widget">
                                <div className="sd-contact-icon">
                                    <FiPhoneCall />
                                </div>
                                <h4 className="sd-widget-title text-white border-0 pb-0 after-none">Growth Specialist? Call Us</h4>
                                <p className="sd-contact-phone">+568 245 3585</p>
                                <a href="/contact" className="sd-contact-btn">
                                    Book a Consultation <FiArrowRight className="ms-2" />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SeoMarketing;
