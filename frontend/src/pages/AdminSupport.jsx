import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import AboutHero from '../components/AboutHero.jsx';
import CTA from '../components/Home/CTA.jsx';

const AdminSupport = () => {
    const adminServices = [
        { icon: 'fas fa-user-tie', title: 'Virtual Assistant', desc: 'Professional back-office support to streamline your daily business operations.' },
        { icon: 'fas fa-database', title: 'Data Management', desc: 'Secure and organized handling of your enterprise data and documentation.' },
        { icon: 'fas fa-calendar-check', title: 'Executive Support', desc: 'High-level scheduling, travel planning, and administrative coordination.' },
        { icon: 'fas fa-file-invoice', title: 'Financial Admin', desc: 'Assistance with bookkeeping, invoicing, and budget tracking workflows.' },
        { icon: 'fas fa-headset', title: 'Customer Support', desc: 'Reliable first-line communication to maintain high client satisfaction.' },
        { icon: 'fas fa-shield-alt', title: 'Confidentiality', desc: 'Strict data protection protocols ensuring your business privacy is always guarded.' }
    ];

    const data = {
        title: 'Admin Support',
        heroSubtitle: 'Empowering Your Business With Precision Administrative Excellence',
        heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
        introTitle: 'Scaling Your Efficiency Through Executive Support',
        introSubtitle: 'Seamless Back-Office Operations',
        introDescription1: 'Efficiency is the fuel that drives business growth. While you focus on high-level strategy, your administrative foundation must remain rock-solid and responsive to every challenge.',
        introDescription2: 'Brownsoft provides world-class virtual assistant and administrative support services tailored to modern enterprises. We handle the complexities of data, scheduling, and office management so you can lead with absolute focus.',
        introImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000',
        services: adminServices,
        faqs: [
            {
                question: "How do you ensure data security?",
                answer: "We sign strict NDAs and utilize enterprise-grade encrypted communication and storage tools to protect all client information."
            },
            {
                question: "Do you offer part-time support?",
                answer: "Yes, we have flexible engagement models ranging from project-based tasks to full-time dedicated executive assistance."
            },
            {
                question: "What tools are your assistants proficient in?",
                answer: "Our team is expert in Microsoft 365, Google Workspace, Slack, Trello, and various CRM/Bookkeeping softwares."
            }
        ],
        quoteImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000"
    };

    return (
        <div className="admin-support-page">
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
                             <img src={data.introImage} alt="Admin Support" className="img-fluid rounded shadow" />
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

export default AdminSupport;
