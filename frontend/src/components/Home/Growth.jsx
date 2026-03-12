import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import './Growth.css';

const Growth = () => {
    return (
        <section className="section-padding" style={{ background: '#f4f7ff' }}>
            <Container>
                <Row className="align-items-center mb-5">
                    <Col lg={7}>
                        <div className="section-title mb-0">
                            <span className="text-primary fw-bold text-uppercase">Solutions For Your Growth</span>
                            <h2 className="display-5 fw-bold mt-2">Explore Innovative Services To Elevate Your Business Performance</h2>
                        </div>
                    </Col>
                    <Col lg={5} className="text-lg-end mt-4 mt-lg-0">
                        <p className="text-muted mb-4 lh-lg ps-lg-5">
                            Leverage our expert-driven solutions to optimize your workflow and scale your digital presence effectively.
                        </p>
                        <a href="#!" className="theme-btn py-3 px-5 rounded-pill shadow-sm">
                            Get Started <FiArrowRight className="ms-2" />
                        </a>
                    </Col>
                </Row>
                <Row className="mt-5 align-items-stretch">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <div className="growth-banner-card p-5 rounded-4 position-relative overflow-hidden d-flex flex-column justify-content-end"
                            style={{
                                minHeight: '450px',
                                background: 'url(https://gramentheme.com/wp/infotek/wp-content/uploads/2024/04/Img_4.png) center/cover'
                            }}>
                            <div className="position-absolute w-100 h-100 bg-dark" style={{ top: 0, left: 0, opacity: 0.2 }}></div>
                            <div className="position-relative z-index-1">
                                <span className="bg-primary text-white py-1 px-3 rounded-pill small mb-3 d-inline-block fw-bold">TRUSTED PARTNER</span>
                                <h3 className="text-white display-6 fw-bold mb-2">Globally Trusted by 66k+ Brands</h3>
                                <p className="text-white-50 mb-0">Leading the way in software development and IT consultation.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="growth-content-card h-100 p-5 bg-white rounded-4 shadow-sm d-flex flex-column justify-content-center">
                            <h3 className="fw-bold mb-4 display-6">Top software development partner for your company</h3>
                            <p className="text-muted mb-5 lh-lg">
                                We specialize in building robust, high-performance software tailored to your business needs, helping you stay ahead of the competition.
                            </p>
                            <div className="efficiency-box d-flex align-items-center mb-5 p-4 bg-light rounded-4">
                                <h1 className="display-4 fw-bold text-primary mb-0" style={{ marginRight: '20px' }}>+75%</h1>
                                <div className="d-flex flex-column">
                                    <span className="fw-bold text-heading">Increased Efficiency</span>
                                    <span className="small text-muted d-flex align-items-center gap-1"><FiCheckCircle className="text-primary" /> Proven Track Record</span>
                                </div>
                            </div>
                            <a href="#!" className="theme-btn py-3 px-4 rounded-3 d-inline-flex align-items-center gap-2" style={{ width: 'max-content' }}>
                                Discover More <FiArrowRight />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>


        </section>
    );
};

export default Growth;
