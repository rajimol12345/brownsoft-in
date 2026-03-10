import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FiCheckSquare, FiLayers, FiPenTool, FiImage, FiPhoneCall, FiArrowRight, FiHelpCircle, FiChevronRight } from 'react-icons/fi';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../style/service.css';

// Images for Video & Animation
const mainImg = "/assets/images/video-production-main.png";
const advantageImg = "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop";

const VideoAnimation = () => {
    const servicesList = [
        { label: "TikTok Reels and YouTube Shorts", path: "/services/video-animation/shorts-reels" },
        { label: "Videos for YouTube and Vlogs", path: "/services/video-animation/youtube-vlogs" },
        { label: "Documentary Film Video Editing", path: "/services/video-animation/documentary" },
        { label: "Business & Corporate Video Editing", path: "/services/video-animation/corporate" },
        { label: "Film and Trailer Video Editing", path: "/services/video-animation/film-trailer" },
        { label: "Music Video Editing Suite", path: "/services/video-animation/music-video" },
        { label: "Weddings and Events Videos", path: "/services/video-animation/weddings-events" },
        { label: "Color Grading for Videos", path: "/services/video-animation/color-grading" },
        { label: "Education and Training Videos", path: "/services/video-animation/education-training" },
        { label: "Product Demo Videos", path: "/services/video-animation/product-demo" },
        { label: "Podcast Videos", path: "/services/video-animation/podcast" },
        { label: "Short Film Videos", path: "/services/video-animation/short-film" },
        { label: "Travel Video Editing", path: "/services/video-animation/travel" },
        { label: "Social Media Video Ads", path: "/services/video-animation/social-ads" },
        { label: "Story Infographic Video Editing", path: "/services/video-animation/infographic" },
    ];

    const featureList1 = [
        "Cinematic Video Editing",
        "2D & 3D Motion Graphics",
        "Professional Sound Design",
        "Visual Effects (VFX)"
    ];

    const featureList2 = [
        "Color Grading & Correction",
        "Social Media Video Optimization",
        "Scriptwriting & Storyboarding",
        "High-Fidelity Rendering"
    ];

    const handleDownload = (type) => {
        const filePath = type === 'pdf' ? '/assets/Video-Production-Portfolio.pdf' : '/assets/Service-Guide.docx';
        const fileName = type === 'pdf' ? 'Video-Production-Portfolio.pdf' : 'Service-Guide.docx';
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
                    <h1 className="sd-page-title">Video & Animation Services</h1>
                    <div className="sd-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Video & Animation</span>
                    </div>
                </Container>
            </div>

            <Container className="py-5">
                <Row>
                    {/* Main Content */}
                    <Col lg={8}>
                        <div className="sd-content-section">
                            <img src={mainImg} alt="Video & Animation Services" className="sd-main-image" />

                            <h2 className="sd-section-title">Cinematic Storytelling for Your Brand</h2>
                            <p className="sd-text">
                                Our video and animation services are crafted to elevate your brand's digital identity. We combine creativity with technical precision to deliver stunning visuals that communicate your message effectively. From high-impact social media ads to complex animated explainers, we ensure every frame serves a purpose.
                            </p>
                            <p className="sd-text">
                                Whether you're a startup looking for your first product demo or an established company needing a professional corporate documentary, our expertise ensures quality and impact at every stage of the production process.
                            </p>

                            <h3 className="sd-section-subtitle">Built on Creativity and Precision</h3>
                            <p className="sd-text">
                                With a blend of cinematic vision and technical skill, we transform your raw footage into polished productions tailored to your brand's goals and audience.
                            </p>

                            <Row className="mb-4">
                                <Col md={6}>
                                    <ul className="sd-feature-list">
                                        {featureList1.map((item, index) => (
                                            <li key={index} className="sd-feature-item">
                                                <FiCheckSquare className="sd-feature-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <ul className="sd-feature-list">
                                        {featureList2.map((item, index) => (
                                            <li key={index} className="sd-feature-item">
                                                <FiCheckSquare className="sd-feature-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>

                            <h2 className="sd-section-title">3 Steps to Your Final Render</h2>
                            <p className="sd-text">
                                We follow a streamlined production pipeline to ensure your project is delivered on time and exceeds your expectations.
                            </p>

                            <Row className="mb-5">
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon"><FiLayers /></div>
                                        <h4 className="sd-step-title">Discovery & Script</h4>
                                        <p className="sd-text small mb-0">We dive deep into your brand values and narrative goals.</p>
                                    </div>
                                </Col>
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon"><FiPenTool /></div>
                                        <h4 className="sd-step-title">Production & Edit</h4>
                                        <p className="sd-text small mb-0">Our editors bring the timeline to life with precision cuts.</p>
                                    </div>
                                </Col>
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon"><FiImage /></div>
                                        <h4 className="sd-step-title">Final Delivery</h4>
                                        <p className="sd-text small mb-0">Receive high-quality masters ready for any screen.</p>
                                    </div>
                                </Col>
                            </Row>

                            <h3 className="sd-section-subtitle">Key Production Advantages</h3>
                            <p className="sd-text">
                                We are a forward-thinking production studio dedicated to creating innovative, functional, and impactful videos that inspire and endure.
                            </p>

                            <div className="sd-advantage-box">
                                <img src={advantageImg} alt="Production Advantage" className="sd-advantage-img" />
                                <div className="sd-advantage-content">
                                    <p className="sd-text">
                                        Reliable production services that prioritize client satisfaction and visual excellence.
                                    </p>
                                    <ul className="sd-feature-list" style={{ gridTemplateColumns: '1fr' }}>
                                        {featureList2.map((item, index) => (
                                            <li key={index} className="sd-feature-item">
                                                <FiCheckSquare className="sd-feature-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="sd-faq-modern-wrapper mt-5">
                            <h3 className="sd-section-subtitle mb-4">Common Questions</h3>
                            <Accordion defaultActiveKey="0" className="sd-custom-accordion">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <FiHelpCircle className="me-2" /> How do you ensure the video aligns with my brand?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We begin with a comprehensive discovery phase, researching your industry, competitors, and target audience. Our mood-boarding and scripting stages ensure every visual element resonates with your brand's core values.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <FiHelpCircle className="me-2" /> What specific file formats are included in the final delivery?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We provide high-quality MP4 and MOV files optimized for web, social media (9:16, 1:1), and broadcast (16:9). Project source files are available upon request.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <FiHelpCircle className="me-2" /> How many revision rounds are included?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We typically include 2 rounds of creative revisions at the rough-cut and fine-cut stages to ensure the final product meets your exact standards.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <FiHelpCircle className="me-2" /> Who owns the rights to the final video?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Upon final payment, you receive full ownership and usage rights of the edited final product. We retain the right to showcase the work in our portfolio.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>

                    {/* Sidebar */}
                    <Col lg={4}>
                        <div className="sd-sidebar">
                            {/* Services Menu */}
                            <div className="sd-widget sd-expertise-widget">
                                <h4 className="sd-widget-title">Our Expertise</h4>
                                <div className="sd-service-menu">
                                    {servicesList.map((item, index) => (
                                        <Link key={index} to={item.path} className="sd-service-link">
                                            <FiChevronRight className="me-2" />
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Brochure Widget */}
                            <div className="sd-widget">
                                <h4 className="sd-widget-title">Free Brochure</h4>
                                <button className="sd-download-btn w-100 border-0" onClick={() => handleDownload('pdf')}>
                                    <FaFilePdf style={{ color: '#ff0000' }} />
                                    <span>DOWNLOAD PDF</span>
                                </button>
                                <button className="sd-download-btn w-100 border-0" onClick={() => handleDownload('doc')}>
                                    <FaFileWord style={{ color: '#2b579a' }} />
                                    <span>DOWNLOAD DOC</span>
                                </button>
                            </div>

                            {/* Contact Widget */}
                            <div className="sd-widget sd-contact-widget">
                                <div className="sd-contact-icon">
                                    <FiPhoneCall />
                                </div>
                                <h4 className="sd-widget-title text-white border-0 pb-0 after-none">Have Questions? Call Us</h4>
                                <p className="sd-contact-phone">+568 245 3585</p>
                                <Link to="/contact" className="sd-contact-btn">
                                    Get in Touch <FiArrowRight className="ms-2" />
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default VideoAnimation;
