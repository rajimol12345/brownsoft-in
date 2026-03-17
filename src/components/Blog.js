import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/Blog.css';

// Import correct images from assets
import blogImg1 from '../assets/blog1.jpg';
import blogImg2 from '../assets/blog2.jpg';
import blogImg3 from '../assets/blog3.jpg';

const Blog = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const blogs = [
        {
            date: "Mar 24, 2025",
            author: "By Maria suji",
            title: "Boost Customer Relations with the Power of YouTube",
            img: blogImg1,
            desc: "We all know YouTube is one of the best platforms for building customer relationships, especially for brands seeking to build trust through video content..."
        },
        {
            date: "Mar 24, 2025",
            author: "By Bavithra W S",
            title: "Creative Photo Editing Services to Make Your Products Pop",
            img: blogImg2,
            desc: "Have you just launched a website but are unsure how to photograph your products to attract every potential customer? Professional editing is the key..."
        },
        {
            date: "Mar 10, 2025",
            author: "By Bavithra W S",
            title: "Custom Web Design Services that can fit your Business",
            img: blogImg3,
            desc: "In this current age of technology it is a crucial thing to have a distinctive and relevant website to stay ahead of the competition and convert visitors..."
        }
    ];

    return (
        <section className="section-padding bg-light" id="blog">
            <Container>
                <div className="section-title text-center mb-5">
                    <span className="text-primary fw-bold text-uppercase" data-aos="fade-right">ARTICLE</span>
                    <h2 className="display-6 fw-bold mt-2" data-aos="fade-left">Read Our Latest Blog</h2>
                </div>
                <Row>
                    {blogs.map((blog, index) => (
                        <Col lg={4} md={6} key={index} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                            <Card className="blog-card h-100 border-0 shadow-sm overflow-hidden" style={{ transition: 'all 0.4s ease', borderRadius: '15px' }}>
                                <div className="blog-img-wrapper overflow-hidden position-relative" style={{ height: '250px' }}>
                                    <img
                                        src={blog.img}
                                        alt={blog.title}
                                        className="h-100 w-100 transition-all"
                                        style={{ objectFit: 'cover', transition: 'all 0.6s ease' }}
                                    />
                                    <div className="blog-date-badge position-absolute top-0 start-0 bg-primary text-white py-2 px-4 m-3 rounded-pill small fw-bold">
                                        {blog.date}
                                    </div>
                                </div>
                                <Card.Body className="p-4">
                                    <div className="blog-meta d-flex gap-4 mb-3 text-muted small">
                                        <span className="d-flex align-items-center gap-1"><FiUser className="text-primary" /> {blog.author}</span>
                                        <span className="d-flex align-items-center gap-1"><FiCalendar className="text-primary" /> {blog.date}</span>
                                    </div>
                                    <Card.Title className="h5 fw-bold mb-3 mt-1 underline-hover">
                                        <a href="#blog" className="text-decoration-none text-dark hover-primary lh-base">{blog.title}</a>
                                    </Card.Title>
                                    <Card.Text className="text-muted small mb-4 lh-lg">
                                        {blog.desc}
                                    </Card.Text>
                                    <a href="#blog" className="blog-more-btn text-primary fw-bold text-decoration-none small d-inline-flex align-items-center gap-2">
                                        READ MORE <FiArrowRight className="transition-all" />
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <style>{`
                .blog-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
                }
                .blog-card:hover .blog-img-wrapper img {
                    transform: scale(1.1);
                }
                .blog-card:hover .blog-more-btn {
                    gap: 10px !important;
                }
                .blog-card:hover .blog-more-btn svg {
                    transform: translateX(5px);
                }
            `}</style>
        </section>
    );
};

export default Blog;
