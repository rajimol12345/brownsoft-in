import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FiCheckSquare, FiPhoneCall, FiArrowRight, FiHelpCircle } from 'react-icons/fi';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';
import { servicesData } from '../data/servicesData';
import '../style/service.css';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    if (!service) {
        return (
            <Container className="py-5 text-center">
                <h2>Service Not Found</h2>
                <p>We couldn't find the service you're looking for.</p>
                <Link to="/services" className="btn btn-primary">Back to Services</Link>
            </Container>
        );
    }

    const handleDownload = (type) => {
        const filePath = type === 'pdf' ? '/assets/Portfolio.pdf' : '/assets/Service-Guide.docx';
        const fileName = type === 'pdf' ? 'Portfolio.pdf' : 'Service-Guide.docx';
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
                    <h1 className="sd-page-title">{service.title}</h1>
                    <div className="sd-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/services">Services</Link>
                        <span>/</span>
                        <span>{service.title}</span>
                    </div>
                </Container>
            </div>

            <Container className="py-5">
                <Row>
                    {/* Main Content */}
                    <Col lg={8}>
                        <div className="sd-content-section">
                            <img src={service.image} alt={service.title} className="sd-main-image" />

                            <h2 className="sd-section-title">{service.title}</h2>
                            <div className="sd-text" dangerouslySetInnerHTML={{ __html: service.fullDesc }} />

                            <h3 className="sd-section-subtitle">Key Features</h3>
                            <Row className="mb-4">
                                {service.features && service.features.map((feature, index) => (
                                    <Col md={6} key={index} className="mb-3">
                                        <div className="sd-feature-item">
                                            <FiCheckSquare className="sd-feature-icon" />
                                            <div>
                                                <strong>{feature.title}</strong>
                                                <p className="mb-0 small">{feature.desc}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                            <h3 className="sd-section-subtitle">Why Choose This Service?</h3>
                            <ul className="sd-feature-list" style={{ gridTemplateColumns: '1fr' }}>
                                {service.benefits && service.benefits.map((benefit, index) => (
                                    <li key={index} className="sd-feature-item">
                                        <FiCheckSquare className="sd-feature-icon" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Common FAQ placeholder if needed */}
                        <div className="sd-faq-modern-wrapper mt-5">
                            <h3 className="sd-section-subtitle mb-4">Frequently Asked Questions</h3>
                            <Accordion defaultActiveKey="0" className="sd-custom-accordion">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <FiHelpCircle className="me-2" /> How do I get started with this service?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Simply click on the "Get in Touch" button or call our support line. We'll schedule a consultation to discuss your specific needs.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <FiHelpCircle className="me-2" /> What is the typical project timeline?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Project timelines vary based on scope and complexity. Most service-level engagements start with a 1-2 week discovery phase.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>

                    {/* Sidebar */}
                    <Col lg={4}>
                        <div className="sd-sidebar">
                            {/* Other Services Menu */}
                            <div className="sd-widget">
                                <h4 className="sd-widget-title">Explore More</h4>
                                <div className="sd-service-menu">
                                    {servicesData.filter(s => s.id !== id).map((item, index) => (
                                        <Link
                                            key={index}
                                            to={`/services/${item.id}`}
                                            className="sd-service-link"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Downloads */}
                            <div className="sd-widget">
                                <h4 className="sd-widget-title">Resources</h4>
                                <button className="sd-download-btn w-100 border-0" onClick={() => handleDownload('pdf')}>
                                    <FaFilePdf style={{ color: '#ff0000' }} />
                                    <span>SERVICE BROCHURE</span>
                                </button>
                                <button className="sd-download-btn w-100 border-0" onClick={() => handleDownload('doc')}>
                                    <FaFileWord style={{ color: '#2b579a' }} />
                                    <span>CASE STUDIES</span>
                                </button>
                            </div>

                            {/* Contact Card */}
                            <div className="sd-widget sd-contact-widget">
                                <div className="sd-contact-icon">
                                    <FiPhoneCall />
                                </div>
                                <h4 className="sd-widget-title text-white border-0 pb-0 after-none">Ready to Start?</h4>
                                <p className="sd-contact-phone">83000 50033</p>
                                <Link to="/contact" className="sd-contact-btn">
                                    Contact Specialist <FiArrowRight className="ms-2" />
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetail;
