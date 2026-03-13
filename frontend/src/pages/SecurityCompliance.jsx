import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import AboutHero from '../components/AboutHero.jsx';
import CTA from '../components/Home/CTA.jsx';

const SecurityCompliance = () => {
    const securityServices = [
        { icon: 'fas fa-shield-virus', title: 'Cyber Security', desc: 'Advanced threat protection and real-time monitoring to defend your digital assets.' },
        { icon: 'fas fa-user-lock', title: 'Identity Management', desc: 'Secure access controls and biometric authentication for sensitive enterprise systems.' },
        { icon: 'fas fa-file-contract', title: 'Compliance Audits', desc: 'Rigorous testing to ensure your business meets ISO, GDPR, and NIST standards.' },
        { icon: 'fas fa-network-wired', title: 'Network Security', desc: 'Robust firewall configurations and intrusion detection systems for zero-trust environments.' },
        { icon: 'fas fa-user-shield', title: 'Staff Training', desc: 'Professional security awareness programs to eliminate the human-error risk factor.' },
        { icon: 'fas fa-database', title: 'Data Encryption', desc: 'High-level cryptographic solutions to protect your proprietary information at rest and in transit.' }
    ];

    const data = {
        title: 'Security & Compliance',
        heroSubtitle: 'Fortifying Your Business Against Modern Digital Threats',
        heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
        introTitle: 'Where Proactive Defense Accents Enterprise Trust',
        introSubtitle: 'Zero-Trust Security Frameworks',
        introDescription1: 'In an increasingly connected world, security is not an optional feature; it is the foundation of trust. Protecting your data and maintaining regulatory compliance are critical for business longevity and reputation.',
        introDescription2: 'Brownsoft provides enterprise-grade security and compliance consulting. We don\'t just react to threats; we build proactive shields that ensure your digital infrastructure remains impervious to the evolving landscape of cyber risks.',
        introImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
        services: securityServices,
        faqs: [
            {
                question: "Do you offer 24/7 security monitoring?",
                answer: "Yes, our Security Operations Center (SOC) provides round-the-clock monitoring and instant incident response for all premium clients."
            },
            {
                question: "Can you help us with GDPR compliance?",
                answer: "Absolutely. We provide full compliance audits and implementation frameworks for GDPR, HIPAA, and various international data standards."
            },
            {
                question: "What is your approach to zero-trust?",
                answer: "We implement strict identity verification and continuous authentication across every layer of your network architecture."
            }
        ],
        quoteImage: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1000"
    };

    return (
        <div className="security-compliance-page">
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
                             <img src={data.introImage} alt="Security & Compliance" className="img-fluid rounded shadow" />
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

export default SecurityCompliance;
