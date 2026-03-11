import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FiCheckSquare, FiTriangle, FiPhoneCall, FiArrowRight, FiHelpCircle, FiTool, FiPenTool } from 'react-icons/fi';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';
import '../style/Civil-Architectural.css';

const serviceData = {
    "Planning & Design Services": {
        title: "Planning & Design Services",
        subtitle: "Conceptual and Detailed Design Excellence",
        description: "Our planning and design services bridge the gap between vision and reality. We specialize in creating innovative architectural layouts and urban plans that prioritize functionality, aesthetics, and sustainability. From initial site analysis to final design documentation, our team ensures every detail aligns with local regulations and client objectives.",
        mainImg: "https://images.unsplash.com/photo-1706777382103-0051a37e97df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        advantageImg: "https://plus.unsplash.com/premium_photo-1682140914933-f9704d7bc14f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FkJTIwZGVzaWdufGVufDB8fDB8fHww",
        features1: ["Master Planning", "Urban Design", "Architectural Drafting", "Feasibility Studies"],
        features2: ["3D Visualization", "Zoning Compliance", "Space Optimization", "Sustainable Design"]
    },
    "Construction & Project Management": {
        title: "Construction & Project Management",
        subtitle: "Efficient Execution and Oversight",
        description: "We provide end-to-end management for construction projects of all scales. Our project managers focus on maintaining schedules, controlling budgets, and ensuring high-quality workmanship. We act as the central point of contact between stakeholders, contractors, and vendors to ensure a smooth transition from blueprints to finished structures.",
        mainImg: "https://plus.unsplash.com/premium_photo-1661277697952-0cacde72c755?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFByb2plY3QlMjBNYW5hZ2VtZW50fGVufDB8fDB8fHww",
        advantageImg: "https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFByb2plY3QlMjBNYW5hZ2VtZW50fGVufDB8fDB8fHww",
        features1: ["On-site Supervision", "Budget Monitoring", "Schedule Management", "Vendor Coordination"],
        features2: ["Quality Control", "Risk Assessment", "Procurement Strategy", "Safety Compliance"]
    },
    "Structural Engineering Services": {
        title: "Structural Engineering Services",
        subtitle: "Integrity and Strength in Every Build",
        description: "Integrity is the foundation of our structural engineering services. We analyze and design structures that withstand various environmental stresses while optimizing material use. Our engineers employ advanced modeling software to ensure every beam, column, and foundation meets the highest safety standards.",
        mainImg: "https://plus.unsplash.com/premium_photo-1661333509765-4a49f0f80792?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhZCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
        advantageImg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
        features1: ["Structural Analysis", "Foundation Design", "Steel & Concrete Design", "Renovation Engineering"],
        features2: ["Seismic Retrofitting", "Load Calculation", "Technical Audits", "Materials Engineering"]
    },
    "Surveying & Land Development": {
        title: "Surveying & Land Development",
        subtitle: "Precise Mapping and Optimization",
        description: "Accurate data is essential for successful land development. Our surveying services use state-of-the-art technology to provide precise boundaries, topography, and site mapping. We assist in converting raw land into developed property by managing drainage, utilities, and infrastructure layouts.",
        mainImg: "https://media.istockphoto.com/id/1155374544/photo/silhouette-engineer-looking-loaders-and-trucks-in-a-building-site-over-blurred-construction.webp?a=1&b=1&s=612x612&w=0&k=20&c=jV7aFnonTUXzbZwU49HJLSgd3Tl7CuLNva1Mg9hmsRs=",
        advantageImg: "https://images.unsplash.com/photo-1769149068959-b11392164add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FkJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
        features1: ["Topographic Surveys", "Boundary Identification", "Land Subdivision", "Utility Mapping"],
        features2: ["GIS Analysis", "Grading Plans", "Hydrology Studies", "Environmental Impact"]
    },
    "Infrastructure & Public Works": {
        title: "Infrastructure & Public Works",
        subtitle: "Building the Future of Communities",
        description: "We specialize in the design and rehabilitation of critical infrastructure. Our work in public works includes roads, bridges, water systems, and drainage networks. We focus on durability and long-term community benefits, ensuring that public assets serve their purpose efficiently for decades.",
        mainImg: "https://plus.unsplash.com/premium_photo-1682130243095-8c5635728269?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        advantageImg: "https://images.unsplash.com/photo-1769152683420-f4eff91cb30b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FkJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
        features1: ["Roadway Engineering", "Bridge Design", "Water & Sewer Systems", "Stormwater Management"],
        features2: ["Traffic Analysis", "Public Asset Repair", "Sustainability Planning", "Regulatory Permitting"]
    }
};

