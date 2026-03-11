import React, { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            text: '"Working with several word press themes and templates the last years, I only can say this is the best in every level. I use it for my company and the reviews that I have already are all excellent."',
            author: 'Alina Lora',
            role: 'Formar Manager, ITSoft',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100'
        },
        {
            id: 2,
            text: '"The customer support is top-notch. They handled our complex migration with ease and the final result exceeded all our performance KPIs. Highly recommended for industrial-scale IT projects."',
            author: 'Kevin James',
            role: 'Product Designer',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
        },
        {
            id: 3,
            text: '"The support team is exceptionally responsive and the quality of the technical implementation exceeded our expectations. Truly a top-tier IT partner for any business looking to scale."',
            author: 'Sarah Chen',
            role: 'CTO, GlobalTech',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="testimonials-section-premium section-padding">
            <div className="container testimonials-premium-container">
                {/* Left Content */}
                <div className="testimonials-premium-content">
                    <div className="premium-label-wrapper">
                        <span className="premium-badge">Testimonials</span>
                        <div className="badge-line"></div>
                    </div>

                    <h2 className="premium-main-title">
                        What Our Clients <br /> Say <span className="blue-gradient-text">About Us</span>
                    </h2>

                    <div className="testimonial-card-premium">
                        <div className="quote-icon-top">
                            <i className="fas fa-quote-left"></i>
                        </div>

                        <p className="premium-testimonial-text">
                            {testimonials[activeIndex].text}
                        </p>

                        <div className="testimonial-author-wrap">
                            <div className="author-visual">
                                <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].author} />
                            </div>
                            <div className="author-info">
                                <h3>{testimonials[activeIndex].author}</h3>
                                <p>{testimonials[activeIndex].role}</p>
                            </div>

                            {/* Pagination Dots */}
                            <div className="premium-pagi-dots">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`pagi-dot ${activeIndex === index ? 'active' : ''}`}
                                        onClick={() => setActiveIndex(index)}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="testimonials-premium-visual">
                    <div className="premium-image-stack">
                        <div className="stack-card-main">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Success Professional" />
                            <div className="floating-badge-clean">
                                <i className="fas fa-check-circle"></i>
                                <span>Verified Reviews</span>
                            </div>
                        </div>
                        <div className="stack-card-decor"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
