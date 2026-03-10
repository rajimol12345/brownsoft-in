import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FiCheckSquare, FiLayers, FiPenTool, FiImage, FiPhoneCall, FiArrowRight, FiHelpCircle, FiChevronRight } from 'react-icons/fi';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../style/service.css';

// Unsplash images for Graphic Design
const mainImg = "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop";
const advantageImg = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop";

const GraphicsDesign = () => {
    const servicesList = [
        { label: "UI UX Design For Websites", path: "/services/graphics-design/ui-ux-website" },
        { label: "Invitation Cards, Postcards & Posters", path: "/services/graphics-design/invitation-cards" },
        { label: "Labels & Packaging Design", path: "/services/graphics-design/labels-packaging" },
        { label: "UI UX Design for Mobile Apps", path: "/services/graphics-design/ui-ux-mobile" },
        { label: "Image Background Removal", path: "/services/graphics-design/background-removal" },
        { label: "Album Designing — Weddings & Real Estate", path: "/services/graphics-design/album-designing" },
        { label: "Photo Editing & Retouching", path: "/services/graphics-design/photo-editing" },
        { label: "Craft Memorable Flyers", path: "/services/graphics-design/flyers" },
        { label: "Brochures and Infographics", path: "/services/graphics-design/brochures-infographics" },
        { label: "Design Business Cards & Billboards", path: "/services/graphics-design/business-cards-billboards" },
        { label: "Food Menu Design Services", path: "/services/graphics-design/food-menu" },
        { label: "Letterhead and Resume Design", path: "/services/graphics-design/letterhead-resume" },
        { label: "Social Media Banners Design", path: "/services/graphics-design/social-media-banners" },
        { label: "Design Your Dream Logo", path: "/services/graphics-design/logo-design" },
    ];


    const featureList1 = [
        "Custom Branding Solutions",
        "User-Centric UI/UX Design",
        "High-Impact Print Media",
        "Creative Illustration"
    ];

    const featureList2 = [
        "Social Media Management",
        "Responsive Web Design",
        "Typography & Layouts",
        "Motion & Animation"
    ];

    const handleDownload = (type) => {
        const filePath = type === 'pdf' ? '/assets/Graphic-Design-Portfolio.pdf' : '/assets/Service-Guide.docx';
        const fileName = type === 'pdf' ? 'Graphic-Design-Portfolio.pdf' : 'Service-Guide.docx';
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
            <div className="sd-page-header sd-header-graphics">
                <Container>
                    <h1 className="sd-page-title">Graphic Design Services</h1>
                    <div className="sd-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Graphic Design</span>
                    </div>
                </Container>
            </div>

            <Container className="py-5">
                <Row>
                    {/* Main Content */}
                    <Col lg={8}>
                        <div className="sd-content-section">
                            <img src={mainImg} alt="Graphic Design Services" className="sd-main-image" />

                            <h2 className="sd-section-title">Creative Design Solutions for Your Brand</h2>
                            <p className="sd-text">
                                Our graphic design services are crafted to elevate your brand's visual identity. We combine creativity with strategy to deliver stunning visuals that communicate your message effectively. From logo creation to complete brand overhauls, we ensure every pixel serves a purpose.
                            </p>
                            <p className="sd-text">
                                Whether you're a startup looking for your first logo or an established company needing a fresh digital presence, our expertise ensures quality and impact at every stage of the design process.
                            </p>

                            <h3 className="sd-section-subtitle">Built on Creativity and Strategy</h3>
                            <p className="sd-text">
                                With a blend of artistic vision and technical skill, we transform your ideas into functional and aesthetically pleasing designs tailored to your brand's goals.
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

                            <h2 className="sd-section-title">3 Steps to Your New Design</h2>
                            <p className="sd-text">
                                We follow a streamlined process to ensure your project is delivered on time and exceeds your expectations.
                            </p>

                            <Row className="mb-5">
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon"><FiLayers /></div>
                                        <h4 className="sd-step-title">Discovery & Research</h4>
                                        <p className="sd-text small mb-0">We dive deep into your brand values and market trends.</p>
                                    </div>
                                </Col>
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon"><FiPenTool /></div>
                                        <h4 className="sd-step-title">Concept & Creation</h4>
                                        <p className="sd-text small mb-0">Our designers bring concepts to life with multiple iterations.</p>
                                    </div>
                                </Col>
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon"><FiImage /></div>
                                        <h4 className="sd-step-title">Final Delivery</h4>
                                        <p className="sd-text small mb-0">Receive high-quality assets ready for any platform.</p>
                                    </div>
                                </Col>
                            </Row>

                            <h3 className="sd-section-subtitle">Key Advantages</h3>
                            <p className="sd-text">
                                We are a forward-thinking design studio dedicated to creating innovative, functional, and impactful visuals that inspire and endure.
                            </p>

                            <div className="sd-advantage-box">
                                <img src={advantageImg} alt="Design Advantage" className="sd-advantage-img" />
                                <div className="sd-advantage-content">
                                    <p className="sd-text">
                                        Reliable design services that prioritize client satisfaction and visual excellence.
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
                                        <FiHelpCircle className="me-2" /> How do you ensure the design aligns with my brand?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We begin with a comprehensive discovery phase, researching your industry, competitors, and target audience. Our mood-boarding and conceptualization stages ensure every visual element resonates with your brand's core values.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <FiHelpCircle className="me-2" /> What specific file formats are included in the final delivery?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        For logos and branding, we provide vector files (AI, EPS, SVG, PDF) for scalability and raster files (PNG, JPG) for web use. For UI/UX projects, we provide Figma files or high-fidelity prototypes.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <FiHelpCircle className="me-2" /> How many design concepts will I be presented with?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Depending on the package, we typically present 2-3 unique initial concepts. This allows us to explore different creative directions while staying focused on your primary objectives and feedback.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <FiHelpCircle className="me-2" /> Who owns the intellectual property rights of the designs?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Upon final payment, you receive full ownership and copyright of the approved final designs. We only retain the right to showcase the work in our portfolio for promotional purposes.
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

export default GraphicsDesign;
