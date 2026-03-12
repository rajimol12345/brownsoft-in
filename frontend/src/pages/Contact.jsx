import { useEffect } from 'react'
import Hero from '../components/Contact/Hero'
import ContactIntro from '../components/Contact/ContactIntro'
import ContactForm from '../components/Contact/ContactForm'
import Map from '../components/Contact/Map'
import '../App.css'

function Contact() {

    useEffect(() => {
        // Scroll reveal animation
        const selector = [
            '.reveal',
            '.contact-form-panel',
            '.contact-details-panel .detail-card',
            '.social-row',
            '.intro-main',
            '.intro-content',
            '.map-section',
        ].join(', ');

        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        elements.forEach((el) => {
            if (!el.style.animationDelay) {
                const siblings = el.parentElement?.children ?? [];
                const idx = Array.from(siblings).indexOf(el);
                if (idx > 0) {
                    el.style.setProperty('--stagger', `${idx * 0.08}s`);
                }
            }
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="app-container">
            <main>
                <Hero />
                <ContactIntro />
                <ContactForm />
                <Map />
            </main>
        </div>
    );
}

export default Contact;