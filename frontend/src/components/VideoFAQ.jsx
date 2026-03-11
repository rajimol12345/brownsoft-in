import React, { useState } from 'react';
import './VideoFAQ.css';

const VideoFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "How long does a typical video project take?",
            answer: "Timeline depends on the complexity. Simple social media edits take 48-72 hours, while complex brand films with motion graphics usually take 1-2 weeks."
        },
        {
            question: "What video formats do you provide?",
            answer: "We deliver in all industry-standard formats including 4K MP4, ProRes for high-end production, and optimized versions for Instagram, YouTube, and LinkedIn."
        },
        {
            question: "How many revisions are included in the price?",
            answer: "Every project includes 2 rounds of major revisions to ensure the final product aligns perfectly with your vision and feedback."
        },
        {
            question: "Can you work with raw footage from any camera?",
            answer: "Yes, our post-production pipeline supports everything from professional RAW cinema files (RED, ARRI) to high-quality smartphone footage."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="video-faq-section">
            <div className="container">
                <div className="faq-header">
                    <h2 className="faq-main-title">Frequently Asked Questions</h2>
                </div>

                <div className="faq-accordion">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">
                                    <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoFAQ;
