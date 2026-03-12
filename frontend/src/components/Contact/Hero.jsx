import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-banner" id="hero-banner">
            <div className="hero-overlay"></div>
            <div className="container hero-content">

                <h1 className="hero-title">Contact Us</h1>

                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <ul className="breadcrumb-list">
                        <li><Link to="/">Home</Link></li>
                        <li className="separator">›</li>
                        <li className="current">Contact</li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Hero;
