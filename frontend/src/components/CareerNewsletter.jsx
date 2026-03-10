import React from 'react';
import './CareerNewsletter.css';

const CareerNewsletter = () => {
    return (
        <section className="career-newsletter-footer">
            {/* Newsletter Section */}
            <div className="newsletter-box">
                <div className="container newsletter-container">
                    <div className="newsletter-content">
                        <div className="newsletter-text">
                            <h2 className="newsletter-title">Subscribe now to get our newest digital insights</h2>
                            <p className="newsletter-subtitle">
                                Vitae fames mattis lacus purus molestie litora ultrices sollicitudin magna quisque libero nam tortor pulvinar quam class enim fringilla
                            </p>
                        </div>
                        <div className="newsletter-form-wrapper">
                            <p className="form-info-text">Subscribe to our newsletter for exclusive software updates</p>
                            <form className="newsletter-form">
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <button type="submit" className="btn-subscribe">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="career-footer">
                <div className="container footer-container">
                    <div className="footer-grid">
                        {/* Logo & Social */}
                        <div className="footer-col about-col">
                            <div className="footer-logo">Nexovortex</div>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h4 className="footer-col-title">Services</h4>
                            <ul className="footer-links">
                                <li><a href="#">Mauris ligula</a></li>
                                <li><a href="#">Etiam vestibulum</a></li>
                                <li><a href="#">Aenean tempus</a></li>
                                <li><a href="#">Dictumst sagittis</a></li>
                                <li><a href="#">Nascetur maecenas</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div className="footer-col">
                            <h4 className="footer-col-title">Support</h4>
                            <ul className="footer-links">
                                <li><a href="#">Customer Support</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Appointment Guide</a></li>
                                <li><a href="#">Payment Options</a></li>
                                <li><a href="#">Safety & Policies</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="footer-col">
                            <h4 className="footer-col-title">Company</h4>
                            <ul className="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Blog & News</a></li>
                                <li><a href="#">Legal Notice</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="copyright">Copyright © 2026 Nexovortex, All rights reserved. Powered by MoxCreative.</p>
                        <div className="footer-bottom-links">
                            <a href="#">Terms of Us</a>
                            <span className="dot">•</span>
                            <a href="#">Privacy Policy</a>
                            <span className="dot">•</span>
                            <a href="#">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default CareerNewsletter;
