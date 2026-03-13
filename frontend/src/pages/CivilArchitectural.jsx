import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import AboutHero from '../components/AboutHero.jsx';
import CTA from '../components/Home/CTA.jsx';

const CivilArchitectural = () => {
    const civilServices = [
        { icon: 'fas fa-drafting-compass', title: 'Architectural Design', desc: 'Precision blueprints and creative spatial planning for modern structural visionaries.' },
        { icon: 'fas fa-hard-hat', title: 'Civil Engineering', desc: 'Robust infrastructure development and professional construction project management.' },
        { icon: 'fas fa-building', title: 'Structural Analysis', desc: 'Advanced integrity testing and engineering calculations for sustainable buildings.' },
        { icon: 'fas fa-map-marked-alt', title: 'Urban Planning', desc: 'Strategic land development and master planning for future-proof communities.' },
        { icon: 'fas fa-road', title: 'Landscape Design', desc: 'Integrating nature with structure through professional outdoor environment planning.' },
        { icon: 'fas fa-shield-alt', title: 'Safety Compliance', desc: 'Strict adherence to international building codes and rigorous onsite safety protocols.' }
    ];

    const data = {
        title: 'Civil & Architectural',
        heroSubtitle: 'Designing & Building the Future of Sustainable Infrastructure',
        heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
        introTitle: 'Where Blueprint Accuracy Meets Visionary Architecture',
        introSubtitle: 'Building Tomorrow’s Landmarks',
        introDescription1: 'Architecture is the physical manifestation of a brand\'s legacy. It is about more than just bricks and mortar; it is about creating sustainable, efficient, and inspiring spaces that define the way we live and work.',
        introDescription2: 'Brownsoft’s civil and architectural division combines heritage-standard engineering with modern sustainable practices. We bridge the gap between visionary blueprints and structural reality, ensuring every project is an icon of excellence.',
        introImage: 'https://images.unsplash.com/photo-1503387762-592df58ef4fb?auto=format&fit=crop&q=80&w=1000',
        services: civilServices,
        faqs: [
            {
                question: "Do you handle residential and commercial?",
                answer: "Yes, our portfolio includes everything from boutique residential designs to large-scale commercial and industrial infrastructures."
            },
            {
                question: "What building codes do you follow?",
                answer: "We ensure 100% compliance with local municipal codes and international engineering standards like ISO and LEED."
            },
            {
                question: "Can you provide 3D walkthroughs?",
                answer: "Absolutely. We utilize advanced BIM and 3D modeling tools to provide immersive pre-construction visualizations."
            }
        ],
        quoteImage: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000"
    };

    return (
        <div className="civil-architectural-page">
            <AboutHero title={data.title} showBreadcrumbs={true} />
            
            <section className="service-intro-section section-padding py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="fw-bold mb-4">{data.introTitle}</h2>
                            <h5 className="text-primary mb-3">{data.introSubtitle}</h5>
                            <p className="text-muted mb-3">
                                {data.introDescription1}
                            </p>
                            <p className="text-muted">
                                {data.introDescription2}
                            </p>
                        </Col>
                        <Col lg={6}>
                             <img src={data.introImage} alt="Civil & Architectural" className="img-fluid rounded shadow" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="service-features-grid section-padding bg-light py-5">
                <Container>
                    <div className="section-title text-center mb-5">
                        <span className="text-primary fw-bold text-uppercase">OUR SERVICES</span>
                        <h2 className="fw-bold mt-2">What We Offer</h2>
                    </div>
                    <Row>
                        {data.services.map((service, index) => (
                            <Col lg={4} md={6} key={index} className="mb-4">
                                <div className="p-4 bg-white rounded shadow-sm h-100 text-center">
                                    <div className="mb-3 text-primary" style={{ fontSize: '2.5rem' }}>
                                        <i className={service.icon}></i>
                                    </div>
                                    <h4 className="fw-bold">{service.title}</h4>
                                    <p className="text-muted small mb-0">{service.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="faq-section section-padding py-5">
                <Container>
                    <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <Accordion defaultActiveKey="0">
                                {data.faqs.map((faq, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index}>
                                        <Accordion.Header>{faq.question}</Accordion.Header>
                                        <Accordion.Body>{faq.answer}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>

            <CTA />
        </div>
    );
};

export default CivilArchitectural;
