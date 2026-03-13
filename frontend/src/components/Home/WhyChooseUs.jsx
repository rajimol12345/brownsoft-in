import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiCheck, FiStar } from 'react-icons/fi';
import '../style/WhyChooseUs.css';

const WhyChooseUs = () => {
    const list = [
        "Trusted Expertise In Technology",
        "Commitment To Client Success",
        "Innovative Solutions For Growth",
        "24/7 Professional Support",
        "Efficient Project Delivery",
        "Scalable Infrastructure"
    ];

    return (
        <section className="section-padding bg-light overflow-hidden position-relative">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="why-us-image-preview position-relative">
                            <img
                                src="https://gramentheme.com/wp/infotek/wp-content/uploads/2024/04/BUSINESS-STRATEGY-PLANNING-1.png"
                                alt="Strategy"
                                className="img-fluid rounded-4 shadow-lg w-100"
                            />
                            {/* Decorative element */}
                            <div className="floating-badge position-absolute bg-white p-4 rounded-3 shadow-sm d-flex align-items-center gap-3 animate-float"
                                style={{ bottom: '30px', left: '-20px' }}>
                                <div className="icon-circle bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ width: '50px', height: '50px' }}>
                                    <FiStar size={24} />
                                </div>
                                <div>
                                    <h6 className="mb-0 fw-bold">10+ Years</h6>
                                    <p className="small mb-0 text-muted">Excellence Service</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="why-us-content ps-lg-5 mt-5 mt-lg-0">
                            <div className="section-title mb-4">
                                <span className="text-primary fw-bold text-uppercase">Why choose us</span>
                                <h2 className="display-6 fw-bold mt-2">Driven By Quality, Focused On Your Digital Growth</h2>
                            </div>
                            <p className="text-muted mb-5 lh-lg">
                                We combine industry expertise with cutting-edge technology to deliver solutions that are not just functional but also scalable and future-ready. Our focus remains on driving tangible results for your business.
                            </p>

                            <Row className="mb-5">
                                {list.map((item, index) => (
                                    <Col md={6} key={index} className="mb-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="check-icon-circle rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                                                style={{ width: '24px', height: '24px', minWidth: '24px', fontSize: '12px' }}>
                                                <FiCheck />
                                            </div>
                                            <span className="fw-semibold text-heading small">{item}</span>
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                            <div className="support-card d-flex align-items-center p-4 rounded-4 bg-white shadow-sm border-start border-primary border-4">
                                <div className="icon-box-primary text-primary" style={{ marginRight: '20px', fontSize: '40px' }}>
                                    <FiStar />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">Warranty & Support</h5>
                                    <p className="mb-0 text-muted small">We provide ongoing professional support and maintenance for all our digital solutions.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


        </section>
    );
};

export default WhyChooseUs;
