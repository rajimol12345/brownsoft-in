import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import AboutHero from '../components/AboutHero.jsx';
import CTA from '../components/Home/CTA.jsx';

const GraphicsDesign = () => {
    const graphicsServices = [
        { icon: 'fas fa-pen-nib', title: 'Logo Design', desc: 'Unique and memorable brand identities that stand out.' },
        { icon: 'fas fa-object-group', title: 'Brand Identity', desc: 'Unified visual languages across all your touchpoints.' },
        { icon: 'fas fa-palette', title: 'Visual Design', desc: 'Beautiful UI/UX and digital art for modern platforms.' },
        { icon: 'fas fa-print', title: 'Print Design', desc: 'Professional business cards, flyers, and marketing materials.' },
        { icon: 'fas fa-mobile-alt', title: 'Social Graphics', desc: 'Engaging content optimized for every social media feed.' },
        { icon: 'fas fa-box-open', title: 'Package Design', desc: 'Creative and practical packaging that sells your products.' }
    ];

    const data = {
        title: 'Graphics Design',
        heroSubtitle: 'Transforming Ideas Into Stunning Visual Realities',
        heroImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200',
        introTitle: 'Where Innovation Accents Visual Excellence',
        introSubtitle: 'Crafting Premium Brand Identities',
        introDescription1: 'In a world driven by visuals, your brand identity is more than just a logo—it is the first impression you make. High-quality graphic design bridge the gap between your brand and your audience, creating an emotional connection that lasts.',
        introDescription2: 'Brownsoft specializes in premium graphic solutions, from award-winning logo designs to complex brand guidelines. We combine creative artistry with strategic thinking to ensure your brand stands out in the most crowded digital landscape.',
        introImage: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=1000',
        services: graphicsServices,
        faqs: [
            {
                question: "How long does a logo design process take?",
                answer: "Typically, a complete logo and brand identity package takes between 7 to 14 days, depending on the complexity and revision cycles."
            },
            {
                question: "Do you provide source files?",
                answer: "Yes, all our design projects include high-resolution source files (AI, PSD, SVG) along with format-ready versions for web and print."
            },
            {
                question: "Can you redesign our existing brand?",
                answer: "Absolutely. We specialize in brand evolution, helping existing companies modernize their look while preserving their core values."
            }
        ],
        quoteImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000"
    };

    return (
        <div className="graphics-design-page">
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
                             <img src={data.introImage} alt="Graphics Design" className="img-fluid rounded shadow" />
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

export default GraphicsDesign;
