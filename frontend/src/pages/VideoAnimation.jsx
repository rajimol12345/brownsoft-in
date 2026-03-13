import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import AboutHero from '../components/AboutHero.jsx';
import CTA from '../components/Home/CTA.jsx';

const VideoAnimation = () => {
    const videoServices = [
        { icon: 'fab fa-tiktok', title: 'TikTok & Reels', desc: 'High-energy, fast-paced editing for maximum social media engagement.' },
        { icon: 'fab fa-youtube', title: 'YouTube Content', desc: 'Full-service editing for vlogs, educational content, and video essays.' },
        { icon: 'fas fa-film', title: 'Documentary Films', desc: 'Narrative-driven editing that tells compelling real-world stories.' },
        { icon: 'fas fa-building', title: 'Corporate Identity', desc: 'Clean, professional videos that showcase your brand or company culture.' },
        { icon: 'fas fa-clapperboard', title: 'Trailers & Promos', desc: 'Impactful teasers designed to build excitement and drive conversions.' },
        { icon: 'fas fa-music', title: 'Music & Art', desc: 'Creative visual timing and stylistic grading for artistic expressions.' },
    ];

    const data = {
        title: 'Video & Animation',
        heroSubtitle: 'We craft high-fidelity visual stories that elevate your brand and captivate your audience across every digital platform.',
        faqs: [
            {
                question: "How long does a typical video project take?",
                answer: "Our standard turnaround time is 48-72 hours for social media content. More complex films and corporate projects typically range from 1 to 2 weeks."
            },
            {
                question: "What video formats do you provide?",
                answer: "We provide high-resolution deliverables in all formats (4K, MP4, ProRes) optimized for platforms like YouTube, Instagram, and LinkedIn."
            },
            {
                question: "Do you offer sound design and color grading?",
                answer: "Yes, every premium project includes professional color correction, sound balancing, and royalty-free background music selection."
            }
        ],
        quoteImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
    };

    return (
        <div className="video-animation-page">
            <AboutHero title={data.title} showBreadcrumbs={true} />
            
            <section className="service-intro-section section-padding py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="fw-bold mb-4">Elevate Your Story With Motion</h2>
                            <p className="lead text-muted mb-4">{data.heroSubtitle}</p>
                            <p className="text-muted">
                                Our team of expert editors and animators work closely with you to transform raw footage into 
                                cinematic masterpieces. We focus on pacing, color, and sound to ensure your message is 
                                delivered with maximum impact.
                            </p>
                        </Col>
                        <Col lg={6}>
                             <img src={data.quoteImage} alt="Video Editing" className="img-fluid rounded shadow" />
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
                        {videoServices.map((service, index) => (
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

export default VideoAnimation;