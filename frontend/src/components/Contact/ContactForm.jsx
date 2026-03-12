import './ContactForm.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const details = [
    {
        id: 'phone',
        icon: 'fas fa-phone-alt',
        label: 'Phone',
        value: '83000 50033',
        href: 'tel:+918300050033',
    },
    {
        id: 'email',
        icon: 'fas fa-envelope',
        label: 'Email',
        value: 'contact@brownsofts.in',
        href: 'mailto:contact@brownsofts.in',
    },
    {
        id: 'address',
        icon: 'fas fa-map-marker-alt',
        label: 'Address',
        value: 'C.K.Building, Near Panamkalai Railway Road, Kaliakkavilai, Kanyakumari',
        href: 'https://maps.app.goo.gl/sBxWFyHSi6sAcSyw8',
    },
    {
        id: 'hours',
        icon: 'fas fa-clock',
        label: 'Working Hours',
        value: 'Mon – Fri: 8:00am – 5:00pm',
        href: null,
    },
];

const socialLinks = [
    {
        id: 'facebook',
        icon: 'fab fa-facebook-f',
        href: 'https://www.facebook.com/brownsoftsin',
        label: 'Facebook',
    },
    {
        id: 'x-twitter',
        icon: 'fab fa-twitter',
        href: 'https://x.com/brownsoftsIn',
        label: 'X (Twitter)',
    },
    {
        id: 'linkedin',
        icon: 'fab fa-linkedin-in',
        href: 'https://www.linkedin.com/company/brownsoftsin/',
        label: 'LinkedIn',
    },
];

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });
        try {
            const res = await axios.post('/api/contact', formData);
            if (res.data.success) {
                setStatus({ type: 'success', message: '✓ Message sent! We\'ll get back to you shortly.' });
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: err.response?.data?.message || 'Something went wrong. Please try again.' });
        } finally {
            setLoading(false);
            setTimeout(() => setStatus({ type: '', message: '' }), 6000);
        }
    };

    return (
        <section className="contact-main-section" id="contact-form-section">
            {/* ── Particle Background ── */}
            <div className="particles-container" aria-hidden="true">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className={`particle particle-${i + 1}`}></div>
                ))}
            </div>
            <div className="container">
                <div className="contact-grid">

                    {/* ── Left: Form Panel ── */}
                    <div className="contact-form-panel" data-aos="fade-right">
                        <span className="panel-eyebrow">
                            <i className="fas fa-paper-plane"></i> Send a Message
                        </span>
                        <h2 className="panel-title">Let's Start a Conversation</h2>
                        <p className="panel-desc">Fill out the form and our team will get back to you within 24 hours.</p>

                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="contact-name">Your Name</label>
                                    <input id="contact-name" type="text" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-email">Email Address</label>
                                    <input id="contact-email" type="email" name="email" placeholder="john@company.com" required value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-phone">Phone (Optional)</label>
                                    <input id="contact-phone" type="tel" name="phone" placeholder="+1 (555) 000-000" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-subject">Subject</label>
                                    <input id="contact-subject" type="text" name="subject" placeholder="Project Inquiry" value={formData.subject} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group form-group-full">
                                <label htmlFor="contact-message">Your Message</label>
                                <textarea id="contact-message" name="message" rows="5" placeholder="Tell us about your project or enquiry..." required value={formData.message} onChange={handleChange}></textarea>
                            </div>

                            <button
                                type="submit"
                                id="submit-btn"
                                className={`submit-btn ${status.type === 'success' ? 'success' : ''}`}
                                disabled={loading}
                            >
                                <span>{loading ? 'Sending...' : status.type === 'success' ? 'Message Sent!' : 'Send Message'}</span>
                                {!loading && <span className="btn-icon"><i className={`fas ${status.type === 'success' ? 'fa-check' : 'fa-arrow-right'}`}></i></span>}
                            </button>

                            {status.message && (
                                <p style={{
                                    marginTop: '18px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: status.type === 'success' ? '#10b981' : '#ef4444'
                                }}>
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* ── Right: Detail Cards ── */}
                    <div className="contact-details-panel">
                        {details.map((item, index) => (
                            <div className="detail-card" key={item.id} data-aos="fade-left" data-aos-delay={index * 100}>
                                <div className="detail-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="detail-info">
                                    <span className="detail-label">{item.label}</span>
                                    {item.href ? (
                                        <a href={item.href} target={item.id === 'address' ? '_blank' : undefined} rel={item.id === 'address' ? 'noopener noreferrer' : undefined} className="detail-value">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span className="detail-value">{item.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* ── Follow Us Section ── */}
                        <div className="contact-social-section" data-aos="fade-up" data-aos-delay="400">
                            <h4 className="social-section-title">Follow Us</h4>
                            <div className="social-icons-row">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.id}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon-btn"
                                        aria-label={social.label}
                                    >
                                        <i className={social.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
