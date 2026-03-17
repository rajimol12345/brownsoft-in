import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';
import '../style/ReliableTech.css';

const ReliableTech = () => {
    const techList = [
        {
            title: "Custom Development",
            description: "Tailored software solutions built with the latest frameworks to drive operational efficiency.",
            image: "https://gramentheme.com/wp/infotek/wp-content/uploads/2024/04/01-2.jpg"
        },
        {
            title: "Web Application",
            description: "High-performance web apps with modern UX/UI to engage your users globally.",
            image: "https://gramentheme.com/wp/infotek/wp-content/uploads/2024/04/04-2.jpg"
        },
        {
            title: "Mobile Solutions",
            description: "Seamless mobile experiences for iOS and Android that connect you with customers everywhere.",
            image: "https://gramentheme.com/wp/infotek/wp-content/uploads/2024/04/03-1.jpg"
        },
        {
            title: "Cloud Services",
            description: "Secure and scalable cloud infrastructure to power your digital future and minimize risks.",
            image: "https://gramentheme.com/wp/infotek/wp-content/uploads/2024/04/02-2.jpg"
        }
    ];

    return (
        <section className="section-padding bg-white overflow-hidden">
            <Container>
                <div className="section-title text-center mb-5">
                    <span className="text-primary fw-bold text-uppercase">What We Offer</span>
                    <h2 className="mx-auto display-5 fw-bold mt-2" style={{ maxWidth: '800px' }}>Building Reliable Technology To Transform Your Digital Future</h2>
                </div>
                <Row>
                    {techList.map((item, index) => (
                        <Col lg={6} key={index} className="mb-4">
                            <div className="tech-item-card position-relative overflow-hidden rounded-4 shadow-sm" style={{ height: '350px' }}>
                                <img src={item.image} alt={item.title} className="w-100 h-100 transition-all" style={{ objectFit: 'cover', transition: 'all 0.6s ease' }} />
                                <div className="tech-item-overlay position-absolute w-100 h-100 d-flex flex-column justify-content-end p-5"
                                    style={{
                                        top: 0,
                                        left: 0,
                                        background: 'linear-gradient(to top, rgba(15, 13, 29, 0.95) 0%, transparent 70%)',
                                        transition: 'all 0.4s ease'
                                    }}>
                                    <div className="tech-item-content transform-up" style={{ transition: 'all 0.4s ease' }}>
                                        <h3 className="text-white fw-bold mb-3">{item.title}</h3>
                                        <p className="text-white-50 mb-4 lh-base small">{item.description}</p>
                                        <a href="#!" className="text-primary fw-bold text-decoration-none d-inline-flex align-items-center gap-2">
                                            Read More <FiArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>


        </section>
    );
};

export default ReliableTech;
