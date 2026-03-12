import React from 'react';
import ContactHero from '../components/Contact/Hero.jsx';
import ContactIntro from '../components/Contact/ContactIntro.jsx';
import ContactInfo from '../components/Contact/ContactInfo.jsx';
import ContactForm from '../components/Contact/ContactForm.jsx';
import Map from '../components/Contact/Map.jsx';

const Contact = () => {
    return (
        <div className="contact-page-wrapper">
            <ContactHero />
            <ContactIntro />
            <ContactInfo />
            <ContactForm />
            <Map />
        </div>
    );
};

export default Contact;
