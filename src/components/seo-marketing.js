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

const overviewData = {
    title: "SEO & Digital Marketing",
    subtitle: "Strategic Marketing Solutions for Business Growth",
    description: "In today's digital landscape, a strong online presence is non-negotiable. Our SEO and marketing services are designed to propel your brand to the top of search results and engage your audience across multiple channels. We combine technical SEO expertise with creative marketing strategies to drive organic traffic, increase conversions, and maximize your ROI.",
    mainImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    advantageImg: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2062&auto=format&fit=crop",
    features1: ["Targeted Keyword Research", "Data-Driven Marketing Insights", "Expert Content Strategy", "Social Media Growth Hacks"],
    features2: ["Performance Tracking", "Competitive Market Analysis", "Increased Brand Awareness", "High-Quality Lead Generation"]
};

const SeoMarketing = () => {
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
            <div className="sd-page-header">
                <Container>
                    <h1 className="sd-page-title">{currentData.title}</h1>
                    <div className="sd-breadcrumb">
                        <span>Home</span>
                        <FiArrowRight className="mx-2" />
                        <span>Services</span>
                        <FiArrowRight className="mx-2" />
                        <span className="active">{currentData.title}</span>
                    </div>
                </Container>
            </div>

            <Container className="py-5">
                <Row className="gy-5">
                    {/* Sidebar */}
                    <Col lg={4} className="order-2 order-lg-1">
                        <div className="sd-sidebar">
                            {/* Service List */}
                            <div className="sd-sidebar-card mb-4">
                                <h4 className="sd-sidebar-title">All Services</h4>
                                <ul className="sd-service-list">
                                    <li 
                                        className={currentServiceKey === null ? 'active' : ''}
                                        onClick={() => setCurrentServiceKey(null)}
                                    >
                                        Overview <FiArrowRight />
                                    </li>
                                    {servicesList.map((service) => (
                                        <li 
                                            key={service}
                                            className={currentServiceKey === service ? 'active' : ''}
                                            onClick={() => setCurrentServiceKey(service)}
                                        >
                                            {service} <FiArrowRight />
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Download Card */}
                            <div className="sd-sidebar-card mb-4 sd-download-card">
                                <h4 className="sd-sidebar-title">Downloads</h4>
                                <div className="sd-download-btns">
                                    <button onClick={() => handleDownload('pdf')} className="sd-download-btn pdf">
                                        <div className="d-flex align-items-center">
                                            <FaFilePdf className="me-3" />
                                            <div className="text-start">
                                                <span>Download PDF</span>
                                                <small>Case Study.pdf</small>
                                            </div>
                                        </div>
                                    </button>
                                    <button onClick={() => handleDownload('doc')} className="sd-download-btn doc">
                                        <div className="d-flex align-items-center">
                                            <FaFileWord className="me-3" />
                                            <div className="text-start">
                                                <span>Download DOC</span>
                                                <small>Guide.docx</small>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Support Card */}
                            <div className="sd-sidebar-card sd-support-card">
                                <div className="sd-support-content">
                                    <div className="sd-support-icon">
                                        <FiPhoneCall />
                                    </div>
                                    <h4>Need Any Help?</h4>
                                    <p>Our experts are ready to help you grow your business.</p>
                                    <a href="tel:+918300050033" className="sd-support-btn">
                                        Contact Us Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Main Content */}
                    <Col lg={8} className="order-1 order-lg-2">
                        <div className="sd-main-content">
                            <div className="sd-main-img mb-4">
                                <img src={currentData.mainImg} alt={currentData.title} className="img-fluid rounded-4" />
                            </div>

                            <h2 className="sd-content-title mb-3">{currentData.subtitle}</h2>
                            <p className="sd-description mb-4">{currentData.description}</p>

                            <Row className="gy-4 mb-5">
                                <Col md={6}>
                                    <div className="sd-feature-list">
                                        {currentData.features1.map((feat, i) => (
                                            <div key={i} className="sd-feature-item">
                                                <FiCheckSquare className="text-primary me-2" />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="sd-feature-list">
                                        {currentData.features2.map((feat, i) => (
                                            <div key={i} className="sd-feature-item">
                                                <FiCheckSquare className="text-primary me-2" />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            </Row>

                            {/* Process Steps */}
                            <div className="sd-process-section mb-5">
                                <h3 className="sd-section-title mb-4">Our Methodology</h3>
                                <Row className="gy-4">
                                    <Col md={4}>
                                        <div className="sd-step-card text-center">
                                            <div className="sd-step-icon">
                                                <FiSearch />
                                            </div>
                                            <h5>Analysis</h5>
                                            <p>Deep dive into your market and competitors.</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="sd-step-card text-center">
                                            <div className="sd-step-icon">
                                                <FiTarget />
                                            </div>
                                            <h5>Strategy</h5>
                                            <p>Customized marketing roadmap for growth.</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="sd-step-card text-center">
                                            <div className="sd-step-icon">
                                                <FiTrendingUp />
                                            </div>
                                            <h5>Growth</h5>
                                            <p>Executing and scaling for maximum ROI.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* Advantage Section */}
                            <div className="sd-advantage-box rounded-4 overflow-hidden mb-5">
                                <Row className="g-0 align-items-center">
                                    <Col md={5}>
                                        <img src={currentData.advantageImg} alt="Advantage" className="img-fluid" />
                                    </Col>
                                    <Col md={7}>
                                        <div className="p-4">
                                            <h4 className="mb-3">Strategic Advantage</h4>
                                            <p className="mb-0">We don't just provide services; we provide measurable results that impact your bottom line directly.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* FAQ */}
                            <div className="sd-faq-section">
                                <h3 className="sd-section-title mb-4">Service Questions</h3>
                                <Accordion defaultActiveKey="0" className="sd-custom-accordion">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <FiHelpCircle className="me-2 text-primary" />
                                            How do you measure marketing success?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            We use key performance indicators (KPIs) like organic traffic growth, conversion rates, cost per acquisition, and overall ROI to measure the success of every campaign.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <FiHelpCircle className="me-2 text-primary" />
                                            Do you provide reports for the campaigns?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Yes, we provide detailed monthly reports that break down all metrics, work performed, and our strategic plan for the upcoming month.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SeoMarketing;