const CivilArchitectural = () => {
    const overviewData = {
        title: "Civil & Architectural Design",
        subtitle: "Innovative Solutions for the Built Environment",
        description: "We offer a comprehensive suite of civil engineering and architectural design services tailored to meet the challenges of modern construction. From conceptual planning to infrastructure development, our team combines technical expertise with creative vision to deliver sustainable and high-quality results for our clients.",
        mainImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        advantageImg: "https://plus.unsplash.com/premium_photo-1683121402294-9ce898899acb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features1: ["Architectural Planning", "Structural Engineering", "Project Management", "Land Development"],
        features2: ["3D Visualization", "Sustainability Focus", "Regulatory Compliance", "Technical Excellence"]
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
        const filePath = type === 'pdf' ? '/assets/Civil-Arch-Portfolio.pdf' : '/assets/Engineering-Guide.docx';
        const fileName = type === 'pdf' ? 'Civil-Arch-Portfolio.pdf' : 'Engineering-Guide.docx';

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
            <div className="sd-page-headerc">
                <Container>
                    <h1 className="sd-page-title">{currentData.title}</h1>
                    <div className="sd-breadcrumb">
                        <a href="/">Home</a>
                        <span>/</span>
                        <span>Civil & Architectural</span>
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
                                Our multidisciplinary team ensures that every project is handled with precision and a focus on long-term value. We utilize cutting-edge software and sustainable practices to deliver designs that are not only beautiful but structurally sound and environmentally responsible.
                            </p>

                            <h3 className="sd-section-subtitle">Excellence in Design & Engineering</h3>
                            <p className="sd-text">
                                We pride ourselves on our ability to solve complex spatial and structural problems, delivering projects that stand the test of time and serve the needs of the community.
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

                            <h2 className="sd-section-title">Our 3-Step Process</h2>
                            <p className="sd-text">
                                We maintain a streamlined workflow to ensure projects are delivered on time and within budget.
                            </p>

                            <Row className="mb-5">
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon">
                                            <FiPenTool />
                                        </div>
                                        <h4 className="sd-step-title">Design</h4>
                                        <p className="sd-text small mb-0">From conceptual sketches to detailed blueprints.</p>
                                    </div>
                                </Col>
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon">
                                            <FiTriangle />
                                        </div>
                                        <h4 className="sd-step-title">Analysis</h4>
                                        <p className="sd-text small mb-0">Structural and environmental stress testing.</p>
                                    </div>
                                </Col>
                                <Col md={4} className="mb-4">
                                    <div className="sd-step-card">
                                        <div className="sd-step-icon">
                                            <FiTool />
                                        </div>
                                        <h4 className="sd-step-title">Delivery</h4>
                                        <p className="sd-text small mb-0">Final oversight and project handover.</p>
                                    </div>
                                </Col>
                            </Row>

                            <h3 className="sd-section-subtitle">Key Advantages</h3>
                            <div className="sd-advantage-box">
                                <img src={currentData.advantageImg} alt="Advantage" className="sd-advantage-img" />
                                <div className="sd-advantage-content">
                                    <p className="sd-text">
                                        Experience the peace of mind that comes with partnering with industry-leading experts.
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
                                            <FiHelpCircle className="me-2" /> Do you handle residential projects?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Yes, we manage a wide range of residential projects, from single-family home designs to large-scale apartment complex planning.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <FiHelpCircle className="me-2" /> How do you ensure safety compliance?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Our engineers and architects adhere strictly to local building codes and international safety standards, utilizing rigorous modeling and technical audits.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <FiHelpCircle className="me-2" /> Can you assist with permitting?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Absolutely. We handle the preparation of all necessary technical documentation and coordinate with local authorities to facilitate the permitting process.
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
                                <h4 className="sd-widget-title">Civil Design Services</h4>
                                <div className="sd-service-menu">
                                    <button 
                                        onClick={() => setCurrentServiceKey(null)}
                                        className={`sd-service-link w-100 border-0 text-start ${currentServiceKey === null ? 'active' : ''}`}
                                    >
                                        Design Overview
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
                                <h4 className="sd-widget-title">Resources</h4>
                                <button className="sd-download-btn w-100 border-0" onClick={() => handleDownload('pdf')}>
                                    <FaFilePdf style={{ color: '#ff0000' }} />
                                    <span>DOWNLOAD PORTFOLIO</span>
                                </button>
                                <button className="sd-download-btn w-100 border-0" onClick={() => handleDownload('doc')}>
                                    <FaFileWord style={{ color: '#2b579a' }} />
                                    <span>ENGINEERING GUIDE</span>
                                </button>
                            </div>

                            {/* Contact Widget */}
                            <div className="sd-widget sd-contact-widget">
                                <div className="sd-contact-icon">
                                    <FiPhoneCall />
                                </div>
                                <h4 className="sd-widget-title text-white border-0 pb-0 after-none">Need a Consultation?</h4>
                                <p className="sd-contact-phone">+568 245 3585</p>
                                <a href="/contact" className="sd-contact-btn">
                                    Talk to an Expert <FiArrowRight className="ms-2" />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CivilArchitectural;
