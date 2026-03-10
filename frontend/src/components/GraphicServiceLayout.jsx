import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FiCheckSquare, FiLayers, FiPhoneCall, FiArrowRight, FiHelpCircle, FiChevronRight } from 'react-icons/fi';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../style/service.css';

const GraphicServiceLayout = ({
    title,
    breadcrumbLabel,
    mainImg,
    description1,
    description2,
    subtitle,
    featureList1 = [],
    featureList2 = [],
    stepsTitle,
    stepsDescription,
    steps = [],
    advantageTitle,
    advantageDescription,
    advantageImg,
    advantageContent,
    advantageFeatureList = [],
    faqs = [],
    activePath
}) => {
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
            <div className="sd-page-header sd-header-graphic-sub">
                <Container>
                    <h1 className="sd-page-title">{title}</h1>
                    <div className="sd-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/services/graphics-design">Graphic Design</Link>
                        {activePath !== "/services/graphics-design" && (
                            <>
                                <span>/</span>
                                <span>{breadcrumbLabel || title}</span>
                            </>
                        )}
                    </div>
                </Container>
            </div>

            <Container className="py-5">
                <Row>
                    {/* Main Content */}
                    <Col lg={8}>
                        <div className="sd-content-section">
                            <img src={mainImg} alt={title} className="sd-main-image" />

                            <h2 className="sd-section-title">{subtitle || title}</h2>
                            <p className="sd-text">{description1}</p>
                            {description2 && <p className="sd-text">{description2}</p>}

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

                            <h2 className="sd-section-title">{stepsTitle || "Design Process"}</h2>
                            <p className="sd-text">
                                {stepsDescription || "We follow a streamlined process to ensure your project is delivered on time and exceeds your expectations."}
                            </p>

                            <Row className="mb-5">
                                {steps.map((step, index) => (
                                    <Col md={4} key={index} className="mb-4">
                                        <div className="sd-step-card">
                                            <div className="sd-step-icon">
                                                {step.icon}
                                            </div>
                                            <h4 className="sd-step-title">{step.title}</h4>
                                            <p className="sd-text small mb-0">{step.desc}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                            <h3 className="sd-section-subtitle">{advantageTitle || "Key Design Advantages"}</h3>
                            <p className="sd-text">
                                {advantageDescription || "We are a forward-thinking design studio dedicated to creating innovative, functional, and impactful visuals that inspire and endure."}
                            </p>

                            <div className="sd-advantage-box">
                                <img src={advantageImg} alt="Design Advantage" className="sd-advantage-img" />
                                <div className="sd-advantage-content">
                                    <p className="sd-text">
                                        {advantageContent || "Reliable design services that prioritize client satisfaction and visual excellence."}
                                    </p>
                                    <ul className="sd-feature-list" style={{ gridTemplateColumns: '1fr' }}>
                                        {advantageFeatureList.map((item, index) => (
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
                                {faqs.map((faq, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index}>
                                        <Accordion.Header>
                                            <FiHelpCircle className="me-2" /> {faq.question}
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {faq.answer}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
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
                                        <Link
                                            key={index}
                                            to={item.path}
                                            className={`sd-service-link ${activePath === item.path ? 'active' : ''}`}
                                        >
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

export default GraphicServiceLayout;
