import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';
import ctaImg from '../assets/cta.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/CTA.css';

const CTA = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section className="cta-section" >
            <Container>
                <div className="cta-wrapper position-relative" style={{
                    background: 'var(--primary-color)',
                    borderRadius: '15px',
                    padding: '60px 50px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    overflow: 'visible'
                }} data-aos="fade-up">
                    {/* Background Pattern/Shapes */}
                    <div className="cta-shapes" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.15,
                        pointerEvents: 'none',
                        backgroundImage: `url('https://gramentheme.com/wp/infotek/wp-content/uploads/2024/04/cta-mask.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 1
                    }}></div>

                    <Row className="align-items-center position-relative" style={{ zIndex: 2 }}>
                        <Col lg={4} className="d-none d-lg-block">
                            <div className="cta-image-container" style={{
                                position: 'absolute',
                                top: '-200px',
                                left: '-40px',
                                width: '450px'
                            }} data-aos="fade-right" data-aos-delay="200">
                                <img 
                                    src={ctaImg} 
                                    alt="CTA Character" 
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto',
                                        display: 'block'
                                    }} 
                                />
                            </div>
                        </Col>
                        <Col lg={5} md={10} className="mx-auto mx-lg-0 ms-lg-auto text-center text-lg-start" data-aos="fade-up" data-aos-delay="300">
                            <h2 className="text-white fw-bold mb-0 cta-heading">
                                Stay Connected With <br className="d-none d-lg-block" /> Cutting Edge IT
                            </h2>
                        </Col>
                        <Col lg={3} md={4} className="text-md-end mt-4 mt-md-0" data-aos="fade-left" data-aos-delay="400">
                            <a href="#!" className="cta-btn-white">
                                Get A Quote <FiArrowRight />
                            </a>
                        </Col>
                    </Row>
                </div>
            </Container>

            <style>{`
                .cta-btn-white {
                    background: #fff;
                    color: #000;
                    padding: 18px 35px;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 16px;
                    transition: all 0.3s ease;
                    border-radius: 4px;
                }
                .cta-btn-white:hover {
                    background: var(--heading-color);
                    color: #fff;
                    transform: translateY(-5px);
                }
                .cta-heading {
                    font-size: 42px;
                    line-height: 1.2;
                    margin-left: 70px;
                }
                @media (max-width: 991px) {
                    .cta-heading {
                        margin-left: 0 !important;
                        font-size: 30px !important;
                        margin-bottom: 25px !important;
                    }
                    .cta-wrapper {
                        padding: 40px 30px;
                        text-align: center;
                    }
                    .cta-wrapper h2 {
                        font-size: 30px !important;
                        margin-bottom: 25px !important;
                    }
                    .cta-btn-white {
                        width: auto;
                        min-width: 200px;
                        justify-content: center;
                    }
                }
                @media (max-width: 767px) {
                    .cta-wrapper h2 {
                        font-size: 26px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default CTA;
