import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import AboutHero from '../components/AboutHero.jsx';
import CTA from '../components/Home/CTA.jsx';

const WebDesign = () => {
    const webServices = [
        { icon: 'fas fa-laptop-code', title: 'Custom Development', desc: 'Bespoke websites built with the latest technologies like React and Node.js.' },
        { icon: 'fas fa-shopping-cart', title: 'E-commerce Solutions', desc: 'Secure and scalable online stores that drive sales and engagement.' },
        { icon: 'fas fa-mobile-alt', title: 'Responsive Design', desc: 'Websites that look and perform beautifully on every device and screen size.' },
        { icon: 'fas fa-search', title: 'SEO Optimized', desc: 'Search-engine-friendly code to help your business rank higher from day one.' },
        { icon: 'fas fa-tachometer-alt', title: 'Performance Tuning', desc: 'Lightning-fast load times for the best possible user experience.' },
        { icon: 'fas fa-tools', title: 'Maintenance & Support', desc: '24/7 technical assistance and regular updates for your web applications.' },
    ];

    const data = {
        title: 'Web Design & Development',
        heroSubtitle: 'Building high-performance digital experiences that grow your business and captivate your users.',
        faqs: [
            {
                question: "How long does it take to build a custom website?",
                answer: "A standard business website typically takes 4-6 weeks. More complex e-commerce platforms or custom applications may take 8-12 weeks."
            },
            {
                question: "Will my website be mobile-friendly?",
                answer: "Absolutely. Every website we build is fully responsive, ensuring a seamless experience across desktops, tablets, and mobile phones."
            },
            {
                question: "Do you provide hosting and maintenance?",
                answer: "Yes, we offer premium managed hosting and ongoing maintenance packages to keep your site secure and up-to-date."
            }
        ],
        quoteImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    };

    return (
        <div className="web-design-page">
            <AboutHero title={data.title} showBreadcrumbs={true} />
            
            <section className="service-intro-section section-padding py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="fw-bold mb-4">Modern Web Solutions for Modern Businesses</h2>
                            <p className="lead text-muted mb-4">{data.heroSubtitle}</p>
                            <p className="text-muted">
                                Our development process focuses on creating scalable, secure, and user-centric websites. 
                                We combine creative design with robust engineering to deliver digital products that 
                                not only look great but also drive measurable business results.
                            </p>
                        </Col>
                        <Col lg={6}>
                             <img src={data.quoteImage} alt="Web Development" className="img-fluid rounded shadow" />
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
                        {webServices.map((service, index) => (
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

export default WebDesign;