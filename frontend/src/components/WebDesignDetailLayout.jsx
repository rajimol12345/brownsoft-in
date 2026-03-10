import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiCheckSquare, FiLayers, FiPenTool, FiImage, FiPhoneCall, FiArrowRight, FiHelpCircle } from 'react-icons/fi';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';
import '../style/service.css';

const WebDesignDetailLayout = ({
    title,
    breadcrumbLabel,
    mainImg,
    description1,
    description2,
    subtitle,
    subtitleDesc,
    featureList1 = [],
    featureList2 = [],
    steps = [],
    advantageImg,
    advantageText,
    advantagePoints = [],
    faqs = [],
    activeService
}) => {
    const servicesList = [
        { label: "Professional Web Design Company", path: "/services/web-design/professional" },
        { label: "Custom Website Design", path: "/services/web-design/custom" },
        { label: "Corporate Websites", path: "/services/web-design/corporate" },
        { label: "Landing & Promo Pages", path: "/services/web-design/landing-pages" },
        { label: "Small Business Websites", path: "/services/web-design/small-business" },
        { label: "Website Redesign", path: "/services/web-design/redesign" },
        { label: "E-commerce Websites", path: "/services/web-design/ecommerce" },
        { label: "CMS Websites", path: "/services/web-design/cms" },
    ];

    const handleDownload = (type) => {
        const filePath = type === 'pdf' ? '/assets/Web-Design-Portfolio.pdf' : '/assets/Service-Guide.docx';
        const fileName = type === 'pdf' ? 'Web-Design-Portfolio.pdf' : 'Service-Guide.docx';

        const link = document.createElement('a');
        link.href = filePath;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const defaultSteps = [
        { title: 'Discovery & Research', desc: 'We dive deep into your brand values and market trends.', icon: <FiLayers /> },
        { title: 'Concept & Creation', desc: 'Our designers bring concepts to life with multiple iterations.', icon: <FiPenTool /> },
        { title: 'Final Delivery', desc: 'Receive high-quality assets ready for any platform.', icon: <FiImage /> }
    ];

    const displaySteps = steps.length > 0 ? steps : defaultSteps;

    return (
        <div className="sd-page-wrapper">
            {/* Page Header */}
            <div className="sd-page-header">
                <Container>
                    <h1 className="sd-page-title">{title}</h1>
                    <div className="sd-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>{breadcrumbLabel || "Web Design"}</span>
                    </div>
                </Container>
            </div>

            <Container className="py-5">
                <Row>
                    {/* Main Content */}
                    <Col lg={8}>
                        <div className="sd-content-section">
                            <img src={mainImg} alt={title} className="sd-main-image" />

                            <h2 className="sd-section-title">{title}</h2>
                            <p className="sd-text">{description1}</p>
                            {description2 && <p className="sd-text">{description2}</p>}

                            <h3 className="sd-section-subtitle">{subtitle || "Built on Creativity and Strategy"}</h3>
                            <p className="sd-text">
                                {subtitleDesc || "With a blend of artistic vision and technical skill, we transform your ideas into functional and aesthetically pleasing designs tailored to your brand's goals."}
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
                                {displaySteps.map((step, idx) => (
                                    <Col md={4} key={idx} className="mb-4">
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

                            <h3 className="sd-section-subtitle">Key Advantages</h3>
                            <p className="sd-text">
                                {advantageText || "We are a forward-thinking design studio dedicated to creating innovative, functional, and impactful visuals that inspire and endure."}
                            </p>

                            <div className="sd-advantage-box" style={{ display: 'block' }}>
                                <img src={advantageImg} alt="Advantage" className="sd-advantage-img" style={{ width: '100%', marginBottom: '20px' }} />
                                <div className="sd-advantage-content">
                                    <p className="sd-text">
                                        Reliable web design services that prioritize client satisfaction and visual excellence.
                                    </p>
                                    <ul className="sd-feature-list" style={{ gridTemplateColumns: '1fr' }}>
                                        {advantagePoints.map((item, index) => (
                                            <li key={index} className="sd-feature-item">
                                                <FiCheckSquare className="sd-feature-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {faqs.length > 0 && (
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
                        )}
                    </Col>

                    {/* Sidebar */}
                    <Col lg={4}>
                        <div className="sd-sidebar">
                            <div className="sd-widget">
                                <h4 className="sd-widget-title">Our Expertise</h4>
                                <div className="sd-service-menu">
                                    {servicesList.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.path}
                                            className={`sd-service-link ${activeService === item.label ? 'active' : ''}`}
                                            style={activeService === item.label ? { backgroundColor: 'var(--primary-color, #2563eb)', color: '#fff' } : {}}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

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

                            <div className="sd-widget sd-contact-widget">
                                <div className="sd-contact-icon">
                                    <FiPhoneCall />
                                </div>
                                <h4 className="sd-widget-title text-white border-0 pb-0 after-none">Have Questions? Call Us</h4>
                                <p className="sd-contact-phone">92 666 888 0000</p>
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

export default WebDesignDetailLayout;
