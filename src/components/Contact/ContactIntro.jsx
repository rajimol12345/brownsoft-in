import React from 'react';

const ContactIntro = () => {
    return (
        <section className="contact-intro-section">
            <div className="container intro-container">
                <div className="intro-main reveal">
                    <div className="intro-eyebrow">
                        <span className="eyebrow-text">Get In Touch</span>
                        <div className="eyebrow-line">
                            <span className="line-bar"></span>
                            <span className="line-dot"></span>
                        </div>
                    </div>
                    <h2 className="intro-heading">
                        Ready to start your <span className="blue-text">project?</span>
                    </h2>
                </div>
                <div className="intro-content reveal">
                    <p className="intro-description">
                        Whether you have a specific project in mind or just exploring possibilities, we are here to help. Reach out to us and let's craft something amazing together.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactIntro;
