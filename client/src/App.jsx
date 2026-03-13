import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ContactIntro from './components/ContactIntro'
import ContactForm from './components/ContactForm'
import Map from './components/Map'
import './App.css'

function App() {
    useEffect(() => {
        // Header scroll effect
        const handleScroll = () => {
            const header = document.getElementById('site-header');
            if (window.scrollY > 80) {
                header?.classList.add('scrolled');
            } else {
                header?.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Scroll-reveal animation observer
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

        elements.forEach((el, i) => {
            // auto-assign stagger delay based on siblings
            if (!el.style.animationDelay) {
                const siblings = el.parentElement?.children ?? [];
                const idx = Array.from(siblings).indexOf(el);
                if (idx > 0) el.style.setProperty('--stagger', `${idx * 0.08}s`);
            }
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="app-container">
            <Header />
            <main>
                <Hero />
                <ContactIntro />
                <ContactForm />
                <Map />
            </main>
        </div>
    )
}

export default App
