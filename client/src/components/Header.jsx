import { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../images/logo.png';

const services = [
    {
        id: 'web',
        icon: 'fas fa-code',
        color: '#4ECDC4',
        title: 'Web Design',
        items: [
            'Professional Web Design Company',
            'Custom Website Design',
            'Corporate Websites',
            'Landing & Promo Pages',
            'Small Business Websites',
            'Website Redesign',
            'E-commerce Websites',
            'CMS Websites',
        ],
    },
    {
        id: 'graphics',
        icon: 'fas fa-palette',
        color: '#A78BFA',
        title: 'Graphics & Design',
        items: [
            'UI UX Design For Websites',
            'Invitation Cards, Postcards & Posters',
            'Labels & Packaging Design',
            'UI UX Design for Mobile Apps',
            'Image Background Removal',
            'Album Designing — Weddings & Real Estate',
            'Photo Editing & Retouching',
            'Craft Memorable Flyers',
            'Brochures and Infographics',
            'Design Business Cards & Billboards',
            'Food Menu Design Services',
            'Letterhead and Resume Design',
            'Social Media Banners Design',
            'Design Your Dream Logo',
        ],
    },
    {
        id: 'seo',
        icon: 'fas fa-chart-line',
        color: '#FB923C',
        title: 'SEO & Marketing',
        items: [
            'Complete SEO Package',
            'DappRadar Banner Ads',
            'Etherscan Ads Management',
            'BscScan Ads Management',
            'Banner Advertising Campaigns',
            'Google Adwords Management',
            'YouTube Advertising Campaigns',
            'Twitter Ads Management',
            'Facebook & Instagram Ads',
            'Page Creation and Design',
            'Reddit Promotion',
            'Social Media Management',
        ],
    },
    {
        id: 'admin',
        icon: 'fas fa-headset',
        color: '#34D399',
        title: 'Admin Support',
        items: [
            '24/7 Live Email & Chat Support',
            'Website Content Management',
            'E-commerce Website Maintenance',
            'Technical Support for Websites',
            'Website Content & Image Updates',
            'Virtual Administration Support',
            'E-commerce & Website Data Entry',
            'Image Annotation & Data Processing',
            'Accurate & Efficient Data Entry',
        ],
    },
    {
        id: 'civil',
        icon: 'fas fa-hard-hat',
        color: '#FBBF24',
        title: 'Civil Engineering',
        items: [
            'Planning & Design Services',
            'Construction & Project Management',
            'Structural Engineering Services',
            'Surveying & Land Development',
            'Infrastructure & Public Works',
        ],
    },
];

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const megaRef = useRef(null);
    let closeTimer = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const handler = (e) => {
            if (megaRef.current && !megaRef.current.contains(e.target)) {
                setMegaOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const handleMegaEnter = () => {
        clearTimeout(closeTimer.current);
        setMegaOpen(true);
    };
    const handleMegaLeave = () => {
        closeTimer.current = setTimeout(() => setMegaOpen(false), 180);
    };

    return (
        <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">

            {/* ── Top Info Bar ── */}
            <div className="top-bar" id="top-bar">
                <div className="top-bar-inner">
                    <span className="top-bar-promo">
                        <i className="fas fa-bolt"></i>
                        Are you need IT Support Engineer? <strong>Free Consultant</strong>
                    </span>
                    <div className="top-bar-contacts">
                        <a href="tel:+918300050033" className="top-bar-item">
                            <i className="fas fa-phone-alt"></i> 83000 50033
                        </a>
                        <span className="top-bar-divider">|</span>
                        <a href="mailto:contact@brownsofts.in" className="top-bar-item">
                            <i className="fas fa-envelope"></i> contact@brownsofts.in
                        </a>
                        <span className="top-bar-divider">|</span>
                        <span className="top-bar-item">
                            <i className="far fa-clock"></i> Mon – Fri: 8:00am – 5:00pm
                        </span>
                        <span className="top-bar-divider">|</span>
                        <div className="top-bar-social">
                            <a href="https://www.facebook.com/brownsoftsin" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://x.com/brownsoftsIn" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/brownsoftsin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main Header Bar ── */}
            <div className="header-bar">
                <div className="header-inner">

                    {/* Logo */}
                    <a href="/" className="logo">
                        <img src={logo} alt="BrownSofts Logo" className="logo-img" />
                    </a>

                    {/* Desktop Nav */}
                    <nav className={`main-nav${mobileOpen ? ' mobile-active' : ''}`} id="main-nav">
                        <ul className="nav-list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>

                            {/* Services Dropdown */}
                            <li
                                className="nav-dropdown-item"
                                onMouseEnter={() => setMegaOpen(true)}
                                onMouseLeave={() => setMegaOpen(false)}
                            >
                                <a
                                    href="#"
                                    className={megaOpen ? 'active' : ''}
                                    onClick={(e) => { e.preventDefault(); setMegaOpen(!megaOpen); }}
                                >
                                    Services
                                    <i className={`fas fa-chevron-down nav-arrow${megaOpen ? ' rotated' : ''}`}></i>
                                </a>

                                <div className={`services-dropdown${megaOpen ? ' show' : ''}`}>
                                    <ul className="dropdown-list">
                                        {services.map((cat) => (
                                            <li key={cat.id} className="dropdown-item-flat">
                                                <a href="#" className="dropdown-cat-link">
                                                    <span className="cat-icon-wrap" style={{ color: cat.color }}>
                                                        <i className={cat.icon}></i>
                                                    </span>
                                                    {cat.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>

                            <li><a href="#">Blog</a></li>
                            <li><a href="#" className="active">Contact Us</a></li>
                        </ul>

                        {/* Mobile Services Accordion */}
                        <div className="mobile-services-accordion">
                            <button
                                className="mobile-services-toggle"
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            >
                                Services <i className={`fas fa-chevron-down${mobileServicesOpen ? ' rotated' : ''}`}></i>
                            </button>
                            {mobileServicesOpen && (
                                <div className="mobile-services-list">
                                    {services.map((cat) => (
                                        <div className="mobile-cat" key={cat.id}>
                                            <div className="mobile-cat-header" style={{ '--cat-color': cat.color }}>
                                                <i className={cat.icon}></i> {cat.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Right Actions */}
                    <div className="header-actions">
                        <a href="#contact-form-section" className="header-cta-btn">Get A Quote</a>
                    </div>

                    {/* Hamburger */}
                    <button
                        className={`mobile-menu-toggle${mobileOpen ? ' active' : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="hamburger"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Overlay */}
            {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)}></div>}
        </header>
    );
};

export default Header;
