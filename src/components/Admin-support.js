import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FiCheckSquare, FiDatabase, FiPhoneCall, FiArrowRight, FiHelpCircle, FiShield, FiSettings } from 'react-icons/fi';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';
import '../style/Admin-support.css';

const serviceData = {
    "24/7 Live Email & Chat Support": {
        title: "24/7 Live Email & Chat Support",
        subtitle: "Round-the-Clock Customer Engagement",
        description: "Ensure your customers never feel ignored. Our 24/7 live email and chat support services provide immediate assistance to your global audience, boosting satisfaction and retention rates.",
        mainImg: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop",
        features1: ["24/7 Availability", "Multi-channel Support", "Expert Problem Solving", "Quick Response Times"],
        features2: ["Satisfaction Tracking", "Escalation Management", "Detailed Interaction Logs", "Professional Tone & Style"]
    },
    "Website Content Management": {
        title: "Website Content Management",
        subtitle: "Keep Your Content Fresh & Relevant",
        description: "Your website is your digital storefront. We handle all aspects of content management, from blog posts and news updates to structural changes, ensuring your site remains engaging and up-to-date.",
        mainImg: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        features1: ["Regular Blog Updates", "News & Event Posting", "Layout Improvements", "SEO Content Integration"],
        features2: ["CMS Expertise", "Quality Assurance", "Link Verification", "Asset Optimization"]
    },
    "E-commerce Website Maintenance": {
        title: "E-commerce Website Maintenance",
        subtitle: "Uninterrupted Online Sales",
        description: "E-commerce never sleeps. We provide comprehensive maintenance services specifically tailored for online stores, focusing on performance, security, and seamless user experiences.",
        mainImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        features1: ["Inventory Updates", "Security Patching", "Payment Gateway Checks", "Speed Optimization"],
        features2: ["Mobile Store Testing", "Plugin/Theme Management", "Database Optimization", "Uptime Monitoring"]
    },
    "Technical Support for Websites": {
        title: "Technical Support for Websites",
        subtitle: "Expert Technical Assistance",
        description: "When things go wrong, you need experts who can fix them fast. Our technical support services cover everything from bug fixes and server issues to software integration and troubleshooting.",
        mainImg: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        features1: ["Bug Fixing & Patching", "Server Side Support", "API Integrations", "Database Management"],
        features2: ["System Upgrades", "Backup Management", "Security Audits", "Custom Scripting"]
    },
    "Website Content & Image Updates": {
        title: "Website Content & Image Updates",
        subtitle: "Visual & Textual Refresh",
        description: "Keep your site looking modern and professional. We handle frequent updates to images, banners, product descriptions, and static pages to keep your brand's digital presence sharp.",
        mainImg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop",
        features1: ["Image Compression", "Banner Swapping", "Product Copy Edits", "Alt-Text Optimization"],
        features2: ["Visual Consistency", "Responsive Checks", "Format Conversions", "Gallery Management"]
    },
    "Virtual Administration Support": {
        title: "Virtual Administration Support",
        subtitle: "Professional Business Assistance",
        description: "Offload your administrative burden. Our virtual assistants provide high-level administrative support, managing schedules, correspondence, and daily operational tasks efficiently.",
        mainImg: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop",
        features1: ["Email Management", "Calendar Scheduling", "Document Preparation", "Travel Coordination"],
        features2: ["Research Tasks", "Report Generation", "Workflow Automation", "Professional Liaison"]
    },
    "E-commerce & Website Data Entry": {
        title: "E-commerce & Website Data Entry",
        subtitle: "Accurate Product & Site Data",
        description: "Precision is key for E-commerce success. We provide meticulous data entry services for product listings, pricing updates, and inventory synchronization across platforms.",
        mainImg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop",
        features1: ["Product Uploads", "SKU Management", "Price Monitoring", "Inventory Syncing"],
        features2: ["Bulk Data Processing", "Data Validation", "Catalog Categorization", "Cross-Platform Entry"]
    },
    "Image Annotation & Data Processing": {
        title: "Image Annotation & Data Processing",
        subtitle: "Specialized Data Solutions",
        description: "Leverage advanced data processing. We offer specialized image annotation for AI/ML training and complex data processing solutions to extract value from your raw information.",
        mainImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        features1: ["Object Detection", "Bounding Boxes", "Semantic Segmentation", "Data Cleaning"],
        features2: ["Format Conversion", "Accuracy Checks", "Scaleable Processing", "Secure Handling"]
    },
    "Accurate & Efficient Data Entry": {
        title: "Accurate & Efficient Data Entry",
        subtitle: "Streamlined Information Management",
        description: "Convert your raw data into organized digital assets. Our data entry services prioritize speed and accuracy, ensuring your databases are always ready for analysis and decision-making.",
        mainImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        features1: ["Database Entry", "Spreadsheet Cleanup", "Form Digitization", "Transcription Services"],
        features2: ["Quality Control", "Confidentiality Assured", "Fast Turnaround", "Error-Free Guarantee"]
    },
};

