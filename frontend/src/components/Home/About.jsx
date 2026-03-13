import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import { FiPlay, FiUsers } from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlinePresentationChartLine } from 'react-icons/hi';
import 'aos/dist/aos.css';

// Import local assets
import about1 from '../assets/about.jpg';
import about2 from '../assets/about2.jpg';
import '../style/About.css';

const About = () => {
    return (
        <section className="section-padding" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="about-image-wrapper" data-aos="fade-right">
                            {/* Shape Decorations */}
                            <div className="about-shape"></div>
                            <div className="about-shape-2"></div>

                            {/* Main Image */}
                            <img
                                src={about1}
                                alt="About Main"
                                className="about-main-img img-fluid"
                            />

                            {/* Second Image */}
                            <img
                                src={about2}
                                alt="About Secondary"
                                className="about-second-img img-fluid"
                            />

                            {/* Rotating Play Button */}
                            <div className="video-play-btn">
                                <div className="rotating-text">
                                    <svg viewBox="0 0 100 100">
                                        <path
                                            id="circlePath"
                                            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                            fill="none"
                                        />
                                        <text>
                                            <textPath href="#circlePath">
                                               DELIVERING HIGH - QUALITY DIGITAL SOLUTIONS-
                                           </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <FiPlay className="play-icon" />
                            </div>

                            {/* Counter Box */}
                            <div className="counter-box">
                                <div className="counter-icon">
                                    <FiUsers />
                                </div>
                                <div className="counter-info">
                                    <h2>
                                        <CountUp
                                            end={6561}
                                            duration={3}
                                            enableScrollSpy={true}
                                            scrollSpyOnce={true}
                                        />+
                                    </h2>
                                    <p className="small mb-0 text-muted">Satisfied Clients</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="about-content ps-lg-5 mt-5 mt-lg-0">
                            <div className="section-title mb-4" data-aos="fade-up">
                                <span className="text-primary fw-bold text-uppercase">ABOUT BROWNSOFTS</span>
                                <h2 className="display-6 fw-bold mt-2">
                                    We Are Increasing Business Success With <span className="text-primary">Technology</span>
                                </h2>
                            </div>
                            <p className="lead text-muted mb-5" style={{ fontSize: '16px' }} data-aos="fade-up" data-aos-delay="100">
                                It is a long-established fact that our professionals create and optimize websites tailored to specific business goals, ensuring every digital aspiration becomes a reality.
                            </p>

                            <div className="about-features mb-5" data-aos="fade-up" data-aos-delay="200">
                                <div className="about-feature-item d-flex align-items-center flex-fill">
                                    <div className="about-feature-icon">
                                        <HiOutlineLightBulb />
                                    </div>
                                    <div className="about-feature-content">
                                        <h4>Problem Solving</h4>
                                        <p >We use proven strategies and best practices to optimize your SEO rankings, ensuring your business attracts more organic traffic from qualified leads</p>
                                    </div>
                                </div>

                                <div className="about-feature-item d-flex align-items-center flex-fill">
                                    <div className="about-feature-icon">
                                        <HiOutlinePresentationChartLine />
                                    </div>
                                    <div className="about-feature-content">
                                        <h4>Mission & Vision</h4>
                                        <p>Our goal is to assist businesses in realizing their digital potential through trendy, modern designs and flawless functionality </p>
                                    </div>
                                </div>
                            </div>

                          

                          
                        </div>
                    </Col>
                </Row>
            </Container>

            <style>{`
                @media (max-width: 575px) {
                    .about-main-img {
                        width: 100% !important;
                    }
                    .about-second-img {
                        display: none;
                    }
                    .about-shape, .about-shape-2 {
                        display: none;
                    }
                    .counter-box {
                        position: relative !important;
                        left: 0 !important;
                        bottom: 0 !important;
                        margin-top: 20px;
                        width: 100%;
                    }
                    .video-play-btn {
                        top: 50% !important;
                        right: 50% !important;
                        transform: translate(50%, -50%);
                        width: 80px !important;
                        height: 80px !important;
                    }
                    .about-content h2 {
                        font-size: 28px !important;
                    }
                    .about-feature-item {
                        flex-direction: column;
                        text-align: center;
                    }
                    .about-feature-icon {
                        margin-bottom: 15px;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
