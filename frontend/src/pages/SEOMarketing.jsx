import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import AboutHero from '../components/AboutHero.jsx';
import CTA from '../components/Home/CTA.jsx';

const SEOMarketing = () => {
    const seoServices = [
        { icon: 'fas fa-search-plus', title: 'Advanced SEO', desc: 'Data-driven optimization strategies to dominate search engine results pages.' },
        { icon: 'fas fa-bullhorn', title: 'Content Marketing', desc: 'Compelling narratives that attract, engage, and convert your target audience.' },
        { icon: 'fab fa-google', title: 'PPC Management', desc: 'Precision-targeted ad campaigns with maximized ROI across Google and Bing.' },
        { icon: 'fas fa-chart-line', title: 'Analytics & Reporting', desc: 'Deep-dive insights and transparent tracking of your digital growth metrics.' },
        { icon: 'fas fa-users-cog', title: 'Social Ads', desc: 'High-performance advertising across Meta, LinkedIn, and TikTok platforms.' },
        { icon: 'fas fa-envelope-open-text', title: 'Email Strategies', desc: 'Automated nurture sequences that build long-term customer loyalty.' }
    ];

    const data = {
        title: 'SEO & Marketing',
        heroSubtitle: 'Data-Backed Strategies for Unrivaled Digital Visibility',
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        introTitle: 'Where Strategic Intelligence Meets Growth Marketing',
        introSubtitle: 'Digital Dominance Through Data',
        introDescription1: 'Visibility is the hallmark of digital success. In a world where millions of searches happen every second, standing out requires more than just luck; it requires a sophisticated, data-driven approach to marketing.',
        introDescription2: 'Brownsoft delivers comprehensive SEO and marketing solutions that focus on one thing: ROI. We don\'t just drive traffic; we attract the right audience and convert them into loyal customers using advanced algorithms and creative storytelling.',
        introImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
        services: seoServices,
        faqs: [
            {
                question: "How long until I see SEO results?",
                answer: "SEO is a long-term investment. While some technical improvements show immediate impact, significant ranking growth typically occurs within 3 to 6 months."
            },
            {
                question: "Do you provide monthly reports?",
                answer: "Absolutely. Transparency is key. You will receive detailed monthly performance reports detailing traffic, keyword rankings, and conversion metrics."
            },
            {
                question: "Can you manage our social media ads?",
                answer: "Yes, we specialize in full-funnel social media advertising, from creative asset production to audience retargeting and budget optimization."
            }
        ],
        quoteImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
    };

    return (
        <div className="seo-marketing-page">
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
                             <img src={data.introImage} alt="SEO & Marketing" className="img-fluid rounded shadow" />
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

export default SEOMarketing;
