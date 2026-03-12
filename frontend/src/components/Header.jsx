import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.png';

// Service Images
import webImg from '../images/services/web_design.png';
import graphicsImg from '../images/services/graphics_design.png';
import seoImg from '../images/services/seo_marketing.png';
import adminImg from '../images/services/admin_support.png';
import civilImg from '../images/services/civil_engineering.png';
import videoImg from '../images/services/video_animation.png';

const services = [
    {
        id: 'web',
        icon: 'fas fa-code',
        image: webImg,
        color: '#4ECDC4',
        title: 'Web Design and Development',
        items: []
    },
    {
        id: 'graphics',
        icon: 'fas fa-palette',
        image: graphicsImg,
        color: '#A78BFA',
        title: 'Graphics & Design',
        items: []
    },
    {
        id: 'seo',
        icon: 'fas fa-chart-line',
        image: seoImg,
        color: '#FB923C',
        title: 'SEO & Marketing',
        items: []
    },
    {
        id: 'admin',
        icon: 'fas fa-headset',
        image: adminImg,
        color: '#34D399',
        title: 'Admin Support',
        items: []
    },
    {
        id: 'civil',
        icon: 'fas fa-hard-hat',
        image: civilImg,
        color: '#FBBF24',
        title: 'Civil Engineering',
        items: []
    },
    {
        id: 'video',
        icon: 'fas fa-video',
        image: videoImg,
        color: '#F472B6',
        title: 'Video & Animation',
        items: []
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

            {/* Top Bar */}
            <div className="top-bar">
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

                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="header-bar">
                <div className="header-inner">

                    {/* Logo */}
                    <Link to="/" className="logo">
                        <img src={logo} alt="BrownSofts Logo" className="logo-img" />
                    </Link>

                    {/* Navigation */}
                    <nav className={`main-nav${mobileOpen ? ' mobile-active' : ''}`}>

                        <ul className="nav-list">

                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/about">About</Link>
                            </li>

                            {/* Services */}
                            <li
                                className="nav-dropdown-item desktop-only"
                                onMouseEnter={handleMegaEnter}
                                onMouseLeave={handleMegaLeave}
                            >
                                <a href="#">
                                    Services
                                    <i className={`fas fa-chevron-down nav-arrow${megaOpen ? ' rotated' : ''}`}></i>
                                </a>

                                <div className={`services-dropdown${megaOpen ? ' show' : ''}`}>

                                    <ul className="dropdown-list">
                                        {services.map((cat) => (
                                            <li key={cat.id} className="dropdown-item-flat">

                                                <Link to={`/services/${cat.id}`} className="dropdown-cat-link">

                                                    <div className="cat-img-wrap">
                                                        <img src={cat.image} alt={cat.title} className="cat-image" />
                                                    </div>

                                                    {cat.title}

                                                </Link>

                                            </li>
                                        ))}
                                    </ul>

                                </div>

                            </li>

                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>

                            <li>
                                <Link to="/contact" className="active">Contact Us</Link>
                            </li>

                        </ul>

                    </nav>

                    {/* CTA Button */}
                    <div className="header-actions">
                        <Link to="/contact" className="header-cta-btn">
                            Get A Quote
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <button
                        className={`mobile-menu-toggle${mobileOpen ? ' active' : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <span className="hamburger"></span>
                    </button>

                </div>
            </div>

            {/* Mobile Overlay */}
            {mobileOpen && (
                <div
                    className="mobile-overlay"
                    onClick={() => setMobileOpen(false)}
                ></div>
            )}

        </header>
    );
};

export default Header;