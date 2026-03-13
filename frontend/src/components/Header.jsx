import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '@images/logo.png';

// Service Images
import webImg from '@images/services/web_design.png';
import graphicsImg from '@images/services/graphics_design.png';
import seoImg from '@images/services/seo_marketing.png';
import adminImg from '@images/services/admin_support.png';
import civilImg from '@images/services/civil_engineering.png';
import videoImg from '@images/services/video_animation.png';

const services = [
    {
        id: 'web',
        icon: 'fas fa-code',
        image: webImg,
        color: '#4ECDC4',
        title: 'Web Design and Development',
        path: '/services/web-design',
        items: [
            { name: 'Professional Web Design & Development Company', icon: 'fas fa-laptop-code' },
            { name: 'Custom Website Design', icon: 'fas fa-magic' },
            { name: 'Corporate Websites', icon: 'fas fa-building' },
            { name: 'Landing & Promo Pages', icon: 'fas fa-rocket' },
            { name: 'Small Business Websites', icon: 'fas fa-store' },
            { name: 'Website Redesign', icon: 'fas fa-sync-alt' },
            { name: 'E-commerce Websites', icon: 'fas fa-shopping-cart' },
            { name: 'CMS Websites', icon: 'fas fa-user-edit' },
        ],
    },
    {
        id: 'graphics',
        icon: 'fas fa-palette',
        image: graphicsImg,
        color: '#A78BFA',
        title: 'Graphics & Design',
        path: '/services/graphics-design',
        items: [
            { name: 'UI UX Design For Websites', icon: 'fas fa-window-restore' },
            { name: 'Invitation Cards, Postcards & Posters', icon: 'fas fa-envelope-open-text' },
            { name: 'Labels & Packaging Design', icon: 'fas fa-box-open' },
            { name: 'UI UX Design for Mobile Apps', icon: 'fas fa-mobile-alt' },
            { name: 'Image Background Removal', icon: 'fas fa-eraser' },
            { name: 'Album Designing — Weddings & Real Estate', icon: 'fas fa-images' },
            { name: 'Photo Editing & Retouching', icon: 'fas fa-magic' },
            { name: 'Craft Memorable Flyers', icon: 'fas fa-paper-plane' },
            { name: 'Brochures and Infographics', icon: 'fas fa-chart-pie' },
            { name: 'Design Business Cards & Billboards', icon: 'fas fa-id-card' },
            { name: 'Food Menu Design Services', icon: 'fas fa-utensils' },
            { name: 'Letterhead and Resume Design', icon: 'fas fa-file-invoice' },
            { name: 'Social Media Banners Design', icon: 'fas fa-ad' },
            { name: 'Design Your Dream Logo', icon: 'fas fa-pen-nib' },
        ],
    },
    {
        id: 'seo',
        icon: 'fas fa-chart-line',
        image: seoImg,
        color: '#FB923C',
        title: 'SEO & Marketing',
        path: '/services/seo-marketing',
        items: [
            { name: 'Complete SEO Package', icon: 'fas fa-search-plus' },
            { name: 'DappRadar Banner Ads', icon: 'fas fa-broadcast-tower' },
            { name: 'Etherscan Ads Management', icon: 'fas fa-ethereum' },
            { name: 'BscScan Ads Management', icon: 'fas fa-coins' },
            { name: 'Banner Advertising Campaigns', icon: 'fas fa-ad' },
            { name: 'Google Adwords Management', icon: 'fas fa-google' },
            { name: 'YouTube Advertising Campaigns', icon: 'fas fa-youtube' },
            { name: 'Twitter Ads Management', icon: 'fas fa-twitter' },
            { name: 'Facebook & Instagram Ads', icon: 'fas fa-facebook' },
            { name: 'Page Creation and Design', icon: 'fas fa-file-code' },
            { name: 'Reddit Promotion', icon: 'fas fa-reddit-alien' },
            { name: 'Social Media Management', icon: 'fas fa-users-cog' },
        ],
    },
    {
        id: 'admin',
        icon: 'fas fa-headset',
        image: adminImg,
        color: '#34D399',
        title: 'Admin Support',
        path: '/services/admin-support',
        items: [
            { name: '24/7 Live Email & Chat Support', icon: 'fas fa-headset' },
            { name: 'Website Content Management', icon: 'fas fa-edit' },
            { name: 'E-commerce Website Maintenance', icon: 'fas fa-toolbox' },
            { name: 'Technical Support for Websites', icon: 'fas fa-tools' },
            { name: 'Website Content & Image Updates', icon: 'fas fa-sync' },
            { name: 'Virtual Administration Support', icon: 'fas fa-user-tie' },
            { name: 'E-commerce & Website Data Entry', icon: 'fas fa-keyboard' },
            { name: 'Image Annotation & Data Processing', icon: 'fas fa-tags' },
            { name: 'Accurate & Efficient Data Entry', icon: 'fas fa-file-excel' },
        ],
    },
    {
        id: 'civil',
        icon: 'fas fa-hard-hat',
        image: civilImg,
        color: '#FBBF24',
        title: 'Civil Engineering',
        path: '/services/civil-architectural',
        items: [
            { name: 'Planning & Design Services', icon: 'fas fa-drafting-compass' },
            { name: 'Construction & Project Management', icon: 'fas fa-tasks' },
            { name: 'Structural Engineering Services', icon: 'fas fa-cube' },
            { name: 'Surveying & Land Development', icon: 'fas fa-map-marked-alt' },
            { name: 'Infrastructure & Public Works', icon: 'fas fa-road' },
        ],
    },
    {
        id: 'video',
        icon: 'fas fa-video',
        image: videoImg,
        color: '#F472B6',
        title: 'Video & Animation',
        path: '/services/video-animation',
        items: [
            { name: 'Promotional Videos', icon: 'fas fa-film' },
            { name: '2D & 3D Animation', icon: 'fas fa-cubes' },
            { name: 'Motion Graphics', icon: 'fas fa-wind' },
            { name: 'Video Editing & Post-Production', icon: 'fas fa-cut' },
            { name: 'Explainer Videos', icon: 'fas fa-lightbulb' },
            { name: 'Social Media Content', icon: 'fas fa-share-alt' },
            { name: 'Logo Animation', icon: 'fas fa-star' },
            { name: 'YouTube Video Production', icon: 'fas fa-play-circle' },
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
                    <Link to="/" className="logo">
                        <img src={logo} alt="BrownSofts Logo" className="logo-img" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className={`main-nav${mobileOpen ? ' mobile-active' : ''}`} id="main-nav">
                        <ul className="nav-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>

                            {/* Services Dropdown */}
                            <li
                                className="nav-dropdown-item desktop-only"
                                onMouseEnter={() => setMegaOpen(true)}
                                onMouseLeave={() => setMegaOpen(false)}
                            >
                                <Link
                                    to="/services"
                                    className={megaOpen ? 'active' : ''}
                                >
                                    Services
                                    <i className={`fas fa-chevron-down nav-arrow${megaOpen ? ' rotated' : ''}`}></i>
                                </Link>

                                <div className={`services-dropdown${megaOpen ? ' show' : ''}`}>
                                    <ul className="dropdown-list">
                                        {services.map((cat) => (
                                            <li key={cat.id} className="dropdown-item-flat">
                                                <Link to={cat.path} className="dropdown-cat-link">
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

                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
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
                                            <Link to={cat.path} className="mobile-cat-header" style={{ '--cat-color': cat.color }}>
                                                <div className="mobile-cat-img-wrap">
                                                    <img src={cat.image} alt={cat.title} className="mobile-cat-image" />
                                                </div>
                                                <div className="mobile-cat-title-wrap">
                                                    <span className="mobile-cat-badge">{cat.title}</span>
                                                </div>
                                            </Link>
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