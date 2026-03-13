import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiHeart, FiSettings, FiUsers, FiArrowRight } from 'react-icons/fi';
import '../style/Features.css';

const Features = () => {
    const featureList = [
        {
            icon: <FiHeart />,
            title: "Innovative Approach",
            description: "We leverage the latest technologies to provide creative solutions that drive your business forward in the digital age."
        },
        {
            icon: <FiSettings />,
            title: "Customized Solutions",
            description: "Our services are tailored to meet your unique business requirements, ensuring maximum efficiency and results."
        },
        {
            icon: <FiUsers />,
            title: "Expert Team",
            description: "Work with highly skilled professionals dedicated to delivering excellence and supporting your growth journey."
        }
    ];

    return (
        <section className="section-padding" id="features" style={{ backgroundColor: '#fff' }}>
            <Container>
                <Row className="mb-5 align-items-end">
                    <Col lg={6}>
                        <div className="section-title mb-0">
                            <span className="text-primary fw-bold text-uppercase">Smart Software</span>
                            <h2 className="display-6 fw-bold mt-2">Your Trusted Partner In Digital Transformation</h2>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <p className="text-muted mb-0 ps-lg-4 lh-lg">
                            Discover the insights you need to make confident decisions. From setup to support, we’ve simplified the answers for you with our comprehensive digital services and expert consultation.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {featureList.map((feature, index) => (
                        <Col lg={4} md={6} key={index} className="mb-4">
                            <div className="feature-item-card p-5 rounded-4 shadow-sm border h-100 transition-all" style={{ transition: 'all 0.4s ease', backgroundColor: '#fff' }}>
                                <div className="feature-icon-box mb-4 text-primary d-flex align-items-center justify-content-center"
                                    style={{ width: '70px', height: '70px', backgroundColor: '#f4f7ff', borderRadius: '15px', fontSize: '30px' }}>
                                    {feature.icon}
                                </div>
                                <h4 className="fw-bold mb-3">{feature.title}</h4>
                                <p className="text-muted small mb-4 lh-lg">{feature.description}</p>
                                <a href="#!" className="text-primary fw-bold text-decoration-none small d-inline-flex align-items-center gap-2">
                                    Learn More <FiArrowRight />
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>


        </section>
    );
};

export default Features;
