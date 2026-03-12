import React, { useEffect } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import aboutImg from '../assets/faq.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/FAQ.css';

const FAQ = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const faqs = [
        {
            q: "How long should a business plan be?",
            a: "At Brownsofts LLC, we focus on results-driven approaches, ensuring that whether your plan is a concise roadmap or a detailed strategy, it is data-backed and customized to meet your specific digital goals."
        },
        {
            q: "What is included in your services?",
            a: "Our all-inclusive package features expert web development with modern designs, flawless functionality, and advanced motion graphics for enhanced brand storytelling.To ensure continuous success, we provide 24/7 dedicated support via email and chat to quickly address all your digital needs."
        },
        {
            q: "What type of company is measured?",
            a: "We work with a diverse range of businesses looking to navigate the ever-evolving digital landscape and realize their online success."
        }
    ];

    return (
        <section className="section-padding bg-white" id="faq">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} data-aos="fade-right">
                        <div className="faq-image-container position-relative">
                            {/* Blue Background with Pattern */}
                            <div className="faq-bg-shape" style={{
                                backgroundColor: '#384bff',
                                width: '110%',
                                height: '550px',
                                borderRadius: '50px',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                               
                                    <img 
                                        src={aboutImg} 
                                        alt="Meeting" 
                                        style={{ 
                                            width: '101%', 
                                            height: '101%', 
                                            objectFit: 'cover',
                                            margin: '-1px'
                                        }} 
                                    />
                              
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="faq-content-area ps-lg-5 mt-5 mt-lg-0">
                            <div className="section-title mb-5 text-start" data-aos="fade-left">
                                <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: '2px', fontSize: '14px' }}>SEE OUR FAQ'S</span>
                                <h2 className="display-6 fw-bold mt-2" style={{ color: '#13111a' }}>Keep Your Business Safe & Ensure High Availability</h2>
                            </div>

                            <Accordion defaultActiveKey="0" className="custom-faq-accordion">
                                {faqs.map((faq, index) => (
                                    <Accordion.Item 
                                        eventKey={index.toString()} 
                                        key={index} 
                                        className="mb-4 border-0 shadow-sm" 
                                        style={{ borderRadius: '15px', overflow: 'hidden' }}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <Accordion.Header className="py-2">
                                            <span className="fw-bold" style={{ fontSize: '18px' }}>{faq.q}</span>
                                        </Accordion.Header>
                                        <Accordion.Body className="text-muted lh-lg pb-4" style={{ backgroundColor: '#fff' }}>
                                            {faq.a}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>

            <style>{`
                .custom-faq-accordion .accordion-button {
                    background-color: #fff !important;
                    box-shadow: none !important;
                    color: #13111a !important;
                    padding: 20px 25px;
                }
                .custom-faq-accordion .accordion-button:not(.collapsed) {
                    color: #384bff !important;
                    background-color: #fff !important;
                }
                .custom-faq-accordion .accordion-button::after {
                    background-size: 1.5rem;
                    width: 1.5rem;
                    height: 1.5rem;
                }
                .custom-faq-accordion .accordion-item {
                    border-radius: 15px !important;
                }
                @media (max-width: 991px) {
                    .faq-bg-shape {
                        width: 100% !important;
                        height: 400px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default FAQ;
