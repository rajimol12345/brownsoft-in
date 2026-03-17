import { useEffect } from 'react'
import Hero from '../Contact/Hero'
import ContactIntro from '../Contact/ContactIntro'
import ContactForm from '../Contact/ContactForm'
import Map from '../Contact/Map'
import '../../App.css'

function Contact() {

    useEffect(() => {
        document.title = "Contact Us | BrownSofts IT Services";
        // Scroll reveal animation
        const selector = [
            '.reveal',
            '.contact-form-panel',
            '.detail-card',
            '.social-icons-row',
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