const AdminSupport = () => {
    const overviewData = {
        title: "Admin Support Services",
        subtitle: "Empowering Operations with Professional Support",
        description: "Streamline your business operations with our comprehensive Admin Support services. From 24/7 customer engagement to complex technical maintenance and data processing, we provide the backbone your business needs to grow efficiently in the digital era.",
        mainImg: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop",
        advantageImg: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
        features1: ["Dedicated Virtual Assistants", "24/7 Availability", "Website Technical Care", "Meticulous Data Entry"],
        features2: ["Operational Efficiency", "Cost-Effective Solutions", "Secure Data Handling", "Seamless Scalability"]
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
        const filePath = type === 'pdf' ? '/assets/Admin-Support-Capabilities.pdf' : '/assets/Service-Process-Guide.docx';
        const fileName = type === 'pdf' ? 'Admin-Support-Capabilities.pdf' : 'Service-Process-Guide.docx';

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
            <div className="sd-page-headera">
                <Container>
                    <h1 className="sd-page-title">{currentData.title}</h1>
                    <div className="sd-breadcrumb">
                        <a href="/">Home</a>
                        <span>/</span>
                        <span>Admin Support</span>
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
                                Our support solutions are designed to integrate seamlessly with your existing workflows. We use industry-standard tools and maintain rigorous quality standards to ensure that every task, no matter how small, is executed with precision and care.
                            </p>

                            <h3 className="sd-section-subtitle">Why Partner With Us?</h3>
                            <p className="sd-text">
                                We go beyond simple task execution. We provide strategic support that allows you to focus on your core business goals while we handle the operational details.
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

                            <h2 className="sd-section-title">Our Working Process</h2>
                            <p className="sd-text">
                                We follow a simple yet effective 3-step process to ensure high-quality delivery.
                            </p>

                            <Row className="mb-5">
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon">
                                            <FiSettings />
                                        </div>
                                        <h4 className="sd-step-title">Integration</h4>
                                        <p className="sd-text small mb-0">Setting up tools and understanding your specific requirements.</p>
                                    </div>
                                </Col>
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon">
                                            <FiDatabase />
                                        </div>
                                        <h4 className="sd-step-title">Execution</h4>
                                        <p className="sd-text small mb-0">Continuous professional support and task management.</p>
                                    </div>
                                </Col>
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon">
                                            <FiShield />
                                        </div>
                                        <h4 className="sd-step-title">Quality Check</h4>
                                        <p className="sd-text small mb-0">Regular audits to maintain our high standards of accuracy.</p>
                                    </div>
                                </Col>
                            </Row>

                            <h3 className="sd-section-subtitle">Operational Benefits</h3>
                            <div className="sd-advantage-box">
                                <img src={currentData.advantageImg} alt="Advantage" className="sd-advantage-img" />
                                <div className="sd-advantage-content">
                                    <p className="sd-text">
                                        Experience reduced overhead and increased productivity with our professional support teams.
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
                                <h3 className="sd-section-subtitle mb-4">Frequently Asked Questions</h3>
                                <Accordion defaultActiveKey="0" className="sd-custom-accordion">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <FiHelpCircle className="me-2" /> How quickly can you start?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            We can typically begin integration within 24-48 hours of service agreement signing, depending on the complexity of your requirements.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <FiHelpCircle className="me-2" /> Do you handle sensitive business data?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Yes, we maintain strict data confidentiality protocols and can sign NDAs. Our systems are secured to ensure your information remains protected.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <FiHelpCircle className="me-2" /> Can I scale my support team?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Absolutely. Our services are highly scalable. You can increase or decrease your support levels as your business needs evolve.
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
                                <h4 className="sd-widget-title">Admin Support Services</h4>
                                <div className="sd-service-menu">
                                    <button 
                                        onClick={() => setCurrentServiceKey(null)}
                                        className={`sd-service-link w-100 border-0 text-start ${currentServiceKey === null ? 'active' : ''}`}
                                    >
                                        Admin Support Overview
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
                                <h4 className="sd-widget-title">Documentation</h4>
                                <button className="sd-download-btn w-100 border-0" onClick={() => handleDownload('pdf')}>
                                    <FaFilePdf style={{ color: '#ff0000' }} />
                                    <span>CAPABILITIES PDF</span>
                                </button>
                                <button className="sd-download-btn w-100 border-0" onClick={() => handleDownload('doc')}>
                                    <FaFileWord style={{ color: '#2b579a' }} />
                                    <span>PROCESS GUIDE</span>
                                </button>
                            </div>

                            {/* Contact Widget */}
                            <div className="sd-widget sd-contact-widget">
                                <div className="sd-contact-icon">
                                    <FiPhoneCall />
                                </div>
                                <h4 className="sd-widget-title text-white border-0 pb-0 after-none">Need Custom Support?</h4>
                                <p className="sd-contact-phone">+568 245 3585</p>
                                <a href="/contact" className="sd-contact-btn">
                                    Contact Specialist <FiArrowRight className="ms-2" />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AdminSupport;
